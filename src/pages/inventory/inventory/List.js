import React,{Component} from 'react';
import {Form,Input,Select,Breadcrumb,Modal} from 'antd';
import Table from '@/components/table';
import Button from '@/components/button';
// import Statistics from './Statistics'
class List extends Component {
    tableRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            WarehouseList: [],
            typeList: [],
            units: {}
        }
    }
    componentDidMount(){
        this.getUnitList();
        this.getWarehouseList();
        this.getTypeList();
    }
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
    // 获取仓库下拉框数据
    getWarehouseList=()=>{
        React.axios.get('api/wms/twarehouse/list',{page:1,limit:100},res=>{
            this.setState({WarehouseList: res.data.data});
        });
    };
    // 获取仓库下拉框数据
    getTypeList=()=>{
        React.axios.post("api/wmsType/tmaterialtype/queryMaterialTypeList?number="+React.enums.goodTypeCode,null,res=>{
            this.setState({typeList: res.data});
        });
    };
    // 详情
    openDetail=(id)=>{
        this.props.history.push("/"+React.Version+"/inventory/inventory/detail/"+id);
    };
    // 二位码
    openQR=(data)=>{
        const params = {
            address: `${data.houseName} / ${data.locationName} / ${data.shelvesName}`,
            content: data.number,
            number: data.number
        }
        React.axios.get("api/wms/twarehousestock/creageBarcodeBase64",params,res=>{
            Modal.confirm({
                title: data.name,
                icon:"",
                cancelText:"关闭",
                okText:"下载二维码",
                content: <div style={{textAlign: 'center'}}><img alt="" src={res.data} /></div>,
                onOk: ()=>{
                    React.axios.download(res.data);
                }
            });
        });
        
    };
    // 搜索
    submit=(values)=>{
        this.tableRef.reload(values);
    };

    tableRef = React.createRef();
    /**
     * @todo 搜索与刷新
     */
    tableReload = () => {
        const {params} = this.state;
        this.tableRef.reload(params);
    };

    formRef = React.createRef();
    /**
     * @todo 重置搜索
     */
    reset = () => {
        this.formRef.current.resetFields();
        new Promise((resolve) => {
            this.setState({params:{name:"",gtype:"",houseNumber:""}});
            resolve();
        }).then(() => {
            this.tableReload();
        });
    };

    // 导出二维码
    exportQRcode=()=>{
        React.message.error('暂未实现');
    }

    render() {
        const columns = [
            {
                title:"物料名称",
                key:"name",
                dataIndex:"name",
            },
            {
                title:"编号",
                key:"number",
                dataIndex:"number",
            },
            {
                title:"物料种类",
                key:"gname",
                dataIndex:"gname",
                render:(text,record) => {
                    let gname = "";
                    this.state.typeList.forEach((item) => {
                        if(item.id === record.gtype){
                            gname = item.name;
                            return;
                        };
                    });
                    return gname;
                },
            },
            {
                title:"库存数量",
                key:"num",
                dataIndex:"num",
            },
            {
                title:"单价",
                key:"price",
                dataIndex:"price",
                render:(text,record) => {
                    return `${record.price}元/${this.state.units[record.unit]}`;
                },
            },
            {
                title:"所在位置",
                render:(text,record) => <Breadcrumb>
                    <Breadcrumb.Item>{record.houseName}</Breadcrumb.Item>
                    <Breadcrumb.Item>{record.locationName}</Breadcrumb.Item>
                    <Breadcrumb.Item>{record.shelvesName}</Breadcrumb.Item>
                </Breadcrumb>
            },
            {
                title:"备注",
                key:"remark",
                dataIndex:"remark",
            },
            {
                title:"操作",
                width:"150px",
                align: 'center',
                render:(text,record) => <>
                    <Button type="link" size="small" onClick={this.openDetail.bind(this,record.id)} icon="info">详情</Button>
                    <Button type="link" size="small" onClick={this.openQR.bind(this,record)} icon="info">二维码</Button>
                </>,
            },
        ]; 
        return (
            <>
                <Form ref={this.formRef} className="query-tools" layout="inline" onFinish={this.submit} onReset={this.reset}>
                    <Form.Item name="name" initialValue="">
                        <Input placeholder="物料名称" allowClear/>
                    </Form.Item>
                    <Form.Item name="gtype" initialValue={[]}>
                        <Select placeholder="物料种类" style={{width: '174px'}} allowClear>
                            {this.state.typeList.map(res=><Select.Option key={res.id} value={res.id}>{res.name}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item name="houseNumber" initialValue={[]}>
                        <Select placeholder="仓库" style={{width: '174px'}} allowClear>
                            {this.state.WarehouseList.map(res=><Select.Option key={res.id} value={res.number}>{res.name}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" icon="search" htmlType="submit">查询</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" icon="chongzhi">重置</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" icon="info" onClick={this.exportQRcode}>导出二维码</Button>
                    </Form.Item>
                </Form>
                <Table
                    rowKey="id"
                    columns={columns}
                    method="get"
                    url="api/wms/twarehousestock/list"
                    onRef={ref=>this.tableRef = ref}
                />
                {/* <Tabs>
                    <Tabs.TabPane
                        tab="列表"
                        key="1"
                    >
                    </Tabs.TabPane>
                    <Tabs.TabPane
                        tab="统计"
                        key="2"
                    >
                        <Statistics />
                    </Tabs.TabPane>
                </Tabs> */}
            </>
        );
    }
}
 
export default List;