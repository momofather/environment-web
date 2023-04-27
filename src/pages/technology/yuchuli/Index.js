import React, { Component } from 'react';
import { Tabs } from 'antd';
import Tab2 from './components/Tab2';
import Tab1 from './components/Tab1';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';
import Tab5 from './components/Tab5';
import './index.less';
class Technology extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeKey: '1'
        }
    }
    componentDidMount(){
        
    }
    componentWillUnmount(){
        console.log('组件销毁');
    }
    onChange = activeKey => {
        this.setState({ activeKey });
    };
    
    render() {
        return (
            <Tabs type='card' activeKey={this.state.activeKey} onChange={this.onChange}>
                <Tabs.TabPane tab="进水限流阀井及流量计" key="1">
                    {this.state.activeKey==='1'&&<Tab1 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="粗栅格及提升汞房" key="2">
                    {this.state.activeKey==='2'&&<Tab2 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="细格栅" key="3">
                    {this.state.activeKey==='3'&&<Tab3 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="曝气沉砂池" key="4">
                    {this.state.activeKey==='4'&&<Tab4 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="放空泵井" key="5">
                    {this.state.activeKey==='5'&&<Tab5 />}
                </Tabs.TabPane>
            </Tabs>
        );
    }
}
 
export default Technology;