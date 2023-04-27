import React, { Component } from 'react';
import { Form, Modal, DatePicker, Tabs} from 'antd';
import Button from '@/components/button';
import moment from 'moment';
import ReactEcharts from 'echarts-for-react';
class Info extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeKey: '1',
            options: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                legend: {
                    data: ['1#', '2#', '3#', '4#'],
                    top: 0
                },
                grid: {
                    bottom: 20,
                    top: 30,
                    right: 20,
                    left: 30
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [],
                    axisLabel: {
                        fontSize: 12,
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        fontSize: 12,
                    }
                },
                series: [
                    {
                        name: '1#',
                        data: [],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '2#',
                        data: [],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '3#',
                        data: [],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '4#',
                        data: [],
                        type: 'line',
                        smooth: true
                    }
                ]
            },
        }
    }
    onChange = activeKey => {
        this.setState({ activeKey });
    }
    render() { 
        return (
            <Modal footer="" title="数据图表" width="80%" visible={true} onCancel={this.props.onCancel} maskClosable={false}>
                <Form layout="inline" ref={this.formRef} onFinish={(values) => { this.tableRef.reload(values) }} className="query-tools">
                    <Form.Item label="时间" name="time">
                        <DatePicker defaultValue={moment()} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                </Form>
                <Tabs type='card' size="small" activeKey={this.state.activeKey} onChange={this.onChange}>
                    <Tabs.TabPane tab="进口压力" key="1">
                        <ReactEcharts ref={(e) => { this.codRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="出口压力" key="2">
                        <ReactEcharts ref={(e) => { this.phRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="主电机转速" key="3">
                        <ReactEcharts ref={(e) => { this.nh3nRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="测量风量" key="4">
                        <ReactEcharts ref={(e) => { this.tnRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="主机出口温度" key="5">
                        <ReactEcharts ref={(e) => { this.tpRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                </Tabs>
            </Modal>
        );
    }
}
 
export default Info;