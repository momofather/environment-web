import React,{Component} from "react";
import {Descriptions,Tabs,Breadcrumb} from "antd";
import Button from "@/components/button";
import Table from "@/components/table";

class Detail extends Component{
    constructor(props){
        super(props);
        this.state= {
            info:{},
            recordList:[],
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        new Promise((reslove,reject) => {
            React.axios.get("api/wms/twarehousestock/info/"+this.props.match.params.id,null,res => {
                this.setState({info:res.data});
                reslove(res.data);
            });
        }).then((info) => {
            React.axios.post(`api/wms/twarehousestock/getRecords?type=2&number=${info.number}&houseNumber=${info.houseNumber}&locationNumber=${info.locationNumber}&shelvesNumber=${info.shelvesNumber}`,null,res => {
                this.setState({recordList:res.data});
            });
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

    /**
     * @todo 改变tabs
     */
    changeTabs = (e) => {
        const {info} = this.state;
        React.axios.post(`api/wms/twarehousestock/getRecords?type=${e}&number=${info.number}&houseNumber=${info.houseNumber}&locationNumber=${info.locationNumber}&shelvesNumber=${info.shelvesNumber}`,null,res => {
            this.setState({recordList:res.data});
        });
    };

    render(){
        const {info} = this.state;

        const inTableColumns = [ //入库列表
            {
                title:"入库编号",
                key:"number",
                dataIndex:"number",
                width:"200px",
                align: 'center',
            },
            {
                title:"入库数量",
                key:"num",
                dataIndex:"num",
                align: 'center',
            },
            {
                title:"金额",
                key:"totalprice",
                dataIndex:"totalprice",
                align: 'center',
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
        ];

        const outTableColumns = [
            {
                title:"出库编号",
                key:"number",
                dataIndex:"number",
                width:"200px",
                align: 'center',
            },
            {
                title:"出库数量",
                key:"num",
                dataIndex:"num",
            },
            {
                title:"金额",
                key:"totalprice",
                dataIndex:"totalprice",
            },
            {
                title:"出库日期",
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
            }
        ];

        const moveTableColumns = [
            {
                title:"单据编号",
                key:"number",
                dataIndex:"number",
                width: '200px',
                align: 'center',
            },
            {
                title:"出库位置",
                render: (txt,res) => <Breadcrumb>
                    <Breadcrumb.Item>{res.houseName}</Breadcrumb.Item>
                    <Breadcrumb.Item>{res.locationName}</Breadcrumb.Item>
                    <Breadcrumb.Item>{res.shelvesName}</Breadcrumb.Item>
                </Breadcrumb>
            },
            {
                title:"入库位置",
                render: (txt,res) => <Breadcrumb>
                    <Breadcrumb.Item>{res.thouseName}</Breadcrumb.Item>
                    <Breadcrumb.Item>{res.tlocationName}</Breadcrumb.Item>
                    <Breadcrumb.Item>{res.tshelvesName}</Breadcrumb.Item>
                </Breadcrumb>
            },
            {
                title:"数量",
                key:"num",
                dataIndex:"num",
                align: 'center',
                width:"100px",
            },
            {
                title:"经手人",
                key:"username",
                dataIndex:"username",
                align: 'center',
                width:"100px",
            },
            {
                title:"调拨日期",
                key:"housedate",
                dataIndex:"housedate",
                align: 'center',
                width:"100px",
            },
            {
                title:"备注",
                key:"remark",
                dataIndex:"remark",
            }
        ];

        return(
            <>
                <Descriptions
                    title="物料信息"
                >
                    <Descriptions.Item label="物料名称">{info.name}</Descriptions.Item>
                    <Descriptions.Item label="编号">{info.number}</Descriptions.Item>
                    <Descriptions.Item label="物料种类">{info.gname}</Descriptions.Item>
                    <Descriptions.Item label="所在位置">{info.houseName}</Descriptions.Item>
                    <Descriptions.Item label="库存数量">{info.num}（{this.state.units[info.unit]}）</Descriptions.Item>
                    <Descriptions.Item label="单价">{info.price}（元）</Descriptions.Item>
                </Descriptions><br/>
                <Descriptions
                    title="操作信息"
                >
                    <Descriptions.Item span={3}>
                        <Tabs defaultActiveKey="2" style={{width:"100%"}} onChange={this.changeTabs}>
                            <Tabs.TabPane tab="入库记录" key="2">
                                <Table
                                    rowKey="id"
                                    onRef={ref=>this.tableRef = ref}
                                    columns={inTableColumns}
                                    data={this.state.recordList}
                                    number={false}
                                />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="出库记录" key="1">
                                <Table
                                    rowKey="id"
                                    onRef={ref=>this.tableRef = ref}
                                    columns={outTableColumns}
                                    data={this.state.recordList}
                                    number={false}
                                />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="调拨记录" key="3">
                                <Table
                                    rowKey="id"
                                    onRef={ref=>this.tableRef = ref}
                                    columns={moveTableColumns}
                                    data={this.state.recordList}
                                    number={false}
                                />
                            </Tabs.TabPane>
                        </Tabs>
                    </Descriptions.Item>
                </Descriptions><br/><br/>
                <div align="center">
                    <Button onClick={()=>{this.props.history.goBack()}} icon="back">返回</Button>
                </div>
            </>
        );
    };
};
export default Detail;