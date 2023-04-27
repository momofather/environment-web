// 深床反硝化滤池
import React, { Component } from 'react';
import { Form, DatePicker, Table } from 'antd';
import moment from 'moment';
import Button from '@/components/button';
import { CheckOutlined, WarningOutlined } from '@ant-design/icons';
class Index extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        this.formRef.current.setFieldsValue({ date: [moment(), moment()]});
        this.getData({ startTime: new Date(), endTime: new Date()});
    }
    getData = ({ startTime, endTime }) => {
        if (startTime){
            startTime = moment(startTime).format('yyyy-MM-DD 00:00:00');
        }
        if (endTime){
            endTime = moment(endTime).format('yyyy-MM-DD 23:59:59');
        }
        React.axios.get('api/denitrification/queryList', { startTime: startTime, endTime: endTime}, res => {
            React.axios.get('api/denitrification/queryList', { startTime: moment(startTime).add(1, "days").format("yyyy-MM-DD 00:00:00"), endTime: moment(endTime).add(1, "days").format("yyyy-MM-DD 23:00:00") }, res2 => {
                if (res2.data.length > 0) {
                    res.data.push(res2.data[0])
                }
                this.setState({ data: res.data });
            })
        })
    }
    query = (values) => {
        this.getData({ startTime: values.date[0], endTime: values.date[1]});
    }
    formatter = (val) => {
        if (val === 'true' || parseInt(val) === 11) {
            return <CheckOutlined style={{ color: "green" }} />
        } else {
            return <WarningOutlined style={{ color: "red" }} />
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
                title: '滤池',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        dataIndex: 'filter1',
                        key: 'filter1',
                        render: (text, res) => {
                            return this.formatter(res.filter1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter3);
                        }
                    },
                    {
                        title: '4#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter4);
                        }
                    },
                    {
                        title: '5#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter5);
                        }
                    },
                    {
                        title: '6#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter6);
                        }
                    },
                    {
                        title: '7#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter7);
                        }
                    },
                    {
                        title: '8#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter8);
                        }
                    },
                    {
                        title: '9#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter9);
                        }
                    },
                    {
                        title: '10#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter10);
                        }
                    },
                    {
                        title: '11#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter11);
                        }
                    },
                    {
                        title: '12#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.filter12);
                        }
                    }
                ]
            },
            {
                title: '反冲洗水泵',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.pump1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.pump2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.pump3);
                        }
                    }
                ]
            },
            {
                title: '无油螺杆变频鼓风机',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        width: '55px',
                        render: (text, res) => {
                            return this.formatter(res.blower1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        width: '55px',
                        render: (text, res) => {
                            return this.formatter(res.blower2);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        width: '55px',
                        render: (text, res) => {
                            return this.formatter(res.blower3);
                        }
                    }
                ]
            },
            {
                title: '空压机',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        dataIndex: 'compresssor1',
                        key: 'compresssor1',
                    },
                    {
                        title: '2#',
                        align: 'center',
                        dataIndex: 'compresssor2',
                        key: 'compresssor2',
                    }
                ]
            },
            {
                title: '废水池潜污机',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.sewage1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.sewage2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.sewage3);
                        }
                    }
                ]
            }
        ]
        return <>
            <Form layout="inline" ref={this.formRef} onFinish={this.query} className="query-tools">
                <Form.Item label="日期" name="date">
                    <DatePicker.RangePicker />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                </Form.Item>
            </Form>
            <Table size="small" columns={columns} dataSource={this.state.data} bordered pagination={false} rowKey="id" />
        </>;
    }
}

export default Index;