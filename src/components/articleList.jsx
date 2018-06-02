import React, {Component} from 'react';
import {List, Icon, Spin} from 'antd';
import {Link} from 'react-keeper';
import $ from 'jquery';
import '../style/articleList.less';

const IconText = ({type, text}) => (
    <span>
        <Icon type={type} style={{
            marginRight: 8
        }}/> {text}
    </span>
);
class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadMoreFlag: false,
        }
        this.props.actions.initArticleList({
            page: 1
        });
    }
    componentDidMount(){
        window.addEventListener('scroll', () => this.handleScroll()); // 绑定滚动加载事件
        
    }
    handleScroll() {
        let scrollTop = $(document).scrollTop();
        let height = $(document).height() - $(window).height();
        if(scrollTop > height-50 && this.props.loading === false && this.props.loadMoreFlag===false){
            this.props.actions.loadMore_article({
                tag: this.props.selectedTag,
                page: this.props.page 
            })
        }
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }
    componentWillReceiveProps(nextProps) {
        
    }
    render() {
        const {articleList,loading,loadMoreFlag } = this.props;
        return (
            <div className="article_list">
                <List
                    itemLayout="vertical"
                    dataSource={articleList}
                    renderItem={item => {
                        return <List.Item
                                key={item.id}
                                actions={[
                                    item.date_publish, < IconText type = "eye" text = {item.click_count}/>, 
                                    <IconText type = "like" text = {item.like_count} />, 
                                    <IconText type = "message" text = {item.comment.length} />
                                ]}
                                className="item"
                                >
                                <List.Item.Meta title={<Link  to={`/article/${item.id}`}><label className='title'>{item.title}</label></Link>} description={item.tags.join(',')}/> 
                                {item.desc}
                            </List.Item>
                    }}/>
                    <div className='loading'>{loading?<Spin/>:null}</div>
                    <div className='loading'>{loadMoreFlag?'没有更多文章了':null}</div>
            </div>

        );
    }
}

export default ArticleList;