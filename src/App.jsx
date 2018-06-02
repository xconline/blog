import React, {Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <div className='mainContent' style={{
                    paddingTop: 60,
                    paddingBottom: 50,
                }}>
                    <Main></Main>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
