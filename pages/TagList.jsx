import React from 'react'
import Layout from '../src/container/layout/Layout'
import TagList from "../src/components/TagList";
import { preURL, publicURL } from "../src/config"

export default class TagListPage extends React.Component{
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
            <Layout activeTag={'标签'}>
                <TagList  list={this.props.list}/>
            </Layout>
        )
    }
}