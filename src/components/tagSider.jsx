import React, { Component } from 'react';
import { Tag } from 'antd';
import '../style/tagSider.less';

class TagSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagSiderClass: '',
        };
    }
    componentDidMount() {
        // window.onscroll = '';
        this.props.actions.initArticle();
        // this.regScroll(() => this.handleScroll());
        // window.addEventListener('scroll', () => this.handleScroll());
    }

    // componentWillUnmount = () => {
    //     window.onscroll = '';
    //     // this.setState = (state, callback) => {
    //     //     return;
    //     // };
    // };

    // handleScroll() {
    //     // console.log($(document).scrollTop())
    //     let top = $('.tag-sider').position().top;
    //     let scrollTop = $(document).scrollTop();
    //     if (scrollTop > top && this.state.tagSiderClass === '') {
    //         this.setState({ tagSiderClass: 'fix-tag' });
    //     } else if (scrollTop < top && this.state.tagSiderClass === 'fix-tag') {
    //         this.setState({ tagSiderClass: '' });
    //     }
    // }

    // regScroll(myHandler) {
    //     if (window.onscroll === null) {
    //         window.onscroll = myHandler;
    //     } else if (typeof window.onscroll === 'function') {
    //         let oldHandler = window.onscroll;
    //         window.onscroll = function() {
    //             myHandler();
    //             oldHandler();
    //         };
    //     }
    // }
    render() {
        const { tagJson } = this.props;
        return (
            <div className={`tag-sider`}>
                <div className="tag-sider-title">标签</div>
                {tagJson.map(item => {
                    return (
                        <Tag
                            onClick={() => this.props.actions.initArticleList({ tag: item.tag, page: 1 })}
                            className="tag-item"
                            key={item.tag}>{`${item.tag}(${item.num})`}</Tag>
                    );
                })}
            </div>
        );
    }
}
export default TagSider;
