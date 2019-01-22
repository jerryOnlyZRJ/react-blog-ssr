import React from 'react'
import { preURL, publicURL } from "../src/config"

import Layout from '../src/container/layout/Layout'
import ArticleList from '../src/components/ArticleList'

export default class Main extends React.Component{
    static async getInitialProps() {
        const fetch = require('node-fetch');
        let response = await fetch(`${preURL}/list`).then(data => data.json());
        return { list: response };
    }

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <Layout activeTag={'首页'}>
                <ArticleList list={this.props.list}/>
            </Layout>
        )
    }
}