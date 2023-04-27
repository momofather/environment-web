import React,{Component} from "react";
import {Modal,Form} from "antd";

class detail extends Component{
    constructor(props){
        super(props);
        this.state={
            info:{},
            units: {}
        };
    };

    componentDidMount(){
        this.getUnitList();
        const {id} = this.props;
        if(id){
            React.axios.get("api/wms/twarehousegoods/info/"+id,"",res => {
                this.setState({info:res.data});
            });
        };
    };

    // 获取计量单位
    getUnitList=()=>{
        React.axios.post('api/wmsType/tmaterialtype/queryMaterialTypeList?number=unit',null,res=>{
            let obj = {};
            res.data.forEach(item=>{
                obj[item.id] = item.name;
            })
            this.setState({units: obj});
        })
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
                    title="物料信息"
                    visible={true}
                    onOk={this.close}
                    onCancel={this.close}
                    footer=""
                    maskClosable={false}
                >
                    <Form
                        {...formLayout}
                    >
                        <Form.Item
                            label="物料种类"
                        >
                            {info.gtype}
                        </Form.Item>
                        <Form.Item
                            label="物料名称"
                        >
                            {info.name}
                        </Form.Item>
                        <Form.Item
                            label="物料编号"
                        >
                            {info.number}
                        </Form.Item>
                        <Form.Item
                            label="品牌"
                        >
                            {info.brand}
                        </Form.Item>
                        <Form.Item
                            label="单价"
                        >
                            {info.price}元
                        </Form.Item>
                        <Form.Item
                            label="单位"
                        >
                            {this.state.units[info.unit]}
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