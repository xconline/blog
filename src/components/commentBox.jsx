import React, {Component} from 'react';
import {Input, Button, message} from 'antd';
import '../style/commentBox.less';

const {TextArea} = Input;
/*
 * api:
 *      get_image()  获得头像的id和url
 *      publish_comment() 发表评论
 *      imageUrl 头像的url
 *      articleId 评论文章的id
 * 
 */
class ComponentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishCommentClass: 'hide',
            name: '',
            email: '',
            website: '',
            comment: ''
        }
        this.props.get_image();
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
            website: this.state.website.indexOf('http')===-1?`http://${this.state.website}`:this.state.website,
            comment: this.state.comment,
            articleId: this.props.articleId
        }
        this.props.publish_comment(param);
        this.setState({
            name: '',
            email: '',
            website: '',
            comment: ''
        })
    }
    render() {
        const {name, email, website, comment} = this.state;

        return (
            <div className="publishComment">
                <div className='image'>
                    <img src={this.props.imageUrl} alt="随机给的头像"/>
                </div>
                <div className="publish-box">
                    <div className="input-box">
                        <Input placeholder='昵称（必填）' onChange={(e) => this.setState({name: e.target.value})} value={name}></Input>
                        <Input placeholder='邮箱' onChange={(e) => this.setState({email: e.target.value})} value={email}></Input>
                        <Input type='url' onChange={(e) => this.setState({website: e.target.value})} placeholder='个人网址' value={website}></Input>
                    </div>
                    <TextArea
                        onFocus={() => this.setState({publishCommentClass: 'show'})}
                        onBlur={() => this.setState({publishCommentClass: 'hide'})}
                        rows={4}
                        onChange={(e) => this.setState({comment: e.target.value})}
                        value={comment}></TextArea>
                    <Button className={`publich_comment_but ${this.state.publishCommentClass}`} onClick={this.publichComment}>提交评论</Button>
                </div>
            </div>
        );
    }
}

export default ComponentBox;