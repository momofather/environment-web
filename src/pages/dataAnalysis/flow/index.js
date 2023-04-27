import React, { Component } from 'react';
import { Form, DatePicker } from 'antd';
import Button from '@/components/button';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';
import './index.less';
class Index extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            options: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                legend: {
                    data: ['进水流量', '出水流量'],
                    top: 0
                },
                grid: {
                    bottom: 20,
                    top: 30,
                    right: 40,
                    left: 60
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
                series: []
            }
        }
    }
    componentDidMount() {
        this.formRef.current.setFieldsValue({ month: [moment(), moment()] });
        this.getData([new Date(),new Date()]);
    }
    getData = (date) => {
        React.axios.get('api/month/plcmonth/queryList', { startTime: moment(date[0]).format('yyyy-MM-01 00:00:00'), endTime: moment(date[1]).endOf('month').format('yyyy-MM-DD 23:59:59') }, res => {
            let inTotal = 0, outTotal = 0, inLight = -1, inLow = -1, outLight = -1, outLow = -1, xAxis = [], inFlow = [], outFlow = [], inFlowTotal = [], outFlowTotal = [];
            let options = this.state.options;
            res.data.forEach(item => {
                xAxis.push(moment(item.gainTime).format('yyyy-MM-DD'));
                inFlow.push(item.inFlow);
                outFlow.push(item.outFlow);
                inFlowTotal.push(item.jslj);
                outFlowTotal.push(item.cslj);
                inTotal += parseFloat(item.inFlow);
                outTotal += parseFloat(item.outFlow);
                if (item.inFlow > inLight) {
                    inLight = item.inFlow;
                }
                if (inLow === -1) {
                    inLow = item.inFlow;
                } else if (item.inFlow < inLow) {
                    inLow = item.inFlow;
                }
                if (item.outFlow > outLight) {
                    outLight = item.outFlow;
                }
                if (outLow === -1) {
                    outLow = item.outFlow;
                } else if (item.outFlow < outLow) {
                    outLow = item.outFlow;
                }
            })
            if (res.data.length > 0) {
                this.setState({
                    data: res.data,
                    inAvg: (parseFloat(inTotal) / res.data.length).toFixed(1),
                    inTotal: inTotal.toFixed(1),
                    inLight: parseFloat(inLight).toFixed(1),
                    inLow: parseFloat(inLow).toFixed(1),
                    outAvg: (parseFloat(outTotal) / res.data.length).toFixed(1),
                    outTotal: outTotal.toFixed(1),
                    outLight: parseFloat(outLight).toFixed(1),
                    outLow: parseFloat(outLow).toFixed(1)
                });
            } else {
                this.setState({
                    data: res.data,
                    inAvg: 0,
                    inTotal: 0,
                    inLight: 0,
                    inLow: 0,
                    outAvg: 0,
                    outTotal: 0,
                    outLight: 0,
                    outLow: 0,
                });
            }
            options.xAxis.data = xAxis;
            options.series = [
                {
                    name: '进水流量',
                    data: inFlow,
                    type: 'line',
                    smooth: true
                },
                {
                    name: '出水流量',
                    data: outFlow,
                    type: 'line',
                    smooth: true
                }
            ];
            this.ref.getEchartsInstance().clear();
            this.ref.getEchartsInstance().setOption(options);
        })
    }
    query = (values) => {
        this.getData(values.month);
    }
    render() {
        return (
            <div className="flow">
                <Form layout="inline" ref={this.formRef} onFinish={this.query} className="query-tools">
                    <Form.Item name="month">
                        <DatePicker.RangePicker picker="month" onChange={this.getData}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">查询</Button>
                    </Form.Item>
                </Form>
                <ul>
                    <li>
                        <span className="value font26">{this.state.inTotal}m³</span>
                        <div className="name">总进水量</div>
                    </li>
                    <li>
                        <span className="value font26">{this.state.outTotal}m³</span>
                        <div className="name">总出水量</div>
                    </li>
                    <li>
                        <span className="value font26">{this.state.inLow}m³</span>
                        <div className="name">最低进水量</div>
                    </li>
                    <li>
                        <span className="value font26">{this.state.inLight}m³</span>
                        <div className="name">最高进水量</div>
                    </li>
                </ul><br/>
                <ul>
                    <li>
                        <span className="value font26">{this.state.outLow}m³</span>
                        <div className="name">最低出水量</div>
                    </li>
                    <li>
                        <span className="value font26">{this.state.outLight}m³</span>
                        <div className="name">最高出水量</div>
                    </li>
                    <li>
                        <span className="value font26">{this.state.inAvg}m³</span>
                        <div className="name">日平均进水量</div>
                    </li>
                    <li>
                        <span className="value font26">{this.state.outAvg}m³</span>
                        <div className="name">日平均出水量</div>
                    </li>
                </ul><br />
                <ReactEcharts ref={(e) => { this.ref = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
            </div>
        );
    }
}

export default Index;