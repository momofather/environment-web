import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Button from '@/components/button';
import Table from '@/components/table';
import Edit from './Edit';
import AuthSet from './AuthSet';
class List extends Component{
    tableRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            editDialog: false,
            authSetDialog: false,
            roleId: null,
            data: []
        }
    }
    editRole=(roleId)=>{
        this.setState({
            roleId: roleId,
            editDialog:true
        });
    }
    // 删除菜单
    delRole=(roleId)=>{
        React.message.confirm('确定删除该角色？',()=>{
            React.axios.post('sys/role/delete',[roleId],res=>{
                React.message.success('删除成功');
                this.tableRef.reload();
            })
        });
    }
    // 权限配置
    authSet=(roleId)=>{
        this.setState({
            roleId: roleId,
            authSetDialog:true
        });
    }
    render(){
        const columns = [
            {
                title: '角色名称',
                dataIndex: 'roleName',
                key: 'roleName',
                width: '200px',
            },
            {
                title: '描述',
                dataIndex: 'remark',
                key: 'remark',
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
                align: 'center',
                width: '150px'
            },
            {
                title: '操作',
                width: '230px',
                align: 'center',
                render: (text, record)=><>
                    <Button type="link" size="small" onClick={this.editRole.bind(this,record.roleId)} authcode="sys:role:update" icon="edit">修改</Button>
                    <Button type="link" size="small" onClick={this.authSet.bind(this,record.roleId)} authcode="sys:role:authset" icon="oanth">权限配置</Button>
                    <Button type="link" danger size="small" onClick={this.delRole.bind(this,record.roleId)} authcode="sys:role:delete" icon="delete">删除</Button>
                </>
            }
        ];
        return(
            <>
                <Button type="primary" className="query-tools" authcode="sys:role:save" onClick={this.editRole.bind(this,null)} icon="add">新增</Button>
                <Table columns={columns} rowKey="roleId" onRef={ref=>this.tableRef = ref} method="get" url="sys/role/list" />
                {this.state.editDialog&&<Edit roleId={this.state.roleId} onCancel={(flag)=>{this.setState({editDialog: false});this.tableRef.reload()}}/>}
                {this.state.authSetDialog&&<AuthSet roleId={this.state.roleId} onCancel={()=>{this.setState({authSetDialog: false})}}/>}
            </>
        );
    }
}
export default withRouter(List);