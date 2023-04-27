import React,{Component} from "react";
import {Card,Form,Input,Select,InputNumber,DatePicker,Row,Col} from "antd";

import Button from "@/components/button";
import moment from 'moment';
import Table from '@/components/table';

const selectStyle = {
    width: '100%'
}

class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            warehouseList:[],// 仓库
            areaList: [],// 区域
            shelves: [],// 货架
            allGoodsList: [],
            goodsList:[],
            userList: [],
            username: '',
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        this.getWarehouseList();
        this.getGoodsList();
        this.getInfo();
        this.getUsers();
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

    // 获取用户负责人
    getUsers=()=>{
        React.axios.get("sys/user/list","",res => {
            this.setState({userList:res.data.data});
        });
    }

    // 获取详情
    getInfo=()=>{
        if(this.props.match.params.id){
            React.axios.get(`api/wms/twarehousebill/info/${this.props.match.params.id}`,{},res=>{
                this.formRef.current.setFieldsValue({
                    number: res.data.number,
                    remark: res.data.remark,
                    userno: res.data.userno,
                    housedate: moment(res.data.housedate)
                });
                const data = res.data.warehouseAllocationEntity;
                data.forEach((item,index)=>{
                    let areaList = [...this.state.areaList,[[],[]]];
                    let shelves = [...this.state.shelves,[[],[]]];
                    let row = [...this.state.goodsList,item]
                    this.setState({
                        areaList: areaList,
                        shelves: shelves,
                        goodsList: row
                    });
                    if(item.houseNumber)this.getAreaList(0,index,item.houseNumber);
                    if(item.thouseNumber)this.getAreaList(1,index,item.houseNumber);
                    if(item.locationNumber)this.getShelvesList(0,index,item.locationNumber);
                    if(item.tlocationNumber)this.getShelvesList(1,index,item.tlocationNumber);
                })
            })
        }else{
            this.formRef.current.setFieldsValue({
                housedate: moment(new Date())
            });
        }
    }

    // 添加物料行
    addGoods = () => {
        const newLine = {
            "id": new Date().getTime(),
            "gname": "", // 物料名称
            "gtype": "", // 物料类型
            "houseId": "", // 仓库ID
            "houseName": "", // 仓库名称
            "houseNumber": "", // 仓库编号
            "husername": "", // 仓库管理员账号
            "locationName": "", // 区域名称
            "locationNumber": "", // 区域编号
            "shelvesName": "", // 货架名称
            "shelvesNumber": "", // 货架编号
            "name": "", // 物料名称
            "num": "", // 数量
            "number": "", //物料编号
            "price": "", // 单价
            "remark": "", // 备注
            "thouseId": "", // 目标仓库ID
            "thouseName": "", // 目标库仓库名称
            "thouseNumber": "", // 目标仓库编号
            "thusername": "", // 目标仓库管理员账号
            "tlocationName": "", // 目标库区域名称
            "tlocationNumber": "", // 目标库区域编号
            "totalprice": "", // 总价
            "tshelvesName": "", // 目标库货架名称
            "tshelvesNumber": "", // 目标库货架编号
            "unit": "", // 单位
        }
        this.setState({
            goodsList: [...this.state.goodsList,newLine],
            areaList: [...this.state.areaList,[[],[]]],
            shelves: [...this.state.shelves,[[],[]]]
        });
    };

    // 获取所有的仓库
    getWarehouseList=()=>{
        React.axios.get("api/wms/twarehouse/list?limit=1000&page=1","",res => {
            this.setState({warehouseList:res.data.data});
        });
    }

    // 根据仓库获取所有的区域 flag: 0:出库，1:入库，lineNum：表格行索引
    getAreaList=(flag,lineNum,houseNumber)=>{
        React.axios.get("api/wms/twarehouselocation/getHouseLocation/?houseNumber="+houseNumber,{params:{}},res => {
            let areaList = this.state.areaList;
            areaList[lineNum][flag] = res.data;
            this.setState({
                areaList: areaList
            });
            if(!this.props.match.params.id){
                let goodsList = this.state.goodsList;
                const warehouse = this.findWarehouseByNumber(houseNumber);
                if(flag===0){
                    goodsList[lineNum].houseId = warehouse.id;
                    goodsList[lineNum].houseName = warehouse.name;
                    goodsList[lineNum].houseNumber = warehouse.number;
                    goodsList[lineNum].husername = warehouse.userno;
                }else{
                    goodsList[lineNum].thouseId = warehouse.id;
                    goodsList[lineNum].thouseName = warehouse.name;
                    goodsList[lineNum].thouseNumber = warehouse.number;
                    goodsList[lineNum].thusername = warehouse.userno;
                }
                this.setState({
                    goodsList: goodsList
                });
            }
        });
    }

    // 根据区域获取所有的货架 flag: 0:出库，1:入库，lineNum：表格行索引
    getShelvesList=(flag,lineNum,locationNumber)=>{
        React.axios.get("api/wms/twarehouseshelves/getLocationShelves/?locationNumber="+locationNumber,locationNumber,res => {
            let shelves = this.state.shelves;
            shelves[lineNum][flag] = res.data;
            this.setState({
                shelves:shelves,
            });
            if(!this.props.match.params.id){
                const area = this.findAreaByNumber(locationNumber,lineNum,flag);
                let goodsList = this.state.goodsList;
                if(flag===0){
                    goodsList[lineNum].locationName = area.name;
                    goodsList[lineNum].locationNumber = area.number;
                }else{
                    goodsList[lineNum].tlocationName = area.name;
                    goodsList[lineNum].tlocationNumber = area.number;
                }
                this.setState({
                    goodsList: goodsList
                });
            }
        });
    }

    // 货架选择事件
    changeShelves=(flag,lineNum,number)=>{
        const areas = this.state.shelves[lineNum][flag];
        for(let item of areas){
            if(item.number===number){
                let goodsList = this.state.goodsList;
                if(flag===0){
                    goodsList[lineNum].shelvesName = item.name;
                    goodsList[lineNum].shelvesNumber = item.number;
                }else{
                    goodsList[lineNum].tshelvesName = item.name;
                    goodsList[lineNum].tshelvesNumber = item.number;
                }
                this.setState({
                    goodsList: goodsList
                });
            }
        }
    }

    // 根据仓库编号寻找仓库信息
    findWarehouseByNumber=(number)=>{
        for(let item of this.state.warehouseList){
            if(item.number===number){
                return item;
            }
        }
    }

    // 根据区域编号查询区域信息
    findAreaByNumber=(number,lineNum,flag)=>{
        const areas = this.state.areaList[lineNum][flag];
        for(let item of areas){
            if(item.number===number){
                return item;
            }
        }
    }

    // 获取物料
    getGoodsList=()=>{
        React.axios.get("api/wms/twarehousegoods/list?limit=1000&page=1","",res => {
            this.setState({allGoodsList: res.data.data});
        });
    }

    // 查询物料
    findGoods=(lineNum,number)=>{
        for(let item of this.state.allGoodsList){
            if(item.number===number){
                debugger
                let goodsList = this.state.goodsList;
                goodsList[lineNum].gname = item.gname;
                goodsList[lineNum].gtype = item.gtype;
                goodsList[lineNum].name = item.name;
                goodsList[lineNum].num = null;
                goodsList[lineNum].maxNum = item.num;
                goodsList[lineNum].number = item.number;
                goodsList[lineNum].price = item.price;
                goodsList[lineNum].unit = item.unit;
                this.setState({goodsList: goodsList});
                break;
            }
        }
    }

    /**
     * @todo 提交表单
     */
    submit = () => {
        this.formRef.current.validateFields().then((values) => {
            values.id = this.props.match.params.id;
            values.type = 3;
            values.username = this.state.username;
            values.housedate = moment(values.housedate).format('yyyy-MM-DD');
            let url = 'api/wms/twarehousebill/save';
            if(values.id){
                url = 'api/wms/twarehousebill/update';
            }
            values.warehouseAllocationEntity = this.state.goodsList;
            React.axios.post(url, values,() => {
                React.message.success('操作成功');
                this.props.history.goBack();
            });
        });
    };

    /**
     * @todo 改变物料数量
     */
    chageNum = (index,value) => {
        let {goodsList} = this.state;
        goodsList[index].num = value;
        goodsList[index].totalprice = goodsList[index].price*goodsList[index].num;
        this.setState({goodsList});
    };

    /**
     * @todo 删除物料
     */
    deleteGoods = (index) => {
        let {goodsList} = this.state;
        goodsList.splice(index,1);
        this.setState({goodsList: [...goodsList]});
    };

    // 备注监听
    remarkChange=(index,value)=>{
        let {goodsList} = this.state;
        goodsList[index].remark = value.currentTarget.value;
        this.setState({goodsList});
    }

    render(){
        let {goodsList} = this.state;
        const tableColumns = [
            {
                title:"出库仓库",
                width: '120px',
                render:(text,record,index) => <Select size="small" placeholder="选择出库仓库" style={selectStyle} onChange={this.getAreaList.bind(this,0,index)} value={record.houseName}>
                    {this.state.warehouseList.map(item=><Select.Option key={item.id} value={item.number}>{item.name}</Select.Option>)}
                </Select>,
            },
            {
                title:"区域",
                width: '120px',
                render:(text,record,index) => <Select size="small" placeholder="选择区域" style={selectStyle} onChange={this.getShelvesList.bind(this,0,index)} value={record.locationNumber}>
                    {this.state.areaList[index][0].map(item=><Select.Option key={item.id} value={item.number}>{item.name}</Select.Option>)}
                </Select>,
            },
            {
                title:"货架",
                width: '120px',
                render:(text,record,index) => <Select size="small" placeholder="选择货架" style={selectStyle} onChange={this.changeShelves.bind(this,0,index)} value={record.shelvesNumber}>
                    {this.state.shelves[index][0].map(item=><Select.Option key={item.id} value={item.number}>{item.name}</Select.Option>)}
                </Select>,
            },
            {
                title:"物料名称",
                width: '120px',
                render:(text,record,index) => <Select size="small" placeholder="选择物料" style={selectStyle} onChange={this.findGoods.bind(this,index)} value={record.number}>
                    {this.state.allGoodsList.map(item=><Select.Option key={item.id} value={item.number}>{item.name}</Select.Option>)}
                </Select>,
            },
            {
                title:"物料编号",
                key:"number",
                dataIndex:"number",
                width: '120px',
                align: 'center',
            },
            {
                title:"入库仓库",
                width: '120px',
                render:(text,record,index) => <Select size="small" placeholder="选择入库仓库" style={selectStyle} onChange={this.getAreaList.bind(this,1,index)} value={record.thouseName}>
                    {this.state.warehouseList.map(item=><Select.Option key={item.id} value={item.number}>{item.name}</Select.Option>)}
                </Select>,
            },
            {
                title:"区域",
                width: '120px',
                render:(text,record,index) => <Select size="small" placeholder="选择区域" style={selectStyle} onChange={this.getShelvesList.bind(this,1,index)} value={record.tlocationNumber}>
                    {this.state.areaList[index][1].map(item=><Select.Option key={item.id} value={item.number}>{item.name}</Select.Option>)}
                </Select>,
            },
            {
                title:"货架",
                width: '120px',
                render:(text,record,index) => <Select size="small" placeholder="选择货架" style={selectStyle} onChange={this.changeShelves.bind(this,1,index)} value={record.tshelvesNumber}>
                    {this.state.shelves[index][1].map(item=><Select.Option key={item.id} value={item.number}>{item.name}</Select.Option>)}
                </Select>,
            },
            {
                title:"单价",
                align: 'center',
                width: '120px',
                render:(text,record) => <>{record.price?record.price+'元/'+this.state.units[record.unit]:''}</>
            },
            {
                title:"调拨数量",
                width: '120px',
                render:(text,record,index) => <InputNumber size="small" style={selectStyle} value={record.num} onChange={this.chageNum.bind(this,index)} min={0}/>,
            },
            {
                title:"金额(元)",
                key:"totalprice",
                dataIndex:"totalprice",
                align: 'center',
                width: '120px',
            },
            {
                title:"状态",
                align: 'center',
                width: '120px',
                render: (txt,record)=><>{React.enums.allocationStatus[record.status]}</>
            },
            {
                title:"出库时间",
                key: 'deliveryTime',
                dataIndex: 'deliveryTime',
                align: 'center',
                width: '120px',
            },
            {
                title:"入库时间",
                key: 'storageTime',
                dataIndex: 'storageTime',
                align: 'center',
                width: '120px',
            },
            {
                title:"备注",
                width: '120px',
                render:(text,record,index) => <Input size="small" style={selectStyle} value={record.remark} onChange={this.remarkChange.bind(this,index)} min={0}/>,
            },
            {
                title:"操作",
                width:"60px",
                align: 'center',
                fixed: 'right',
                render:(text,record,index) => <Button type="link" size="small" danger onClick={this.deleteGoods.bind(this,index)}>删除</Button>,
            },
        ];

        return(
            <Card title="添加调拨录入">
                <Form
                    labelCol={{span: 5}}
                    ref={this.formRef}
                    className="query-tools"
                >
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                label="单据编号"
                                name="number"
                            >
                                <Input placeholder="不填写则自动生成" disabled={this.props.match.params.id} style={{minWidth: '300px'}}/>
                            </Form.Item>
                            <Form.Item
                                label="调拨日期"
                                name="housedate"
                                style={{minWidth: '300px'}}
                                rules={[
                                    {required:true,message:"盘点日期不能为空"}
                                ]}
                            >
                                <DatePicker style={{width:"100%"}}/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="负责人"
                                name="userno"
                                rules={[
                                    {required:true,message:"负责人不能为空"}
                                ]}
                            >
                                <Select
                                    placeholder="负责人"
                                    style={{minWidth: '300px'}}
                                    onChange={(value,event) => {this.setState({username:event.children})}}
                                >
                                    {this.state.userList.map((item) => {
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
                            >
                                <Input.TextArea placeholder="100个字以内" maxLength={100}/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Button type="primary" size="small" onClick={this.addGoods} icon="add">添加物料</Button>
                <Table
                    rowKey="id"
                    columns={tableColumns}
                    data={goodsList}
                    pager={false}
                    number={false}
                    scroll={{ x: 2000 }}
                /><br/>

                <div align="center">
                    <Button type="primary" onClick={this.submit}>提交</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={()=>{this.props.history.goBack()}}>取消</Button>
                </div>
            </Card>
        );
    };
};
export default Edit;