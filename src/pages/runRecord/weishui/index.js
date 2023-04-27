// 尾水系统
import React, {Component } from 'react';
import {Form,DatePicker,Table} from 'antd';
import moment from 'moment';
import Button from '@/components/button';
import { CheckOutlined, WarningOutlined } from '@ant-design/icons';
class Index extends Component {
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            data: []
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
        React.axios.get('api/tailwater/queryList', { startTime: startTime, endTime: endTime}, res => {
            React.axios.get('api/tailwater/queryList', { startTime: moment(startTime).add(1, "days").format("yyyy-MM-DD 00:00:00"), endTime: moment(endTime).add(1, "days").format("yyyy-MM-DD 23:00:00") }, res2 => {
                if (res2.data.length > 0) {
                    res.data.push(res2.data[0])
                }
                this.setState({ data: res.data });
            })
        })
    }
    query = (values) => {
        this.getData({ startTime: values.date[0], endTime: values.date[1] });
    }
    onChange = () => {
        let values = this.formRef.current.getFieldsValue();
        this.query(values);
    }
    formatter = (val) => {
        if (val === 'true') {
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
                width: '100px',
                render: (text, res) => moment(res.gainTime).format('yyyy-MM-DD HH:mm')
            },
            {
                title: '中间提升泵',
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
                    },
                    {
                        title: '4#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.pump4);
                        }
                    }
                ]
            },
            {
                title: '紫外线消毒模块',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                    },
                    {
                        title: '2#',
                        align: 'center',
                    }
                ]
            },
            {
                title: '厂内中水系统',
                align: 'center',
                children: [
                    {
                        title: '液位',
                        align: 'center',
                        children: [
                            {
                                title: 'm',
                                align: 'center',
                                render: (text, res) => parseFloat(res.plantLevel).toFixed(1),
                            }
                        ]
                    },
                    {
                        title: '厂内中水泵',
                        align: 'center',
                        children: [
                            {
                                title: '1#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.plantPump1);
                                }
                            },
                            {
                                title: '2#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.plantPump2);
                                }
                            },
                            {
                                title: '3#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.plantPump3);
                                }
                            }
                        ]
                    },
                    {
                        title: '入口压力',
                        align: 'center',
                        children: [
                            {
                                title: 'kpa',
                                align: 'center',
                                render: (text, res) => parseFloat(res.plantInPressure).toFixed(3),
                            }
                        ]
                    },
                    {
                        title: '出口压力',
                        align: 'center',
                        children: [
                            {
                                title: 'kpa',
                                align: 'center',
                                render: (text, res) => parseFloat(res.plantOutPressure).toFixed(3),
                            }
                        ]
                    },
                    {
                        title: '热源供水泵频率(Hz)',
                        align: 'center',
                        children: [
                            {
                                title: '1#',
                                align: 'center',
                                dataIndex: 'plantRate1',
                                key: 'plantRate1',
                            },
                            {
                                title: '2#',
                                align: 'center',
                                dataIndex: 'plantRate2',
                                key: 'plantRate2',
                            }
                        ]
                    }
                ]
            },
            {
                title: '厂外中水系统',
                align: 'center',
                children: [
                    {
                        title: '液位',
                        align: 'center',
                        children: [
                            {
                                title: 'm',
                                align: 'center',
                                render: (text, res) => parseFloat(res.siteLevel).toFixed(1),
                            }
                        ]
                    },
                    {
                        title: '厂外中水补泵',
                        align: 'center',
                        children: [
                            {
                                title: '1#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.sitePump1);
                                }
                            },
                            {
                                title: '2#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.sitePump2);
                                }
                            },
                            {
                                title: '3#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.sitePump3);
                                }
                            }
                        ]
                    },
                    {
                        title: '流量',
                        align: 'center',
                        children: [
                            {
                                title: 'm³/h',
                                align: 'center',
                                render: (text, res) => parseFloat(res.siteFlow).toFixed(1),
                            }
                        ]
                    },
                    {
                        title: '累计流量',
                        align: 'center',
                        children: [
                            {
                                title: 'm³',
                                align: 'center',
                                render: (text, res) => parseFloat(res.siteTotalFlow).toFixed(1),
                            }
                        ]
                    }
                ]
            },
            {
                title: '驿马河补水系统',
                align: 'center',
                children: [
                    {
                        title: '液位',
                        align: 'center',
                        children: [
                            {
                                title: 'm',
                                align: 'center',
                                render: (text, res) => parseFloat(res.yimaLevel).toFixed(1),
                            }
                        ]
                    },
                    {
                        title: '驿马河水补泵',
                        align: 'center',
                        children: [
                            {
                                title: '1#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.yimaPump1);
                                }
                            },
                            {
                                title: '2#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.yimaPump2);
                                }
                            },
                            {
                                title: '3#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.yimaPump3);
                                }
                            }
                        ]
                    },
                    {
                        title: '流量',
                        align: 'center',
                        children: [
                            {
                                title: 'm³/h',
                                align: 'center',
                                render: (text, res) => parseFloat(res.yimaFlow).toFixed(1),
                            }
                        ]
                    },
                    {
                        title: '累计流量',
                        children: [
                            {
                                title: 'm³',
                                align: 'center',
                                render: (text, res) => parseFloat(res.yimaTotalFlow).toFixed(1),
                            }
                        ]
                    }
                ]
            },
            {
                title: '明渠流量',
                align: 'center',
                children: [
                    {
                        title: 'L/S³',
                        align: 'center',
                        render: (text, res) => parseFloat(res.channelFlow).toFixed(1),
                    }
                ]
            },
            {
                title: '累计总出水流量',
                align: 'center',
                children: [
                    {
                        title: 'm³',
                        align: 'center'
                    }
                ]
            },
            {
                title: '西江河提升泵',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.xijiangPump1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.xijiangPump2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.xijiangPump3);
                        }
                    },
                    {
                        title: '4#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.xijiangPump4);
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
            <Table size="small" columns={columns} dataSource={this.state.data} bordered pagination={false} rowKey="id"/>
        </>;
    }
}
 
export default Index;