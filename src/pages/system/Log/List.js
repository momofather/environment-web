import React,{Component} from "react";
import {Space,Form,Input,DatePicker} from "antd";
import Table from "@/components/table";
import Button from "@/components/button";
import moment from 'moment';

class List extends Component{
    tableRef = React.createRef();
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state= {
            params:{key:""},
        };
    };

    /**
     * @todo 搜索
     */
     submit = (values) => {
         if(values.times){
            values.stadate = moment(values.times[0]).format('yyyy-MM-DD 00:00:00');
            values.enddate = moment(values.times[1]).format('yyyy-MM-DD 23:59:59');
            delete values.times;
         }
        this.tableRef.reload(values);
    };
    /**
     * @todo 重置搜索
     */
    reset = () => {
        this.formRef.current.resetFields();
        this.tableRef.reload(this.formRef.current.getFieldsValue(true));
    };

    render(){
        const tableColumns = [
            {
                title:"IP",
                key:"ip",
                dataIndex:"ip",
            },
            {
                title:"操作",
                key:"operation",
                dataIndex:"operation",
            },
            {
                title:"方法",
                key:"method",
                dataIndex:"method",
            },
            {
                title:"操作用户",
                key:"username",
                dataIndex:"username",
            },
            {
                title:"操作时间",
                key:"createTime",
                dataIndex:"createDate",
            }
        ];

        return(
            <>
                <Space
                    direction="vertical"
                    style={{width:"100%"}}
                >
                    <Form
                        layout="inline"
                        onFinish={this.submit}
                        onReset={this.reset}
                        ref={this.formRef}
                    >
                        <Form.Item name="username">
                            <Input placeholder="操作用户"/>
                        </Form.Item>
                        <Form.Item name="times">
                            <DatePicker.RangePicker placeholder={['操作时间(开始)', '操作时间(结束)']}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={this.reset} icon="chongzhi">重置</Button>
                        </Form.Item>
                    </Form>
                    <Table
                        rowKey="id"
                        onRef={ref=>this.tableRef = ref}
                        columns={tableColumns}
                        method="get"
                        url="sys/log/list"
                    />
                </Space>
            </>
        );
    };
};
export default List;