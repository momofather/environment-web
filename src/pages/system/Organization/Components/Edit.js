import React,{Component} from "react";
import {Modal,Form,Input,InputNumber} from "antd";

class edit extends Component{
    formRef = React.createRef();

    constructor(props){
        super(props);
        this.state={

        };
    };
    componentDidMount(){
        if (this.props.parentId && this.props.parentId !== '0'){
            this.getInfo(this.props.parentId,true);
        }else{
            this.formRef.current.setFieldsValue({parentName: '根组织'});
        }
        this.getInfo(this.props.id,false);
    }

    /*
    * 提交
    * */
    submit = () => {
        this.formRef.current.validateFields().then(values => {
            values.deptId = this.props.id;
            values.parentId = this.props.parentId;
            if(!values.parentId){
                values.parentId = 0;
            }
            let url = 'api/sys/dept/save';
            if(values.deptId){
                url = 'api/sys/dept/update';
            }
            React.axios.post(url,values,()=>{
                React.message.success('操作成功');
                this.props.onOk();
            })
        }).catch();
    };

    /**
     * 根据id查询
     */
    getInfo=(id,isParent=false)=>{
        if(id){
            React.axios.get(`api/sys/dept/${id}`,null,res=>{
                if(isParent){
                    this.formRef.current.setFieldsValue({
                        parentName: res.data.name
                    });
                }else{
                    this.formRef.current.setFieldsValue({
                        name: res.data.name,
                        orderNum: res.data.orderNum,
                    });
                }
            })
        }
    }

    render(){
        return(
            <Modal
                title={this.props.id?"修改组织机构":"添加组织机构"}
                visible={true}
                onOk={this.submit}
                onCancel={this.props.onCancel}
                maskClosable={false}
            >
                <Form ref={this.formRef} labelCol={{span: 4}} onFinish={this.submit}>
                    <Form.Item label="上级组织" name="parentName">
                        <Input readOnly />
                    </Form.Item>
                    <Form.Item label="组织名称" name="name" rules={[{ required: true, message: '请输入组织名称!'}]}>
                        <Input placeholder="组织名称"/>
                    </Form.Item>
                    <Form.Item label="序号" name="orderNum" initialValue={1}>
                        <InputNumber style={{width: '100%'}} />
                    </Form.Item>
                </Form>
            </Modal>
        );
    };
};
export default edit;