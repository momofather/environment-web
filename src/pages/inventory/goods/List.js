import React,{Component} from "react";
import {Space, Form, Input, Select} from "antd";
import Button from "@/components/button";
import Table from "@/components/table";

import Detail from "./components/Detail";
import Edit from "./components/Edit";

class List extends Component{
    tableRef=null;
    constructor(props){
        super(props);
        this.state= {
            goodsTypeList:[],
            editId:"",
            editVisible:false,
            detailId:"",
            detailVisible:false,
            params:{name:""},
            units: {}
        };
    };

    componentDidMount(){
        this.getGoodsTypeList();
        this.getUnitList();
    };

    // 获取计量单位
    getUnitList=()=>{
        React.axios.post('api/wmsType/tmaterialtype/queryMaterialTypeList?number=unit',null,res=>{
            let obj = {};
            res.data.forEach(item=>{
                obj[item.id] = item.name;
            })
            this.setState({units: obj});
        })
    }

    /**
     * @todo 获取物料种类列表
     */
    getGoodsTypeList=()=>{
        React.axios.post("api/wmsType/tmaterialtype/queryMaterialTypeList?number="+React.enums.goodTypeCode,null,res=>{
            this.setState({goodsTypeList: res.data});
        });
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

    formRef = React.createRef();
    /**
     * @todo 重置搜索
     */
    reset = () => {
        this.formRef.current.resetFields();
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
    };

    /**
     * @todo 删除用户
     * @param {string} userId
     */
    delete = (id) => {
        React.message.confirm(
            "您确定想要删除此条数据？",
            () => {
                React.axios.post("api/wms/twarehousegoods/delete",[id],res => {
                    this.tableReload();
                });
            }
        );
    };

    render(){
        const {goodsTypeList,editId,editVisible,detailId,detailVisible} = this.state;

        const tableColumns = [
            {
                title:"物料名称",
                key:"name",
                dataIndex:"name",
            },
            {
                title:"编号",
                key:"number",
                dataIndex:"number",
            },
            {
                title:"物料种类",
                key:"gname",
                dataIndex:"gname",
            },
            {
                title:"品牌",
                key:"brand",
                dataIndex:"brand",
            },
            {
                title:"单价",
                key:"price",
                dataIndex:"price",
                render:(text,record) => {
                    return `${record.price}元/${this.state.units[record.unit]}`;
                },
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
                            <Button type="link" size="small"onClick={this.openDetail.bind(this,record.id)} authcode="inventory:goods:info" icon="info">详情</Button>
                            <Button type="link" size="small" onClick={this.openEdit.bind(this,record.id)} authcode="inventory:goods:update" icon="edit">修改</Button>
                            <Button type="link" size="small" danger onClick={this.delete.bind(this,record.id)} authcode="inventory:goods:delete" icon="delete">删除</Button>
                        </>
                    );
                },
            },
        ];

        return(
            <>
                <Space
                    direction="vertical"
                    style={{width:"100%"}}
                >
                    <Form
                        ref={this.formRef}
                        layout="inline"
                        onFinish={this.submit}
                        onReset={this.reset}
                    >
                        <Form.Item name="name">
                            <Input placeholder="物料名称"/>
                        </Form.Item>
                        <Form.Item name="number">
                            <Input placeholder="物料编号"/>
                        </Form.Item>
                        <Form.Item name="gtype">
                            <Select placeholder="物料种类" style={{width: '174px'}} allowClear>
                                {goodsTypeList.map(res=><Select.Option key={res.id} value={res.id}>{res.name}</Select.Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="reset" icon="chongzhi">重置</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.openEdit.bind(this,"")} authcode="inventory:goods:save" icon="add">新增</Button>
                        </Form.Item>
                    </Form>
                    <Table
                        rowKey="id"
                        onRef={ref=>this.tableRef = ref}
                        columns={tableColumns}
                        method="get"
                        url="api/wms/twarehousegoods/list"
                    />
                    {editVisible && <Edit id={editId} close={this.closeEdit} tableReload={this.tableReload}/>}
                    {detailVisible && <Detail id={detailId} close={this.closeDetail} tableReload={this.tableReload}/>}
                </Space>
            </>
        );
    };
};
export default List;