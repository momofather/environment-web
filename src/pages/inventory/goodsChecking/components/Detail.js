import React,{Component} from "react";
import {Form,Row,Col,Breadcrumb} from "antd";
import Table from "@/components/table";
import Button from "@/components/button";

class Detail extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            info: null,
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        React.axios.get("api/wms/twarehousebill/info/"+this.props.match.params.id,"",res => {
            this.setState({info: res.data});
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

    render(){
        const tableColumns = [
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
                title:"存放位置",
                render:(text,record) =>
                    <Breadcrumb>
                        <Breadcrumb.Item>{record.houseName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{record.locationName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{record.shelvesName}</Breadcrumb.Item>
                    </Breadcrumb>
            },
            {
                title:"库存数量",
                key:"num",
                dataIndex:"num",
                align: 'center',
            },
            {
                title:"金额",
                align: 'center',
                render:(text,record) => {
                    return `${record.price*record.num}元`;
                },
            },
            {
                title:"盘点数量",
                align: 'center',
                key: 'countNum',
                dataIndex: 'countNum'
            },
            {
                title:"盈",
                align: 'center',
                render:(text,record) => {
                    return record.num-record.countNum>0&&record.countNum!==null?record.num-record.countNum:0;
                },
            },
            {
                title:"亏",
                align: 'center',
                render:(text,record) => {
                    return record.countNum-record.num>0&&record.countNum!==null?record.countNum-record.num:0;
                },
            },
        ];

        return(
            <>
                {this.state.info&&<>
                    <Form
                        labelCol={{span: 5}}
                    >
                        <Row>
                            <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                                <Form.Item
                                    label="标题"
                                >
                                    {this.state.info.name}
                                </Form.Item>
                            </Col>
                            <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                                <Form.Item label="负责人">
                                    {this.state.info.username}
                                </Form.Item>
                            </Col>
                            <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                                <Form.Item label="备注">
                                    {this.state.info.remark}
                                </Form.Item>
                            </Col>
                            <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                                <Form.Item label="盘点日期">
                                    {this.state.info.housedate}
                                </Form.Item>
                            </Col>
                            <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                                <Form.Item label="盘点方式">
                                    {React.enums.deliverymodes[this.state.info.deliverymode]}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    
                    <Table
                        rowKey="id"
                        columns={tableColumns}
                        data={this.state.info.wareinventoryStockEntity}
                        pager={false}
                    />
                </>}
                <br/><br/>
                <div align="center">
                    <Button icon="back" onClick={this.props.history.goBack}>返回</Button>
                </div>
            </>
        );
    };
};
export default Detail;