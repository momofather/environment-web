import React, { Component } from 'react';
import { Form, DatePicker, Table } from 'antd';
import Button from '@/components/button';
import moment from 'moment';
import Info from './Info';
// 进出水监测
class List extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            infoModal: false,
            data: [],
            data2: []
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
            React.axios.get('api/inCodOrTp/queryList', { startTime: moment(startTime).add(1, "days").format("yyyy-MM-DD 00:00:00"), endTime: moment(endTime).add(1, "days").format("yyyy-MM-DD 00:00:00") }, res2 => {
                if (res2.data.length > 0){
                    res.data.push(res2.data[0])
                }
                this.setState({ data: res.data });
            })
        })

        React.axios.get('api/inOutWater/queryList', { startTime: startTime, endTime: endTime }, res => {
            React.axios.get('api/inOutWater/queryList', { startTime: moment(startTime).add(1, "days").format("yyyy-MM-DD 00:00:00"), endTime: moment(endTime).add(1, "days").format("yyyy-MM-DD 23:00:00") }, res2 => {
                if (res2.data.length > 0) {
                    res.data.push(res2.data[0])
                }
                res.data.forEach((item, i) => {
                    if (i === 0) {
                        item.inSdll = 0;
                        item.outSdll = 0;
                    } else {
                        item.inSdll = (parseFloat(item.inJsljll) - parseFloat(res.data[i - 1].inJsljll)).toFixed(1);
                        item.outSdll = (parseFloat(item.outCsljll) - parseFloat(res.data[i - 1].outCsljll)).toFixed(1);
                    }
                })
                this.setState({ data2: res.data });
            })
        })
    }
    query = (values) => {
        this.getData({ startTime: values.date[0], endTime: values.date[1] });
    }
    info = () => {
        this.setState({ infoModal: true });
    }
    cancel = () => {
        this.setState({ infoModal: false });
    }
    render() {
        const columns = [
            {
                title: '时间',
                align: 'center',
                width: '150px',
                render: (text, res) => moment(res.gainTime).format('yyyy-MM-DD HH:mm')
            },
            {
                title: '进水在线检测',
                align: 'center',
                children: [
                    {
                        title: 'COD(mg/L)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.inCod).toFixed(3),
                    },
                    {
                        title: 'NH3-N(mg/L)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.inNh3N).toFixed(3),
                    },
                    {
                        title: 'TN(mg/L)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.inTn).toFixed(3),
                    },
                    {
                        title: 'TP(mg/L)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.inTp).toFixed(3),
                    },
                    {
                        title: 'PH',
                        align: 'center',
                        render: (text, res) => parseFloat(res.inPh).toFixed(3),
                    },
                    {
                        title: '温度(℃)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.inTemperature).toFixed(1),
                    }
                ]
            },
            {
                title: '出水在线检测',
                align: 'center',
                children: [
                    {
                        title: 'COD(mg/L)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.outCod).toFixed(3),

                    },
                    {
                        title: 'NH3-N(mg/L)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.outNh3N).toFixed(3),

                    },
                    {
                        title: 'TN(mg/L)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.outTn).toFixed(3),

                    },
                    {
                        title: 'TP(mg/L)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.outTp).toFixed(3),

                    },
                    {
                        title: 'PH',
                        align: 'center',
                        render: (text, res) => parseFloat(res.outPh).toFixed(3),
                    },
                    {
                        title: '温度(℃)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.outTemperature).toFixed(1),
                    }
                ]
            },
        ]
        const columns2 = [
            {
                title: '时间',
                align: 'center',
                width: '150px',
                render: (text, res) => moment(res.gainTime).format('yyyy-MM-DD HH:mm')
            },
            {
                title: '进水在线检测',
                align: 'center',
                children: [
                    {
                        title: '瞬时流量(m³/s)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.inFlow).toFixed(1),
                    },
                    {
                        title: '时段流量(m³)',
                        align: 'center',
                        render: (text, res) => res.inSdll,
                    },
                    {
                        title: '累计流量(m³)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.inJsljll).toFixed(1),
                    }
                ]
            },
            {
                title: '出水在线检测',
                align: 'center',
                children: [
                    {
                        title: '瞬时流量(m³/s)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.outFlow).toFixed(1),
                    },
                    {
                        title: '时段流量(m³)',
                        align: 'center',
                        render: (text, res) => res.outSdll,
                    },
                    {
                        title: '累计流量(m³)',
                        align: 'center',
                        render: (text, res) => parseFloat(res.outCsljll).toFixed(1),
                    }
                ]
            },
        ]
        return <>
            <Form layout="inline" ref={this.formRef} onFinish={this.query} className="query-tools">
                <Form.Item label="日期" name="date">
                    <DatePicker.RangePicker />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon="search">搜索</Button>&nbsp;
                    {/* <Button type="primary" icon="chart" onClick={this.info}>图表</Button> */}
                </Form.Item>
            </Form>
            <Table size="small" columns={columns} dataSource={this.state.data} bordered pagination={false} rowKey="id" /><br/>
            <Table size="small" columns={columns2} dataSource={this.state.data2} bordered pagination={false} rowKey="id" />
            {this.state.infoModal && <Info onCancel={this.cancel} />}
        </>;
    }
}

export default List;