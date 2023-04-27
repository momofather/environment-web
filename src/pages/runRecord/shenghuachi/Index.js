// 生化池
import React, { Component } from 'react';
import { Form, DatePicker, Table, Select } from 'antd';
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
    componentDidMount(){
        this.formRef.current.setFieldsValue({ date: [moment(), moment()], poolNumber: '1' });
        this.getData({ startTime: new Date(), endTime: new Date(), poolNumber: 1 });
    }
    getData = ({ startTime, endTime, poolNumber })=>{
        if (startTime) {
            startTime = moment(startTime).format('yyyy-MM-DD 00:00:00');
        }
        if (endTime) {
            endTime = moment(endTime).format('yyyy-MM-DD 23:59:59');
        }
        React.axios.get('api/biochemical/queryList', { startTime: startTime, endTime: endTime, poolNumber: poolNumber },res=>{
            React.axios.get('api/biochemical/queryList', { startTime: moment(startTime).add(1, "days").format("yyyy-MM-DD 00:00:00"), endTime: moment(endTime).add(1, "days").format("yyyy-MM-DD 23:00:00") }, res2 => {
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
                title: '生化线总进水流量(明渠流量)',
                align: 'center',
                children: [
                    {
                        title: 'L/S',
                        align: 'center',
                        width: '90px',
                        render: (text, res) => parseFloat(res.channelFlow).toFixed(1)
                    }
                ]
            },
            {
                title: '厌氧、缺氧各区流量分配',
                align: 'center',
                children: [
                    {
                        title: '厌氧区',
                        children: [
                            {
                                title: 'm³/h',
                                align: 'center',
                                render: (text, res) => parseFloat(res.anaerobicZone).toFixed(1)
                            }
                        ]
                    },
                    {
                        title: '缺氧A区',
                        children: [
                            {
                                title: 'm³/h',
                                align: 'center',
                                render: (text, res) => parseFloat(res.hypoxiaA).toFixed(1)
                            }
                        ]
                    },
                    {
                        title: '缺氧B区',
                        children: [
                            {
                                title: 'm³/h',
                                align: 'center',
                                render: (text, res) => parseFloat(res.hypoxiaB).toFixed(1)
                            }
                        ]
                    },
                    {
                        title: '缺氧C区',
                        children: [
                            {
                                title: 'm³/h',
                                align: 'center',
                                render: (text, res) => parseFloat(res.hypoxiaC).toFixed(1)
                            }
                        ]
                    }
                ]
            },
            {
                title: '厌氧区',
                align: 'center',
                children: [
                    {
                        title: '推流器',
                        children: [
                            {
                                title: '1#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.anaerobicZoneEjector1);
                                }
                            },
                            {
                                title: '2#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.anaerobicZoneEjector2);
                                }
                            },
                            {
                                title: 'ORP',
                                children: [
                                    {
                                        title: 'mv',
                                        align: 'center',
                                        render: (text, res) => parseFloat(res.anaerobicZoneEjectorOrp).toFixed(1)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: '好氧A区',
                align: 'center',
                children: [
                    {
                        title: 'DO',
                        children: [
                            {
                                title: 'mg/L',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicADo).toFixed(3)
                            }
                        ]
                    },
                    {
                        title: 'MLSS',
                        children: [
                            {
                                title: 'mg/L',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicAMlss).toFixed(3)
                            }
                        ]
                    }
                ]
            },
            {
                title: '缺氧A区',
                align: 'center',
                children: [
                    {
                        title: '推流器',
                        children: [
                            {
                                title: '1#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaAEjector1);
                                }
                            },
                            {
                                title: '2#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaAEjector2);
                                }
                            },
                            {
                                title: '3#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaAEjector3);
                                }
                            },
                            {
                                title: '4#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaAEjector4);
                                }
                            },
                            {
                                title: 'ORP',
                                children: [
                                    {
                                        title: 'mv',
                                        align: 'center',
                                        render: (text, res) => parseFloat(res.hypoxiaAOrp).toFixed(1)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: '好氧B区搅拌器',
                align: 'center',
                children: [
                    {
                        title: '1#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.aerobicBAgitator1);
                        }
                    },
                    {
                        title: '2#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.aerobicBAgitator2);
                        }
                    },
                    {
                        title: '3#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.aerobicBAgitator3);
                        }
                    },
                    {
                        title: '4#',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.aerobicBAgitator4);
                        }
                    },
                    {
                        title: 'DO',
                        children: [
                            {
                                title: 'mg/L',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicBAgitatorDo).toFixed(3)
                            }
                        ]
                    },
                    {
                        title: 'MLSS',
                        children: [
                            {
                                title: 'mg/L',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicBAgitatorMlss).toFixed(3)
                            }
                        ]
                    }
                ]
            },
            {
                title: '缺氧B区',
                align: 'center',
                children: [
                    {
                        title: '搅拌器',
                        children: [
                            {
                                title: '1#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaBAgitator1);
                                }
                            },
                            {
                                title: '2#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaBAgitator2);
                                }
                            },
                            {
                                title: '3#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaBAgitator3);
                                }
                            },
                            {
                                title: '4#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaBAgitator4);
                                }
                            },
                            {
                                title: 'ORP',
                                children: [
                                    {
                                        title: 'mv',
                                        align: 'center',
                                        render: (text, res) => parseFloat(res.hypoxiaBAgitatorOrp).toFixed(3)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: '好氧C区',
                align: 'center',
                children: [
                    {
                        title: 'DO',
                        children: [
                            {
                                title: 'mg/L',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicCDo).toFixed(3)
                            }
                        ]
                    },
                    {
                        title: 'MLSS',
                        children: [
                            {
                                title: 'mg/L',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicCMlss).toFixed(3)
                            }
                        ]
                    }
                ]
            },
            {
                title: '缺氧C区',
                align: 'center',
                children: [
                    {
                        title: '推流器',
                        children: [
                            {
                                title: '1#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaCAgitator1);
                                }
                            },
                            {
                                title: '2#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaCAgitator2);
                                }
                            },
                            {
                                title: '3#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaCAgitator3);
                                }
                            },
                            {
                                title: '4#',
                                align: 'center',
                                render: (text, res) => {
                                    return this.formatter(res.hypoxiaCAgitator4);
                                }
                            },
                            {
                                title: 'ORP',
                                children: [
                                    {
                                        title: 'mv',
                                        align: 'center',
                                        render: (text, res) => parseFloat(res.hypoxiaCAgitatorOrp).toFixed(3)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: '好氧D区',
                children: [
                    {
                        title: '液位',
                        children: [
                            {
                                title: 'm',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicDLevel).toFixed(3)
                            }
                        ]
                    },
                    {
                        title: 'DO',
                        children: [
                            {
                                title: 'mg/L',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicDDo).toFixed(3)
                            }
                        ]
                    },
                    {
                        title: 'MLSS',
                        children: [
                            {
                                title: 'mg/L',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicDMlss).toFixed(3)
                            }
                        ]
                    },
                    {
                        title: 'NH3-N',
                        children: [
                            {
                                title: 'mg/L',
                                align: 'center',
                                render: (text, res) => parseFloat(res.aerobicDNh3).toFixed(3)
                            }
                        ]
                    }
                ]
            },
            {
                title: '消氧区',
                align: 'center',
                children: [
                    {
                        title: '搅拌器',
                        align: 'center',
                        render: (text, res) => {
                            return this.formatter(res.eliminationAgitator1);
                        }
                    },
                    {
                        title: '混合液回流泵',
                        children: [
                            {
                                title: '1#电流',
                                align: 'center',
                            },
                            {
                                title: '2#电流',
                                align: 'center',
                            }
                        ]
                    }
                    
                ]
            },
            {
                title: '1#污泥井',
                align: 'center',
                children: [
                    {
                        title: '液位',
                        children: [
                            {
                                title: 'm',
                                align: 'center',
                                render: (text, res) => parseFloat(res.sludgeLevel).toFixed(3)
                            }
                        ]
                    },
                    {
                        title: '污泥回流泵',
                        children: [
                            {
                                title: '1#电流',
                                children: [
                                    {
                                        title: '(A)',
                                        align: 'center',
                                    }
                                ]
                            },
                            {
                                title: '2#电流',
                                children: [
                                    {
                                        title: '(A)',
                                        align: 'center',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '剩余污泥泵',
                        align: 'center',
                        width: '40px',
                        render: (text, res) => {
                            return this.formatter(res.sludgePump);
                        }
                    },
                    {
                        title: '除臭污泥投加泵',
                        align: 'center',
                        width: '40px',
                        render: (text, res) => {
                            return this.formatter(res.sludgeChestPump);
                        }
                    }
                ]
            }
        ]
        return <>
            <div style={{width: '2600px', background: '#fff',height: '100%'}}>
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
                <Table size="small" columns={columns} dataSource={this.state.data} bordered pagination={false} rowKey="id" />
            </div>
        </>;
    }
}

export default Index;