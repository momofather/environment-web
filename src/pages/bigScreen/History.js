import React, { Component } from 'react';
import { Modal, } from 'antd';
import moment from 'moment';
import ReactEcharts from 'echarts-for-react';
class History extends Component {
    ref = null;
    timer = null;
    constructor(props) {
        super(props);
        this.state = {
            xAxisData: [],
            seriesData: [],
            options: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                grid: {
                    bottom: 50,
                    top: 30,
                    right: 40,
                    left: 60
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [],
                    axisLabel: {
                        formatter: (value) => `${moment(value).format('yyyy-MM-DD')}\n${moment(value).format('HH:mm:ss')}`,
                        fontSize: 10,
                        rotate: 40
                    },
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 14,
                    axisLabel: {
                        fontSize: 12,
                    }
                },
                series: [
                    {
                        name: '1#',
                        data: [],
                        type: 'line',
                        smooth: true
                    }
                ]
            },
        }
    }
    componentDidMount() {
        this.getData();
        this.timer = setInterval(()=>{
            this.getData();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    getData = () => {
        React.axios.post('api/opcServer/getOpcServer1Data', [this.props.data.tag],res=>{
            let xAxisData = this.state.xAxisData, seriesData = this.state.seriesData;
            if (xAxisData.length===0){
                let times = new Date().getTime();
                for (let i = 0; i < 24; i++) {
                    xAxisData.push(moment(times + i * 1000).format('yyyy-MM-DD HH:mm:ss'));
                }
            }
            if (seriesData.length === 24){
                xAxisData.shift();
                seriesData.shift();
                xAxisData.push(moment().format('yyyy-MM-DD HH:mm:ss'));
            }
            seriesData.push(res.data[this.props.data.tag]);
            let options = this.state.options;
            options.xAxis.data = xAxisData;
            options.series[0].data = seriesData;
            if (this.ref){
                this.ref.getEchartsInstance().setOption(options);
            }
            this.setState({
                xAxisData: xAxisData,
                seriesData: seriesData
            });
        })
    }
    render() {
        return (
            <Modal footer="" title={this.props.data.title} width="90%" visible={true} onCancel={this.props.onCancel} maskClosable={false}>
                <ReactEcharts ref={(e) => { this.ref = e; }} option={this.state.options} style={{ height: '400px', width: '100%' }} />
            </Modal>
        );
    }
}

export default History;