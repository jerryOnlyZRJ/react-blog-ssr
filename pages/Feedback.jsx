import React from 'react'
import Layout from '../src/container/layout/Layout'
import FeedbackForm from '../src/components/FeedbackForm'
import './Feedback/Feedback.less'

export default class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Layout activeTag={'反馈'}>
                <FeedbackForm />
            </Layout>
        )
    }
}