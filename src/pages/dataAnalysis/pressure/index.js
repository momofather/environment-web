import React, { Component } from 'react';
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
                    data: ['进厂水质', '出厂水质'],
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
                        name: '进厂浊度',
                        data: [150, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135],
                        type: 'line',
                        smooth: true
                    },
                    {
                        name: '出厂浊度',
                        data: [60, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135],
                        type: 'line',
                        smooth: true
                    }
                ]
            },
        }
    }
    render() {
        return (
            <div className="water-quality">
                
            </div>
        );
    }
}
 
export default Index;