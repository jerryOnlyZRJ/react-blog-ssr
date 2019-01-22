import React from 'react'
import Layout from '../src/container/layout/Layout'
import ArchiveList from '../src/components/ArchiveList'
import { preURL, publicURL } from "../src/config"

export default class Article extends React.Component{
    static async getInitialProps() {
        const fetch = require('node-fetch');
        let response = await fetch(`${preURL}/list`).then(data => data.json());
        return { list: response };
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout activeTag={'归档'}>
                <ArchiveList  list={this.props.list}/>
            </Layout>
        )
    }
}