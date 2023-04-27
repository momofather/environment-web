import React,{Component} from "react";
import {Modal,Form,Tag} from "antd";

class detail extends Component{
    constructor(props){
        super(props);
        this.state={
            info: {},
            dept: {}
        };
    };

    componentDidMount(){
        const {userId} = this.props;
        if(userId){
            React.axios.get("sys/user/info/"+userId,"",res => {
                this.setState({info:res.data});
                this.getDept(res.data.deptId);
            });
        };
    };

    getDept=(id)=>{
        if(id){
            React.axios.get("api/sys/dept/"+id,"",res => {
                this.setState({dept:res.data});
            });
        }
    }

    /**
     * @todo 关闭组件
     */
    close = () => {
        const {close} = this.props;
        close();
    };

    render(){
        const {info} = this.state;
        const formLayout={
            labelCol:{
                xs:{span:24},
                sm:{span:24},
                md:{span:10},
                lg:{span:8},
                xl:{span:6},
            },
            wrapperCol:{
                xs:{span:24},
                sm:{span:24},
                md:{span:14},
                lg:{span:16},
                xl:{span:18},
            }
        };

        return(
            <>
                <Modal
                    title="用户信息"
                    visible={true}
                    onOk={this.close}
                    onCancel={this.close}
                    maskClosable={false}
                    footer=""
                >
                    <Form
                        {...formLayout}
                    >
                        <Form.Item
                            label="用户名"
                        >
                            {info.username}
                        </Form.Item>
                        <Form.Item
                            label="真实姓名"
                        >
                            {info.name}
                        </Form.Item>
                        <Form.Item
                            label="手机号码"
                        >
                            {info.mobile}
                        </Form.Item>
                        <Form.Item
                            label="状态"
                        >
                            {React.enums.status[info.status]}
                        </Form.Item>
                        <Form.Item
                            label="绑定角色"
                        >
                            {info.roleNameList?info.roleNameList.map(item=><Tag>{item}</Tag>):''}
                        </Form.Item>
                        <Form.Item
                            label="所在部门"
                        >
                            {this.state.dept.name}
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    };
};
export default detail;