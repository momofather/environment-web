import React,{Component} from "react";
import {Form, Input, Dropdown, Menu, Tree} from "antd";
import Button from "@/components/button";
import './List.less';
import Table from "@/components/table";

import Detail from "./Components/Detail";
import Edit from "./Components/Edit";

class List extends Component{
    formRef = React.createRef();
    tableRef=null;
    constructor(props){
        super(props);
        this.state= {
            editVisible:false,
            editUserId:"",
            detailVisible:false,
            detailUserId:"",
            selectedRowKeys:[],
            params:{username:""},
            deptId: '',
            deptData: []
        };
    };

    componentDidMount(){
        this.getDeptData();
    }


    /**
     * @todo 搜索与刷新
     */
    tableReload = () => {
        let params = this.formRef.current.getFieldValue();
        params.deptId = this.state.deptId;
        this.tableRef.reload(params);
    };

    /**
     * @todo 打开用户详情
     * @param {string} detailUserId 
     */
    detailOpen = (detailUserId) => {
        this.setState({detailVisible:true,detailUserId});
    };

    /**
     * @todo 关闭用户详情
     */
    detailClose = () => {
        this.setState({detailVisible:false,detailUserId:""});
    };

    /**
     * @todo 打开用户编辑
     * @param {string} editUserId 
     */
    editOpen = (editUserId) => {
        if(editUserId){
            this.setState({editVisible:true,editUserId});
        }else{
            this.setState({editVisible:true});
        };
    };

    /**
     * @todo 关闭用户编辑
     */
    editClose = (values) => {
        if(values){
            React.axios.post(values.userId ? ("sys/user/update") : ("sys/user/save"),values,res => {
                this.setState({editVisible:false,editUserId:""});
                this.tableReload();
            });
        }else{
            this.setState({editVisible:false,editUserId:""});
        };
    };

    /**
     * @todo 删除用户
     */
    deleteOpen = (userId) => {
        React.message.confirm("您确定想要删除所选数据？",
            () => {
                React.axios.post("/sys/user/delete",userId,res => {
                    this.tableReload();
                });
            }
        );
    };

    /**
     * @todo 批量删除用户
     */
    deleteUsers = () => {
        const {selectedRowKeys} = this.state;
        this.deleteOpen(selectedRowKeys);
    };

    /**
     * @todo 重置搜索
     */
    reset = () => {
        this.formRef.current.resetFields();
        this.tableReload();
    }; 

    /**
     * @todo 重置密码
     */
    resetPassword = (record) => {
        React.message.confirm(<div align="center">重置后密码为：账号+123456<br/>确定要重置吗？</div>,()=>{
            React.axios.post("sys/user/resetPwd",{userId:record.userId,username: record.username},() => {
                React.message.success('密码重置成功！');
            });
        })
    };
    // 获取部门数据
    getDeptData = ()=>{
        React.axios.get('api/sys/dept/list',null,res=>{
            this.filterTree(res.data);
            this.setState({deptData: res.data});
        })
    }
    // 递归树
    filterTree = (data)=>{
        for(let item of data){
            item.key = item.deptId;
            item.title = item.name;
            if(item.children){
                this.filterTree(item.children);
            }
        }
        return data;
    }
    // 选择部门
    onSelectDept = e=>{
        if(e.length>0) this.setState({deptId: e[0]},()=>{this.tableReload();});
        else this.setState({deptId: ''},()=>{this.tableReload();});
    }

    render(){
        const {editVisible,editUserId,detailVisible,detailUserId,selectedRowKeys} = this.state;

        const tableColumns = [
            {
                title:"用户名",
                key:"username",
                dataIndex:"username",
            },
            {
                title:"真实姓名",
                key:"name",
                dataIndex:"name",
            },
            {
                title:"手机号",
                key:"mobile",
                dataIndex:"mobile",
                align: 'center',
            },
            {
                title:"状态",
                key:"status",
                dataIndex:"status",
                align: 'center',
                render: (text,record) => React.enums.status[record.status],
            },
            {
                title:"操作",
                width:"300px",
                align: 'center',
                render:(text,record) => <>
                    <Button type="link" size="small" onClick={this.detailOpen.bind(this,record.userId)} authcode="sys:user:info" icon="info">详情</Button>
                    <Button type="link" size="small" onClick={this.editOpen.bind(this,record.userId)} authcode="sys:user:update" icon="edit">修改</Button>
                    <Button type="link" size="small" onClick={this.resetPassword.bind(this,record)} authcode="sys:user:update" icon="chongzhi">重置密码</Button>
                    <Button type="link" size="small" danger onClick={this.deleteOpen.bind(this,[record.userId])} authcode="sys:user:delete" icon="delete">删除</Button>
                </>
            },
        ];

        const menu = (
            <Menu>
                <Menu.Item onClick={this.deleteUsers}>批量删除</Menu.Item>
            </Menu>
        );

        return(
            <>
                <div className="flex">
                    <div className="left">
                        <Tree 
                            onSelect={this.onSelectDept}
                            treeData={this.state.deptData}
                            titleRender={e=>e.name}
                        />
                    </div>
                    <div className="right">
                    <Form
                        layout="inline"
                        onFinish={this.tableReload}
                        onReset={this.reset}
                        ref={this.formRef}
                        className="query-tools"
                    >
                        <Form.Item
                            name="username"
                        >
                            <Input placeholder="用户名"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="reset" icon="chongzhi">重置</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.editOpen.bind(this,"")} authcode="sys:user:save" icon="add">新增</Button>
                        </Form.Item>
                        {selectedRowKeys.length > 0 && 
                            <Form.Item>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Button><span className="iconfont icon-xiala"/>操作</Button>
                                </Dropdown>
                            </Form.Item>
                        }
                    </Form>
                    <Table
                        rowKey="userId"
                        onRef={ref=>this.tableRef = ref}
                        columns={tableColumns}
                        method="get"
                        url="sys/user/list"
                        selectedRowKeys={selectedRowKeys}
                        onSelectKeys={(selectedRowKeys) => {
                            this.setState({selectedRowKeys});
                        }}
                    />
                    </div>
                </div>
                
                {editVisible && <Edit userId={editUserId} close={this.editClose} tableReload={this.tableReload}/>}
                {detailVisible && <Detail userId={detailUserId} close={this.detailClose}/>}
            </>
        );
    };
};
export default List;