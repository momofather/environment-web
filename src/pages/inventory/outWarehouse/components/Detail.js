import React,{Component} from "react";
import {Modal,Form,Row,Col,Divider,Table,Breadcrumb} from "antd";

class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            info:{},
            outMothedList:[],
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        const {id} = this.props;
        React.axios.post("api/wmsType/tmaterialtype/queryMaterialTypeList?number="+React.enums.outMethodCode,null,res => {
            this.setState({outMothedList:res.data});
        });
        if(id){
            React.axios.get("api/wms/twarehousebill/info/"+id,"",res => {
                this.setState({info:res.data});
            });
        };
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
     * @todo 关闭组件
     */
    close = () => {
        const {close} = this.props;
        close();
    };

    render(){
        const {info,outMothedList} = this.state;

        const formLayout={
            labelCol:{
                xs:{span:24},
                sm:{span:24},
                md:{span:10},
                lg:{span:8},
                xl:{span:6},
            },
            wrapperCol:{
                xs:{span:24},
                sm:{span:24},
                md:{span:14},
                lg:{span:16},
                xl:{span:18},
            }
        };

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
                key:"num",
                dataIndex:"num",
            },
            {
                title:"金额",
                key:"totalprice",
                dataIndex:"totalprice",
            },
        ];

        return(
            <Modal
                title="出库详情"
                visible={true}
                onOk={this.props.close}
                onCancel={this.props.close}
                width={1080}
                maskClosable={false}
                footer=""
            >
                <Form
                    {...formLayout}
                    ref={this.formRef}
                >
                    <Row>
                        <Col span={12}>
                            <Form.Item label="标题">
                                {info.name}
                            </Form.Item>
                            <Form.Item
                                label="经手人"
                            >
                                {info.username}
                            </Form.Item>
                            <Form.Item
                                label="备注"
                            >
                                {info.remark}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="出库日期"
                            >
                                {info.housedate}
                            </Form.Item>
                            <Form.Item
                                label="出库方式"
                            >
                                {outMothedList.map((item) => {
                                    if(item.id === info.deliverymode){
                                        return item.name;
                                    }else{
                                        return "";
                                    };
                                })}
                            </Form.Item>
                            <Form.Item
                                label="出库编号"
                            >
                                {info.number}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider/>
                    <Table
                        rowKey="id"
                        columns={tableColumns}
                        dataSource={info.warehouseOutorderEntity}
                        paganizition={false}
                        footer={() => "总金额："+info.totalprice}
                    />
                </Form>
            </Modal>
        );
    };
};
export default Detail;