import React from 'react'
import Layout from '../src/container/layout/Layout'
import TagList from "../src/components/TagList";

export default class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Layout activeTag={'标签'}>
                <TagList />
            </Layout>
        )
    }
}