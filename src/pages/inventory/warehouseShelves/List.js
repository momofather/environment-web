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
            area: {},
            shelvesList: [],
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
        this.getAreaInfo();
    }

    getAreaInfo=()=>{
        React.axios.get(`api/wms/twarehouselocation/info/${this.props.match.params.warehouseLocationId}`,{},res=>{
            this.setState({area: res.data});
            this.getList();
        })
    }

    // 获取货架
    getList=()=>{
        React.axios.get('api/wms/twarehouseshelves/getLocationShelves/',{locationNumber: this.state.area.number,params:{}},res=>{
            this.setState({shelvesList: res.data});
        })
    }

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
        this.formRef.current.resetFields();
        this.tableRef.reload(this.formRef.current.getFieldsValue(true));
    };

    /**
     * @todo 打开编辑
     * @param editId
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

    // 关闭详情
    closeDetail = () => {
        this.setState({detailVisible:false,detailUserId:""});
    };

    // 删除
    delete = (record) => {
        React.message.confirm(
            "您确定想要删除此条数据？",
            () => {
                React.axios.post(`api/wms/twarehouseshelves/delete?id=${record.id}&shelvesNumber=${record.number}`,null,res => {
                    this.getList();
                });
            }
        );
    };


    render(){
        const {editId,editVisible,detailId,detailVisible} = this.state;

        const tableColumns = [
            {
                title:"货架名称",
                key:"name",
                dataIndex:"name",
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
                title:"所在区域",
                key:"locationName",
                dataIndex:"locationName",
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
                    <Button type="link" size="small" onClick={this.openDetail.bind(this,record.id)} authcode="inventory:warehouseShelves:info" icon="info">详情</Button>
                    <Button type="link" size="small" onClick={this.openEdit.bind(this,record.id)} authcode="inventory:warehouseShelves:update" icon="edit">修改</Button>
                    <Button type="link" size="small" danger onClick={this.delete.bind(this,record)} authcode="inventory:warehouseShelves:delete" icon="delete">删除</Button>
                </>
            },
        ];

        return(
            <>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={`/${React.Version}/inventory/warehouse/list`}>仓库管理</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/${React.Version}/inventory/warehouseLocation/list/${this.props.match.params.warehouseId}`}>{this.state.area.houseName}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {this.state.area.name}
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
                        <Input placeholder="货架名称"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" icon="chongzhi">重置</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.openEdit.bind(this,"")} authcode="inventory:warehouseShelves:save" icon="add">新增</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={()=>{this.props.history.goBack()}} icon="back">返回</Button>
                    </Form.Item>
                </Form>
                
                {this.state.area.number&&<Table
                    rowKey="id"
                    columns={tableColumns}
                    data={this.state.shelvesList}
                    pager={false}
                />}
                {editVisible && <Edit id={editId} areaNumber={this.state.area.number} wareHorseNumber={this.state.area.houseNumber} close={this.closeEdit} tableReload={this.getList}/>}
                {detailVisible && <Detail id={detailId} close={this.closeDetail}/>}
            </>
        );
    };
};
export default List;