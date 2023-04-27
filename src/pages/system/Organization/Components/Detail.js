import React,{Component} from "react";
import {Modal,Form} from "antd";

class detail extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    };

    render(){
        return(
            <>
                <Modal
                    title="部门详情"
                    visible={true}
                    onCancel={this.props.close}
                    footer=""
                >
                    <Form labelCol={{span: 4}}>
                        <Form.Item label="上级部门">
                        </Form.Item>
                        <Form.Item label="部门名称">
                        </Form.Item>
                        <Form.Item label="联系方式">
                        </Form.Item>
                        <Form.Item label="序号">
                        </Form.Item>
                        <Form.Item label="主要职责">
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    };
};
export default detail;