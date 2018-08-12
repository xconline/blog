import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div
                    className="mainContent"
                    style={{
                        paddingTop: 60,
                        paddingBottom: 50,
                    }}>
                    <Main />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
