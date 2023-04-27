import React,{Component} from "react";
import {Modal} from "antd";
import Table from "@/components/table";

class GoodsListModel extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedKeys: this.props.selectKeys
        };
    };

    componentDidMount(){
        
    };

    onSelectKeys=(selectKeys)=>{
        this.setState({
            selectedKeys: selectKeys
        });
    }

    render(){
        const tableColumns =[
            {
                title:"物料名称",
                key:"name",
                dataIndex:"name",
            },
            {
                title:"物料编号",
                key:"number",
                dataIndex:"number",
            }
        ]
        return(
            <Modal
                title="选择物料"
                visible={true}
                onOk={()=>{this.props.onOk(this.state.selectedKeys)}}
                onCancel={this.props.onCancel}
                maskClosable={false}
            >
                <Table
                        rowKey="number"
                        columns={tableColumns}
                        method="post"
                        url="api/wms/twarehousestock/queryMaterialList"
                        size="small"
                        number={false}
                        selectedRowKeys={this.state.selectedKeys}
                        onSelectKeys={this.onSelectKeys}
                    />
            </Modal>
        );
    };
};
export default GoodsListModel;