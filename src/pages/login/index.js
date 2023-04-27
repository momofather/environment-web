import React, {Component } from 'react';
import bgImg from '@/assets/images/login.png';
import './index.less';
import { Card, Form, Input, Button } from 'antd';
import URL from '@/utils/url';

const sectionStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: '100% 100%'
};
class Login extends Component {
    formRef = React.createRef();
    constructor() {
        super();
        this.state={
            url: null,
            uuid: null
        };
    };

    componentDidMount() {
        sessionStorage.clear();
        this.getCheckCode();
    };

    // 刷新验证码
    getCheckCode=()=>{
        this.formRef.current.setFieldsValue({captcha:null});
        const uuid = new Date().getTime().toString();
        this.setState({url: `${URL}numerCaptcha.jpg?uuid=${uuid}`,uuid: uuid});
    }

    onFinish=(values)=>{
        values.uuid = this.state.uuid;
        sessionStorage.clear();
        React.axios.post('sys/login',values,res=>{
            sessionStorage.setItem('token',res.token);
            this.getCurrentMenus();
        },()=>{
            this.getCheckCode();
        })
    }
    // 获取当前用户菜单及权限数据
    getCurrentMenus=()=>{
        React.axios.get('sys/menu/nav',null,res=>{
            sessionStorage.setItem('menus',JSON.stringify(res.menuList));
            sessionStorage.setItem('permissions',JSON.stringify(res.permissions));
            if (res.menuList.length !== 0){
                this.getFirstRouter(res.menuList, 0);
            }
            this.props.history.push(`/bigscreen`)
        })
    }
    getFirstRouter(menus,index){
        if(menus[index].type===1){
            sessionStorage.setItem('activi_router_path',menus[index].url);
        }else{
            this.getFirstRouter(menus[index].list,index);
        }
    }
    render() {
        const {url} = this.state;

        return(
            <div className="login-page" style={sectionStyle}>
                <Card className="login-box">
                    <h1 className="title">成都东安水质净化厂生产运行监测系统</h1>
                    <Form ref={this.formRef} onFinish={this.onFinish}>
                        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                            <Input size="large" placeholder="用户名" prefix={<span className="iconfont icon-yonghu"></span>}/>
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                            <Input.Password size="large" placeholder="密码" prefix={<span className="iconfont icon-password"></span>}/>
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="captcha" noStyle rules={[{ required: true, message: '请输入验证码' }]}>
                            <Input size="large" style={{width: '190px'}} placeholder="验证码"/>
                            </Form.Item>
                            <Form.Item noStyle>
                            <img className="check-code" onClick={this.getCheckCode} alt="验证码" title="点击刷新验证码" src={url}/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" type="primary" block htmlType="submit">登 录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Login;