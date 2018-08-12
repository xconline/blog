import React, { Component } from 'react';
import TagSider from '../containers/tagSiderContainer';
import ArticleList from '../containers/articleListContainer';
import { Affix } from 'antd';
import '../style/article.less';

class Article extends Component {
    render() {
        return (
            <div className="aticle_container">
                <ArticleList />
                <div className="right-sider">
                    <Affix offsetTop={60}>
                        <TagSider />
                    </Affix>
                </div>
            </div>
        );
    }
}

export default Article;
