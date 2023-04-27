import React,{Component} from "react";
import {Modal,Form,Select,InputNumber} from "antd";

import {Link} from "react-router-dom";

class SelectGoods extends Component{
    constructor(props){
        super(props);
        this.state={
            goodsList:[],
            selectGoods:{},
            houseName:"",
            houseId:"",
            houseList:[],
            locationName:"",
            locationId:"",
            locationList:[],
            shelvesName:"",
            shelvesList:[],
        };
    };

    formRef = React.createRef();

    componentDidMount(){
        React.axios.get("api/wms/twarehousegoods/list",null,res => {
            this.setState({goodsList:res.data.data})
        });
        React.axios.get("api/wms/twarehouse/list",null,res => {
            this.setState({houseList:res.data.data});
        });
    };

    onOk = () => {
        this.formRef.current.validateFields().then((values,errors) => {
            if(!errors){
                const {goodsList,houseName,locationName,shelvesName} = this.state;
                let reGoodsList = {};
                goodsList.forEach((item) => {
                    if(item.id === values.id){
                        reGoodsList.name = item.name;
                        reGoodsList.number = item.number;
                        reGoodsList.gname = item.gname;
                        reGoodsList.gtype = item.gtype;
                        reGoodsList.price = item.price;
                        reGoodsList.unit = item.unit;
                        reGoodsList.num = values.num;
                        reGoodsList.totalprice = values.num * item.price;
                        reGoodsList.houseName = houseName;
                        reGoodsList.houseNumber = this.formRef.current.getFieldValue("houseNumber");
                        reGoodsList.locationName = locationName;
                        reGoodsList.locationNumber = this.formRef.current.getFieldValue("locationNumber");
                        reGoodsList.shelvesName = shelvesName;
                        reGoodsList.shelvesNumber = this.formRef.current.getFieldValue("shelvesNumber");
                    };
                });
                this.props.close(reGoodsList);
            };
        });
    };

    /**
     * 关闭模态框
     */
    onClose = () => {
        this.props.close();
    };

    /**
     * @todo 选择入库仓库
     * @param value
     * @param event
     */
    selectHouse = (value,event) => {
        this.formRef.current.setFieldsValue({locationName:"",locationNumber:[],shelvesName:"",shelvesNumber:[]});
        React.axios.get(`api/wms/twarehouselocation/list?houseNumber=${value}`,null,res => {
            this.setState({locationList:res.data.data});
        });
        this.setState({houseName:event.children,houseId:event.key});
    };

    /**
     * @todo 选择入库区域
     * @param value
     * @param event
     */
    selectLocation = (value,event) => {
        this.formRef.current.setFieldsValue({shelvesName:"",shelvesNumber:[]});
        React.axios.get(`api/wms/twarehouseshelves/list?houseNumber=${this.formRef.current.getFieldValue("houseNumber")}&locationNumber=${value}`,null,res => {
            this.setState({shelvesList:res.data.data});
        });
        this.setState({locationName:event.children,locationId:event.key});
    };

    /**
     * @todo 选择入库货架
     * @param value
     * @param event
     */
    selectshelves = (value,event) => {
        this.setState({shelvesName:event.children});
    };

    render(){
        const {goodsList,houseList,locationList,shelvesList} = this.state;

        const formLayout={
            labelCol:{
                xs:{span:24},
                sm:{span:24},
                md:{span:10},
                lg:{span:6},
                xl:{span:4},
            },
            wrapperCol:{
                xs:{span:24},
                sm:{span:24},
                md:{span:14},
                lg:{span:18},
                xl:{span:20},
            }
        };

        return(
            <Modal
                title="选择物料"
                visible={true}
                onOk={this.onOk}
                onCancel={this.onClose}
                maskClosable={false}
            >
                <Form
                    ref={this.formRef}
                    {...formLayout}
                >
                    <Form.Item
                        label="物料"
                        name="id"
                        initialValue={[]}
                        rules={[
                            {required:true,message:"物料不能为空"}
                        ]}
                    >
                        <Select
                            placeholder="物料"
                        >
                            {goodsList.map((item) =>
                                <Select.Option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.name}
                                </Select.Option>
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="数量"
                        name="num"
                        initialValue={1}
                        rules={[
                            {required:true,message:"物料不能为空"}
                        ]}
                    >
                        <InputNumber placeholder="数量" min={1}/>
                    </Form.Item>
                    <Form.Item
                        label="入库仓库"
                        name="houseNumber"
                        initialValue={[]}
                        rules={[
                            {required:true,message:"入库仓库不能为空"}
                        ]}
                    >
                        <Select
                            placeholder="入库仓库"
                            onChange={this.selectHouse}
                            notFoundContent="暂无数据，请先添加仓库"
                        >
                            {houseList.map((item) =>
                                <Select.Option
                                    key={item.id}
                                    value={item.number}
                                >
                                    {item.name}
                                </Select.Option>
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="入库区域"
                        name="locationNumber"
                        initialValue={[]}
                        rules={[
                            {required:true,message:"入库区域不能为空"}
                        ]}
                    >
                        <Select
                            placeholder="入库区域"
                            onChange={this.selectLocation}
                            notFoundContent={this.state.houseName ? (
                                <div>
                                    暂无数据，请先
                                    <Link to={`/${React.Version}/inventory/warehouseLocation/list/${this.state.houseId}`}>添加区域</Link>
                                </div>
                            ) : ("请先选择仓库")}
                        >
                            {locationList.map((item) =>
                                <Select.Option
                                    key={item.id}
                                    value={item.number}
                                >
                                    {item.name}
                                </Select.Option>
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="入库货架"
                        name="shelvesNumber"
                        initialValue={[]}
                        rules={[
                            {required:true,message:"入库货架不能为空"}
                        ]}
                    >
                        <Select
                            placeholder="入库货架"
                            onChange={this.selectshelves}
                            notFoundContent={this.state.locationName ? (
                                <div>
                                    暂无数据，请先
                                    <Link to={`/${React.Version}/inventory/warehouseShelves/list/${this.state.houseId}/${this.state.locationId}`}>添加货架</Link>
                                </div>
                            ) : (<div>请先选择仓库、区域</div>)}
                        >
                            {shelvesList.map((item) =>
                                <Select.Option
                                    key={item.id}
                                    value={item.number}
                                >
                                    {item.name}
                                </Select.Option>
                            )}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };
};
export default SelectGoods;