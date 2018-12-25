import React from 'react'
import ClassNames from 'classnames'
import './Nav.less'
import {publicURL} from "../config";

export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="nav" id="nav">
                <div className="avatar-name">
                    <div className="avatar">
                        <img src={'/static/avatar.jpg'} />
                    </div>
                    <div className="name">
                        <i>
                            iconie
                        </i>
                    </div>
                </div>
                <div className="contents" id="nav-content">
                    <ul>
                        <li className={ClassNames({'active': this.props.activeTag === '首页'})}>
                            <a href={publicURL + '/'}>
                                <i className="iconfont icon-shouye1"></i>
                                <span>首页</span>
                            </a>
                        </li>
                        <li className={ClassNames({'active': this.props.activeTag === '标签'})}>
                            <a href={publicURL + '/taglist'}>
                                <i className="iconfont icon-biaoqian1"></i>
                                <span>标签</span>
                            </a>
                        </li>
                        <li className={ClassNames({'active': this.props.activeTag === '归档'})}>
                            <a href={publicURL + '/archivelist'}>
                                <i className="iconfont icon-guidang1"></i>
                                <span>归档</span>
                            </a>
                        </li>
                        <li className={ClassNames({'active': this.props.activeTag === '关于'})}>
                            <a>
                                <i className="iconfont icon-guanyu1"></i>
                                <span>关于</span>
                            </a>
                        </li>
                        <li className={ClassNames({'active': this.props.activeTag === '反馈'})}>
                            <a href={publicURL + '/feedback'}>
                                <i className="iconfont icon-guanyu1"></i>
                                <span>反馈</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}