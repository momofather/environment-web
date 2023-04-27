// 能耗分析
import React, {Component } from 'react';
import {Card,Form,DatePicker} from 'antd';
import Button from '@/components/button';
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
                    data: ['进水量', '耗电量', '絮凝剂消耗量', '消毒剂耗量'],
                    top: 0
                },
                grid: {
                    bottom: 40,
                    top: 40,
                    right: 40,
                    left: 40
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2021-11-09', '2021-11-10', '2021-11-11'],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        name: '耗电量',
                        data: [60, 80, 55],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '絮凝剂消耗量',
                        data: [190, 200, 180],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '消毒剂耗量',
                        data: [120, 230, 224],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '出水量',
                        data: [4006, 5356, 5883],
                        type: 'bar',
                        showBackground: true,
                        barWidth: '30px'
                    }
                ]
            },
        }
    }
    render() {
        const queryFrom = <Form layout="inline">
            <Form.Item>
                <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item>
                <Button type="primary"><span className="iconfont icon-sousuo"/>查询</Button>
            </Form.Item>
        </Form>
        return (
            <div className="nenghao">
                <Card size="small" title="今日能耗">
                    <ul>
                        <li>
                            <span className="value font26">1216.0m³</span>
                            <div className="name">总出水量</div>
                        </li>
                        <li>
                            <span className="value font26">120KWh</span>
                            <div className="name">耗电量</div>
                        </li>
                        <li>
                            <span className="value font26">106.0/kg</span>
                            <div className="name">絮凝剂消耗量</div>
                        </li>
                        <li>
                            <span className="value font26">32/kg</span>
                            <div className="name">消毒剂耗量</div>
                        </li>
                    </ul>
                </Card><br/>

                <Card size="small" title="制水能耗对比曲线" extra={queryFrom}>
                    <ReactEcharts option={this.state.options} style={{height: '400px', width: '100%'}} />
                </Card>
            </div>
        );
    }
}
 
export default Index;