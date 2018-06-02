import React, {Component} from 'react';
import '../style/header.less';
import {Link} from 'react-keeper';
import $ from 'jquery';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerClass: 'nav-down'
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
    }
    handleScroll() {
        if($(document).scrollTop() > 100 && this.state.headerClass === 'nav-down'){
            this.setState({headerClass: 'nav-up'});
        }else if($(document).scrollTop() < 100 && this.state.headerClass === 'nav-up'){
            this.setState({headerClass: 'nav-down'});
        }
    }
    render() {
        return (
            <div className={`header ${this.state.headerClass}`}>
                <section className="header-content">
                    <nav>
                        <Link to='/home'>首页</Link>
                        <Link className='active' to='/article'>文章</Link>
                        <Link to='/project'>项目</Link>
                        <Link to='/about'>关于</Link>
                    </nav>
                </section>
            </div>
        );
    }
}

export default Header;