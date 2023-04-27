import React, { Component } from 'react';
import { Form, DatePicker, Tabs} from 'antd';
import Button from '@/components/button';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';
class Index extends Component {
    formRef = React.createRef();
    ref = null;
    constructor(props){
        super(props);
        this.state = {
            activeKey: '1',
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
                    bottom: 40,
                    top: 30,
                    right: 40,
                    left: 40
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [],
                    axisLabel: {
                        formatter: (value) => {
                            return `${moment(value).format('yyyy-MM-DD')}\n${moment(value).format('HH:mm')}`
                        },
                    },
                },
                yAxis: {
                    type: 'value',
                },
                series: []
            },
        }
    }
    componentDidMount() {
        this.formRef.current.setFieldsValue({ date: [moment(), moment()] });
        this.getData({ startTime: new Date(), endTime: new Date() });
    }
    getData = ({ startTime, endTime }) => {
        if (startTime) {
            startTime = moment(startTime).format('yyyy-MM-DD 00:00:00');
        }
        if (endTime) {
            endTime = moment(endTime).format('yyyy-MM-DD 23:59:59');
        }
        React.axios.get('api/inCodOrTp/queryList', { startTime: startTime, endTime: endTime }, res => {
            this.setState({data: res.data},()=>{
                this.onChange('1');
            });
        })
    }
    onChange = (index)=>{
        let xAxis = [], inWater = [], outWater = [];
        this.state.data.forEach(item=>{
            xAxis.push(item.gainTime);
            if(index === '1'){
                inWater.push(item.inCod);
                outWater.push(item.outCod);
            } else if (index === '2'){
                inWater.push(item.inNh3N);
                outWater.push(item.outNh3N);
            } else if (index === '3') {
                inWater.push(item.inTp);
                outWater.push(item.outTp);
            } else if (index === '4') {
                inWater.push(item.inTn);
                outWater.push(item.outTn);
            } else if (index === '5') {
                inWater.push(item.inPh);
                outWater.push(item.outPh);
            }
        })
        let options = this.state.options;
        options.xAxis.data = xAxis;
        options.series = [
            {
                name: '进水',
                data: inWater,
                type: 'line',
                smooth: true
            },
            {
                name: '出水',
                data: outWater,
                type: 'line',
                smooth: true
            }
        ]
        this.ref.getEchartsInstance().clear();
        this.ref.getEchartsInstance().setOption(options);
        this.setState({ activeKey: index});
    }
    query = (values) => {
        this.getData({ startTime: values.date[0], endTime: values.date[1] });
    }
    render() {
        return (
            <div className="water-quality">
                <Form layout="inline" ref={this.formRef} onFinish={this.query} className="query-tools">
                    <Form.Item label="日期" name="date">
                        <DatePicker.RangePicker />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>&nbsp;
                    </Form.Item>
                </Form>
                <Tabs type='card' activeKey={this.state.activeKey} onChange={this.onChange}>
                    <Tabs.TabPane tab="COD" key="1">
                        {this.state.activeKey === '1' && <ReactEcharts ref={(e) => { this.ref = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="NH3-N" key="2">
                        {this.state.activeKey === '2' && <ReactEcharts ref={(e) => { this.ref = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="TP" key="3">
                        {this.state.activeKey === '3' && <ReactEcharts ref={(e) => { this.ref = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="TN" key="4">
                        {this.state.activeKey === '4' && <ReactEcharts ref={(e) => { this.ref = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="PH" key="5">
                        {this.state.activeKey === '5' && <ReactEcharts ref={(e) => { this.ref = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />}
                    </Tabs.TabPane>
                </Tabs>
            </div>
        );
    }
}
 
export default Index;