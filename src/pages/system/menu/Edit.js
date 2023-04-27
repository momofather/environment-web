import React, {Component} from 'react';
import {Modal,Form,Input,Radio,InputNumber} from 'antd';
import Button from '@/components/button';
import Icons from '@/components/icons';
class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            type: 1,
            parent: {},
            iconName: 'icon-tianjia'
        }
    }

    componentDidMount(){
        this.getInfo();
    }

    // 详情
    getInfo=()=>{
        if(this.props.menuId){
            React.axios.get(`sys/menu/info/${this.props.menuId}`,null,res=>{
                this.formRef.current.setFieldsValue(res.data);
                this.setState({
                    type: res.data.type,
                    iconName: res.data.icon
                });
                this.getParentMenu();
            })
        }else{
            this.getParentMenu();
        }
    }

    // 查询父菜单
    getParentMenu=()=>{
        if(this.props.parentId){
            React.axios.get(`sys/menu/info/${this.props.parentId}`,null,res=>{
                this.setState({parent: res.data});
                this.formRef.current.setFieldsValue({
                    parentName: res.data.name
                });
            })
        }else{
            this.formRef.current.setFieldsValue({
                parentName: '一级菜单'
            });
        }
    }

    typeChange=(e)=>{
        this.setState({
            type:e.target.value
        });
    }

    // 提交
    submit=()=>{
        this.formRef.current.validateFields().then(values=>{
            values.parentId = this.props.parentId;
            values.menuId = this.props.menuId;
            if(values.parentId){
                values.reserve = `${this.state.parent.reserve?this.state.parent.reserve+',':''}${values.parentId}`;
            }else{
                values.reserve = '';
            }
            if(values.type!==2){
                values.icon = this.state.iconName;
            }
            let url = 'sys/menu/save';
            if(values.menuId){
                url = 'sys/menu/update';
            }
            React.axios.post(url,values,()=>{
                React.message.success('操作成功');
                this.props.onCancel(1);
            })
        }).then(err=>{});
    }
    // 选择图标后
    selectIcon=(iconName)=>{
        this.setState({
            iconName: iconName,
            showIcons: false
        })
    }
    render(){
        return(
            <Modal title={this.props.menuId?'修改菜单':"添加菜单"} visible={true} onCancel={this.props.onCancel} onOk={this.submit} maskClosable={false}>
                <Form ref={this.formRef} labelCol={{span: 4}} onFinish={this.submit}>
                    <Form.Item label="父级菜单" name="parentName">
                        <Input readOnly />
                    </Form.Item>
                    <Form.Item label="菜单名称" name="name" rules={[{ required: true, message: '请输入菜单名称!'}]}>
                        <Input placeholder="菜单名称"/>
                    </Form.Item>
                    <Form.Item label="菜单类型" name="type" initialValue={1}>
                        <Radio.Group onChange={this.typeChange}>
                            <Radio value={0}>目录</Radio>
                            <Radio value={1}>菜单</Radio>
                            <Radio value={2}>按钮</Radio>
                        </Radio.Group>
                    </Form.Item>
                    {this.state.type!==2&&
                    <Form.Item label="图标">
                        <React.IconFont style={{fontSize: '22px'}} type={this.state.iconName} />
                        <Button style={{marginLeft: '30px'}} type="primary" size="small" onClick={()=>{this.setState({showIcons: true})}}>选择</Button>
                        {this.state.showIcons&&<Icons onOk={this.selectIcon} onCancel={()=>{this.setState({showIcons: false})}} />}
                    </Form.Item>
                    }
                    {this.state.type===1&&
                    <Form.Item label="链接地址" name="url" rules={[{ required: true, message: '请输入链接地址!'}]}>
                        <Input placeholder="链接地址"/>
                    </Form.Item>
                    }
                    <Form.Item label="权限标识" name="perms" rules={[{ required: true, message: '请输入权限标识!'}]}>
                        <Input placeholder="权限标识"/>
                    </Form.Item>
                    {this.state.type===1&&
                    <Form.Item label="是否显示" name="visible" initialValue={true} rules={[{ required: true, message: '请输入权限标识!'}]}>
                        <Radio.Group>
                            <Radio value={true}>是</Radio>
                            <Radio value={false}>否</Radio>
                        </Radio.Group>
                    </Form.Item>
                    }
                    <Form.Item label="排序" name="orderNum" initialValue={1}>
                        <InputNumber style={{width: '100%'}} />
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}
Edit.defaultProps = {
    parentId: 0,
    menuId: null
}
export default Edit