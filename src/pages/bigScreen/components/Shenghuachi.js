import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';
class Shenghuachi1 extends Component {
    ref = null;
    timer = null;
    constructor(props) {
        super(props);
        this.state = {
            active: [1],
            data: [],
            options: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                legend: {
                    data: [],
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
                series: []
            },
        }
    }

    componentDidMount() {
        this.getData();
        this.timer = setInterval(() => {
            this.getData();
        }, 1000 * 60 * 10);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getData = () => {
        React.axios.get('api/biochemical/queryList', { poolNumber: this.props.poolNumber, startTime: moment(new Date().getTime() - 1000 * 60 * 60 * 24 * 7).format('yyyy-MM-DD 00:00:00'), endTime: moment().format('yyyy-MM-DD 23:00:00')}, res => {
            this.setState({ data: res.data }, () => {
                this.onchange(1);
            });
        })
    }

    onchange = (index) => {
        let xAxisData = [];
        let A_DO = [], B_DO = [], C_DO = [], D_DO = [];
        let A_MLSS = [], B_MLSS = [], C_MLSS = [], D_MLSS = [];
        let A_ORP = [], B_ORP = [], C_ORP = [], D_ORP = [];
        let NH3 = [];
        this.state.data.forEach(item => {
            xAxisData.push(item.gainTime);
            A_DO.push(item.aerobicADo);
            B_DO.push(item.aerobicBAgitatorDo);
            C_DO.push(item.aerobicCDo);
            D_DO.push(item.aerobicDDo);

            A_MLSS.push(item.aerobicAMlss);
            B_MLSS.push(item.aerobicBAgitatorMlss);
            C_MLSS.push(item.aerobicCMlss);
            D_MLSS.push(item.aerobicDMlss);
            
            A_ORP.push(item.anaerobicZoneEjectorOrp);
            B_ORP.push(item.hypoxiaAOrp);
            C_ORP.push(item.hypoxiaBAgitatorOrp);
            D_ORP.push(item.hypoxiaCAgitatorOrp);

            NH3.push(item.aerobicDNh3);
        })
        let options = this.ref.getEchartsInstance().getOption();
        options.xAxis[0].data = xAxisData;
        let active = this.state.active;
        if (active.indexOf(index) === -1) {
            active.push(index);
        } else if (active.length > 1) {
            active.splice(active.indexOf(index), 1);
        }
        this.setState({ active: active }, () => {
            let series = [];
            let legend = [];
            active.forEach(item => {
                if(item === 1){
                    series.push({
                        name: '好氧A区DO',
                        type: 'line',
                        data: A_DO,
                        smooth: true,
                    });
                    series.push({
                        name: '好氧B区DO',
                        type: 'line',
                        data: B_DO,
                        smooth: true,
                    });
                    series.push({
                        name: '好氧C区DO',
                        type: 'line',
                        data: C_DO,
                        smooth: true,
                    });
                    series.push({
                        name: '好氧D区DO',
                        type: 'line',
                        data: D_DO,
                        smooth: true,
                    });
                    legend.push('好氧A区DO');
                    legend.push('好氧B区DO');
                    legend.push('好氧C区DO');
                    legend.push('好氧D区DO');
                } else if(item === 2){
                    series.push({
                        name: '好氧A区MLSS',
                        type: 'line',
                        data: A_MLSS,
                        smooth: true,
                    });
                    series.push({
                        name: '好氧B区MLSS',
                        type: 'line',
                        data: B_MLSS,
                        smooth: true,
                    });
                    series.push({
                        name: '好氧C区MLSS',
                        type: 'line',
                        data: C_MLSS,
                        smooth: true,
                    });
                    series.push({
                        name: '好氧D区MLSS',
                        type: 'line',
                        data: D_MLSS,
                        smooth: true,
                    });
                    legend.push('好氧A区MLSS');
                    legend.push('好氧B区MLSS');
                    legend.push('好氧C区MLSS');
                    legend.push('好氧D区MLSS');
                } else if (item === 3) {
                    series.push({
                        name: '厌氧/缺氧区ORP',
                        type: 'line',
                        data: A_ORP,
                        smooth: true,
                    });
                    series.push({
                        name: '好氧A区ORP',
                        type: 'line',
                        data: B_ORP,
                        smooth: true,
                    });
                    series.push({
                        name: '好氧B区ORP',
                        type: 'line',
                        data: C_ORP,
                        smooth: true,
                    });
                    series.push({
                        name: '好氧C区ORP',
                        type: 'line',
                        data: D_ORP,
                        smooth: true,
                    });
                    legend.push('厌氧/缺氧区ORP');
                    legend.push('好氧A区ORP');
                    legend.push('好氧B区ORP');
                    legend.push('好氧C区ORP');
                } else if (index === 4) {
                    series.push({
                        name: 'NH3-N',
                        type: 'line',
                        data: NH3,
                        smooth: true,
                    });
                    legend.push('NH3-N');
                }
            })
            options.series = series;
            options.legend[0].data = legend;
            this.ref.getEchartsInstance().clear();
            this.ref.getEchartsInstance().setOption(options);
        });
    }

    render() {
        return <>
            <div className="btn">
                <div className={this.state.active.indexOf(1) !== -1 ? 'active' : ''} onClick={this.onchange.bind(this, 1)}>DO</div>
                <div className={this.state.active.indexOf(2) !== -1 ? 'active' : ''} onClick={this.onchange.bind(this, 2)}>MLSS</div>
                <div className={this.state.active.indexOf(3) !== -1 ? 'active' : ''} onClick={this.onchange.bind(this, 3)}>ORP</div>
                <div className={this.state.active.indexOf(4) !== -1 ? 'active' : ''} onClick={this.onchange.bind(this, 4)}>NH3-N</div>
            </div>
            <ReactEcharts ref={(e) => { this.ref = e; }} option={this.state.options} style={{ height: '500px', width: '100%' }} />
        </>
    }
}
export default Shenghuachi1;