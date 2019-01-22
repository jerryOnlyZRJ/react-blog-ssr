import React from 'react'
import axios from 'axios'
import { preURL, publicURL } from "../config"
import moment from 'moment'
import ClassNames from 'classnames'
import './ArticleList.less'

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begin: 0,
            list: props.list || [],
            pageSize: 8,
        }
    }

    componentDidMount() {
        if (!this.state.list.toString()) {
            axios.get(`${preURL}/list`).then((response) => {
                console.log('list:', response.data);
                this.setState({
                    list: response.data
                })
            }, (error) => {
                alert('拉取数据失败，请配置后端博客服务！')
            })
        }
    }

    nextPage() {
        this.setState({
            begin: this.state.begin + this.state.pageSize
        })
    }

    lastPage() {
        this.setState({
            begin: this.state.begin - this.state.pageSize
        })
    }

    render() {
        return (
            <div>
                <div className="post-preview-container">
                    {this.state.list.slice(this.state.begin, this.state.begin + this.state.pageSize).map((item, index) =>
                        <div className={"post-preview"} key={index}>
                            <div className={"post-time"}>
                                {moment(item.date).format('YYYY-MM-DD')}
                            </div>
                            <div className={"post-info"}>
                                <a href={publicURL + '/article?pathName=' + item.pathName}>
                                    <h3>
                                        {item.title}
                                    </h3>
                                </a>
                                <p>
                                    <span>/</span>
                                    {item.tags.map((tag, tagIndex) =>
                                        <span key={tag + tagIndex}> {tag} /</span>
                                    )}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <ul className={'pager'} >
                    <li className={ClassNames("previous", { 'hidden': this.state.begin === 0 })} onClick={() => { this.lastPage() }}>
                        <a>&larr; Newer Posts</a>
                    </li>

                    <li className={ClassNames("next", { 'hidden': this.state.begin + this.state.pageSize >= this.state.list.length })} onClick={() => { this.nextPage() }}>
                        <a>Older Posts &rarr;</a>
                    </li>
                </ul>
            </div>
        )
    }
}