import React from 'react'
import moment from 'moment'

import "./ArchiveList.less"
import axios from "axios";
import {preURL, publicURL} from "../config";

class ArchiveList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
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
        let years = new Set();
        let yearsMap = new Map();

        let list = this.state.list

        for (let value of list) {
            let momentDate = moment(value.date);
            let year = momentDate.format('YYYY');
            years.add(year);
            if(yearsMap.has(year)){
                console.log("yearsMap.get(year):",yearsMap.get(year),yearsMap.has(year),year,yearsMap)
                yearsMap.set(year, yearsMap.get(year).concat([value]))
            } else {
                yearsMap.set(year,[value]);
                console.log('set:', yearsMap)
            }
        }

        return(<div className={"archives-container"}>
            {Array.from(years).sort().map((year, yearIndex) =>
                <div className={"one-tag-list"} key={yearIndex}>

                    <span className={"fa fa-calendar-times-o listing-seperator"}>
                        <span className={"tag-text"}>{year}</span>
                    </span>

                    <ul>
                        {yearsMap.get(year).map((item, index) =>
                            <li key={index}>
                                <span>{moment(item.date).format('MM-DD')}</span>
                                <i className="fa fa-angle-double-right" aria-hidden="true" />
                                <a href={publicURL + '/article?pathName=' + item.pathName}>
                                    <span>
                                        {item.title}
                                    </span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>

            )}
        </div>)
    }
}

export default ArchiveList;