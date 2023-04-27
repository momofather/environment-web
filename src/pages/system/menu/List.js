import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Button from '@/components/button';
import Table from '@/components/table';
import Edit from './Edit';
class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            editDialog: false,
            data: []
        }
    }
    componentDidMount(){
        this.getList();
    }
    addMenu=({parentId,menuId})=>{
        this.setState({
            parentId: parentId||undefined,
            menuId: menuId,
            editDialog:true
        });
    }
    // 删除菜单
    delMenu=({menuId,children})=>{
        if(children){
            React.message.warning('该菜单下有子菜单不能直接删除');
            return;
        }
        React.message.confirm('确定删除该菜单？',()=>{
            React.axios.post(`sys/menu/delete/${menuId}`,null,()=>{
                React.message.success('删除成功');
                this.getList();
            })
        });
    }
    // 获取列表数据
    getList=()=>{
        React.axios.get('sys/menu/menuTree',null,res=>{
            this.setState({data: res.data});
        })
    }
    // 去除菜单列表children为空的字段
    delEmptyFiled=(data)=>{
        for(let item of data){
            if(item.children.length===0){
                item.children = null;
            }else{
                this.delEmptyFiled(item.children);
            }
        }
        return data;
    }
    render(){
        const columns = [
            {
                title: '菜单名称',
                dataIndex: 'name',
                key: 'name',
                width: '200px'
            },
            {
                title: '图标',
                width: '100px',
                align: 'center',
                render: (text, record)=><React.IconFont style={{fontSize: '22px'}} type={record.icon} />
            },
            {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
                width: '100px',
                render: (text, record)=><span>{React.enums.menuType[record.type]}</span>
            },
            {
                title: '排序',
                dataIndex: 'orderNum',
                key: 'orderNum',
                width: '100px',
            },
            {
                title: '路由地址',
                dataIndex: 'url',
                key: 'url',
            },
            {
                title: '权限标识',
                dataIndex: 'perms',
                key: 'perms',
                width: '300px',
            },
            {
                title: '操作',
                width: '240px',
                align: 'center',
                render: (text, record)=><>
                    <Button type="link" size="small" onClick={this.addMenu.bind(this,{parentId: record.menuId})} icon="add">添加子菜单</Button>
                    <Button type="link" size="small" onClick={this.addMenu.bind(this,{parentId: record.parentId,menuId: record.menuId})} icon="edit">修改</Button>
                    <Button type="link" size="small" danger onClick={this.delMenu.bind(this,record)} icon="delete">删除</Button>
                </>
            }
        ];
        return(
            <>
                <Button type="primary" onClick={this.addMenu.bind(this,{parentId: null})} className="query-tools" icon="add">添加一级菜单</Button>
                <Table rowKey="menuId" number={false} pager={false} columns={columns} data={this.state.data}/>
                {this.state.editDialog&&<Edit parentId={this.state.parentId} menuId={this.state.menuId} onCancel={()=>{this.setState({editDialog: false});this.getList()}}/>}
            </>
        );
    }
}
export default withRouter(List);