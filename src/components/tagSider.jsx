import React, {Component} from 'react';
import {Tag} from 'antd';
import $ from 'jquery';
import '../style/tagSider.less';

class TagSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagSiderClass: ''
        }
    }
    componentDidMount() {
        window.onscroll = '';
        this.props.actions.initArticle();
        this.regScroll(()=>this.handleScroll());
        // window.addEventListener('scroll', () => this.handleScroll());
    }
    //添加事件监听
    regScroll(myHandler) {
        if (window.onscroll === null) {
            console.log('s')
            window.onscroll = myHandler
        } else if (typeof window.onscroll === 'function') {
            console.log('sb')
            var oldHandler = window.onscroll;
            window.onscroll = function () {
                myHandler();
                oldHandler();
            }
        }
    }
    handleScroll() {
        // console.log($(document).scrollTop())
        let top = $('.tag-sider').position().top;
        let scrollTop = $(document).scrollTop();
        if (scrollTop > top && this.state.tagSiderClass === '') {
            this.setState({tagSiderClass: 'fix-tag'});
        } else if (scrollTop < top && this.state.tagSiderClass === 'fix-tag') {
            this.setState({tagSiderClass: ''});
        }
    }
    componentWillUnmount = () => {
        console.log('即将卸载')
        window.onscroll = '';
        // this.setState = (state, callback) => {
        //     return;
        // };
    }
    render() {
        const {tagJson} = this.props;
        return (
            <div className={`tag-sider ${this.state.tagSiderClass}`}>
                <div className='tag-sider-title'>标签</div>
                {tagJson.map(item => {
                    return <Tag onClick={() => this.props.actions.initArticleList({tag: item.tag, page: 1})} className='tag-item' key={item.tag}>{`${item.tag}(${item.num})`}</Tag>
                })}
            </div>
        );
    }
}
export default TagSider;