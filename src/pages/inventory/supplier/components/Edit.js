import React,{Component} from "react";
import {Modal,Form,Input} from "antd";

class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
        };
    };

    componentDidMount(){
        const {id} = this.props;
        if(id){
            React.axios.get("api/wms/twsupplier/info/"+id,"",res => {
                this.formRef.current.setFieldsValue(res.tWarehouseGoods);
            });
        };
    };

    /**
     * @todo 提交表单
     */
    submit = () => {
        const {id,tableReload} = this.props;
        const {warehouseName} = this.state;
        this.formRef.current.validateFields().then((values,errors) => {
            if(!errors){
                this.formRef.current.validateFields().then((values,errors) => {
                    if(!errors){
                        if(this.props.id){
                            values.id = id;
                            if(warehouseName){
                                values.houseName = warehouseName;
                            };
                            React.axios.post("api/wms/twsupplier/update",values,res => {
                                this.close();
                                tableReload();
                            });
                        }else{
                            if(warehouseName){
                                values.houseName = warehouseName;
                            };
                            React.axios.post("api/wms/twsupplier/save",values,res => {
                                this.close();
                                tableReload();
                            });
                        };
                    };
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

    render(){
        const {id} = this.props;

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
                title={id ? ("修改供应商信息") : ("添加供应商")}
                visible={true}
                onOk={this.submit}
                onCancel={this.close}
            >
                <Form
                    {...formLayout}
                    ref={this.formRef}
                >
                    <Form.Item
                        label="名称"
                        name="name"
                        initialValue=""
                        rules={[
                            {required:true,message:"名称不能为空"}
                        ]}
                    >
                        <Input placeholder="名称"/>
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
                        label="联系人"
                        name="person"
                        initialValue=""
                        rules={[
                            {required:true,message:"联系人不能为空"}
                        ]}
                    >
                        <Input placeholder="联系人"/>
                    </Form.Item>
                    <Form.Item
                        label="职务"
                        name="job"
                        initialValue=""
                    >
                        <Input placeholder="职务"/>
                    </Form.Item>
                    <Form.Item
                        label="联系电话"
                        name="tel"
                        initialValue=""
                        rules={[
                            {required:true,message:"联系电话不能为空"},
                            {pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,message:"手机号码格式不正确"}
                        ]}
                    >
                        <Input placeholder="联系电话"/>
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="email"
                        initialValue=""
                        rules={[
                            {pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"电子邮箱格式不正确"}
                        ]}
                    >
                        <Input placeholder="邮箱"/>
                    </Form.Item>
                    <Form.Item
                        label="备注"
                        name="remark"
                        initialValue=""
                    >
                        <Input placeholder="备注"/>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };
};
export default Edit;