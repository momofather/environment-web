import React,{Component} from "react";
import {Modal,Form,Input,Select,Row,Col,DatePicker,Space,Table,InputNumber,Breadcrumb} from "antd";
import Button from "@/components/button";
import moment from "moment";
import SelectGoods from "./SelectGoods";

class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            username:"",
            userList:[],
            selectGoodsVisible:false,
            goodsList:[],
            inMothedList:[],
            totalprice:0,
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        const {id} = this.props;
        React.axios.get("sys/user/list","",res => {
            this.setState({userList:res.data.data});
        });
        React.axios.post("api/wmsType/tmaterialtype/queryMaterialTypeList?number="+React.enums.inMethodCode,null,res => {
            this.setState({inMothedList:res.data});
        });
        if(id){
            React.axios.get("api/wms/twarehousebill/info/"+id,"",res => {
                this.setState({
                    totalprice:res.data.totalprice,
                    goodsList:res.data.warehouseInorderEntity ? (res.data.warehouseInorderEntity) : ([]),
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
        const {housename,username,goodsList,totalprice} = this.state;
        this.formRef.current.validateFields().then((values,errors) => {
            if(!errors){
                values.housename = housename;
                values.username = username;
                values.housedate = values.housedate.format("YYYY-MM-DD");
                values.totalprice = totalprice;
                values.number = this.state.number;
                values.warehouseInorderEntity = goodsList;
                values.type = "2";
                if(values.warehouseInorderEntity.length===0){
                    React.message.warning('请添加要入库的物料');
                    return;
                }
                React.axios.post(id ? ("/api/wms/twarehousebill/update") : ("/api/wms/twarehousebill/save"),{id,...values},res => {
                    this.close();
                    tableReload();
                });
            };
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
        this.setState({selectGoodsVisible:true});
    };

    /**
     * @todo 关闭选择物料模态框
     */
    closeSelectGoods = (reGoodsList) => {
        if(reGoodsList){
            let newGoodList = [];
            let {goodsList} = this.state;
            goodsList.push(reGoodsList);
            goodsList.forEach((item) => {
                newGoodList.push(item);
            });
            this.setState({selectGoodsVisible:false,goodsList:newGoodList});
            this.getTotalPrice();
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
        goodsList.forEach((item) => {
            totalprice += item.totalprice * 1;
        });
        this.setState({totalprice});
    };

    render(){
        const {id} = this.props;
        const {userList,selectGoodsVisible,goodsList,inMothedList,totalprice} = this.state;

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
                title:"入库位置",
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
                title={id ? ("修改入库信息") : ("添加入库")}
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
                                    label="入库日期"
                                    name="housedate"
                                    initialValue=""
                                    rules={[
                                        {required:true,message:"入库日期不能为空"}
                                    ]}
                                >
                                    <DatePicker style={{width:"100%"}}/>
                                </Form.Item>
                                <Form.Item
                                    label="入库方式"
                                    name="deliverymode"
                                    initialValue={[]}
                                    rules={[
                                        {required:true,message:"入库方式不能为空"}
                                    ]}
                                >
                                    <Select
                                        placeholder="入库方式"
                                    >
                                        {inMothedList.map((item) => {
                                            return(
                                                <Select.Option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.name}
                                                </Select.Option>
                                            );
                                        })}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <Button type="link" onClick={this.openSelectGoods} icon="add">添加物料</Button>
                    <Table
                        bordered
                        rowKey="id"
                        columns={tableColumns}
                        dataSource={goodsList}
                        paganizition={false}
                        size="small"
                        footer={() => "总金额："+totalprice}
                    />
                </Space>
                {selectGoodsVisible && <SelectGoods close={this.closeSelectGoods}/>}
            </Modal>
        );
    };
};
export default Edit;