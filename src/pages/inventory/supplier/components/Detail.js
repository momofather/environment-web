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
        const {warehouseId} = this.props;
        if(warehouseId){
            React.axios.get("/sys/user/info/"+warehouseId,"",res => {
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
                    title="物料信息"
                    visible={true}
                    onOk={this.close}
                    onCancel={this.close}
                >
                    <Form
                        {...formLayout}
                    >
                        <Form.Item
                            label="物料名称"
                        >
                            {info.warehousename}
                        </Form.Item>
                        <Form.Item
                            label="种类"
                        >
                            {info.address}
                        </Form.Item>
                        <Form.Item
                            label="库存"
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