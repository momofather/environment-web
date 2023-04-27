import React,{Component} from "react";
import {Modal,Form,Input,InputNumber} from "antd";

class ChangeGoods extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            fromType:"1",
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
                title={this.props.way === "in" ? "入库" : "出库"}
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
                        label="物料名称"
                    >
                        木材
                    </Form.Item>
                    <Form.Item
                        label="种类"
                    >
                        建筑材料
                    </Form.Item>
                    <Form.Item
                        label="现有库存"
                    >
                        100 件
                    </Form.Item>
                    <Form.Item
                        label="供应商"
                        name="supplier"
                        initialValue=""
                    >
                        <Input placeholder="供应商"/>
                    </Form.Item>
                    <Form.Item
                        label="数量"
                        name="number"
                        initialValue="0"
                    >
                        <InputNumber placeholder="数量" min={0} max={this.props.way === "in" ? 100 : ""}/>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };
};
export default ChangeGoods;