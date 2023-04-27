import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { Layout, Menu, Dropdown,Avatar,Modal,Form,Input,Space } from 'antd';
import MenuItem from '../menu';
// import Set from '../set/Index';
import UpdateUserInfo from '@/pages/system/User/Components/UpdateInfo';
import './index.less';

const { Header, Content, Sider } = Layout;
class Lay_out extends Component{
    constructor() {
        super();
        this.state = {
            collapsed: false,
            menuList: [],
            leftMenus: [],
            showLeftMenus: true,
            currentTopMenu: sessionStorage.getItem('currentTopMenu'),
            theme: 'dark',
            currentUser: {},
            unreadCount: 0
        }
    }
    componentDidMount(){
        this.getCurrentMenus();
        this.getCurrentUserInfo();
        // this.getUnreadCount();
    }
    // 获取当前用户菜单及权限数据
    getCurrentMenus=()=>{
        let _menuList = JSON.parse(sessionStorage.getItem('menus'));
        if(_menuList){
            this.setState({menuList: _menuList});
            if(_menuList.length!==0){
                let leftMenus = [];
                if(!this.state.currentTopMenu){
                    this.setState({currentTopMenu: _menuList[0].menuId},()=>{
                        _menuList.forEach((item) => {
                            if(item.menuId.toString() === this.state.currentTopMenu){
                                if(item.list){
                                    leftMenus = [...item.list];
                                }else{
                                    leftMenus = [];
                                };
                            };
                        });
                        this.setState({leftMenus});
                    });
                }else{
                    _menuList.forEach((item) => {
                        if(item.menuId.toString() === this.state.currentTopMenu){
                            if(item.list){
                                leftMenus = [...item.list];
                            }else{
                                leftMenus = [];
                            };
                        };
                    });
                    this.setState({leftMenus});
                }
            }
        }
    }
    // 获取当前用户信息
    getCurrentUserInfo=()=>{
        React.axios.get('sys/user/info',null,res=>{
            sessionStorage.setItem('userInfo', JSON.stringify(res.data))
            this.setState({currentUser: res.data});
        })
    }
    // 修改用户信息成功
    updateSuccess=()=>{
        this.getCurrentUserInfo();
        this.setState({updateUer: false});
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    // 退出登录
    logout=()=>{
        this.props.history.replace('/login');
    }
    linkTo=(data,i)=>{
        if (data.list && data.list.length !== 0){
            this.getFirstMenuPath(data.list[0]);
        }else{
            this.props.history.push(`/${React.Version+data.url}`);
            sessionStorage.setItem('activi_router_path', data.url);
        }
        sessionStorage.setItem('currentTopMenu',data.menuId);
        this.setState({
            leftMenus: data.list,
            currentTopMenu: data.menuId,
            showLeftMenus: false
        });
        setTimeout(()=>{
            this.setState({
                showLeftMenus: true
            });
        },1);
    }
    getPath(value) {
        const valueMap = {};
        const loops = (list, parent) => {
            return (list || []).map(({ list, menuId }) => {
                const node = (valueMap[menuId] = {
                    parent,
                    value:menuId
                });
                node.children = loops(list, node);
                return node;
            });
        };
        const {menuList} = this.state;
        loops(menuList);
        const path = [];
        let current = valueMap[value];
        while (current) {
            path.unshift(current.value);
            current = current.parent;
        };
        return path;
    };


    // 遍历菜单，获取左边菜单第一个地址
    getFirstMenuPath=(data)=>{
        if(!data.list||data.list.length===0){
            sessionStorage.setItem('activi_router_path',data.url);
        }else{
            this.getFirstMenuPath(data.list[0]);
        }
    }

    /**
     * @todo 修改密码
     */
    changePassword = () => {
        const formRef = React.createRef();
        Modal.confirm({
            title:"修改密码",
            icon:false,
            content:
                <>
                    <Form
                        ref={formRef}
                    >
                        <Form.Item
                            label="原密码"
                            name="password"
                            rules={[
                                {required:true,message:"原密码不能为空"}
                            ]}
                        >
                            <Input.Password placeholder="原密码"/>
                        </Form.Item>
                        <Form.Item
                            label="新密码"
                            name="newPassword"
                            rules={[
                                {required:true,message:"新密码不能为空"}
                            ]}
                        >
                            <Input.Password placeholder="新密码"/>
                        </Form.Item>
                    </Form>
                </>,
            onOk:() => {
                return new Promise((res,rej) => {
                    formRef.current.validateFields().then(values => {
                        React.axios.post("sys/user/password",values,response => {
                            res();
                            React.message.success('修改成功！');
                        },error => {
                            rej();
                        });
                    }).catch();
                });
            },
        });
    };

    // 消息列表
    mesageList=()=>{
        this.props.history.push(`/${React.Version}/message/index`);
    }
    // 未读消息数量
    getUnreadCount=()=>{
        React.axios.get(`msg/tmessage/getStatistics`,null,res=>{
            sessionStorage.setItem('unreadCount',res.data);
            setInterval(()=>{
                let unreadCount = sessionStorage.getItem('unreadCount');
                if(!unreadCount || unreadCount==='0'){
                    unreadCount = 0;
                }
                this.setState({unreadCount: unreadCount});
            },60000)
        })
    }
    
    render() {
        let flag = false;
        if((this.state.leftMenus==null||this.state.leftMenus.length===0)&&this.props.location.pathname==='/v1/home'){
            flag = true;
        }
        if(!sessionStorage.getItem('token')){
            this.props.history.replace('/login');
        }

        const menu = (
            <Menu>
                <Menu.Item onClick={this.changePassword}>修改密码</Menu.Item>
                {/* <Menu.Item onClick={()=>{this.setState({updateUer: true})}}>个人信息</Menu.Item> */}
                <Menu.Item onClick={this.logout}>退出登录</Menu.Item>
            </Menu>
        );
        return(
            <>
                <Layout>
                    <Header className="header">
                        <div className="logo">成都东安水质净化厂生产运行监测平台</div>
                        <Menu theme="dark" mode="horizontal" className="header-middle" selectedKeys={this.state.currentTopMenu}>
                            {this.state.menuList.map((res,i)=><Menu.Item key={res.menuId} onClick={this.linkTo.bind(this,res,i)}>{res.name}</Menu.Item>)}
                            <Menu.Item onClick={()=>{this.props.history.push('/bigscreen')}}>数据大屏</Menu.Item>
                        </Menu>
                        <div className="header-right">
                            <Space>
                                <Avatar className="photo" icon={<img alt="" src={this.state.currentUser.heade||require('../../assets/images/default-photo.png')} />} />
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <span className="user">{this.state.currentUser.name}&nbsp;<React.IconFont type="icon-xiala"/></span>
                                </Dropdown>
                            </Space>
                        </div>
                    </Header>
                    <Layout>
                        {(this.state.leftMenus&&this.state.leftMenus.length!==0)&&<Sider className="sider" theme={this.state.theme} width={200} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            {this.state.showLeftMenus&&<MenuItem theme={this.state.theme} data={this.state.leftMenus} />}
                        </Sider>}
                        <Layout className={flag?'':'body'}>
                            <Content className="content">{this.props.children}</Content>
                        </Layout>
                    </Layout>
                </Layout>
                {/* <Set changeNav={(e)=>{this.setState({theme: e})}}/> */}
                {this.state.updateUer&&<UpdateUserInfo onCancel={()=>{this.setState({updateUer: false})}} onOk={this.updateSuccess}/>}
            </>
        );
    }
}
export default withRouter(Lay_out);