import React, {Component } from 'react';
import './index.less';
class NoAutho extends Component {
    render() {
        return(
            <div className="container">
                <h1>403</h1>
                <p>没有权限访问该资源！</p>
            </div>
        )
    }
}
export default NoAutho;