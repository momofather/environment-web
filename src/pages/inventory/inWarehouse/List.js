import React,{Component} from "react";
import {Form,Input,DatePicker} from "antd";
import Button from "@/components/button";
import Table from "@/components/table";

import Edit from "./components/Edit";
import Detail from "./components/Detail";

class List extends Component{
    tableRef = React.createRef();
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state= {
            editId:"",
            editVisible:false,
            detailId:"",
            detailVisible:false,
            params:{name:"",type:"2"},
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
        if(values.date){
            values.stadate = values.date[0] && values.date[0].format("YYYY-MM-DD");
            values.enddate = values.date[1] && values.date[1].format("YYYY-MM-DD");
        }
        delete values.date;
        this.tableRef.reload(values);
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
     * @todo 删除用户
     * @param {string} userId
     */
    delete = (id) => {
        React.message.confirm(
            "您确定想要删除此条数据？",
            () => {
                React.axios.post("api/wms/twarehousebill/delete",[id],res => {
                    this.tableReload();
                });
            }
        );
    };

    render(){
        const {editId,editVisible,detailId,detailVisible} = this.state;

        const tableColumns = [
            {
                title:"入库编号",
                key:"number",
                dataIndex:"number",
                width:"200px",
                align: 'center',
            },
            {
                title:"标题",
                key:"name",
                dataIndex:"name",
            },
            {
                title:"入库日期",
                key:"housedate",
                dataIndex:"housedate",
                width:"200px",
                align: 'center',
            },
            {
                title:"经手人",
                key:"username",
                dataIndex:"username",
                align: 'center',
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
                            <Button type="link" size="small" onClick={this.openDetail.bind(this,record.id)} authcode="inventory:inWarehouse:info" icon="info">详情</Button>
                            <Button type="link" size="small" onClick={this.openEdit.bind(this,record.id)} authcode="inventory:inWarehouse:update" icon="edit">修改</Button>
                            <Button type="link" size="small" danger onClick={this.delete.bind(this,record.id)} authcode="inventory:inWarehouse:delete" icon="delete">删除</Button>
                        </>
                    );
                },
            },
        ];

        return(
            <>
                <Form
                    layout="inline"
                    onFinish={this.submit}
                    onReset={this.reset}
                    ref={this.formRef}
                    className="query-tools"
                >
                    <Form.Item name="number">
                        <Input placeholder="入库编号"/>
                    </Form.Item>
                    <Form.Item name="name">
                        <Input placeholder="标题"/>
                    </Form.Item>
                    <Form.Item name="date">
                        <DatePicker.RangePicker/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" icon="chongzhi">重置</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.openEdit.bind(this,"")} authcode="inventory:inWarehouse:save" icon="add">新增</Button>
                    </Form.Item>
                </Form>
                <Table
                    rowKey="id"
                    onRef={ref=>this.tableRef = ref}
                    columns={tableColumns}
                    method="get"
                    url="api/wms/twarehousebill/list?type=2"
                />
                {editVisible && <Edit id={editId} close={this.closeEdit} tableReload={this.tableReload}/>}
                {detailVisible && <Detail id={detailId} close={this.closeDetail} tableReload={this.tableReload}/>}
            </>
        );
    };
};
export default List;