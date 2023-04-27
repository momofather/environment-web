import React,{Component} from "react";
import {Modal,Form,Input,Radio,Select,TreeSelect} from "antd";

class edit extends Component{
    formRef = React.createRef();

    constructor(props){
        super(props);
        this.state={
            roleSelectList:[],
            deptSelectList:[],
        };
    };

    componentDidMount(){
        const {userId} = this.props;
        React.axios.get("sys/role/list",{page:1, limit: 1000},res => {
            const roleSelectList = res.data.data;
            this.setState({roleSelectList});
        });
        React.axios.get("api/sys/dept/list","",res => {
            const deptSelectList = res.data;
            this.setState({deptSelectList});
        });
        if(userId){
            React.axios.get("sys/user/info/"+userId,"",res => {
                this.formRef.current.setFieldsValue(res.data);
            });
        };
    };

    /**
     * @todo 关闭组件
     */
    close = () => {
        const {close} = this.props;
        close();
    };

    /**
     * @todo 提交表单
     */
    submit = () => {
        const {close,userId} = this.props;
        this.formRef.current.validateFields().then((values,errors) => {
            values.userId = userId;
            values.email = '45@qq.com';
            close(values);
        });
    };

    render(){
        const {roleSelectList,deptSelectList} = this.state;

        const depts = (deptSelectList) => deptSelectList.map((item) => {
            if(item.children){
                return (
                    <TreeSelect.TreeNode value={item.deptId} title={item.name}>
                        {depts(item.children)}
                    </TreeSelect.TreeNode>
                );
            }else{
                return (
                    <TreeSelect.TreeNode value={item.deptId} title={item.name}/>
                );
            };
        });
        return(
            <>
                <Modal
                    title={this.props.userId ? ("修改用户信息") : ("新增用户")}
                    visible={true}
                    onOk={this.submit}
                    onCancel={this.close}
                    maskClosable={false}
                >
                    <Form
                        ref={this.formRef}
                        labelCol={{span: 4}}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                                {required:true,message:"请输入用户名"}
                            ]}
                        >
                            <Input placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item
                            label="真实姓名"
                            name="name"
                            rules={[
                                {required:true,message:"请输入真实姓名"}
                            ]}
                        >
                            <Input placeholder="请输入真实姓名"/>
                        </Form.Item>
                        <Form.Item
                            label="手机号码"
                            name="mobile"
                            initialValue=""
                            rules={[
                                {required:true,message:"请输入手机号码"},
                                {pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,message:"手机号码格式不正确"}
                            ]}
                        >
                            <Input placeholder="手机号码"/>
                        </Form.Item>
                        <Form.Item
                            label="状态"
                            name="status"
                            initialValue={1}
                        >
                            <Radio.Group>
                                <Radio
                                    key="1"
                                    value={1}
                                >
                                    正常
                                </Radio>
                                <Radio
                                    key="0"
                                    value={0}
                                >
                                    禁用
                                </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="所在部门"
                            name="deptId"
                            rules={[
                                {required:true,message:"请选择部门"}
                            ]}
                        >
                            <TreeSelect placeholder="所在部门">
                                {depts(deptSelectList)}
                            </TreeSelect>
                        </Form.Item>
                        <Form.Item
                            label="绑定角色"
                            name="roleIdList"
                            initialValue={[]}
                        >
                            <Select
                                mode="multiple"
                                placeholder="绑定角色"
                            >
                                {roleSelectList.map((item,index) => {
                                    return(
                                        <Select.Option
                                            key={item.roleId}
                                            value={item.roleId}
                                        >
                                            {item.roleName}
                                        </Select.Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    };
};
export default edit;