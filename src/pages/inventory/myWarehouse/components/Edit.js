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
        const {warehouseId} = this.props;
        if(warehouseId){
            React.axios.get("sys/user/info/"+warehouseId,"",res => {
                this.formRef.current.setFieldsValue(res.user);
            });
        };
        React.axios.get("sys/role/select","",res => {
            const roleSelectList = res.list;
            this.setState({roleSelectList});
        });
    };

    /**
     * @todo 提交表单
     */
    submit = () => {
        this.formRef.current.validateFields().then((values,errors) => {
            if(!errors){
                this.props.close();
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
                title={this.props.warehouseId ? ("修改仓库信息") : ("添加仓库")}
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
                        label="仓库名称"
                        name="warehousename"
                        initialValue=""
                        rules={[
                            {required:true,message:"仓库名称不能为空"}
                        ]}
                    >
                        <Input placeholder="仓库名称"/>
                    </Form.Item>
                    <Form.Item
                        label="地址"
                        name="address"
                        initialValue=""
                        rules={[
                            {required:true,message:"仓库名称不能为空"}
                        ]}
                    >
                        <Input placeholder="地址"/>
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