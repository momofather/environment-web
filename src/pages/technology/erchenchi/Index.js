import React, { Component } from 'react';
import { Tabs } from 'antd';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
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
                <Tabs.TabPane tab="1号至6号二沉池" key="1">
                    {this.state.activeKey === '1' && <Tab1 />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="7号至12号二沉池" key="2">
                    {this.state.activeKey === '2' && <Tab2 />}
                </Tabs.TabPane>
            </Tabs>
        );
    }
}
 
export default Technology;