import React,{Component} from "react";
import {Modal,Form,Input} from "antd";

class Edit extends Component{
    formRef = React.createRef();

    componentDidMount(){
        const {id} = this.props;
        if(id){
            React.axios.get("api/wmsType/tmaterialtype/info/"+id,"",res => {
                this.formRef.current.setFieldsValue(res.data);
            });
        };
    };

    /**
     * @todo 提交表单
     */
    submit = () => {
        const {id} = this.props;
        this.formRef.current.validateFields().then((values) => {
            values.id = id;
            values.number = React.enums.goodTypeCode;
            let url = "api/wmsType/tmaterialtype/save";
            if(id){
                url = "api/wmsType/tmaterialtype/update";
            }
            React.axios.post(url,values,() => {
                React.message.success('操作成功');
                this.props.onOk();
            });
        }).catch();
    };

    render(){
        const {id} = this.props;
        return(
            <Modal
                title={id ? ("修改物料种类") : ("添加物料种类")}
                visible={true}
                onOk={this.submit}
                onCancel={this.props.onCancel}
                maskClosable={false}
            >
                <Form
                    labelCol={{span:3}}
                    ref={this.formRef}
                >
                    <Form.Item
                        label="名称"
                        name="name"
                        initialValue=""
                        rules={[
                            {required:true,message:"种类名称不能为空"}
                        ]}
                    >
                        <Input placeholder="种类名称"/>
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