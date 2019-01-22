import React from 'react'
import Layout from '../src/container/layout/Layout'
import ArticleContent from '../src/components/ArticleContent'
import { preURL, publicURL } from "../src/config"

import './Article/Article.less'

export default class Article extends React.Component {
    static async getInitialProps(ctx) {
        const fetch = require('node-fetch');
        console.log(`${preURL}/post?pathName=${ctx.query.pathName}`)
        let response = await fetch(`${preURL}/post?pathName=${encodeURIComponent(ctx.query.pathName)}`).then(data => data.json());
        console.log(response)
        return { post: response }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <ArticleContent post={this.props.post} />
            </Layout>
        )
    }
}