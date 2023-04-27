import React,{Component} from "react";
import {Card,Form,Breadcrumb} from "antd";

import Button from "@/components/button";
import Table from '@/components/table';

class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            info: null,
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        this.getInfo();
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

    // 获取详情
    getInfo=()=>{
        React.axios.get(`api/wms/twarehousebill/info/${this.props.match.params.id}`,{},res=>{
            this.setState({info: res.data});
        })
    }

    render(){
        const tableColumns = [
            {
                title:"物料名称",
                key:"name",
                dataIndex:"name"
            },
            {
                title:"物料编号",
                key:"number",
                dataIndex:"number",
                width: '100px',
                align: 'center',
            },
            {
                title:"单价",
                align: 'center',
                width: '120px',
                render:(text,record) => <>{record.price?record.price+'元/'+this.state.units[record.unit]:''}</>
            },
            {
                title:"调拨数量",
                width: '100px',
                align: 'center',
                key:"num",
                dataIndex:"num"
            },
            {
                title:"金额(元)",
                key:"totalprice",
                dataIndex:"totalprice",
                align: 'center',
                width: '100px',
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
                title:"状态",
                align: 'center',
                width: '80px',
                render: (txt,record)=><>{React.enums.allocationStatus[record.status]}</>
            },
            {
                title:"出库时间",
                key: 'outTime',
                dataIndex: 'outTime',
                align: 'center',
                width: '170px',
            },
            {
                title:"入库时间",
                key: 'inTime',
                dataIndex: 'inTime',
                align: 'center',
                width: '170px',
            },
            {
                title:"备注",
                key:"remark",
                dataIndex:"remark"
            }
        ];

        return(
            <Card title="调拨详情">
                {this.state.info&&<>
                    <Form
                        layout="inline"
                        className="query-tools"
                    >
                        <Form.Item
                            label="单据编号"
                            style={{marginRight: '40px'}}
                        >
                            {this.state.info.number}
                        </Form.Item>
                        <Form.Item
                            label="调拨日期"
                            style={{marginRight: '40px'}}
                        >
                            {this.state.info.housedate}
                        </Form.Item>
                        <Form.Item
                            label="负责人"
                            style={{marginRight: '40px'}}
                        >
                            {this.state.info.username}
                        </Form.Item>
                        <Form.Item
                            label="备注"
                        >
                            {this.state.info.remark}
                        </Form.Item>
                    </Form>
                    <Table
                        rowKey="id"
                        columns={tableColumns}
                        data={this.state.info.warehouseAllocationEntity}
                        pager={false}
                        number={false}
                    /><br/>

                    <div align="center">
                        <Button onClick={()=>{this.props.history.goBack()}} icon="back">返回</Button>
                    </div>
                </>}
            </Card>
        );
    };
};
export default Detail;