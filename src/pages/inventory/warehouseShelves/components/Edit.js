import React,{Component} from "react";
import {Modal,Form,Input,Select} from "antd";

class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            warehouseName:"",
            warehouseList:[],
            locationName:"",
            locationList:[],
        };
    };

    componentDidMount(){
        const {id} = this.props;
        if(id){
            React.axios.get("api/wms/twarehouseshelves/info/"+id,"",res => {
                this.setState({warehouseName:res.data.houseName,locationName:res.data.locationName});
                this.formRef.current.setFieldsValue(res.data);
            });
        };
        // 获取仓库
        React.axios.get("api/wms/twarehouse/list?limit=1000&page=1","",res => {
            this.setState({warehouseList:res.data.data});
        });
        // 获取区域
        React.axios.get("api/wms/twarehouselocation/list?limit=1000&page=1","",res => {
            this.setState({locationList:res.data.data});
        });
    };

    /**
     * @todo 提交表单
     */
    submit = () => {
        const {id,tableReload} = this.props;
        this.formRef.current.validateFields().then((values,errors) => {
            values.id = id;
            for(let item of this.state.warehouseList){
                if(item.number === values.houseNumber){
                    values.houseName = item.name;
                    values.houseId = item.id;
                }
            }
            for(let item of this.state.locationList){
                if(item.number === values.locationNumber){
                    values.locationName = item.name;
                }
            }
            let url = 'api/wms/twarehouseshelves/save';
            if(id){
                url = 'api/wms/twarehouseshelves/update';
            }
            React.axios.post(url,values,() => {
                this.close();
                tableReload();
            });
        }).catch();
    };

    /**
     * @todo 关闭组件
     */
    close = () => {
        const {close} = this.props;
        close();
    };

    render(){
        const {warehouseList,locationList} = this.state;

        return(
            <Modal
                title={this.props.id ? ("修改区域信息") : ("添加区域")}
                visible={true}
                onOk={this.submit}
                onCancel={this.close}
                maskClosable={false}
            >
                <Form
                    labelCol={{span: 4}}
                    ref={this.formRef}
                >
                    <Form.Item
                        label="仓库"
                        name="houseNumber"
                        initialValue={this.props.wareHorseNumber}
                    >
                        <Select
                            placeholder="仓库"
                            disabled
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
                        label="区域"
                        name="locationNumber"
                        initialValue={this.props.areaNumber}
                    >
                        <Select
                            placeholder="库区"
                            disabled
                        >
                            {locationList.map((item) => {
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
                        label="货架名称"
                        name="name"
                        initialValue=""
                        rules={[
                            {required:true,message:"货架名称不能为空"}
                        ]}
                    >
                        <Input placeholder="货架名称"/>
                    </Form.Item>
                    <Form.Item
                        label="编号"
                        name="number"
                        initialValue=""
                        rules={[
                            {required:true,message:"编号不能为空"}
                        ]}
                    >
                        <Input placeholder="编号"/>
                    </Form.Item>
                    <Form.Item
                        label="备注"
                        name="remark"
                        initialValue=""
                    >
                        <Input.TextArea placeholder="100个字以内" maxLength={100}/>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };
};
export default Edit;