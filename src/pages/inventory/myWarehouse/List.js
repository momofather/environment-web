import React,{Component} from "react";
import {Form,Input} from "antd";
import Button from "@/components/button";
import Table from "@/components/table";

import Detail from "./components/Detail";
import ChangeGoods from "./components/ChangeGoods";

class List extends Component{
    constructor(props){
        super(props);
        this.state= {
            detailId:"",
            detailVisible:false,
            goodsId:"",
            way:"",
            changeGoodsVisible:false,
            params:{name:""},
        };
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


    render(){
        const {detailId,detailVisible,goodsId,way,changeGoodsVisible} = this.state;

        const tableColumns = [
            {
                title:"物料名称",
                key:"name",
                dataIndex:"name",
            },
            {
                title:"种类",
                key:"type",
                dataIndex:"type",
            },
            {
                title:"库存/(件)",
                key:"number",
                dataIndex:"number",
            },
            {
                title:"操作",
                width:"200px",
                render:(text,record) => {
                    return(
                        <>
                            <Button type="link" size="small" onClick={this.openDetail.bind(this,record.warehouseId)}><span className="iconfont icon-icon_huabanfuben"/>详情</Button>
                            <Button type="link" size="small" onClick={this.openChangeGoods.bind(this,record.id,"in")}><span className="iconfont icon-ruku"/>入库</Button>
                            <Button type="link" size="small" onClick={this.openChangeGoods.bind(this,record.id,"out")}><span className="iconfont icon-chuku"/>出库</Button>
                        </>
                    );
                },
            },
        ];

        const data=[
            {
                id:"1",
                name:"木材",
                type:"建筑材料",
                number:"100",
                description:"测试"
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
                        name="warehousename"
                        initialValue=""
                    >
                        <Input placeholder="物料名称"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" icon="chongzhi">重置</Button>
                    </Form.Item>
                </Form>
                {/*<Divider/>*/}
                {/*<Button type="primary" onClick={this.openEdit.bind(this,"")}><span className="iconfont icon-tianjia"/>新增物料</Button>*/}
                <Table
                    rowKey="id"
                    onRef={ref=>this.Table = ref}
                    columns={tableColumns}
                    data={data}
                    // method="get"
                    // url="sys/user/list"
                    // selectedRowKeys={selectedRowKeys}
                    // onSelectKeys={(selectedRowKeys) => {
                    //     this.setState({selectedRowKeys});
                    // }}
                />
                {detailVisible && <Detail warehouseId={detailId} close={this.closeDetail}/>}
                {changeGoodsVisible && <ChangeGoods goodsId={goodsId} way={way} close={this.closeChangeGoods}/>}
            </>
        );
    };
};
export default List;