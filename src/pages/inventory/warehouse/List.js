import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Form,Input} from "antd";
import Button from "@/components/button";
import Detail from "./components/Detail";
import Edit from "./components/Edit";
import Table from "@/components/table";

class List extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state= {
            editId:"",
            editVisible:false,
            detailId:"",
            detailVisible:false,
            params:{name:""},
        };
    };


    /**
     * @todo 搜索与刷新
     */
    tableReload = () => {
        const {params} = this.state;
        this.tableRef.reload(params);
    };
    /**
     * @todo 搜索
     */
    submit = (values) => {
        this.setState({params:values});
        this.tableReload();
    };

    /**
     * @todo 重置搜索
     */
    reset = () => {
        this.formRef.current.resetFields();
        this.tableRef.reload(this.formRef.current.getFieldsValue(true));
    };

    /**
     * @todo 打开详情
     * @param {string} detailUserId
     */
    openDetail = (detailId) => {
        this.setState({detailVisible:true,detailId});
    };
    /**
     * @todo 关闭详情
     */
    closeDetail = () => {
        this.setState({detailVisible:false,detailUserId:""});
    };

    /**
     * @todo 打开编辑模态框
     */
    openEdit = (editId) => {
        this.setState({editId,editVisible:true});
    };
    /**
     * @todo 关闭编辑模态框
     */
    closeEdit = () => {
        this.setState({editVisible:false});
    };

    /**
     * @todo 删除
     * @param {string} userId
     */
    delete = (record) => {
        React.message.confirm(
            "您确定想要删除此条数据？",
            () => {
                React.axios.post(`api/wms/twarehouse/delete?id=${record.id}&houseNumber=${record.number}`,null,res => {
                    this.tableReload();
                });
            }
        );
    };

    render(){
        const {editId,editVisible,detailId,detailVisible} = this.state;

        const tableColumns = [
            {
                title:"仓库名称",
                key:"name",
                dataIndex:"name",
                render:(text,record) => <Link to={`/${React.Version}/inventory/warehouseLocation/list/${record.id}`}>{record.name}</Link>
            },
            {
                title:"仓库编号",
                key:"number",
                dataIndex:"number",
            },
            {
                title:"仓库地址",
                key:"address",
                dataIndex:"address",
            },
            {
                title:"管理员",
                key:"username",
                dataIndex:"username",
            },
            {
                title:"备注",
                key:"remark",
                dataIndex:"remark",
            },
            {
                title:"操作",
                width:"200px",
                align: 'center',
                render:(text,record) => {
                    return(
                        <>
                            <Button type="link" size="small"onClick={this.openDetail.bind(this,record.id)} authcode="inventory:warehouse:info" icon="info">详情</Button>
                            <Button type="link" size="small" onClick={this.openEdit.bind(this,record.id)} authcode="inventory:warehouse:update" icon="edit">修改</Button>
                            <Button type="link" size="small" danger onClick={this.delete.bind(this,record)} authcode="inventory:warehouse:delete" icon="delete">删除</Button>
                        </>
                    );
                },
            },
        ];

        return(
            <>
                <Form
                    layout="inline"
                    className="query-tools"
                    onFinish={this.submit}
                    onReset={this.reset}
                    ref={this.formRef}
                >
                    <Form.Item
                        name="name"
                        initialValue=""
                    >
                        <Input placeholder="仓库名称"/>
                    </Form.Item>
                    <Form.Item
                        name="number"
                        initialValue=""
                    >
                        <Input placeholder="仓库编号"/>
                    </Form.Item>
                    <Form.Item
                        name="address"
                        initialValue=""
                    >
                        <Input placeholder="仓库地址"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" icon="chongzhi">重置</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.openEdit.bind(this,"")} authcode="inventory:warehouse:save" icon="add">新增</Button>
                    </Form.Item>
                </Form>
                
                <Table
                    rowKey="id"
                    onRef={ref=>this.tableRef = ref}
                    columns={tableColumns}
                    method="get"
                    url="api/wms/twarehouse/list"
                />
                {editVisible && <Edit id={editId} close={this.closeEdit} tableReload={this.tableReload}/>}
                {detailVisible && <Detail id={detailId} close={this.closeDetail} tableReload={this.tableReload}/>}
            </>
        );
    };
};
export default List;