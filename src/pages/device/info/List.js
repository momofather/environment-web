import React, { Component } from 'react';
import {Form,Input,Modal} from 'antd';
import Button from '@/components/button';
import Table from '@/components/table';
import Edit from './Edit';
export default class List extends Component{
    tableRef = React.createRef();
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            QRcodeImg: null,
            id: null
        }
    }
    addDevice=(id)=>{
        this.setState({id: id, edit: true})
    }
    // 创建二维码
    createQRcode=()=>{
        React.axios.post('api/device/tdevice/getQRcode?width=100&height=100&content=456',null,res=>{
            this.setState({
                showQRcode: true,
                QRcodeImg: res.data
            });
        })
    }
    // 删除设备
    del=(id)=>{
        React.message.confirm('确定删除该设备？',()=>{
            React.axios.post('api/device/tdevice/delete',[id],()=>{
                React.message.success('删除成功！');
                this.tableRef.reload();
            })
        });
    }
    // 重置
    reset=()=>{
        this.formRef.current.resetFields();
        this.tableRef.reload(this.formRef.current.getFieldsValue(true));
    }
    // 取消编辑
    cancelEdit=()=>{
        this.setState({edit: false});
    }
    // 刷新表格
    tableReload = () => {
        let params = this.formRef.current.getFieldValue();
        this.tableRef.reload(params);
        this.setState({ edit: false });
    };
    render() {
        const columns = [
            {
                title: '通道名称',
                dataIndex: 'channelName',
                key: 'channelName',
            },
            {
                title: '设备名称',
                dataIndex: 'deviceName',
                key: 'deviceName',
            },
            {
                title: '标签名',
                dataIndex: 'tagName',
                key: 'tagName',
            },
            {
                title: '数据类型',
                dataIndex: 'dataType',
                key: 'dataType',
            },
            {
                title: '描述',
                dataIndex: 'describe',
                key: 'describe',
            },
            {
                title: '操作',
                width: '150px',
                align: 'center',
                render: (text,item)=>{
                    return <>
                        <Button type="link" size="small" onClick={this.addDevice.bind(this, item.id)} icon="edit">修改</Button>
                        {/* <Button type="link" size="small" onClick={this.createQRcode}><span className="iconfont icon-ico"></span>二维码</Button> */}
                        <Button type="link" size="small" onClick={this.del.bind(this, item.id)} danger icon="delete">删除</Button>
                    </>
                }
            },
        ]
        return (
             <>
                <Form layout="inline" ref={this.formRef} onFinish={(values)=>{this.tableRef.reload(values)}} className="query-tools">
                    <Form.Item name="channelName">
                        <Input placeholder="通道名称" />
                    </Form.Item>
                    <Form.Item name="deviceName">
                        <Input placeholder="设备名称"/>
                    </Form.Item>
                    <Form.Item name="tagName">
                        <Input placeholder="标签名"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.reset} icon="chongzhi">重置</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.addDevice} icon="add">添加</Button>
                    </Form.Item>
                </Form>
                <Table onRef={ref => this.tableRef = ref} columns={columns} method="get" url="api/device/deviceinfo/list"/>
                <Modal footer="" title="设备二维码" width="200px" visible={this.state.showQRcode} onCancel={()=>{this.setState({showQRcode: false})}}>
                    <img width="100%" src={this.state.QRcodeImg} alt="设备码"/>
                </Modal>
                {this.state.edit && <Edit id={this.state.id} onCancel={this.cancelEdit} onOk={this.tableReload} />}
             </>
        );
    }
}