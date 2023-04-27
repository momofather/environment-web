import React,{Component} from "react";
import {Form,Input} from "antd";
import Button from "@/components/button";
import Table from "@/components/table";

import Edit from "./components/Edit";
import Detail from "./components/Detail";
import XLSX from 'xlsx';

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
            params:{name:""},
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
    }
    
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
        this.props.history.push(`/${React.Version}/inventory/goodsChecking/detail/`+detailId);
    };
    /**inventory/goodsChecking/detail/:id
     * @todo 关闭详情
     */
    closeDetail = () => {
        this.setState({detailVisible:false,detailUserId:""});
    };

    /**
     * @todo 打开编辑模态框
     */
    toLaunch = (id) => {
        if(id)this.props.history.push(`/${React.Version}/inventory/goodsChecking/launchCheck/${id}`);
        else this.props.history.push(`/${React.Version}/inventory/goodsChecking/launchCheck`);
        
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
    delete = (id) => {
        React.message.confirm(
            "您确定想要删除此条数据？",
            () => {
                React.axios.post("api/wms/twarehousebill/delete",[id],res => {
                    this.tableRef.reload();
                });
            }
        );
    };
    // 导出
    exportExcel=(id)=>{
        React.axios.get("api/wms/twarehousebill/info/"+id,"",res => {
            debugger
            let list = res.data.wareinventoryStockEntity;
            let data = this.forMarData({
                number: '物料编号',
                name: '物料编号',
                price: '单价',
                address: '存放位置',
                num: '库存数量',
                totalMoney: '金额',
                countNum: '盘点数量'
            },list);
            let worksheet = XLSX.utils.aoa_to_sheet(data);
            let new_workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(new_workbook, worksheet, "人员信息");
            XLSX.writeFile(new_workbook, "盘点.xlsx"); 
        });
    };
    // 处理导出数据
    forMarData=(res, result)=>{
        let data = [];
        let header = [];
        for(let key in res){
            header.push(res[key]);
        }
        data.push(header);
        for(let i in result){
            let source = [];
            for(let key in res){
                if(key === 'price'){
                    source.push(result[i][key]+'元/'+this.state.units[result[i].unit]);
                }else if(key === 'address'){
                    source.push(result[i].houseName+'/'+result[i].locationName+'/'+result[i].shelvesName);
                }else if(key === 'totalMoney'){
                    source.push(result[i].price*+result[i].num+'元');
                }else{
                    source.push(result[i][key]);
                }
            }
            data.push(source);
        }
        return data;
    }

    render(){
        const {editId,editVisible,detailId,detailVisible} = this.state;

        const tableColumns = [
            {
                title:"单据编号",
                key:"number",
                dataIndex:"number",
                align: 'center',
            },
            {
                title:"盘点日期",
                key:"housedate",
                dataIndex:"housedate",
                align: 'center',
            },
            {
                title:"盘点方式",
                key:"houseName",
                dataIndex:"houseName",
                align: 'center',
                render:(text,record) => <>{React.enums.deliverymodes[record.deliverymode]}</>
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
                width:"270px",
                align: 'center',
                render:(text,record) => <>
                    <Button type="link" size="small" onClick={this.toLaunch.bind(this,record.id)} authcode="inventory:inWarehouse:update" icon="edit">修改</Button>
                    <Button type="link" size="small" onClick={this.exportExcel.bind(this,record.id)} authcode="inventory:inWarehouse:info" icon="info">导出</Button>
                    <Button type="link" size="small" onClick={this.openDetail.bind(this,record.id)} authcode="inventory:inWarehouse:info" icon="info">详情</Button>
                    <Button type="link" size="small" danger onClick={this.delete.bind(this,record.id)} authcode="inventory:inWarehouse:delete" icon="delete">删除</Button>
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
                    <Form.Item name="number">
                        <Input placeholder="单据编号"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" icon="chongzhi">重置</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.toLaunch.bind(this,null)} authcode="inventory:goodsChecking:save" icon="add">新增</Button>
                    </Form.Item>
                </Form>
                <Table
                    rowKey="id"
                    onRef={ref=>this.tableRef = ref}
                    columns={tableColumns}
                    method="get"
                    url="api/wms/twarehousebill/list?type=4"
                />
                {editVisible && <Edit id={editId} close={this.closeEdit} tableReload={this.tableReload}/>}
                {detailVisible && <Detail id={detailId} close={this.closeDetail} tableReload={this.tableReload}/>}
            </>
        );
    };
};
export default List;