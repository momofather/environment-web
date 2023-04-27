import React, { Component } from 'react';
import {Form} from 'antd';
import Button from '@/components/button';
class Details extends Component {
    state = {  }
    render() { 
        return (
            <Form labelCol={{span: 4}}>
                <Form.Item label="消息标题"></Form.Item>
                <Form.Item label="创建时间"></Form.Item>
                <Form.Item label="消息类型"></Form.Item>
                <Form.Item label="消息内容"></Form.Item>
                <div align="center">
                <Button onClick={()=>{
                    this.props.history.goBack()
                }}>返回</Button>
                </div>
            </Form>
        );
    }
}
export default Details;