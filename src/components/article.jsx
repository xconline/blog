import React, {Component} from 'react';
import TagSider from '../containers/tagSiderContainer';
import ArticleList from '../containers/articleListContainer';
import '../style/article.less';


class Article extends Component {
    
    componentDidMount() {
        
    }
    componentWillReceiveProps(nextProps){
        
    }
    render() {
        return (
            <div className='aticle_container'>
                <ArticleList></ArticleList>
                <div className='right-sider'>
                    <TagSider></TagSider>
                </div>
            </div>
        );
    }
}

export default Article;