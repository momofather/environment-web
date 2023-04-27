import React, { Component } from 'react';
import { Form, DatePicker, Table, Row, Col } from 'antd';
import Button from '@/components/button';
import moment from 'moment';
class List extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            infoModal: false,
            data: [],
            inAvg: 0,
            inLight: 0,
            inLow: 0,
            inTotal: 0,
            outAvg: 0,
            outLight: 0,
            outLow: 0,
            outTotal: 0
        }
    }
    componentDidMount() {
        this.formRef.current.setFieldsValue({ time: moment() });
        this.getData(new Date())
    }
    getData = (date) => {
        React.axios.get('api/month/plcmonth/queryList', { startTime: moment(date).format('yyyy-MM-01 00:00:00'), endTime: moment(date).endOf('month').format('yyyy-MM-DD 23:59:59') }, res => {
            let inTotal = 0, outTotal = 0, inLight = -1, inLow = -1, outLight = -1, outLow = -1;
            res.data.forEach(item=>{
                inTotal += parseFloat(item.inFlow);
                outTotal += parseFloat(item.outFlow);
                if (item.inFlow > inLight){
                    inLight = item.inFlow;
                }
                if (inLow === -1){
                    inLow = item.inFlow;
                } else if (item.inFlow < inLow){
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
            if (res.data.length>0){
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
            }else{
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
        })
    }
    query = (values) => {
        this.getData(values.time);
    }
    footer = () => <Row>
        <Col span={3}>进水平均流量：{this.state.inAvg}m³</Col>
        <Col span={3}>进水最低流量：{this.state.inLow}m³</Col>
        <Col span={3}>进水最高流量：{this.state.inLight}m³</Col>
        <Col span={3}>月进水总流量：{this.state.inTotal}m³</Col>
        <Col span={3}>出水平均流量：{this.state.inAvg}m³</Col>
        <Col span={3}>出水最低流量：{this.state.inLow}m³</Col>
        <Col span={3}>出水最高流量：{this.state.inLight}m³</Col>
        <Col span={3}>月出水总流量：{this.state.inTotal}m³</Col>
    </Row>
    render() {
        const columns = [
            {
                title: '日期',
                align: 'center',
                width: '120px',
                render: (text, res) => moment(res.gainTime).format('yyyy-MM-DD')
            },
            {
                title: '进水流量(m³)',
                align: 'center',
                render: (text, res) => res.inFlow,
            },
            {
                title: '累计进水流量(m³)',
                align: 'center',
                render: (text, res) => parseFloat(res.jslj),
            },
            {
                title: '出水流量(m³)',
                align: 'center',
                render: (text, res) => res.outFlow,
            },
            {
                title: '累计出水流量(m³)',
                align: 'center',
                render: (text, res) => parseFloat(res.cslj),
            },
        ]
        return <>
            <Form layout="inline" ref={this.formRef} onFinish={this.query} className="query-tools">
                <Form.Item label="月份" name="time">
                    <DatePicker picker="month" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon="search">搜索</Button>&nbsp;
                </Form.Item>
            </Form>
            <Table size="small" columns={columns} dataSource={this.state.data} bordered pagination={false} rowKey="id"
                footer={this.footer}
            />
        </>;
    }
}

export default List;