import React,{Component} from "react";
import {Modal,InputNumber,Breadcrumb,Divider} from "antd";

import Table from "@/components/table";
import Button from "@/components/button";

class SelectGoods extends Component{
    constructor(props){
        super(props);
        this.state={
            houseList:[],
            selectedRowKeys:[],
            selectedRows:[],
            inventoryList:[],
            units: {}
        };
    };

    formRef = React.createRef();

    componentDidMount(){
        this.getUnitList();
        this.setState({selectedRowKeys:this.props.ids,selectedRows:this.props.list});
        React.axios.get("api/wms/twarehouse/list",null,res => {
            this.setState({houseList:res.data.data})
        });
        React.axios.get("api/wms/twarehousestock/list",null,res => {
            this.setState({inventoryList:res.data.data});
        });
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

    onOk = () => {
        const {selectedRowKeys,selectedRows} = this.state;
        this.props.close(selectedRowKeys,selectedRows);
    };

    /**
     * 关闭模态框
     */
    onClose = () => {
        this.props.close();
    };

    selectGoods = (selectedRow) => {
        let {selectedRowKeys,selectedRows} = this.state;
        if(selectedRow.selected){
            selectedRowKeys.push(selectedRow.id);
            let selectedGoods = {};
            selectedGoods.inventoryId = selectedRow.id;
            selectedGoods.name = selectedRow.name;
            selectedGoods.number = selectedRow.number;
            selectedGoods.gname = selectedRow.gname;
            selectedGoods.gtype = selectedRow.gtype;
            selectedGoods.price = selectedRow.price;
            selectedGoods.unit = selectedRow.unit;
            selectedGoods.maxNum = selectedRow.num;
            selectedGoods.num = 1;
            selectedGoods.totalprice = selectedRow.price;
            selectedGoods.houseName = selectedRow.houseName;
            selectedGoods.houseNumber = selectedRow.houseNumber;
            selectedGoods.locationName = selectedRow.locationName;
            selectedGoods.locationNumber = selectedRow.locationNumber;
            selectedGoods.shelvesName = selectedRow.shelvesName;
            selectedGoods.shelvesNumber = selectedRow.shelvesNumber;
            selectedRows.push(selectedGoods);
            let goodsList = [];
            selectedRows.forEach((item) => {
                goodsList.push(item);
            });
            this.setState({selectedRowKeys,selectedRows:goodsList});
        }else{
            let deleteKeysIndex = selectedRowKeys.indexOf(selectedRow.id);
            let delectRowsIndex = 0;
            selectedRows.forEach((item,index) => {
                if(item.inventoryId === selectedRow.id){
                    delectRowsIndex = index;
                };
            });
            console.log(delectRowsIndex);
            selectedRowKeys.splice(deleteKeysIndex,1);
            selectedRows.splice(delectRowsIndex,1);
            let goodsList = [];
            selectedRows.forEach((item) => {
                goodsList.push(item);
            });
            this.setState({selectedRowKeys,selectedRows:goodsList});
        };
    };

    /**
     * @todo 改变物料数量
     */
     chageNum = (index,value) => {
        let {selectedRows} = this.state;
        selectedRows[index].num = value;
        selectedRows[index].totalprice = selectedRows[index].num * selectedRows[index].price;
        this.setState({selectedRows});
        // this.getTotalPrice();
    };

    /**
     * @todo 删除物料
     */
     deleteGoods = (index) => {
        let {selectedRows} = this.state;
        let newGoodsList = [];
        selectedRows.splice(index,1);
        selectedRows.forEach((item) => {
            newGoodsList.push(item);
        });
        this.setState({selectedRows:newGoodsList});
    };

    render(){
        const {selectedRowKeys,inventoryList} = this.state;

        const columns = [
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
                title:"库存数量",
                key:"num",
                dataIndex:"num",
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
                title:"所在位置",
                render:(text,record) =>
                    <Breadcrumb>
                        <Breadcrumb.Item>{record.houseName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{record.locationName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{record.shelvesName}</Breadcrumb.Item>
                    </Breadcrumb>
                ,
            },
            {
                title:"备注",
                key:"remark",
                dataIndex:"remark",
            },
        ];

        const selectedTableColumns = [
            {
                title:"物料编号",
                key:"number",
                dataIndex:"number",
            },
            {
                title:"物料名称",
                key:"name",
                dataIndex:"name",
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
                title:"出库位置",
                render:(text,record) =>
                    <Breadcrumb>
                        <Breadcrumb.Item>{record.houseName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{record.locationName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{record.shelvesName}</Breadcrumb.Item>
                    </Breadcrumb>
                ,
            },
            {
                title:"数量",
                render:(text,record,index) => <InputNumber value={record.num} onChange={this.chageNum.bind(this,index)} min={1} max={record.maxNum}/>,
            },
            {
                title:"金额",
                key:"totalprice",
                dataIndex:"totalprice",
            },
            {
                title:"操作",
                width:"100px",
                render:(text,record,index) => {
                    return(
                        <>
                            <Button type="link" size="small" danger onClick={this.deleteGoods.bind(this,index)}><span className="iconfont icon-shanchudefuben"/>删除</Button>
                        </>
                    );
                },
            },
        ];

        return(
            <Modal
                title="选择物料"
                visible={true}
                onOk={this.onOk}
                onCancel={this.onClose}
                width={1080}
                maskClosable={false}
            >
                {this.state.inventoryList.length !== 0 &&
                    <Table
                    rowKey="id"
                    columns={columns}
                    data={inventoryList}
                    number={false}
                    selectedRowKeys={selectedRowKeys}
                    onSelectKeys={() => {}}
                    onSelect={this.selectGoods}
                />
                }
                <Divider orientation="left">已选择</Divider>
                <Table
                    rowKey="inventoryId"
                    columns={selectedTableColumns}
                    data={this.state.selectedRows}
                    number={false}
                />
            </Modal>
        );
    };
};
export default SelectGoods;