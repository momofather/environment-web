import React, { Component } from 'react';
import { Form, Modal, DatePicker, Tabs} from 'antd';
import Button from '@/components/button';
import moment from 'moment';
import ReactEcharts from 'echarts-for-react';
class Info extends Component {
    formRef = React.createRef(); ref1 = null; ref2 = null; ref3 = null; ref4 = null; ref5 = null;
    constructor(props){
        super(props);
        this.state = {
            activeKey: 'inPressure',
            xAxisData: [],
            data: [],
            options: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                legend: {
                    data: ['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#'],
                    top: 0
                },
                grid: {
                    bottom: 50,
                    top: 30,
                    right: 40,
                    left: 60
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [],
                    axisLabel: {
                        formatter: (value) => `${moment(value).format('yyyy-MM-DD')}\n${moment(value).format('HH:mm')}`,
                        fontSize: 10,
                        rotate: 40
                    },
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
                    },
                    {
                        name: '5#',
                        data: [],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '6#',
                        data: [],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '7#',
                        data: [],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '8#',
                        data: [],
                        type: 'line',
                        smooth: true
                    }
                ]
            },
        }
    }
    componentDidMount(){
        this.formRef.current.setFieldsValue({ date: moment() });
        this.getData();
    }
    onChange = activeKey => {
        let array1 = [], array2 = [], array3 = [], array4 = [], array5 = [], array6 = [], array7 = [], array8 = [];
        this.state.data['1#'].forEach(item => {
            array1.push(item[activeKey]);
        })
        this.state.data['2#'].forEach(item => {
            array2.push(item[activeKey]);
        })
        this.state.data['3#'].forEach(item => {
            array3.push(item[activeKey]);
        })
        this.state.data['4#'].forEach(item => {
            array4.push(item[activeKey]);
        })
        this.state.data['5#'].forEach(item => {
            array5.push(item[activeKey]);
        })
        this.state.data['6#'].forEach(item => {
            array6.push(item[activeKey]);
        })
        this.state.data['7#'].forEach(item => {
            array7.push(item[activeKey]);
        })
        this.state.data['8#'].forEach(item => {
            array8.push(item[activeKey]);
        })
        let options = this.state.options;
        options.xAxis.data = this.state.xAxisData;
        options.series[0].data = array1;
        options.series[1].data = array2;
        options.series[2].data = array3;
        options.series[3].data = array4;
        options.series[4].data = array5;
        options.series[5].data = array6;
        options.series[6].data = array7;
        options.series[7].data = array8;
        this.setState({ activeKey }, () => {
            this.ref1.getEchartsInstance().setOption(options);
        });
    }
    getData = (date) => {
        React.axios.get('api/blower/queryBlowerList', { startTime: moment(date).format('yyyy-MM-DD 00:00:00'), endTime: moment(date).format('yyyy-MM-DD 23:59:59') }, res => {
            if (res.data){
                let xAxisData = [];
                res.data['1#'].forEach(item=>{
                    if (xAxisData.indexOf(moment(item.gainTime).format('yyyy-MM-DD HH:mm')) === -1){
                        xAxisData.push(moment(item.gainTime).format('yyyy-MM-DD HH:mm'));
                    }
                })
                this.setState({ data: res.data, xAxisData: xAxisData },()=>{
                    this.onChange('inPressure');
                });
            }
        })
    }
    query = (values) => {
        this.getData(values.time);
    }
    render() { 
        return (
            <Modal footer="" title="数据图表" width="90%" visible={true} onCancel={this.props.onCancel} maskClosable={false}>
                <Form layout="inline" ref={this.formRef} onFinish={(values) => { this.tableRef.reload(values) }} className="query-tools">
                    <Form.Item label="日期" name="date">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                </Form>
                <Tabs type='card' size="small" activeKey={this.state.activeKey} onChange={this.onChange}>
                    <Tabs.TabPane tab="进口压力" key="inPressure">
                        <ReactEcharts ref={(e) => { this.ref1 = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="出口压力" key="outPressure">
                        <ReactEcharts ref={(e) => { this.ref2 = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="主电机转速" key="speed">
                        <ReactEcharts ref={(e) => { this.ref3 = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="测量风量" key="volume">
                        <ReactEcharts ref={(e) => { this.ref4 = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="主机出口温度" key="temperature">
                        <ReactEcharts ref={(e) => { this.ref5 = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                    </Tabs.TabPane>
                </Tabs>
            </Modal>
        );
    }
}
 
export default Info;