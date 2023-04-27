import React, { Component } from 'react';
import {Form,Modal,Select,Space} from 'antd';
class Edit extends Component {
    
    // 根据工艺获取工艺段
    getGongYiDuan=(val)=>{
    }
    render() { 
        return (
            <Modal title="添加设备台账" width="600px" visible={true} onCancel={this.props.onCancel} onOk={this.submit} maskClosable={false}>
                <Form ref={this.formRef} labelCol={{span: 4}} onFinish={this.submit}>
                    <Form.Item label="选择设备" name="parentName">
                        <Select>
                            
                        </Select>
                    </Form.Item>
                    <Form.Item label="使用工艺">
                        <Space>
                        <Form.Item noStyle>
                            <Select style={{width: '125px'}} onChange={this.getGongYiDuan} placeholder="选择工艺">
                                <Select.Option value="yuchuli">预处理</Select.Option>
                                <Select.Option value="ao">ao生化池</Select.Option>
                                <Select.Option value="erchenchi">二沉池</Select.Option>
                                <Select.Option value="hntcdc">混凝沉淀池</Select.Option>
                                <Select.Option value="fxh">反硝化与尾水</Select.Option>
                                <Select.Option value="tuoni">脱泥</Select.Option>
                                <Select.Option value="chuchou">除臭设备</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item noStyle>
                            <Select style={{width: '125px'}} placeholder="选择工艺段">
                                
                            </Select>
                        </Form.Item>
                        <Form.Item noStyle>
                            <Select style={{width: '170px'}} placeholder="选择设备安装点位">

                            </Select>
                        </Form.Item>
                        </Space><br/><br/>
                        <Space>
                        <Form.Item noStyle>
                            <Select style={{width: '125px'}} onChange={this.getGongYiDuan} placeholder="选择工艺">
                                <Select.Option value="yuchuli">预处理</Select.Option>
                                <Select.Option value="ao">ao生化池</Select.Option>
                                <Select.Option value="erchenchi">二沉池</Select.Option>
                                <Select.Option value="hntcdc">混凝沉淀池</Select.Option>
                                <Select.Option value="fxh">反硝化与尾水</Select.Option>
                                <Select.Option value="tuoni">脱泥</Select.Option>
                                <Select.Option value="chuchou">除臭设备</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item noStyle>
                            <Select style={{width: '125px'}} placeholder="选择工艺段">
                                
                            </Select>
                        </Form.Item>
                        <Form.Item noStyle>
                            <Select style={{width: '170px'}} placeholder="选择设备安装点位">

                            </Select>
                        </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="维护周期" name="parentName">
                        <Select>
                            <Select.Option value="day">每天</Select.Option>
                            <Select.Option value="week">每周</Select.Option>
                            <Select.Option value="month">每月</Select.Option>
                            <Select.Option value="year">每年</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}
 
export default Edit;