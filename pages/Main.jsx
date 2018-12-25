import React from 'react'
import { preURL, publicURL } from "../src/config"

import Layout from '../src/container/layout/Layout'
import ArticleList from '../src/components/ArticleList'

export default class Main extends React.Component{
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
                <ArticleList/>
            </Layout>
        )
    }
}