import React,{Component} from "react";
import {Modal,Form,Input,Upload} from "antd";

class UpdateInfo extends Component{
    formRef = React.createRef();

    constructor(props){
        super(props);
        this.state={
            user: null,
            imageUrl: null
        };
    };

    componentDidMount(){
        this.getCurrentUserInfo();
    };

    // 获取当前用户信息
    getCurrentUserInfo=()=>{
        React.axios.get('sys/user/info/'+JSON.parse(sessionStorage.getItem('userInfo')).userId,null,res=>{
            this.setState({user: res.data,imageUrl: res.data.heade});
            this.formRef.current.setFieldsValue(res.data);
        })
    }

    /**
     * @todo 提交表单
     */
    submit = () => {
        this.formRef.current.validateFields().then((values) => {
            let user = this.state.user;
            user.heade = this.state.imageUrl;
            user.mobile = values.mobile;
            React.axios.post("sys/user/update",user,() => {
                React.message.success('修改成功');
                this.props.onOk();
            });
        });
    };

    beforeUpload=(file)=>{
        let formData = new FormData();
        formData.append('file',file);
        React.axios.upload(formData,res=>{
            this.setState({imageUrl: res.url})
        })
        return false;
    }

    render(){
        return(
            <Modal
                title="修改基本信息"
                visible={true}
                onOk={this.submit}
                onCancel={this.props.onCancel}
                maskClosable={false}
            >
                <Form ref={this.formRef} labelCol={{span: 4}}>
                    <Form.Item
                        label="用户名"
                        name="username"
                    >
                        <Input disabled placeholder="请输入用户名"/>
                    </Form.Item>
                    <Form.Item
                        label="真实姓名"
                        name="name"
                    >
                        <Input disabled placeholder="请输入真实姓名"/>
                    </Form.Item>
                    <Form.Item
                        label="手机号码"
                        name="mobile"
                        rules={[
                            {required:true,message:"请输入手机号码"},
                            {pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,message:"手机号码格式不正确"}
                        ]}
                    >
                        <Input placeholder="手机号码"/>
                    </Form.Item>
                    <Form.Item label="头像">
                        <Upload
                            listType="picture-card"
                            showUploadList={false}
                            action=""
                            beforeUpload={this.beforeUpload}
                        >
                            {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : '上传头像'}
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };
};
export default UpdateInfo;