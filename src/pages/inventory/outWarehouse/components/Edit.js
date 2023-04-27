import React,{Component} from "react";
import {Modal,Form,Input,Select,Row,Col,DatePicker,Space,Table,InputNumber,Breadcrumb} from "antd";
import moment from "moment";

import Button from "@/components/button";

import SelectGoods from "./SelectGoods";

class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            username:"",
            userList:[],
            selectGoodsVisible:false,
            goodsIds:[],
            goodsList:[],
            outMothedList:[],
            totalprice:0,
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        const {id} = this.props;
        React.axios.get("api/wms/twarehouse/list?limit=1000&page=1","",res => {
            this.setState({warehouseList:res.data.data});
        });
        React.axios.get("sys/user/list","",res => {
            this.setState({userList:res.data.data});
        });
        React.axios.post("api/wmsType/tmaterialtype/queryMaterialTypeList?number="+React.enums.outMethodCode,null,res => {
            this.setState({outMothedList:res.data});
        });
        if(id){
            React.axios.get("api/wms/twarehousebill/info/"+id,"",res => {
                let goodsIds = [];
                if(res.data.warehouseOutorderEntity){
                    res.data.warehouseOutorderEntity.forEach((item) => {
                        goodsIds.push(item.id);
                    });
                };
                this.setState({
                    housename:res.data.housename,
                    goodsIds,
                    goodsList:res.data.warehouseOutorderEntity ? (res.data.warehouseOutorderEntity) : ([]),totalprice:res.data.totalprice,
                    number: res.data.number
                });
                this.formRef.current.setFieldsValue({...res.data,housedate:moment(res.data.housedate)});
            });
        }else{
            this.formRef.current.setFieldsValue({housedate:moment()});
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
     * @todo 提交表单
     */
    submit = () => {
        const {id,tableReload} = this.props;
        const {username,goodsList,totalprice} = this.state;
        this.formRef.current.validateFields().then((values,errors) => {
            values.username = username;
            values.housedate = values.housedate.format("YYYY-MM-DD");
            values.totalprice = totalprice;
            values.number = this.state.number;
            values.warehouseOutorderEntity = goodsList;
            values.type = "1";
            React.axios.post(id ? ("/api/wms/twarehousebill/update") : ("/api/wms/twarehousebill/save"),{id,...values},res => {
                this.close();
                tableReload();
            });
        });
    };

    /**
     * @todo 关闭组件
     */
    close = () => {
        const {close} = this.props;
        close();
    };

    /**
     * @todo 打开选择物料模态框
     */
    openSelectGoods = () => {
        this.setState({selectGoodsVisible: true});
    };

    /**
     * @todo 关闭选择物料模态框
     */
    closeSelectGoods = (reGoodsIds,reGoodsList) => {
        if(reGoodsList){
            this.setState({selectGoodsVisible: false,goodsIds:reGoodsIds,goodsList:reGoodsList});
            let totalprice = 0;
            reGoodsList.forEach((item,index) => {
                totalprice += item.totalprice * 1;
            });
            this.setState({totalprice});
        }else{
            this.setState({selectGoodsVisible:false});
        };
    };

    /**
     * @todo 改变物料数量
     */
    chageNum = (index,value) => {
        let {goodsList} = this.state;
        goodsList[index].num = value;
        goodsList[index].totalprice = goodsList[index].num * goodsList[index].price;
        this.setState({goodsList});
        this.getTotalPrice();
    };

    /**
     * @todo 删除物料
     */
    deleteGoods = (index) => {
        let {goodsList} = this.state;
        let newGoodsList = [];
        goodsList.splice(index,1);
        goodsList.forEach((item) => {
            newGoodsList.push(item);
        });
        this.setState({goodsList:newGoodsList});
        this.getTotalPrice();
    };

    /**
     * @todo 获取总金额
     */
    getTotalPrice = () => {
        const {goodsList} = this.state;
        let totalprice = 0;
        goodsList.forEach((item,index) => {
            totalprice += item.totalprice * 1;
        });
        this.setState({totalprice});
    };

    render(){
        const {id} = this.props;
        const {userList,selectGoodsVisible,goodsList,outMothedList,totalprice} = this.state;

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
                render:(text,record) => `${record.price}元/${this.state.units[record.unit]}`
            },
            {
                title:"出库位置",
                render:(text,record) =>
                    <Breadcrumb>
                        <Breadcrumb.Item>{record.houseName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{record.locationName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{record.shelvesName}</Breadcrumb.Item>
                    </Breadcrumb>
            },
            {
                title:"数量",
                render:(text,record,index) => <InputNumber value={record.num} onChange={this.chageNum.bind(this,index)} min={0}/>,
            },
            {
                title:"金额",
                key:"totalprice",
                dataIndex:"totalprice",
            },
            {
                title:"操作",
                width:"100px",
                render:(text,record,index) => <Button type="link" size="small" danger onClick={this.deleteGoods.bind(this,index)} icon="delete">删除</Button>,
            },
        ];

        return(
            <Modal
                title={id ? ("修改出库信息") : ("添加出库")}
                visible={true}
                onOk={this.submit}
                onCancel={this.close}
                width={1080}
                maskClosable={false}
            >
                <Space
                    direction="vertical"
                    style={{width:"100%"}}
                >
                    <Form
                        {...formLayout}
                        ref={this.formRef}
                    >
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    label="标题"
                                    name="name"
                                    initialValue=""
                                    rules={[
                                        {required:true,message:"标题不能为空"}
                                    ]}
                                >
                                    <Input placeholder="标题"/>
                                </Form.Item>
                                <Form.Item
                                    label="经手人"
                                    name="userno"
                                    initialValue={[]}
                                    rules={[
                                        {required:true,message:"经手人不能为空"}
                                    ]}
                                >
                                    <Select
                                        placeholder="经手人"
                                        onChange={(value,event) => {this.setState({username:event.children})}}
                                    >
                                        {userList.map((item,index) => {
                                            return(
                                                <Select.Option
                                                    key={item.userId.toString()}
                                                    value={item.userId.toString()}
                                                >
                                                    {item.name}
                                                </Select.Option>
                                            );
                                        })}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="备注"
                                    name="remark"
                                    initialValue=""
                                >
                                    <Input.TextArea placeholder="100个字以内" maxLength={100}/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="出库日期"
                                    name="housedate"
                                    initialValue=""
                                    rules={[
                                        {required:true,message:"出库日期不能为空"}
                                    ]}
                                >
                                    <DatePicker style={{width:"100%"}}/>
                                </Form.Item>
                                <Form.Item
                                    label="出库方式"
                                    name="deliverymode"
                                    initialValue={[]}
                                    rules={[
                                        {required:true,message:"出库方式不能为空"}
                                    ]}
                                >
                                    <Select
                                        placeholder="出库方式"
                                    >
                                        {outMothedList.map((item) =>
                                            <Select.Option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.name}
                                            </Select.Option>
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <Button type="link" onClick={this.openSelectGoods} icon="add">选择物料</Button>
                    <Table
                        bordered
                        rowKey="inventoryId"
                        columns={tableColumns}
                        dataSource={goodsList}
                        paganizition={false}
                        number={false}
                        footer={() => "总金额："+totalprice}
                    />
                </Space>
                {selectGoodsVisible && <SelectGoods ids={this.state.goodsIds} list={this.state.goodsList} close={this.closeSelectGoods}/>}
            </Modal>
        );
    };
};
export default Edit;