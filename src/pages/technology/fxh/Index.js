import React, { Component } from 'react';
import { Tabs } from 'antd';
import Tab2 from './components/Tab2';
import Tab1 from './components/Tab1';
import Tab3 from './components/Tab3';
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
                <Tabs.TabPane tab="反硝化滤池" key="1">
                    {this.state.activeKey==='1'&&<Tab1 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="紫外线消毒渠" key="2">
                    {this.state.activeKey==='2'&&<Tab2 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="清水池" key="3">
                    {this.state.activeKey==='3'&&<Tab3 />}
                </Tabs.TabPane>
            </Tabs>
        );
    }
}
 
export default Technology;