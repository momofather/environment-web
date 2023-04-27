import React,{Component} from "react";
import {Modal,Form,Input,Select} from "antd";

class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            userList:[],
            username:"",
        };
    };

    componentDidMount(){
        const {id} = this.props;
        React.axios.get("sys/user/list/","",res => {
            this.setState({userList:res.data.data});
        });
        if(id){
            React.axios.get("api/wms/twarehouse/info/"+id,"",res => {
                this.formRef.current.setFieldsValue(res.data);
            });
        };
    };

    /**
     * @todo 提交表单
     */
    submit = () => {
        this.formRef.current.validateFields().then((values,errors) => {
            if(!errors){
                if(this.props.id){
                    values.id = this.props.id;
                    if(this.state.username){
                        values.username = this.state.username;
                    };
                    React.axios.post("/api/wms/twarehouse/update",values,res => {
                        this.close();
                        this.props.tableReload();
                    });
                }else{
                    if(this.state.username){
                        values.username = this.state.username;
                    };
                    React.axios.post("/api/wms/twarehouse/save",values,res => {
                        this.close();
                        this.props.tableReload();
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

    /**
     * @todo 选择管理员
     */
    selectUser = (e,z) => {
        this.setState({username:z.children});
    };

    render(){
        const {id} = this.props;
        const {userList} = this.state;

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
                title={id ? ("修改仓库信息") : ("添加仓库")}
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
                        name="name"
                        initialValue=""
                        rules={[
                            {required:true,message:"仓库名称不能为空"}
                        ]}
                    >
                        <Input placeholder="仓库名称"/>
                    </Form.Item>
                    <Form.Item
                        label="仓库编号"
                        name="number"
                        initialValue=""
                        rules={[
                            {required:true,message:"编号不能为空"}
                        ]}
                    >
                        <Input placeholder="仓库编号"/>
                    </Form.Item>
                    <Form.Item
                        label="仓库地址"
                        name="address"
                        initialValue=""
                    >
                        <Input placeholder="仓库地址"/>
                    </Form.Item>
                    <Form.Item
                        label="管理员"
                        name="userno"
                        initialValue={[]}
                        rules={[
                            {required:true,message:"管理员不能为空"}
                        ]}
                    >
                        <Select
                            placeholder='管理员'
                            onChange={this.selectUser}
                        >
                            {userList.map((item) =>
                                <Select.Option
                                    key={item.userId.toString()}
                                    value={item.userId.toString()}
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