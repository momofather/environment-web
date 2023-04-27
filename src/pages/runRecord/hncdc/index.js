// 磁混凝沉淀池
import React, { Component } from 'react';
import { Form, DatePicker, Select, Table } from 'antd';
import { CheckOutlined,WarningOutlined } from '@ant-design/icons';
import Button from '@/components/button';
import moment from 'moment';
class Index extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            infoModal: false,
            data: []
        }
    }
    componentDidMount() {
        this.formRef.current.setFieldsValue({ date: [moment(), moment()], poolNumber: '1' });
        this.getData({ startTime: new Date(), endTime: new Date(), poolNumber: 1});
    }
    getData = ({ startTime, endTime, poolNumber }) => {
        if (startTime) {
            startTime = moment(startTime).format('yyyy-MM-DD 00:00:00');
        }
        if (endTime) {
            endTime = moment(endTime).format('yyyy-MM-DD 23:59:59');
        }
        React.axios.get('api/settlingTank/queryList', { startTime: startTime, endTime: endTime, poolNumber: poolNumber}, res => {
            React.axios.get('api/settlingTank/queryList', { startTime: moment(startTime).add(1, "days").format("yyyy-MM-DD 00:00:00"), endTime: moment(endTime).add(1, "days").format("yyyy-MM-DD 23:00:00") }, res2 => {
                if (res2.data.length > 0) {
                    res.data.push(res2.data[0])
                }
                this.setState({ data: res.data });
            })
        })
    }
    query = (values) => {
        this.getData({ startTime: values.date[0], endTime: values.date[1], poolNumber: values.poolNumber});
    }
    onChange = ()=>{
        let values = this.formRef.current.getFieldsValue();
        this.query(values);
    }
    info = () => {
        this.setState({ infoModal: true });
    }
    cancel = () => {
        this.setState({ infoModal: false });
    }
    formatter=(val)=>{
        if(val === 'true'){
            return <CheckOutlined style={{color:"green"}}/>
        }else{
            return <WarningOutlined style={{ color: "red" }}/>
        }
    }
    render() {
        const columns = [
            {
                title: '时间',
                align: 'center',
                render: (text, res) => moment(res.gainTime).format('yyyy-MM-DD HH:mm')
            },
            {
                title: '搅拌器',
                align: 'center',
                children: [
                    {
                        title: 'T1',
                        align: 'center',
                        render: (text,res)=>{
                            return this.formatter(res.agitator1);
                        }
                    },
                    {
                        title: 'T2',
                        align: 'center',
                        render: (text,res)=>{
                            return this.formatter(res.agitator2);
                        }
                    },
                    {
                        title: 'T3',
                        align: 'center',
                        render: (text,res)=>{
                            return this.formatter(res.agitator3);
                        }
                    }
                ]
            },
            {
                title: '中心转动刮泥机',
                align: 'center',
                children: [
                    {
                        title: '扭力值(N*m)',
                        dataIndex: 'torqueValue',
                        key: 'torqueValue',
                        align: 'center',
                    }
                ]
            },
            {
                title: '磁粉回收泵',
                align: 'center',
                children: [
                    {
                        title: '流量(m³/h)',
                        align: 'center',
                        render:(text,res)=>parseFloat(res.flow).toFixed(3),

                    }
                ]
            },
            {
                title: '高剪切机',
                align: 'center',
                render: (text,res)=>{
                    return this.formatter(res.highShear);
                }
            },
            {
                title: '磁分离器',
                align: 'center',
                render: (text,res)=>{
                    return this.formatter(res.separator);
                }
            },
            {
                title: '1#污泥回流泵',
                align: 'center',
                children: [
                    {
                        title: '频率(Hz)',
                        align: 'center',
                        render:(text,res)=>parseFloat(res.pump1Frequency).toFixed(3),

                    },
                    {
                        title: '电流(A)',
                        dataIndex: 'pump1Current',
                        key: 'pump1Current',
                        align: 'center',
                    }
                ]
            },
            {
                title: '2#污泥回流泵',
                align: 'center',
                children: [
                    {
                        title: '频率(Hz)',
                        dataIndex: 'pump2Frequency',
                        key: 'pump2Frequency',
                        align: 'center',
                        render:(text,res)=>parseFloat(res.pump2Frequency).toFixed(3),

                    },
                    {
                        title: '电流(A)',
                        dataIndex: 'pump2Current',
                        key: 'pump2Current',
                        align: 'center',
                    }
                ]
            },
            {
                title: '剩余污泥泵',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        dataIndex: 'sludgePump1',
                        key: 'sludgePump1',
                        align: 'center',
                        render: (text,res)=>{
                            return this.formatter(res.sludgePump1);
                        }
                    },
                    {
                        title: '2#',
                        dataIndex: 'sludgePump2',
                        key: 'sludgePump2',
                        align: 'center',
                        render: (text,res)=>{
                            return this.formatter(res.sludgePump2);
                        }
                    }
                ]
            }
        ]
        return <>
            <Form layout="inline" ref={this.formRef} onFinish={this.query} className="query-tools">
                <Form.Item label="设备编号" name="poolNumber">
                    <Select style={{ width: '200px' }} onChange={this.onChange}>
                        <Select.Option value="1">1#</Select.Option>
                        <Select.Option value="2">2#</Select.Option>
                        <Select.Option value="3">3#</Select.Option>
                        <Select.Option value="4">4#</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="日期" name="date">
                    <DatePicker.RangePicker />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                </Form.Item>
            </Form>
            <Table size="small" columns={columns} dataSource={this.state.data} bordered pagination={false} rowKey="id"/>
        </>;
    }
}
 
export default Index;