import React,{Component} from "react";
import {Modal,Form,Input,Select} from "antd";

class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            units:[],
            typeList:[],
            gname:"",
        };
    };

    componentDidMount(){
        const {id} = this.props;
        this.getUnitList();
        React.axios.post("api/wmsType/tmaterialtype/queryMaterialTypeList?number="+React.enums.goodTypeCode,"",res => {
            this.setState({typeList:res.data});
        });
        if(id){
            React.axios.get("api/wms/twarehousegoods/info/"+id,"",res => {
                this.formRef.current.setFieldsValue(res.data);
            });
        };
    };

    // 获取计量单位
    getUnitList=()=>{
        React.axios.post('api/wmsType/tmaterialtype/queryMaterialTypeList?number=unit',null,res=>{
            this.setState({units: res.data});
        })
    }

    /**
     * @todo 提交表单
     */
    submit = () => {
        const {id,tableReload} = this.props;
        const {warehouseName,gname} = this.state;
        this.formRef.current.validateFields().then((values,errors) => {
            if(!errors){
                if(warehouseName){
                    values.houseName = warehouseName;
                };
                if(gname){
                    values.gname = gname;
                };
                React.axios.post(id ? ("api/wms/twarehousegoods/update") : ("api/wms/twarehousegoods/save"),{id,...values},res => {
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
     * @todo 校验number唯一性
     */
    checkNumber = (value) => {
        return new Promise((resolve, reject) => {  // 返回一个promise
            React.axios.get("api/wms/twarehousegoods/getNumber/"+value,null,res => {
                const {id} =this.props;
                if(res.data){
                    if(res.data.id === id){
                        resolve("success");
                    }else{
                        resolve("error");
                    };
                }else{
                    resolve("success");
                };
            });
        });
    };

    /**
     * @todo 选择物料种类
     */
    selectType = (value,event) => {
        this.setState({gname:event.children});
    };

    render(){
        const {id} = this.props;
        const {units,typeList} = this.state;

        const formLayout={
            labelCol:{
                xs:{span:24},
                sm:{span:24},
                md:{span:10},
                lg:{span:8},
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
                title={id ? ("修改物料信息") : ("添加物料")}
                visible={true}
                onOk={this.submit}
                onCancel={this.close}
                maskClosable={false}
            >
                <Form
                    {...formLayout}
                    ref={this.formRef}
                >
                    <Form.Item
                        label="物料种类"
                        name="gtype"
                        initialValue={[]}
                        rules={[
                            {required:true,message:"物料种类不能为空"}
                        ]}
                    >
                        <Select
                            placeholder="物料种类"
                            onChange={this.selectType}
                        >
                            {typeList.map((item) =>
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
                        label="物料名称"
                        name="name"
                        initialValue=""
                        rules={[
                            {required:true,message:"物料名称不能为空"}
                        ]}
                    >
                        <Input placeholder="物料名称"/>
                    </Form.Item>
                    <Form.Item
                        label="物料编号"
                        name="number"
                        initialValue=""
                        rules={[
                            {required:true,message:"物料编号不能为空"},
                            {validator:(rule,value,callback) => {
                                if(value){
                                    this.checkNumber(value).then((res) => {
                                        if(res === "success"){
                                            callback();
                                        }else{
                                            callback("编号已存在");
                                        };
                                    });
                                }
                            }},
                        ]}
                        validateTrigger="onBlur"
                    >
                        <Input placeholder="物料编号" disabled={this.props.id}/>
                    </Form.Item>
                    <Form.Item
                        label="品牌"
                        name="brand"
                        initialValue=""
                        rules={[
                            {required:true,message:"品牌不能为空"}
                        ]}
                    >
                        <Input placeholder="品牌"/>
                    </Form.Item>
                    <Form.Item
                        label="单价"
                        name="price"
                        initialValue=""
                        rules={[
                            {required:true,message:"单价不能为空"},
                            {pattern:/^\d+(\.\d+)?$/,message:"请输入正确的价格"}
                        ]}
                    >
                        <Input
                            placeholder="单价"
                            min={0}
                            addonAfter="元"
                        />
                    </Form.Item>
                    <Form.Item
                        label="计量单位"
                        name="unit"
                        initialValue={[]}
                        rules={[
                            {required:true,message:"计量单位不能为空"}
                        ]}
                    >
                        <Select
                            placeholder="计量单位"
                        >
                            {units.map((item) =>
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