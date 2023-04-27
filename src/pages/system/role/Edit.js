import React, {Component} from 'react';
import {Modal,Form,Input} from 'antd';
class List extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            type: 1,
            menuData: [],
            menuIdList: []
        }
    }
    componentDidMount(){
        this.getInfo();
    }

    // 菜单类型监听
    onChange=(e)=>{
        this.setState({type:e.target.value});
    }
    submit=()=>{
        this.formRef.current.validateFields().then(values=>{
            values.roleId = this.props.roleId;
            values.menuIdList = this.state.menuIdList;
            let api = 'sys/role/save';
            if(values.roleId){
                api = 'sys/role/update';
            }
            React.axios.post(api,values,res=>{
                React.message.success('操作成功');
                this.props.onCancel(1);
            })
        }).catch(err=>{})
    }
    // 详情
    getInfo=()=>{
        if(this.props.roleId){
            React.axios.get(`sys/role/info/${this.props.roleId}`,null,res=>{
                this.formRef.current.setFieldsValue(res.data);
                this.setState({menuIdList: res.data.menuIdList});
            })
        }
    }
    render(){
        return(
            <Modal title={this.props.roleId?'修改角色':'添加角色'} visible={true} onCancel={this.props.onCancel} onOk={this.submit}>
                <Form ref={this.formRef} labelCol={{span: 4}} onFinish={this.submit}>
                    <Form.Item label="角色名称" name="roleName" rules={[{ required: true, message: '请输入角色角色名称!'}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="描述" name="remark">
                        <Input.TextArea rows={4} maxLength={100} placeholder="100个字内"/>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}
export default List