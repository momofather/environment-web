import React,{Component} from "react";
import {Form,Input,Breadcrumb} from "antd";
import Button from "@/components/button";
import Table from "@/components/table";

import Edit from "./components/Edit";
import Detail from "./components/Detail";

import {Link} from "react-router-dom";

class List extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state= {
            wareHourse: {},
            eidtId:"",
            eidtVisible:false,
            detailId:"",
            detailVisible:false,
            goodsId:"",
            way:"",
            changeGoodsVisible:false,
            params:{name:""},
        };
    };

    componentDidMount(){
        this.getWareHouseInfo();
    }

    // 查询仓库信息
    getWareHouseInfo=()=>{
        React.axios.get(`api/wms/twarehouse/info/${this.props.match.params.id}`,{},res=>{
            this.setState({wareHourse: res.data});
        })
    }

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
     * @todo 打开编辑
     * @param eidtId
     */
    openEdit = (editId) => {
        this.setState({editVisible:true,editId});
    };
    /**
     * @todo 关闭编辑
     */
    closeEdit = () => {
        this.setState({editVisible:false,eidtId:""});
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
     * @todo 打开出库入库
     * @param goodsId
     * @param way
     */
    openChangeGoods = (goodsId,way) => {
        this.setState({changeGoodsVisible:true,goodsId,way});
    };
    /**
     * @todo 关闭出库入库
     */
    closeChangeGoods = () => {
        this.setState({changeGoodsVisible:false,goodsId:"",way:""});
    };

    /**
     * @todo 删除用户
     * @param {string} userId
     */
    delete = (record) => {
        React.message.confirm(
            "您确定想要删除此条数据？",
            () => {
                React.axios.post(`api/wms/twarehouselocation/delete?id=${record.id}&locationNumber=${record.number}`,null,() => {
                    this.tableReload();
                });
            }
        );
    };


    render(){
        const {editId,editVisible,detailId,detailVisible} = this.state;

        const tableColumns = [
            {
                title:"区域名称",
                render:(text,record) => <Link to={`/${React.Version}/inventory/warehouseShelves/list/${this.props.match.params.id}/${record.id}`}>{record.name}</Link>
            },
            {
                title:"编号",
                key:"number",
                dataIndex:"number",
            },
            {
                title:"所在仓库",
                key:"houseName",
                dataIndex:"houseName",
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
                            <Button type="link" size="small" onClick={this.openDetail.bind(this,record.id)} authcode="inventory:warehouseLocation:info" icon="info">详情</Button>
                            <Button type="link" size="small" onClick={this.openEdit.bind(this,record.id)} authcode="inventory:warehouseLocation:update" icon="edit">修改</Button>
                            <Button type="link" size="small" onClick={this.delete.bind(this,record)} authcode="inventory:warehouseLocation:delete" danger icon="delete">删除</Button>
                        </>
                    );
                },
            },
        ];

        return(
            <>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={`/${React.Version}/inventory/warehouse/list`}>仓库管理</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {this.state.wareHourse.name}
                    </Breadcrumb.Item>
                </Breadcrumb><br/>
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
                        <Input placeholder="区域名称"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" icon="chongzhi">重置</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.openEdit.bind(this,"")} authcode="inventory:warehouseLocation:save" icon="add">新增</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={()=>{this.props.history.goBack()}} icon="back">返回</Button>
                    </Form.Item>
                </Form>
                {this.state.wareHourse.number&&<Table
                    rowKey="id"
                    onRef={ref=>this.tableRef = ref}
                    columns={tableColumns}
                    method="get"
                    url={`api/wms/twarehouselocation/list?houseNumber=${this.state.wareHourse.number}`}
                />}
                
                {editVisible && <Edit id={editId} wareHourseHumber={this.state.wareHourse.number} close={this.closeEdit} tableReload={this.tableReload}/>}
                {detailVisible && <Detail id={detailId} close={this.closeDetail}/>}
            </>
        );
    };
};
export default List;