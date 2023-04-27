import React,{Component} from "react";
import {Modal,Form,Input,Select} from "antd";

class Edit extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            warehouseList:[]
        };
    };

    componentDidMount(){
        const {id} = this.props;
        if(id){
            React.axios.get("api/wms/twarehouselocation/info/"+id,"",res => {
                this.formRef.current.setFieldsValue(res.data);
            });
        };
        React.axios.get("api/wms/twarehouse/list?limit=1000&page=1","",res => {
            this.setState({warehouseList:res.data.data});
        });
    };

    /**
     * @todo 提交表单
     */
    submit = () => {
        const {tableReload} = this.props;
        this.formRef.current.validateFields().then((values) => {
            values.id = this.props.id;
            for(let item of this.state.warehouseList){
                if(item.number === values.houseNumber){
                    values.houseName = item.name;
                }
            }
            let url = 'api/wms/twarehouselocation/save';
            if(values.id){
                url = 'api/wms/twarehouselocation/update';
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
        const {warehouseList} = this.state;
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
                        initialValue={this.props.wareHourseHumber}
                    >
                        <Select
                            placeholder="仓库"
                            disabled
                        >
                            {warehouseList.map((item) => {
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
                        label="区域名称"
                        name="name"
                        initialValue=""
                        rules={[
                            {required:true,message:"区域名称不能为空"}
                        ]}
                    >
                        <Input placeholder="区域名称"/>
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