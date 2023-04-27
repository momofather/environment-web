import React,{Component} from "react";
import {Form,Input,DatePicker} from "antd";

import Button from "@/components/button";
import Table from "@/components/table";


class List extends Component{
    tableRef = React.createRef();
    formRef = React.createRef();

    constructor(props){
        super(props);
        this.state= {
            editId:"",
            detailId:"",
            detailVisible:false,
            params:{name:""},
        };
    };

    /**
     * @todo 搜索与刷新
     */
    tableReload = () => {
        this.tableRef.reload();
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

    formRef = React.createRef();
    /**
     * @todo 重置搜索
     */
    reset = () => {
        this.formRef.current.resetFields();
        this.tableRef.reload(this.formRef.current.getFieldsValue(true));
    };

    // 打开详情
    openDetail = (id) => {
        this.props.history.push(`/${React.Version}/inventory/goodsMove/detail/${id}`);
    };

    /**
     * @todo 新增/编辑
     */
    openEdit = (id) => {
        let routerPath = '/'+React.Version+'/inventory/goodsMove/edit';
        if(id)routerPath+=`/${id}`;
        this.props.history.push(routerPath);
    };

    // 删除
    delete = (id) => {
        React.message.confirm(
            "您确定想要删除此条数据？",
            () => {
                React.axios.post("api/wms/twarehousebill/delete",[id],() => {
                    React.message.success('删除成功');
                    this.tableReload();
                });
            }
        );
    };

    render(){
        const tableColumns = [
            {
                title:"单据编号",
                key:"number",
                dataIndex:"number",
                align: 'center',
            },
            {
                title:"调拨日期",
                key:"housedate",
                dataIndex:"housedate",
                align: 'center',
            },
            {
                title:"负责人",
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
                render:(text,record) => <>
                    <Button type="link" size="small"onClick={this.openDetail.bind(this,record.id)} authcode="inventory:goodsMove:info" icon="info">详情</Button>
                    <Button type="link" size="small" onClick={this.openEdit.bind(this,record.id)} authcode="inventory:goodsMove:update" icon="edit">修改</Button>
                    <Button type="link" size="small" danger onClick={this.delete.bind(this,record.id)} authcode="inventory:goodsMove:delete" icon="delete">删除</Button>
                </>
            },
        ];

        return(
            <>
                <Form
                    ref={this.formRef}
                    layout="inline"
                    onFinish={this.submit}
                    onReset={this.reset}
                    className="query-tools"
                >
                    <Form.Item name="number"initialValue="">
                        <Input placeholder="调拨编号"/>
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
                        <Button type="primary" onClick={this.openEdit.bind(this,"")} authcode="inventory:goodsMove:save" icon="add">新增</Button>
                    </Form.Item>
                </Form>
                
                <Table
                    rowKey="id"
                    onRef={ref=>this.tableRef = ref}
                    columns={tableColumns}
                    method="get"
                    url="api/wms/twarehousebill/list?type=3"
                />
            </>
        );
    };
};
export default List;