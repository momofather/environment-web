import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';
class InOutWater extends Component {
    get12Timer = null;
    ref = null;
    constructor(props) {
        super(props);
        this.state = {
            active: 1,
            data: [],
            flow: [],
            options: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                legend: {
                    data: ['进水', '出水'],
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                dataZoom: [
                    {
                        type: 'inside',
                        start: 0,
                        end: 100
                    },
                    {
                        start: 0,
                        end: 100
                    }
                ],
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [],
                    axisLine: {
                        lineStyle: {
                            color: '#FFFFFF'
                        }
                    },
                    axisLabel: {
                        formatter: (value) => {
                            return `${moment(value).format('yyyy-MM-DD')}\n${moment(value).format('HH:mm')}`
                        },
                    },
                    axisPointer: {
                        label: {
                            color: '#000'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#FFFFFF'
                        }
                    },
                    axisPointer: {
                        label: {
                            color: '#000'
                        }
                    }
                },
                series: [
                    {
                        name: '进水',
                        type: 'line',
                        data: [],
                        smooth: true,
                    },
                    {
                        name: '出水',
                        type: 'line',
                        data: [],
                        smooth: true,
                    }
                ]
            },
        }
    }

    componentDidMount(){
        this.getData();
        this.get12Timer = setInterval(() => {
            this.getData();
        }, 1000 * 60 * 10);
    }
    componentWillUnmount(){
        clearInterval(this.get12Timer);
    }

    getData = () => {
        React.axios.get('api/inCodOrTp/queryList', { startTime: moment(new Date().getTime()-1000*60*60*24*7).format('yyyy-MM-DD 00:00:00'), endTime: moment().format('yyyy-MM-DD 23:00:00')}, res => {
            this.setState({ data: res.data }, () => {
                this.onchange(this.state.active);
            });
        })
        React.axios.get('api/inOutWater/queryList', { startTime: moment(new Date().getTime() - 1000 * 60 * 60 * 24 * 7).format('yyyy-MM-DD 00:00:00'), endTime: moment().format('yyyy-MM-DD 23:00:00') }, res => {
            this.setState({ flow: res.data }, () => {
                this.onchange(this.state.active);
            });
        })
    }

    onchange = (index) => {
        let xAxisData = [], inCodData = [], outCodData = [], inNh3N = [], outNh3N = [], inTn = [], outTn = [], inTp = [], outTp = [], inPh = [], outPh = [], inFlow = [], outFlow = [],
            inTemperature = [], outTemperature = [];
        this.state.data.forEach(item => {
            xAxisData.push(item.gainTime);
            inCodData.push(item.inCod);
            outCodData.push(item.outCod);
            inNh3N.push(item.inNh3N);
            outNh3N.push(item.outNh3N);
            inTn.push(item.inTn);
            outTn.push(item.outTn);
            inTp.push(item.inTp);
            outTp.push(item.outTp);
            inPh.push(item.inPh);
            outPh.push(item.outPh);
            inTemperature.push(item.inTemperature);
            outTemperature.push(item.outTemperature);
        })
        this.state.flow.forEach(item => {
            inFlow.push(item.inFlow);
            outFlow.push(item.outFlow);
        })
        let options = this.state.options;
        options.xAxis.data = xAxisData;
        this.setState({ active: index }, () => {
            options.series[0].smooth = true;
            options.series[1].smooth = true;
            if (index === 1) {
                options.series[0].data = inCodData;
                options.series[1].data = outCodData;
                options.series[0].smooth = false;
                options.series[1].smooth = false;
            } else if (index === 2) {
                options.series[0].data = inNh3N;
                options.series[1].data = outNh3N;
                options.series[0].smooth = false;
                options.series[1].smooth = false;
            } else if (index === 3) {
                options.series[0].data = inTn;
                options.series[1].data = outTn;
            } else if (index === 4) {
                options.series[0].data = inTp;
                options.series[1].data = outTp;
            } else if (index === 5) {
                options.series[0].data = inPh;
                options.series[1].data = outPh;
                options.series[0].smooth = false;
                options.series[1].smooth = false;
            } else if (index === 6) {
                options.series[0].data = inFlow;
                options.series[1].data = outFlow;
                options.series[0].smooth = false;
                options.series[1].smooth = false;
            } else if (index === 7) {
                options.series[0].data = inTemperature;
                options.series[1].data = outTemperature;
            }
            this.ref.getEchartsInstance().setOption(options);
        });
    }

    render() {
        return <>
            <div className="btn">
                <div className={this.state.active === 1 ? 'active' : ''} onClick={this.onchange.bind(this, 1)}>COD</div>
                <div className={this.state.active === 2 ? 'active' : ''} onClick={this.onchange.bind(this, 2)}>NH3-N</div>
                <div className={this.state.active === 3 ? 'active' : ''} onClick={this.onchange.bind(this, 3)}>TN</div>
                <div className={this.state.active === 4 ? 'active' : ''} onClick={this.onchange.bind(this, 4)}>TP</div>
                <div className={this.state.active === 5 ? 'active' : ''} onClick={this.onchange.bind(this, 5)}>PH</div>
                <div className={this.state.active === 7 ? 'active' : ''} onClick={this.onchange.bind(this, 7)}>温度</div>
                <div className={this.state.active === 6 ? 'active' : ''} onClick={this.onchange.bind(this, 6)}>流量</div>
            </div>
            <ReactEcharts ref={(e) => { this.ref = e; }} option={this.state.options} style={{ height: '500px', width: '100%' }} />
        </>
    }
}
export default InOutWater;