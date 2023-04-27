import React, { Component } from 'react';
import { Form, Input, Modal, Select } from 'antd';
import './Edit.less';
export default class List extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            id: this.props.id,
            imageUrl: null,
            units: []
        }
    }
    componentDidMount(){
        this.getUnitList();
        this.getInfo();
    }
    beforeUpload=(file)=>{
        let formData = new FormData();
        formData.append('file',file);
        React.axios.upload(formData,res=>{
            this.setState({
                imageUrl: res.url
            })
        })
        return false;
    }
    // 获取计量单位
    getUnitList=()=>{
        React.axios.post('api/wmsType/tmaterialtype/queryMaterialTypeList?number=unit',null,res=>{
            this.setState({units: res.data});
        })
    }
    // 保存
    submit=()=>{
        this.formRef.current.validateFields().then((values, errors) => {
            let api = 'api/device/deviceinfo/save';
            if (this.state.id) {
                api = 'api/device/deviceinfo/update';
                values.id = this.state.id;
            }
            React.axios.post(api, values, () => {
                React.message.success('操作成功');
                this.props.onOk();
            })
        });
        
    }
    // 根据id查询
    getInfo=()=>{
        if(this.state.id){
            React.axios.get(`api/device/deviceinfo/info/${this.state.id}`,null,res=>{
                this.formRef.current.setFieldsValue(res.data);
            })
        }
    }
    render() {
        return (
            <Modal title="添加设备" visible={true} onCancel={this.props.onCancel} onOk={this.submit} maskClosable={false}>
                <Form className="form" ref={this.formRef} labelCol={{ span: 4 }}>
                    <Form.Item label="通道名称" name="channelName" rules={[{ required: true, message: "请输入通道名称" }]}>
                        <Input placeholder="请输入通道名称" />
                    </Form.Item>
                    <Form.Item label="设备名称" name="deviceName" rules={[{ required: true, message: "请输入设备名称" }]}>
                        <Input placeholder="请输入设备名称" />
                    </Form.Item>
                    <Form.Item label="标签名" name="tagName" rules={[{ required: true, message: "请输入标签名" }]}>
                        <Input placeholder="请输入标签名" />
                    </Form.Item>
                    <Form.Item label="数据类型" name="dataType" rules={[{ required: true, message: "请选择数据类型" }]}>
                        <Select placeholder="数据类型">
                            <Select.Option value="Float">Float</Select.Option>
                            <Select.Option value="Boolean">Boolean</Select.Option>
                            <Select.Option value="Long">Long</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="描述" name="describe">
                        <Input.TextArea placeholder="100个字以内" maxLength={100} />
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}