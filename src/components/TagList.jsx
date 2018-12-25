import React from 'react'
import ClassNames from 'classnames'
import { Link } from "react-router-dom";

import './TagList.less'
import axios from "axios";
import {preURL, publicURL} from "../config";

export default class TagList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        axios.get(`${preURL}/list`).then((response) => {
            console.log('list:', response.data);
            this.setState({
                list: response.data
            })
        },(error) => {
            alert('拉取数据失败，请配置后端博客服务！')
        })
    }
    render(){

        let tags = new Map();
        let tagKeys = new Set();

        let list = this.state.list;

        for (let value of list) {
            for(let tag of value.tags){
                tagKeys.add(tag)
                if(tags.has(tag)){
                    tags.set(tag, tags.get(tag).concat([value]))
                } else {
                    tags.set(tag, [value])
                }
            }
        }

        console.log('tags:', tags);
        console.log('tagKeys:', tagKeys);

        return (<div>
            <div id='tag_cloud' className="tags">
                {Array.from(tagKeys).map((tagKey, keyIndex) =>
                    <a key={keyIndex}>{tagKey}</a>
                )}
            </div>

            {Array.from(tagKeys).map((tagKey, keyIndex) =>
                <div className={'one-tag-list'} key={keyIndex}>
                    <span className="fa fa-tag listing-seperator" id={keyIndex}>
                        <span className="tag-text">{tagKey}</span>
                    </span>
                    {tags.get(tagKey).map((item, itemIndex) =>
                        <div className={'post-preview'} key={itemIndex}>
                            <a href={publicURL + '/article?pathName=' + item.pathName}>
                                <h2 className={'post-title'}>
                                    {item.title}
                                </h2>
                            </a>
                        </div>
                    )}
                </div>
            )}

        </div>)

    }
}
