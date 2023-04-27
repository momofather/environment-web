import React, { Component } from 'react';
import { Tabs } from 'antd';
import Tab2 from './components/Tab2';
import Tab1 from './components/Tab1';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';
import Tab5 from './components/Tab5';
import Tab6 from './components/Tab6';
import Tab7 from './components/Tab7';
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
                <Tabs.TabPane tab="1号与2号沉淀池" key="1">
                    {this.state.activeKey === '1' && <Tab1 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="3号与4号沉淀池" key="2">
                    {this.state.activeKey === '2' && <Tab2 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="碳源混合搅拌池" key="3">
                    {this.state.activeKey === '3' && <Tab3 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="反冲洗废水池" key="4">
                    {this.state.activeKey === '4' && <Tab4 />}
                    <Tab4 />
                </Tabs.TabPane>
                <Tabs.TabPane tab="PAC加药" key="5">
                    {this.state.activeKey === '5' && <Tab5 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="PAM加药" key="6">
                    {this.state.activeKey === '6' && <Tab6 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="乙酸钠" key="7">
                    {this.state.activeKey === '7' && <Tab7 />}
                </Tabs.TabPane>
            </Tabs>
        );
    }
}
 
export default Technology;