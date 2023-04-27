import React, { Component } from 'react';
import { Tabs } from 'antd';
import Tab1 from './components/Tab1';
import './index.less';
class Technology extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeKey: '1'
        }
    }
    onChange = activeKey => {
        this.setState({ activeKey });
    };
    
    render() {
        return (
            <Tabs type='card' activeKey={this.state.activeKey} onChange={this.onChange}>
                <Tabs.TabPane tab="尾水" key="1">
                    {this.state.activeKey==='1'&&<Tab1 />}
                </Tabs.TabPane>
            </Tabs>
        );
    }
}
export default Technology;