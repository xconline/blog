import React, {Component} from 'react';
import {message,Affix} from 'antd';
import CommentBox from './commentBox';
import CommentList from './commentList';
import '../style/articleDisplay.less';
import {Link} from 'react-keeper';
import {Icon} from 'react-fa';

class ArticleDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishCommentClass: 'hide',
            name: '',
            email: '',
            website: '',
            comment: '',
            heartClass:'',
        }
        this.props.actions.get_articleContent(this.props.params.id);
        this.props.actions.get_commentList(this.props.params.id);
        this.props.actions.get_image();
        this.props.actions.add_clickCount(this.props.params.id);
    }

    componentDidMount() {}
    componentDidUpdate(prevProps){
        if(prevProps.params.id !== this.props.params.id){
            this.props.actions.get_articleContent(this.props.params.id);
            this.props.actions.get_commentList(this.props.params.id);
            this.props.actions.get_image();
            this.props.actions.add_clickCount(this.props.params.id);
        }
    }
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
        if (this.state.name === '' || this.state.name === undefined) {
            message.warn('填下昵称啊，老大！');
            return;
        } else if (this.state.comment === '' || this.state.comment === undefined) {
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
    likeClickHandle = ()=>{
        if(this.state.heartClass === ''){
            this.setState({heartClass:'heartAnimation'});
            this.props.actions.like_click(this.props.params.id);
        }
    }
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView({behavior:'smooth'}); }
        }
      }

    render() {
        // const {name, email, website, comment} = this.state;
        const {actions, imageUrl, article, commentList} = this.props;
        const commentListStyle={
            margin:'0 auto',
            width:800,
        }
        return (
            <div className='container'>
                
                <div className="article-box">
                    <Affix style={{ position: 'absolute'}} offsetTop={61}>
                        <div onClick={this.likeClickHandle} className={`heart ${this.state.heartClass}`}>
                            <label className='likeCount'>{this.props.article.like_count}</label>
                        </div>
                        <div className='comment-affix'>
                            <Icon style={{ color:'#aab8c2',position:'absolute',marginLeft:-15}}  onClick={()=>this.scrollToAnchor('comment-box')} size='2x' name="commenting">
                                
                            </Icon>
                            <label className='commentCount'>{this.props.commentList.length}</label>
                        </div>
                    </Affix>
                    <div className="title">
                        <h1>{this.props.article.title}</h1>
                    </div>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{
                        __html: this.props.article.content
                    }}></div>
                </div>
                <div className='articleDesc-box'>
                    <p>本文发布于{article.date_publish}, 已被围观{article.click_count}次</p>
                    <p>标签：{article.tags !== undefined? article.tags.map((t,index)=><label key={index} style={{marginRight:10}}>{t}</label>):''}</p>
                    <p>分类：{article.category}</p>
                    {article.prev===undefined || article.prev.id===null||article.prev.id===undefined?'':<p>上一篇：<Link  to={`/article/${article.prev.id}`}>{article.prev.title}</Link></p>}
                    {article.prev===undefined || article.next.id===null||article.next.id===undefined?'':<p>下一篇：<Link  to={`/article/${article.next.id}`}>{article.next.title}</Link></p>}
                </div>
                <div id='comment-box'>
                <CommentBox
                    get_image={actions.get_image}
                    publish_comment={actions.publish_comment}
                    imageUrl={imageUrl}
                    articleId={article.id}></CommentBox>
                </div>
                
                <div style={commentListStyle}>
                    <CommentList commentList={commentList}></CommentList>
                </div>
                
            </div>
        );
    }
}

export default ArticleDisplay;