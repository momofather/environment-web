import React,{Component} from "react";
import {Form,Input,Select,Row,Col,DatePicker,Space,InputNumber,Breadcrumb} from "antd";
import Button from "@/components/button";
import Table from "@/components/table";
import moment from "moment";
import GoodsListModel from './components/GoodsListModel';

class LunchCheck extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            username:"",
            userList:[],
            selectGoodsVisible:false,
            wareHouseList: [],
            deliverymode: null, // 盘点方式
            materialList: [],
            selectKeys: [],
            houseNo: null,
            houseName: null,
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        const {id} = this.props.match.params;
        React.axios.get("sys/user/list","",res => {
            this.setState({userList:res.data.data});
        });
        if(id){
            React.axios.get("api/wms/twarehousebill/info/"+id,"",res => {
                this.setState({
                    materialList: res.data.wareinventoryStockEntity,
                    number: res.data.number,
                    deliverymode: res.data.deliverymode,
                    houseNo: res.data.houseno
                });
                this.formRef.current.setFieldsValue({
                    name: res.data.name,
                    remark: res.data.remark,
                    userno: res.data.userno,
                    deliverymode: res.data.deliverymode,
                    housedate: moment(res.data.housedate)
                });
            });
        }else{
            this.formRef.current.setFieldsValue({housedate:moment()});
        };
        this.getWareHouseList();
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
        const {username,number} = this.state;
        this.formRef.current.validateFields().then((values) => {
            values.id = this.props.match.params.id;
            values.username = username;
            values.number = number;
            values.housedate = values.housedate.format("YYYY-MM-DD");
            values.type = "4";
            if(values.deliverymode==='warehouse'){
                values.houseno = this.state.houseNo;
                values.housename = this.state.houseName;
            }else{
                values.houseno = null;
                values.housename = null;
            }
            values.wareinventoryStockEntity = [...this.state.materialList];
            let url = 'api/wms/twarehousebill/save';
            if(values.id){
                url = 'api/wms/twarehousebill/update';
            }
            React.axios.post(url,values,res => {
                React.message.success('操作成功');
                this.props.history.goBack();
            });
        });
    };

    /**
     * @todo 打开选择物料模态框
     */
    openSelectGoods = () => {
        this.setState({selectGoodsVisible:true});
    };

    /**
     * @todo 删除物料
     */
    deleteGoods = (index) => {
        let materialList = [...this.state.materialList];
        materialList.splice(index,1);
        this.setState({materialList: materialList});
    };

    // 获取仓库
    getWareHouseList=()=>{
        React.axios.get('api/wms/twarehouse/list',{page:1,limit: 1000},res=>{
            this.setState({wareHouseList: res.data.data});
        })
    }
    // 监听盘点方式
    handleDeliverymode=(val)=>{
        this.setState({deliverymode: val});
    }
    // 选择仓库后，查询该仓库下的所有物料
    getMaterialBy=(val,e)=>{
        this.setState({
            materialList: [],
            houseNo: val,
            houseName: e.children
        });
        React.axios.post(`api/wms/twarehousestock/selectMateriel?houseNumber=${val}`,null,res=>{
            this.setState({materialList: res.data});
        })
    }
    // 选择物料后回调
    selectedGoods=(val)=>{
        this.setState({
            selectGoodsVisible: false,
            selectKeys: val
        });
        let data = [];
        val.forEach(res=>{
            React.axios.get(`api/wms/twarehousestock/list?page=1&limit=1000&number=${res}`,null,res=>{
                data = data.concat(res.data.data)
                this.setState({materialList: data});
            })
        })
        
    }
    // 盘点数量
    chageNum = (index,value) => {
        let {materialList} = this.state;
        materialList[index].countNum = value;
        this.setState({materialList});
    };
    render(){
        const {userList} = this.state;
        const deliverymodes = React.enums.deliverymodes
        let deliverymodeList = [];
        for(let k in deliverymodes){
            deliverymodeList.push({
                value: k,
                name: deliverymodes[k]
            })
        }

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
                title:"盘点位置",
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
                render:(text,record,index) =><InputNumber value={record.countNum} min={0}  onChange={this.chageNum.bind(this,index)}/>
            },
            {
                title:"操作",
                width:"80px",
                align: 'center',
                render:(text,record,index) => <Button type="link" size="small" danger onClick={this.deleteGoods.bind(this,index)} icon="delete">删除</Button>
            },
        ];

        return(
            <>
                <Form
                    labelCol={{span: 5}}
                    ref={this.formRef}
                >
                    <Row>
                        <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                            <Form.Item
                                label="标题"
                                name="name"
                                rules={[
                                    {required:true,message:"标题不能为空"}
                                ]}
                            >
                                <Input placeholder="标题"/>
                            </Form.Item>
                        </Col>
                        <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                            <Form.Item
                                label="负责人"
                                name="userno"
                                rules={[
                                    {required:true,message:"负责人不能为空"}
                                ]}
                            >
                                <Select
                                    placeholder="负责人"
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
                        </Col>
                        <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                            <Form.Item
                                label="备注"
                                name="remark"
                                initialValue=""
                            >
                                <Input.TextArea placeholder="100个字以内" maxLength={100}/>
                            </Form.Item>
                        </Col>
                        <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                            <Form.Item
                                label="盘点日期"
                                name="housedate"
                                initialValue=""
                                rules={[
                                    {required:true,message:"盘点日期不能为空"}
                                ]}
                            >
                                <DatePicker style={{width:"100%"}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:7}} xl={{span:7}}>
                            <Form.Item
                                label="盘点方式"
                                name="deliverymode"
                                rules={[
                                    {required:true,message:"请选择盘点方式"}
                                ]}
                            >
                                <Select placeholder="盘点方式" onChange={this.handleDeliverymode}>
                                    {deliverymodeList.map(item=><Select.Option key={item.value} value={item.value}>{item.name}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                {this.state.deliverymode==='warehouse'&&<Select placeholder="选择仓库" style={{width: 150}} value={this.state.houseNo} onChange={this.getMaterialBy}>
                    {this.state.wareHouseList.map(item=><Select.Option key={item.number} value={item.number}>{item.name}</Select.Option>)}
                </Select>}
                {this.state.deliverymode==='material'&&<Button type="primary" size="small" onClick={this.openSelectGoods} icon="add">选择物料</Button>}
                {this.state.deliverymode==='custom'&&<Button type="primary" size="small" onClick={this.openSelectGoods} icon="add">添加行</Button>}
                
                <Table
                    rowKey="id"
                    columns={tableColumns}
                    data={this.state.materialList}
                    pager={false}
                /><br/><br/>

                <div align="center">
                    <Space>
                        <Button type="primary" onClick={this.submit}>确定</Button>
                        <Button onClick={()=>{this.props.history.goBack()}}>取消</Button>
                    </Space>
                </div>

                {this.state.selectGoodsVisible&&<GoodsListModel selectKeys={this.state.selectKeys} onCancel={()=>{this.setState({selectGoodsVisible: false})}} onOk={this.selectedGoods}/>}
            </>
        );
    };
};
export default LunchCheck;