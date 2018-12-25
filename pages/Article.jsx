import React from 'react'
import Layout from '../src/container/layout/Layout'
import ArticleContent from '../src/components/ArticleContent'

import './Article/Article.less'

export default class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Layout>
                <ArticleContent />
            </Layout>
        )
    }
}