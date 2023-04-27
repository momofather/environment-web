import React, { Component } from 'react';
import {Modal,Form,Input} from 'antd';
class Edit extends Component {
    formRef = React.createRef();
    // 保存
    onOk=()=>{
        this.formRef.current.validateFields().then(values=>{
            values.id = this.props.id;
            values.number = React.enums[this.props.method];
            let url = 'api/wmsType/tmaterialtype/save'
            if(values.id){
                url = 'api/wmsType/tmaterialtype/update'
            }
            React.axios.post(url, values, ()=>{
                React.message.success('保存成功');
                this.props.onOk();
            })
        }).catch();
    }
    // 详情
    info=()=>{
        React.axios.get('api/wmsType/tmaterialtype/info/'+this.props.id,null,res=>{
            this.formRef.current.setFieldsValue(res.data);
        })
    }
    render() {
        let title = '添加';
        if(this.props.id){
            title = '修改';
            this.info();
        }
        if(this.props.method==='inMethod'){
            title+='入库方式'
        }else{
            title+='出库方式'
        }
        return (
            <Modal title={title} visible={true} onCancel={this.props.onCancel} onOk={this.onOk} maskClosable={false}>
                <Form ref={this.formRef} labelCol={{span: 3}}>
                    <Form.Item label="名称" name="name" rules={[{required: true,message: '请输入名称'}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="备注" name="remark">
                        <Input maxLength={100} placeholder="100个字内"/>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

export default Edit;