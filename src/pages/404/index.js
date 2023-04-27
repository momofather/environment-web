import React, {Component } from 'react';
import {withRouter} from "react-router-dom";
import Button from '@/components/button';
import './index.less';
class PageNotFind extends Component {
    goHome=()=>{
        sessionStorage.setItem('activi_router_path','');
        sessionStorage.setItem('currentTopMenu',0);
        this.props.history.push(`/${React.Version}/home`)
    }
    render() {
        return(
            <div className="container">
                <h1>404</h1>
                <p>页面不存在，请检查地址！</p>
                <Button type="primary" onClick={this.goHome}>返回首页</Button>
            </div>
        )
    }
}
export default withRouter(PageNotFind);