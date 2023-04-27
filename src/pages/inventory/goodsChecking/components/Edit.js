import React,{Component} from "react";
import {Modal,Form,Input,Select,Row,Col,DatePicker,Divider,Table,InputNumber,Button} from "antd";

class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            warehouseName:"",
            warehouseList:[],
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        const {id} = this.props;
        if(id){
            React.axios.get("api/wms/twarehouseinorder/info/"+id,"",res => {
                this.setState({warehouseName:res.data.houseName});
                this.formRef.current.setFieldsValue(res.data);
            });
        };
        React.axios.get("api/wms/twarehouse/list?limit=1000&page=1","",res => {
            this.setState({warehouseList:res.data.data});
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
     * @todo 提交表单
     */
    submit = () => {
        const {id,tableReload} = this.props;
        const {warehouseName} = this.state;
        this.formRef.current.validateFields().then((values,errors) => {
            if(!errors){
                if(this.props.id){
                    values.id = id;
                    if(warehouseName){
                        values.houseName = warehouseName;
                    };
                    React.axios.post("/api/wms/twarehouseinorder/update",values,res => {
                        this.close();
                        tableReload();
                    });
                }else{
                    if(warehouseName){
                        values.houseName = warehouseName;
                    };
                    React.axios.post("/api/wms/twarehouseinorder/save",values,res => {
                        this.close();
                        tableReload();
                    });
                };
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

    render(){
        const {id} = this.props;
        const {warehouseList} = this.state;

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
                title:"单位",
                key:"unit",
                dataIndex:"unit",
                render:(text,record) => {
                    return this.state.units[record.unit];
                },
            },
            {
                title:"品牌",
                key:"brank",
                dataIndex:"brank",
            },
            {
                title:"数量",
                render:(text,record) => <InputNumber min={0}/>,
            },
            {
                title:"操作",
                width:"100px",
                render:(text,record) => {
                    return(
                        <>
                            <Button type="link" size="small" danger authcode="inventory:outWarehouse:delete"><span className="iconfont icon-shanchudefuben"/>删除</Button>
                        </>
                    );
                },
            },
        ];

        const data = [{
            id:1,number:"xxxxxx",name:"xxxxxx",unit:"吨",brank:"xxxxxx"
        }]

        return(
            <Modal
                title={id ? ("修改入库信息") : ("添加入库")}
                visible={true}
                onOk={this.submit}
                onCancel={this.close}
                width={720}
                maskClosable={false}
            >
                <Form
                    labelCol={{span: 5}}
                    ref={this.formRef}
                >
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                label="盘点编号"
                                name="number"
                                initialValue=""
                            >
                                <Input placeholder="没有填写则自动生成"/>
                            </Form.Item>
                            <Form.Item
                                label="仓库"
                                name="houseNumber"
                                initialValue={[]}
                                rules={[
                                    {required:true,message:"区域名称不能为空"}
                                ]}
                            >
                                <Select
                                    placeholder="盘点仓库"
                                    onChange={(value,event) => {this.setState({warehouseName:event.children})}}
                                >
                                    {warehouseList.map((item,index) => {
                                        return(
                                            <Select.Option
                                                key={item.number}
                                                value={item.number}
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
                                label="盘点日期"
                                name="number"
                                initialValue={[]}
                                rules={[
                                    {required:true,message:"区域名称不能为空"}
                                ]}
                            >
                                <DatePicker.RangePicker/>
                            </Form.Item>
                            <Form.Item
                                label="盘点人"
                                name="user"
                                initialValue={[]}
                                rules={[
                                    {required:true,message:"盘点人不能为空"}
                                ]}
                            >
                                <Select
                                    placeholder="盘点人"
                                    onChange={(value,event) => {this.setState({warehouseName:event.children})}}
                                >
                                    {warehouseList.map((item,index) => {
                                        return(
                                            <Select.Option
                                                key={item.number}
                                                value={item.number}
                                            >
                                                {item.name}
                                            </Select.Option>
                                        );
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider/>
                    <Form>
                        <Form.Item
                            label="物料编号"
                            initialValue="4324324324"
                        >
                            <Input disabled/>
                        </Form.Item>
                        <Form.Item
                            label="物料名称"
                            initialValue="4324324324"
                        >
                            <Input disabled/>
                        </Form.Item>
                        <Form.Item
                            label="库存数量"
                            initialValue="4324324324"
                        >
                            <Input disabled/>
                        </Form.Item>
                        <Form.Item
                            label="盘点数量"
                            initialValue=""
                        >
                            <Input/>
                        </Form.Item>
                    </Form>
                    <Divider/>
                    <Button type="primary"><span className="iconfont icon-tianjia"/>添加物料</Button>
                    <Table
                        rowKey="id"
                        columns={tableColumns}
                        dataSource={data}
                    />
                </Form>
            </Modal>
        );
    };
};
export default Edit;