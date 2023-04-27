import React,{Component} from "react";
import {Modal,Form} from "antd";

class detail extends Component{
    constructor(props){
        super(props);
        this.state={
            info:{},
        };
    };

    componentDidMount(){
        const {id} = this.props;
        if(id){
            React.axios.get("api/wms/twarehouselocation/info/"+id,"",res => {
                this.setState({info:res.data});
            });
        };
    };

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
                    title="区域详情信息"
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
                            label="仓库"
                        >
                            {info.houseName}
                        </Form.Item>
                        <Form.Item
                            label="区域名称"
                        >
                            {info.name}
                        </Form.Item>
                        <Form.Item
                            label="编号"
                        >
                            {info.number}
                        </Form.Item>
                        <Form.Item
                            label="备注"
                        >
                            {info.remark}
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    };
};
export default detail;