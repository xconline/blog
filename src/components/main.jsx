import React, {Component} from 'react';
import {Route} from 'react-keeper';
import Article from './article';
import ArticleDisplay from '../containers/articleDisplayContainer';
class Main extends Component {
    render() {
        return (
            <div>
                <Route cache index miss path='/article>' component={Article}></Route>
                <Route path='/article/:id>' component={ArticleDisplay}></Route>
            </div>
        )
    }
}
export default Main;