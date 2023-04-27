import React,{Component} from "react";
import {Form,Input,Divider} from "antd";
import Button from "@/components/button";
import Table from "@/components/table";

import Detail from "./components/Detail";
import Edit from "./components/Edit";

class List extends Component{
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
     * @todo Table组件通信
     * @param {object} ref
     */
    tableRef = (ref) => {
        this.Table = ref;
    };
    /**
     * @todo 搜索与刷新
     */
    tableReload = () => {
        const {params} = this.state;
        this.Table.reload(params);
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
        new Promise((resolve) => {
            this.setState({params:{name:""}});
            resolve();
        }).then(() => {
            this.tableReload();
        });
    };

    /**
     * @todo 打开详情
     * @param {string} detailUserId
     */
    openDetail = (detailUserId) => {
        this.setState({detailVisible:true,detailUserId});
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
                React.axios.post("api/wms/twsupplier/delete",[id],res => {
                    this.tableReload();
                });
            }
        );
    };

    render(){
        const {editId,editVisible,detailId,detailVisible} = this.state;

        const tableColumns = [
            {
                title:"名称",
                key:"name",
                dataIndex:"name",
            },
            {
                title:"编号",
                key:"number",
                dataIndex:"number",
            },
            {
                title:"联系人",
                key:"person",
                dataIndex:"person",
            },
            {
                title:"职务",
                key:"job",
                dataIndex:"job",
            },
            {
                title:"联系电话",
                key:"tel",
                dataIndex:"tel",
            },
            {
                title:"邮箱",
                key:"email",
                dataIndex:"email",
            },
            {
                title:"备注",
                key:"remark",
                dataIndex:"remark",
            },
            {
                title:"操作",
                width:"200px",
                render:(text,record) => {
                    return(
                        <>
                            <Button type="link" size="small"onClick={this.openDetail.bind(this,record.id)} authcode="inventory:suppliers:info"><span className="iconfont icon-icon_huabanfuben"/>详情</Button>
                            <Button type="link" size="small" onClick={this.openEdit.bind(this,record.id)} authcode="inventory:suppliers:update"><span className="iconfont icon-bianji"/>修改</Button>
                            <Button type="link" size="small" danger onClick={this.delete.bind(this,record.id)} authcode="inventory:suppliers:delete"><span className="iconfont icon-shanchudefuben"/>删除</Button>
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
                >
                    <Form.Item
                        name="name"
                        initialValue=""
                    >
                        <Input placeholder="名称"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" icon="chongzhi">重置</Button>
                    </Form.Item>
                </Form>
                <Divider/>
                <Button type="primary" onClick={this.openEdit.bind(this,"")} authcode="inventory:supplier:save"><span className="iconfont icon-tianjia"/>新增</Button>
                <Table
                    rowKey="id"
                    ononRef={ref=>this.tableRef = ref}
                    columns={tableColumns}
                    method="get"
                    url="api/wms/twsupplier/list"
                />
                {editVisible && <Edit id={editId} close={this.closeEdit} tableReload={this.tableReload}/>}
                {detailVisible && <Detail id={detailId} close={this.closeDetail} tableReload={this.tableReload}/>}
            </>
        );
    };
};
export default List;