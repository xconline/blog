import React, {Component} from 'react';
import {List, Avatar} from 'antd';

/*
 * api:
 *      get_image()  获得头像的id和url
 *      publish_comment() 发表评论
 *      imageUrl 头像的url
 *      articleId 评论文章的id
 * 
 */
class ComponentList extends Component {
    render() {
        const websiteStyle = {
            fontSize:12,
            marginLeft: 12,
        };
        return (
            <List
            itemLayout="horizontal"
            dataSource={this.props.commentList}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={<label>{item.name}</label>}
                  description={<div><div style={{fontSize:16}}>{item.content}</div><div style={{fontSize:12}}>{item.date_publish}<a style={websiteStyle} href={item.website}>{item.website==='http://'?'':item.website}</a></div></div>}
                />
              </List.Item>
            )}
          />
        );
    }
}

export default ComponentList;