import React, { Component } from 'react';
import {Tabs,Form} from 'antd';
import Table from '@/components/table';
import Button from '@/components/button';
import Edit from './Edit';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            eidtDialog: false,
            method: null,
            data1: [],
            data2: [],
            id: null
        }
    }
    // 添加、编辑
    editMethod=(method,id)=>{
        this.setState({
            eidtDialog: true,
            method: method,
            id: id
        });
    }
    componentDidMount(){
        this.getList1();
        this.getList2();
    }
    // 获取入库方式
    getList1=()=>{
        React.axios.post('api/wmsType/tmaterialtype/queryMaterialTypeList?number='+React.enums.inMethodCode,null,res=>{
            this.setState({data1: res.data});
        })
    }
    /// 获取出库方式
    getList2=()=>{
        React.axios.post('api/wmsType/tmaterialtype/queryMaterialTypeList?number='+React.enums.outMethodCode,null,res=>{
            this.setState({data2: res.data});
        })
    }
    getList=()=>{
        this.getList1();
        this.getList2();
        this.setState({eidtDialog: false});
    }
    // 删除
    delMethod=(id)=>{
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
                render: (txt,res)=><>
                    <Button type="link" size="small" onClick={this.editMethod.bind(this,res.number,res.id)} authcode="sys:role:update" icon="edit">修改</Button>
                    <Button type="link" danger size="small" onClick={this.delMethod.bind(this,res.id)} authcode="sys:role:delete" icon="delete">删除</Button>
                </>
            }
        ]
        return (
            <>
                <Tabs defaultActiveKey="1" type="card">
                    <Tabs.TabPane tab="入库方式" key="inMethod">
                        <Form className="query-tools" layout="inline">
                            <Form.Item>
                                <Button icon="add" type="primary" onClick={this.editMethod.bind(this,'inMethodCode',null)}>添加</Button>
                            </Form.Item>
                        </Form>
                        <Table columns={columns} data={this.state.data1} pager={false} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="出库方式" key="outMethod">
                        <Form className="query-tools" layout="inline">
                            <Form.Item>
                                <Button icon="add" type="primary" onClick={this.editMethod.bind(this,'outMethodCode',null)}>添加</Button>
                            </Form.Item>
                        </Form>
                        <Table columns={columns} data={this.state.data2} pager={false} />
                    </Tabs.TabPane>
                </Tabs>
                {this.state.eidtDialog&&<Edit method={this.state.method} id={this.state.id} onCancel={()=>{this.setState({eidtDialog:false})}} onOk={this.getList}/>}
            </>
        );
    }
}
export default List;