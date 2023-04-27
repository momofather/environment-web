import React,{Component} from "react";
import {Space,Form} from "antd";

import Table from "@/components/table";
import Button from "@/components/button";

import Edit from "./components/Edit";
import Detail from "./components/Detail";

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            editId:"",
            editVisible:false,
            detailId:"",
            detailVisible:false,
            params:{name:""},
            data: []
        };
    };

    componentDidMount(){
        this.getList();
    };

    /**
     * @todo 获取列表数据
     */
    getList=()=>{
        React.axios.post("api/wmsType/tmaterialtype/queryMaterialTypeList?number="+React.enums.goodTypeCode,null,res=>{
            this.setState({data: res.data});
        });
    }

    tableRef = React.createRef();

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
        this.getList();
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
        this.getList();
    };

    /**
     * @todo 删除用户
     * @param {string} userId
     */
    delete = (id) => {
        React.message.confirm(
            "您确定想要删除此条数据？",
            () => {
                React.axios.post("api/wmsType/tmaterialtype/delete",[id],res => {
                    this.getList();
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
                title:"备注",
                key:"remark",
                dataIndex:"remark",
            },
            {
                title:"操作",
                width:"200px",
                align: 'center',
                render:(text,record) => <>
                    <Button type="link" size="small"onClick={this.openDetail.bind(this,record.id)} authcode="inventory:goodsType:info" icon="info">详情</Button>
                    <Button type="link" size="small" onClick={this.openEdit.bind(this,record.id)} authcode="inventory:goodsType:update" icon="edit">修改</Button>
                    <Button type="link" size="small" danger onClick={this.delete.bind(this,record.id)} authcode="inventory:goodsType:delete" icon="delete">删除</Button>
                </>,
            },
        ];

        return(
            <>
                <Space
                    direction="vertical"
                    style={{width:"100%"}}
                >
                    <Form
                        layout="inline"
                        onFinish={this.submit}
                        onReset={this.reset}
                    >
                        {/*<Form.Item*/}
                        {/*    name="name"*/}
                        {/*    initialValue=""*/}
                        {/*>*/}
                        {/*    <Input placeholder="名称"/>*/}
                        {/*</Form.Item>*/}
                        {/*<Form.Item>*/}
                        {/*    <Button type="primary" htmlType="submit" icon="search">搜索</Button>*/}
                        {/*</Form.Item>*/}
                        {/*<Form.Item>*/}
                        {/*    <Button htmlType="reset" icon="chongzhi">重置</Button>*/}
                        {/*</Form.Item>*/}
                        <Form.Item>
                            <Button type="primary" onClick={this.openEdit.bind(this,"")} authcode="inventory:goodsType:save" icon="add">新增</Button>
                        </Form.Item>
                    </Form>
                    <Table
                        rowKey="id"
                        onRef={ref=>this.tableRef = ref}
                        pager={false}
                        columns={tableColumns}
                        data={this.state.data}
                    />
                    {editVisible && <Edit id={editId} onOk={this.closeEdit} onCancel={()=>{this.setState({editVisible: false})}}/>}
                    {detailVisible && <Detail id={detailId} close={this.closeDetail} tableReload={this.tableReload}/>}
                </Space>
            </>
        );
    };
};
export default List;