// 预处理
import React, { Component } from 'react';
import { Form, DatePicker, Table } from 'antd';
import { CheckOutlined, WarningOutlined } from '@ant-design/icons';
import moment from 'moment';
import Button from '@/components/button';
class Index extends Component {
    formRef = React.createRef();
    constructor(props) {
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
        React.axios.get('api/pretreatment/queryList', { startTime: startTime, endTime: endTime }, res => {
            React.axios.get('api/pretreatment/queryList', { startTime: moment(startTime).add(1, "days").format("yyyy-MM-DD 00:00:00"), endTime: moment(endTime).add(1, "days").format("yyyy-MM-DD 23:00:00") }, res2 => {
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
                title: '厂外限流井',
                align: 'center',
                children: [
                    {
                        title: <>总进水流量<br/>(m³/h)</>,
                        width: '90px',
                        align: 'center',
                        render: (text, res) => parseFloat(res.totalInflow).toFixed(1),
                    },
                    {
                        title: '累计总进水流量(m³)',
                        width: '100px',
                        align: 'center',
                        render: (text, res) => parseFloat(res.countTotalInflow).toFixed(1),
                    }
                ]
            },
            {
                title: '动轨式格栅除污机',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.gridDecMachine1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.gridDecMachine2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.gridDecMachine3);
                        }
                    },
                    {
                        title: '4#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.gridDecMachine4);
                        }
                    }
                ]
            },
            {
                title: '提升泵站液位(m)',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        width: '55px',
                        render: (text, res) => parseFloat(res.pumpStationLiquid1).toFixed(3),
                    },
                    {
                        title: '2#',
                        align: 'center',
                        width: '55px',
                        render: (text, res) => parseFloat(res.pumpStationLiquid2).toFixed(3),
                    }
                ]
            },
            {
                title: '提升泵',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.liftPump1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.liftPump2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.liftPump3);
                        }
                    },
                    {
                        title: '4#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.liftPump4);
                        }
                    }
                ]
            },
            {
                title: '1#调蓄池',
                align: 'center',
                children: [
                    {
                        title: '液位',
                        children: [
                            {
                                title: 'm',
                                align: 'center',
                                render: (text, res) => parseFloat(res.storLiquidLevel1).toFixed(1),
                            }
                        ]
                    },
                    {
                        title: '提升泵',
                        children: [
                            {
                                title: '3#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.storLiquidLevel1Pump1);
                                }
                            },
                            {
                                title: '4#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.storLiquidLevel1Pump2);
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: '2#调蓄池',
                align: 'center',
                children: [
                    {
                        title: '液位',
                        children: [
                            {
                                title: 'm',
                                align: 'center',
                                render: (text, res) => parseFloat(res.storLiquidLevel2).toFixed(1),
                            }
                        ]
                    },
                    {
                        title: '提升泵',
                        children: [
                            {
                                title: '1#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.storLiquidLevel2Pump1);
                                }
                            },
                            {
                                title: '2#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.storLiquidLevel2Pump2);
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: '变角孔板格栅除污机',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.gridDecont1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.gridDecont2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.gridDecont3);
                        }
                    },
                    {
                        title: '4#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.gridDecont4);
                        }
                    },
                    {
                        title: '5#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.gridDecont5);
                        }
                    }
                ]
            },
            {
                title: '高排水压榨机',
                align: 'center',
                render: (text, res) => {
                    return this.formatter(res.highDraPress);
                }
            },
            {
                title: '吸砂泵',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.sandSucPump1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.sandSucPump2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.sandSucPump3);
                        }
                    }
                ]
            },
            {
                title: '砂水分离器',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.waterSepa1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.waterSepa1);
                        }
                    }
                ]
            },
            {
                title: '冲洗水泵',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.waterPump1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.waterPump2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.waterPump3);
                        }
                    }
                ]
            },
            {
                title: '水平排砂螺杆',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.desScrew1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.desScrew2);
                        }
                    }
                ]
            },
            {
                title: '撇渣螺杆',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.skimScrew1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.skimScrew2);
                        }
                    }
                ]
            },
            {
                title: '浮渣排水泵',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.draPump1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.draPump2);
                        }
                    }
                ]
            },
            {
                title: '一体化浮渣分离机',
                width: '40px',
                align: 'center',
                render: (text, res) => {
                    return this.formatter(res.scumSepar);
                }
            },
            {
                title: '罗茨鼓风机',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.blower1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.blower2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.blower3);
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