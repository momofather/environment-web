// 调拨待办
import React,{Component} from "react";
import {Card,Form,Row,Col,Space} from "antd";

import Button from "@/components/button";

class Allocation extends Component{
    constructor(props){
        super(props);
        this.state={
            info: null,
            userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
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
    getInfo = () => {
        React.axios.get(`api/wms/twarehouseallocation/info/${this.props.match.params.id}`,{},res=>{
            this.setState({info: res.data});
        })
    }

    // 确认出库
    delivery = () => {
        React.axios.get(`msg/tmessage/checkOutHouse/${this.props.match.params.id}`,{},res=>{
            React.message.success('操作成功');
            this.getInfo();
        })
    }

    // 确认入库
    warehousing = () => {
        React.axios.get(`msg/tmessage/checkInHouse/${this.props.match.params.id}`,{},res=>{
            React.message.success('操作成功');
            this.getInfo();
        })
    }

    render(){
        return(
            <Card title="调拨待办">
                {this.state.info&&<>
                    <Form
                        className="query-tools"
                        style={{width: '1000px',margin: '0 auto'}}
                    >
                        <Row>
                            <Col span={8}>
                                <Form.Item
                                    label="物料名称"
                                >
                                    {this.state.info.name}
                                </Form.Item>
                                <Form.Item
                                    label="调拨数量"
                                >
                                    {this.state.info.num}{this.state.units[this.state.info.unit]}
                                </Form.Item>
                                <Form.Item
                                    label="调出仓库"
                                >
                                    {this.state.info.houseName}
                                </Form.Item>
                                <Form.Item
                                    label="调入仓库"
                                >
                                    {this.state.info.thouseName}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="物料编号"
                                >
                                    {this.state.info.name}
                                </Form.Item>
                                <Form.Item
                                    label="总价"
                                >
                                    {this.state.info.totalprice}元
                                </Form.Item>
                                <Form.Item
                                    label="区域"
                                >
                                    {this.state.info.locationName}
                                </Form.Item>
                                <Form.Item
                                    label="区域"
                                >
                                    {this.state.info.tlocationName}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="物料单价"
                                >
                                    {this.state.info.price}元/{this.state.units[this.state.info.unit]}
                                </Form.Item>
                                <Form.Item
                                    label="调拨状态"
                                >
                                    {React.enums.allocationStatus[this.state.info.status]}
                                </Form.Item>
                                <Form.Item
                                    label="货架"
                                >
                                    {this.state.info.shelvesName}
                                </Form.Item>
                                <Form.Item
                                    label="货架"
                                >
                                    {this.state.info.tshelvesName}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                    <div align="center">
                        <Space>
                        {(this.state.info.status==='1'&&this.state.userInfo.userId===this.state.info.husername)&&<Button type="primary" onClick={this.delivery}>确认出库</Button>}
                        {(this.state.info.status==='2'&&this.state.userInfo.userId===this.state.info.thusername)&&<Button type="primary" onClick={this.warehousing}>确认入库</Button>}
                        <Button onClick={()=>{this.props.history.goBack()}}>返回</Button>
                        </Space>
                    </div>
                </>}
            </Card>
        );
    };
};
export default Allocation;