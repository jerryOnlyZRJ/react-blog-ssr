import React from 'react'
import Layout from '../src/container/layout/Layout'
import ArchiveList from '../src/components/ArchiveList'

export default class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Layout activeTag={'归档'}>
                <ArchiveList />
            </Layout>
        )
    }
}