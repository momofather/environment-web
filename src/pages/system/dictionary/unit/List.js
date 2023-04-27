import React, { Component } from 'react';
import Table from '@/components/table';
import Button from '@/components/button';
import Edit from './Edit';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            eidtDialog: false,
            data: [],
            id: null
        }
    }
    // 添加、编辑
    edit=(id)=>{
        this.setState({
            eidtDialog: true,
            id: id
        });
    }
    componentDidMount(){
        this.getList();
    }
    // 获取数据
    getList=()=>{
        this.setState({eidtDialog:false});
        React.axios.post('api/wmsType/tmaterialtype/queryMaterialTypeList?number=unit',null,res=>{
            this.setState({data: res.data});
        })
    }
    // 删除
    del=(id)=>{
        React.message.confirm('确定删除该数据？',()=>{
            React.axios.post('api/wmsType/tmaterialtype/delete',[id],()=>{
                React.message.success('删除成功');
                this.getList();
            })
        })
    }
    render() {
        const columns = [
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '操作',
                align: 'center',
                width: '150px',
                render: (res)=><>
                    <Button type="link" size="small" onClick={this.edit.bind(this,res.id)} authcode="sys:role:update" icon="edit">修改</Button>
                    <Button type="link" danger size="small" onClick={this.del.bind(this,res.id)} authcode="sys:role:delete" icon="delete">删除</Button>
                </>
            }
        ]
        return (
            <>
                <Button icon="add" type="primary" className="query-tools" onClick={this.edit.bind(this,null)}>添加</Button>
                <Table columns={columns} data={this.state.data} pager={false} />
                {this.state.eidtDialog&&<Edit id={this.state.id} onCancel={()=>{this.setState({eidtDialog:false})}} onOk={this.getList}/>}
            </>
        );
    }
}
export default List;