import React, { Component } from 'react';
import { Form, Select, DatePicker, Table } from 'antd';
import Button from '@/components/button';
import moment from 'moment';
import Info from './Info';
class Index extends Component {
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            infoModal: false,
            data: []
        }
    }
    componentDidMount(){
        this.formRef.current.setFieldsValue({ date: [moment(), moment()], poolNumber: '1' });
        this.getData({ startTime: new Date(), endTime: new Date(), poolNumber: 1 });
    }
    getData = ({ startTime, endTime, poolNumber }) => {
        if (startTime) {
            startTime = moment(startTime).format('yyyy-MM-DD 00:00:00');
        }
        if (endTime) {
            endTime = moment(endTime).format('yyyy-MM-DD 23:59:59');
        }
        React.axios.get('api/blower/queryList', { startTime: startTime, endTime: endTime, poolNumber: poolNumber }, res => {
            React.axios.get('api/blower/queryList', { startTime: moment(startTime).add(1, "days").format("yyyy-MM-DD 00:00:00"), endTime: moment(endTime).add(1, "days").format("yyyy-MM-DD 23:00:00") }, res2 => {
                if (res2.data.length > 0) {
                    res.data.push(res2.data[0])
                }
                this.setState({ data: res.data });
            })
        })
    }
    query = (values) => {
        this.getData({ startTime: values.date[0], endTime: values.date[1], poolNumber: values.poolNumber });
    }
    onChange = () => {
        let values = this.formRef.current.getFieldsValue();
        this.query(values);
    }
    info = ()=>{
        this.setState({infoModal: true});
    }
    cancel=()=>{
        this.setState({ infoModal: false });
    }
    render() {
        const columns = [
            {
                title: '时间',
                align: 'center',
                render: (text, res) => moment(res.gainTime).format('yyyy-MM-DD HH:mm')
            },
            {
                title: '进口压力(Bar)',
                align: 'center',
                render: (text, res) => parseFloat(res.inPressure).toFixed(3)
            },
            {
                title: '出口压力(Bar)',
                align: 'center',
                render: (text, res) => parseFloat(res.outPressure).toFixed(3)
            },
            {
                title: '主电机转速(rpm)',
                align: 'center',
                render: (text, res) => parseFloat(res.speed).toFixed(1)
            },
            {
                title: '测量风量(m³/h)',
                align: 'center',
                render: (text, res) => parseFloat(res.volume).toFixed(1)
            },
            {
                title: '主机出口温度(℃)',
                align: 'center',
                render: (text, res) => parseFloat(res.temperature).toFixed(1)
            },
            {
                title: '运行时长(h)',
                align: 'center',
                render: (text, res) => parseFloat(res.runtime).toFixed(1)
            },
        ]
        return <>
            <Form layout="inline" ref={this.formRef} onFinish={this.query} className="query-tools">
                <Form.Item label="设备编号" name="poolNumber">
                    <Select style={{ width: '200px' }} onChange={this.onChange}>
                        <Select.Option value="1">1#</Select.Option>
                        <Select.Option value="2">2#</Select.Option>
                        <Select.Option value="3">3#</Select.Option>
                        <Select.Option value="4">4#</Select.Option>
                        <Select.Option value="5">5#</Select.Option>
                        <Select.Option value="6">6#</Select.Option>
                        <Select.Option value="7">7#</Select.Option>
                        <Select.Option value="8">8#</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="日期" name="date">
                    <DatePicker.RangePicker/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon="search">搜索</Button>&nbsp;
                    <Button type="primary" icon="chart" onClick={this.info}>图表</Button>
                </Form.Item>
            </Form>
            <Table size="small" columns={columns} dataSource={this.state.data} bordered pagination={false} rowKey="id" />

            {this.state.infoModal && <Info onCancel={this.cancel}/>}
        </>;
    }
}
 
export default Index;