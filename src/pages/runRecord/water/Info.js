import React, { Component } from 'react';
import { Form, DatePicker, Modal, Tabs} from 'antd';
import moment from 'moment';
import Button from '@/components/button';
import ReactEcharts from 'echarts-for-react';
class Index extends Component {
    codRef = null; nh3nRef = null; tnRef = null; tpRef = null; phRef = null; flowRef=null;
    constructor(props){
        super(props);
        this.state = {
            data: [],
            options:{
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                legend: {
                    data: ['进水', '出水'],
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
                    axisLabel: {
                        formatter: (value) => `${moment(value).format('yyyy-MM-DD')}\n${moment(value).format('HH:mm')}`,
                        fontSize: 10,
                        // rotate: 40
                    },
                    data: [],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        name: '进水',
                        data: [],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '出水',
                        data: [],
                        type: 'line',
                        smooth: true
                    }
                ]
            },
            activeKey: '1'
        }
    }
    componentDidMount(){
        this.getData(new Date())
    }
    onChange = activeKey => {
        let xAxisData = [], inCodData = [], outCodData = [], inNh3N = [], outNh3N = [], inTn = [], outTn = [], inTp = [], outTp = [], inPh = [], outPh = [], inFlow = [], outFlow = [];
        this.state.data.forEach(item => {
            xAxisData.push(item.gainTime);
            inCodData.push(item.inCod);
            outCodData.push(item.outCod);
            inNh3N.push(item.inNh3N);
            outNh3N.push(item.outNh3N);
            inTn.push(item.inTn);
            outTn.push(item.outTn);
            inTp.push(item.inTp);
            outTp.push(item.outTp);
            inPh.push(item.inPh);
            outPh.push(item.outPh);
            inFlow.push(item.inFlow);
            outFlow.push(item.outFlow);
        })
        let options = this.state.options;
        options.xAxis.data = xAxisData;
        this.setState({ activeKey },()=>{
            if (activeKey==='1'){
                options.series[0].data = inCodData;
                options.series[1].data = outCodData;
                this.codRef.getEchartsInstance().setOption(options);
            } else if (activeKey === '2'){
                options.series[0].data = inPh;
                options.series[1].data = outPh;
                this.phRef.getEchartsInstance().setOption(options);
            } else if (activeKey === '3') {
                options.series[0].data = inNh3N;
                options.series[1].data = outNh3N;
                this.nh3nRef.getEchartsInstance().setOption(options);
            } else if (activeKey === '4') {
                options.series[0].data = inTn;
                options.series[1].data = outTn;
                this.tnRef.getEchartsInstance().setOption(options);
            } else if (activeKey === '5') {
                options.series[0].data = inTp;
                options.series[1].data = outTp;
                this.tpRef.getEchartsInstance().setOption(options);
            } else if (activeKey === '6') {
                options.series[0].data = inFlow;
                options.series[1].data = outFlow;
                this.flowRef.getEchartsInstance().setOption(options);
            }
        });
    };
    getData = (date) => {
        React.axios.get('api/inOutWater/queryList', { startTime: moment(date).format('yyyy-MM-DD 00:00:00'), endTime: moment(date).format('yyyy-MM-DD 23:59:59') }, res => {
            this.setState({ data: res.data },()=>{
                this.onChange('1');
            });
        })
    }
    query = (values) => {
        this.getData(values.time);
    }
    render() {
        return <Modal footer="" title="数据图表" width="90%" visible={true} onCancel={this.props.onCancel} maskClosable={false}>
            <Form layout="inline" ref={this.formRef} onFinish={this.query} className="query-tools">
                <Form.Item label="日期" name="time">
                    <DatePicker defaultValue={moment()} onChange={this.getData}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon="search">查询</Button>
                </Form.Item>
            </Form>
            <Tabs type='card' size="small" activeKey={this.state.activeKey} onChange={this.onChange}>
                <Tabs.TabPane tab="COD" key="1">
                    <ReactEcharts ref={(e) => { this.codRef = e; }}  option={this.state.options} style={{ height: '400px', width: '100%' }} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="PH" key="2">
                    <ReactEcharts ref={(e) => { this.phRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="NH3-N" key="3">
                    <ReactEcharts ref={(e) => { this.nh3nRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="TN" key="4">
                    <ReactEcharts ref={(e) => { this.tnRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="TP" key="5">
                    <ReactEcharts ref={(e) => { this.tpRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="流量" key="6">
                    <ReactEcharts ref={(e) => { this.flowRef = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
                </Tabs.TabPane>
            </Tabs>
        </Modal>;
    }
}
 
export default Index;