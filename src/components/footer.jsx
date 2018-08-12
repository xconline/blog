import React, { Component } from 'react';
import '../style/footer.less';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                @2018 - <label style={{ color: '#7EC0EE', fontWeight: 'bold' }}>xc</label>的博客 -
                Powered by React.js & Django
            </div>
        );
    }
}

export default Footer;
