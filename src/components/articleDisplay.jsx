import React, {Component} from 'react';
import {Input, Button, message} from 'antd';
import CommentBox from './commentBox';
import CommentList from './commentList';
import '../style/articleDisplay.less'
const {TextArea} = Input;
class ArticleDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishCommentClass: 'hide',
            name: '',
            email: '',
            website: '',
            comment: ''
        }
        this.props.actions.get_articleContent(this.props.params.id);
        this.props.actions.get_commentList(this.props.params.id);
        this.props.actions.get_image();
        this.props.actions.add_clickCount(this.props.params.id);
    }

    componentDidMount() {}
    componentWillReceiveProps(nextProps) {
        if (nextProps.error.isNew) {
            message.error(nextProps.error.message);
            this.props.actions.resetTip();
        }
        if (nextProps.success.isNew) {
            message.info(nextProps.success.message);
            this.props.actions.resetTip();
        }
    }
    componentWillUnmount() {
        console.log('卸载');
        this.props.actions.clear_articleContent();

    }
    publichComment = () => {
        if (this.state.name == '' || this.state.name == undefined) {
            message.warn('填下昵称啊，老大！');
            return;
        } else if (this.state.comment == '' || this.state.comment == undefined) {
            message.warn('没写评论提交啥啊，大哥！');
        }
        let param = {
            name: this.state.name,
            email: this.state.email,
            website: this.state.website,
            comment: this.state.comment,
            articleId: this.props.article.id
        }
        this.props.actions.publish_comment(param);
    }
    render() {
        const {name, email, website, comment} = this.state;
        const {actions, imageUrl, article, commentList} = this.props;
        const commentListStyle={
            margin:'0 auto',
            width:800,
        }
        return (
            <div className='container'>
                <div className="article-box">
                    <div className="title">
                        <h1>{this.props.article.title}</h1>
                    </div>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{
                        __html: this.props.article.content
                    }}></div>
                </div>
                <div>
                <CommentBox
                    get_image={actions.get_image}
                    publish_comment={actions.publish_comment}
                    imageUrl={imageUrl}
                    articleId={article.id}></CommentBox>
                </div>
                <div>
                    <p>本文发布于{article.date_publish}, 已被围观{article.click_count}次</p>
                    <p>标签：{article.tags !== undefined? article.tags.map(t=><a></a>):''}</p>
                    <p>分类：{article.category}</p>
                </div>
                <div style={commentListStyle}>
                    <CommentList commentList={commentList}></CommentList>
                </div>
                
            </div>
        );
    }
}

export default ArticleDisplay;