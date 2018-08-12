import React, { Component } from 'react';
import { Route } from 'react-keeper';
import Article from './article';
import ArticleDisplay from '../containers/articleDisplayContainer';
class Main extends Component {
    render() {
        return (
            <div>
                <Route cache index miss path="/article>" component={Article} />
                <Route path="/article/:id>" component={ArticleDisplay} />
            </div>
        );
    }
}
export default Main;
