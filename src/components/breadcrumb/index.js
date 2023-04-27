import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {adminRoutes} from '@/router';
import Button from '@/components/button';
import './index.less';
class Breadcrumb extends Component {
    state = {}
    render() {
        let currentRoutePath = this.props.location.pathname;
        let oldRouteList = sessionStorage.getItem('oldRouteList');
        if(oldRouteList){
            oldRouteList = JSON.parse(oldRouteList);
        }else{
            oldRouteList = [];
        }
        let currentRoute = null;
        for(let item of adminRoutes){
            if(item.path === currentRoutePath){
                currentRoute = item;
                break;
            }
        }

        for(let item of oldRouteList){
            if(item.path === currentRoutePath){
                currentRoute = null;
                break;
            }
        }
        if(currentRoute){
            oldRouteList.push(currentRoute);
        }
        sessionStorage.setItem('oldRouteList',JSON.stringify(oldRouteList));
        return (
            <div className="breadcrumb">
                {oldRouteList.map((res,i)=><Button key={i} type="primary" size="small">{res.name}</Button>)}
            </div>
        );
    }
}
export default withRouter(Breadcrumb);