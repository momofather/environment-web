import React, { Component } from 'react';
import { Tabs } from 'antd';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';
import Tab5 from './components/Tab5';
import Tab6 from './components/Tab6';
import Tab7 from './components/Tab7';
import Tab8 from './components/Tab8';
import Tab9 from './components/Tab9';
import Tab10 from './components/Tab10';
import Tab11 from './components/Tab11';
import Tab12 from './components/Tab12';
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
                <Tabs.TabPane tab="1号2号进水渠" key="1">
                    {this.state.activeKey === '1' && <Tab1 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="3号4号进水渠" key="2">
                    {this.state.activeKey === '2' && <Tab2 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="1号2号上层" key="4">
                    {this.state.activeKey === '4' && <Tab3 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="1号2号下层" key="5">
                    {this.state.activeKey === '5' && <Tab4 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="3号4号上层" key="6">
                    {this.state.activeKey === '6' && <Tab5 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="3号4号下层" key="7">
                    {this.state.activeKey === '7' && <Tab6 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="1号2号出水渠" key="8">
                    {this.state.activeKey === '8' && <Tab7 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="3号4号出水特写" key="9">
                    {this.state.activeKey === '9' && <Tab8 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="1#鼓风机" key="3">
                    {this.state.activeKey === '3' && <Tab9 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="2#鼓风机" key="10">
                    {this.state.activeKey === '10' && <Tab10 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="1#加药房" key="11">
                    {this.state.activeKey === '11' && <Tab11 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="2#加药房" key="12">
                    {this.state.activeKey === '12' && <Tab12 />}
                </Tabs.TabPane>
            </Tabs>
        );
    }
}
 
export default Technology;