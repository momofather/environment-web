import React, { Component } from 'react';
import { Form, Select, DatePicker } from 'antd';
import Table from '@/components/table';
import Button from '@/components/button';
import moment from 'moment';
import Info from './Info';
class List extends Component {
    constructor(props){
        super(props);
        this.state={
            infoModal: false
        }
    }
    componentDidMount(){
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
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '进口压力(Bar)',
                dataIndex: 'number',
                key: 'number',
                align: 'center',
            },
            {
                title: '出口压力(Bar)',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
            },
            {
                title: '主电机转速(rpm)',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
            },
            {
                title: '测量风量(m³/h)',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
            },
            {
                title: '主机出口温度(℃)',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
            },
            {
                title: '运行时长(h)',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
            },
        ]
        return <>
            <Form layout="inline" ref={this.formRef} onFinish={(values) => { this.tableRef.reload(values) }} className="query-tools">
                <Form.Item label="设备编号">
                    <Select style={{width: '200px'}} value="1">
                        <Select.Option value="1">1#</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="时间" name="time">
                    <DatePicker defaultValue={moment()}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    <Button type="primary" icon="chart" onClick={this.info}>图表</Button>
                </Form.Item>
            </Form>
            <Table pager={false} columns={columns}/>

            {this.state.infoModal && <Info onCancel={this.cancel}/>}
        </>;
    }
}
 
export default List;