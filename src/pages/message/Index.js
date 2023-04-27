import React, { Component } from 'react';
import {Form, Input} from 'antd';
import Table from '@/components/table';
import Button from '@/components/button';

class Message extends Component {
    tableRef = React.createRef();
    // 详情
    details=(res)=>{
        let unreadCount = sessionStorage.getItem('unreadCount');
        if(unreadCount&&unreadCount!=='0'){
            unreadCount*=1;
            unreadCount-=1;
            sessionStorage.setItem('unreadCount',unreadCount);
        }
        React.axios.get(`msg/tmessage/checkRead/${res.id}`,null,()=>{
            this.props.history.push(`/${React.Version}/message/allocation/${res.bizId}`);
        })
    }
    // 获取数据
    query=()=>{
        this.tableRef.reload();
    }
    render() {
        const columns =[
            {
                title: '消息标题',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '消息类型',
                align: 'center',
                render: (txt,res) => {
                    return React.enums.messageType[res.type]
                }
            },
            {
                title: '状态',
                align: 'center',
                width: '100px',
                render: (txt,res)=> React.enums.readStatus[res.status]
            },
            {
                title: '操作',
                align: 'center',
                render: (txt,res) => <Button type="link" size="small" onClick={this.details.bind(this,res)} icon="info">详情</Button>
            },
        ]
        return (
            <>
                <Form className="query-tools" layout="inline" onFinish={this.query}>
                    <Form.Item>
                        <Input placeholder="消息标题"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" icon="search" htmlType="submit">搜索</Button>
                    </Form.Item>
                </Form>
                <Table columns={columns} method="get" onRef={ref=>this.tableRef = ref} rowKey="id" url="msg/tmessage/list" />
            </>
        );
    }
}
 
export default Message;