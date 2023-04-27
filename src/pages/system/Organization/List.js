import React,{Component} from "react";
import Table from "@/components/table";
import Button from "@/components/button";

import Edit from "./Components/Edit";

class List extends Component{
    constructor(props){
        super(props);
        this.state= {
            editVisible:false,
            detailVisible:false,
            detailUserId:"",
            id: null,
            parentId: null,
            data: []
        };
    };

    componentDidMount(){
        this.getList();
    }

    /*
    * 打开用户编辑
    * */
    editOpen = (id,parentId) => {
        this.setState({editVisible:true,id,parentId});
    };

    /*
    * 打开用户删除
    * */
    deleteOpen = (res) => {
        if(res.children){
            React.message.warning('该组织下有子组织，不能直接删除');
            return;
        }
        React.message.confirm('确定删除该组织？',()=>{
            React.axios.post('api/sys/dept/delete',[res.deptId],()=>{
                React.message.success('删除成功');
                this.getList();
            })
        })
    };

    /**
     * 保存成功
     */
    onOk = () => {
        this.getList();
        this.setState({editVisible: false});
    }

    /**
     * 获取列表数据
     */
    getList=()=>{
        React.axios.get('api/sys/dept/list',null,res=>{
            this.setState({data: res.data});
        })
    }

    render(){
        const {editVisible} = this.state;

        const tableColumns = [
            {
                title:"名字",
                key:"name",
                dataIndex:"name",
            },
            {
                title:"排序",
                key:"orderNum",
                dataIndex:"orderNum",
            },
            {
                title:"操作",
                width:"240px",
                align: 'center',
                render:(text,record) => <>
                    <Button type="link" size="small" authcode="system:organization:addChild" onClick={this.editOpen.bind(this,null,record.deptId)} icon="add">添加子部门</Button>
                    <Button type="link" size="small" authcode="system:organization:edit" onClick={this.editOpen.bind(this,record.deptId,record.parentId)} icon="edit">修改</Button>
                    <Button type="link" size="small" authcode="system:organization:delete" danger onClick={this.deleteOpen.bind(this,record)} icon="delete">删除</Button>
                </>,
            },
        ];

        return(
            <div>
                <Button type="primary" onClick={this.editOpen.bind(this,null,null)} authcode="system:organization:add" icon="add" className="query-tools">添加</Button>
                <Table pager={false} number={false} rowKey="deptId" data={this.state.data} columns={tableColumns}/>
                {editVisible && <Edit id={this.state.id} parentId={this.state.parentId} onOk={this.onOk} onCancel={()=>{this.setState({editVisible: false})}}/>}
            </div>
        );
    };
};
export default List;