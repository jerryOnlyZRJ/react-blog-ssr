import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'

// next下的模板，对它进行设置可以设置每个页面的公共模块
export default class extends App {

    // next建议我们在_app中设置title
    // Head组件是next的内建组件，可以在任何位置调用，其中的内容会在该组件被调用的时候同步到head
    // 设置的优先级大家可以查阅资料
    render () {
        const {Component, pageProps} = this.props
        return <Container>
            <Head>
                <title>react-blog-ssr</title>
            </Head>
            <Component {...pageProps} />
        </Container>
    }
}