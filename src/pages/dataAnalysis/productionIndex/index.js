// 生产指标
import React, { Component} from 'react';
import {Card} from 'antd';
import Table from '@/components/table';
import ReactEcharts from 'echarts-for-react';
import './index.less';
class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            options:{
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                legend: {
                    data: ['预处理', 'AO生化池', '二沉池', '混凝沉淀池', '反硝化与尾水','脱泥'],
                    top: 0
                },
                grid: {
                    bottom: 20,
                    top: 30,
                    right: 13,
                    left: 30
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月','7月','8月','9月','10月','11月','12月'],
                    axisLabel: {
                        fontSize: 8,
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        fontSize: 8,
                    }
                },
                series: [
                    {
                        name: '预处理',
                        data: [150, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: 'AO生化池',
                        data: [60, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '混凝沉淀池',
                        data: [190, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '反硝化与尾水',
                        data: [120, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '脱泥',
                        data: [50, 130, 284, 250, 335, 147, 260,150, 230, 224, 218, 135],
                        type: 'line',
                        smooth: true
                    }
                ]
            },
            options2: {
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['70%', '100%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 20, name: '水位报警'},
                            {value: 2, name: '出厂水质'},
                            {value: 30, name: '设备异常'}
                        ]
                    }
                ]
            },
            tableData: [
                {order:1,name:'预处理',num: '10'},
                {order:2,name:'二沉池',num: '7'},
                {order:3,name:'AO生化池',num: '5'},
                {order:4,name:'混凝沉淀池',num: '3'},
                {order:5,name:'反硝化与尾水',num: '1'},
                {order:6,name:'脱泥',num: '1'},
            ]
        }
    }

    render() {
        const columns = [
            {
                title: '排名',
                dataIndex: 'order',
                key: 'order',
                align: 'center'
            },
            {
                title: '监测点',
                dataIndex: 'name',
                key: 'name',
                align: 'center'
            },
            {
                title: '报警次数',
                dataIndex: 'num',
                key: 'num',
                align: 'center'
            },
        ]
        return (
            <div className="production-index">
                <ul>
                    <li style={{flex: 2}}>
                        <Card size="small" title="报警趋势分析">
                            <ReactEcharts option={this.state.options} style={{height: '300px', width: '100%'}} />
                        </Card>
                    </li>
                    <li>
                        <Card size="small" title="报警类型分析">
                            <ReactEcharts option={this.state.options2} style={{height: '300px', width: '100%'}} />
                        </Card>
                    </li>
                </ul><br/>
                <ul>
                    <li>
                        <Card size="small" title="电耗分析">
                            <ReactEcharts option={this.state.options} style={{height: '300px', width: '100%'}} />
                        </Card>
                    </li>
                </ul><br/>
                <ul>
                    <li>
                        <Card size="small" title="报警事件排名">
                            <Table pager={false} rowKey="order" columns={columns} data={this.state.tableData} />
                        </Card>
                    </li>
                    <li style={{flex: 2}}>
                    </li>
                </ul><br/>
            </div>
        );
    }
}
export default Index;