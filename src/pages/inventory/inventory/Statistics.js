import React, { Component } from 'react';
import {Form,Input,Select,} from 'antd';
import Button from '@/components/button';
import Table from '@/components/table';

export default class Statistics extends Component {
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            WarehouseList: [],
            locationList: [],
            shelvesList: [],
            data: [],
            units: {}
        }
    }
    componentDidMount(){
        this.getUnitList();
        this.getWarehouseList();
        this.submit(null);
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
    // 区域
    getLocationList=(houseNumber)=>{
        React.axios.get('api/wms/twarehouselocation/getHouseLocation/',{houseNumber: houseNumber},res=>{
            this.setState({locationList: res.data});
        });
    }
    // 货架
    getShelvesList=(locationNumber)=>{
        const houseNumber = this.formRef.current.getFieldValue('houseNumber');
        React.axios.get('api/wms/twarehouseshelves/getLocationShelves/',{houseNumber: houseNumber,locationNumber: locationNumber},res=>{
            this.setState({shelvesList: res.data});
        });
    }
    // 搜索
    submit=(vals)=>{
        React.axios.get('api/wms/twarehousestock/getStatistics',vals,res=>{
                this.setState({data: res.data});
        });
    }
    // 重置
    reset=()=>{
        this.formRef.current.resetFields();
        this.setState({
            locationList: [],
            shelvesList: []
        });
        this.submit(null);
    }
    render() {
        const columns = [
            {
                title:"物料名称",
                key:"name",
                dataIndex:"name",
                align: 'center'
            },
            {
                title:"单价",
                align: 'center',
                render: (row)=> `${row.price}元/${this.state.units[row.unit]}`
            },
            {
                title:"数量",
                align: 'center',
                render: (row)=> `${row.num}${this.state.units[row.unit]}`
            },
            {
                title:"金额",
                align: 'center',
                render: (row)=> `${row.num*row.price}元`
            },
        ]
        return (
            <>
                <Form ref={this.formRef} className="query-tools" layout="inline" onFinish={this.submit} onReset={this.reset}>
                    <Form.Item name="name">
                        <Input placeholder="物料名称" allowClear/>
                    </Form.Item>
                    <Form.Item name="houseNumber">
                        <Select placeholder="仓库" style={{width: '174px'}} onChange={this.getLocationList} allowClear>
                            {this.state.WarehouseList.map(res=><Select.Option key={res.number} value={res.number}>{res.name}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item name="locationNumber">
                        <Select placeholder="区域" style={{width: '174px'}} onChange={this.getShelvesList} allowClear>
                            {this.state.locationList.map(res=><Select.Option key={res.number} value={res.number}>{res.name}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item name="shelvesNumber">
                        <Select placeholder="货架" style={{width: '174px'}} allowClear>
                            {this.state.shelvesList.map(res=><Select.Option key={res.number} value={res.number}>{res.name}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" icon="search" htmlType="submit">查询</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" icon="chongzhi">重置</Button>
                    </Form.Item>
                </Form>
                <Table columns={columns} data={this.state.data} number={false} pager={false}/>
            </>
        )
    }
}

