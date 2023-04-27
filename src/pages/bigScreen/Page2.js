import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { DatePicker } from 'antd';
import moment from 'moment';
import './page2.less';
class History extends React.Component {
    refInFlow = null;
    refOutFlow = null;
    refGuFengJi = null;
    constructor(props){
        super(props);
        this.state = {
            total: 120000,
            options: {
                tooltip: {
                    trigger: 'item'
                },
                series: {
                    type: 'pie',
                    radius: '70%',
                    label: {
                        show: true,
                    },
                    data: []
                }
            },
        }
    }
    componentDidMount(){
        this.getInData(new Date().getTime() - 1000 * 60 * 60 * 24);
        this.getOutData(new Date().getTime() - 1000 * 60 * 60 * 24);
        this.getGuFengJiStatus();
    }
    getInData = (date)=>{
        React.axios.get('api/month/plcmonth/queryList', { startTime: moment(date).format('yyyy-MM-DD'), endTime: moment(date).format('yyyy-MM-DD')}, res=>{
            let option = this.state.options;
            option.series.data = [];
            option.series.label.formatter = '{b}\n{d}%';
            if (res.data.length !== 0){
                option.series.data = [
                    { value: res.data[0].inFlow, name: '达标' },
                    { value: this.state.total - res.data[0].inFlow, name: '未达标' }
                ];
            }
            if (this.refInFlow){
                this.refInFlow.getEchartsInstance().setOption(option);
            }
        })
    }
    getOutData = (date) => {
        React.axios.get('api/month/plcmonth/queryList', { startTime: moment(date).format('yyyy-MM-DD'), endTime: moment(date).format('yyyy-MM-DD') }, res => {
            let option = this.state.options;
            option.series.data = [];
            option.series.label.formatter = '{b}\n{d}%';
            if (res.data.length !== 0) {
                option.series.data = [
                    { value: res.data[0].outFlow, name: '达标' },
                    { value: this.state.total - res.data[0].outFlow, name: '未达标' }
                ];
            }
            if (this.refOutFlow){
                this.refOutFlow.getEchartsInstance().setOption(option);
            }
        })
    }
    getGuFengJiStatus = ()=>{
        let array = [
            'MCP.MCP1.MF1_Runing',
            'MCP.MCP1.MF2_Runing',
            'MCP.MCP1.MF3_Runing',
            'MCP.MCP1.MF4_Runing',
            'MCP.MCP1.MF5_Runing',
            'MCP.MCP2.MF1_Runing',
            'MCP.MCP2.MF2_Runing',
            'MCP.MCP2.MF3_Runing',
        ];
        React.axios.post('api/opcServer/getOpcServer6Data', array, res => {
            console.log(res.data)
            let option = this.state.options;
            option.series.data = [];
            option.series.label.formatter = '{b}{c}';
            let runCount = 0;
            for (let k in res.data){
                if (res.data[k] === 'true'){
                    runCount++;
                }
            }
            option.series.data = [
                { value: array.length - runCount, name: '未运行' },
                { value: runCount, name: '运行中' },
            ];
            
            if (this.refGuFengJi){
                this.refGuFengJi.getEchartsInstance().setOption(option);
            }
        })
    }
    render(){
        return <>
            <ul className="row">
                <li className="row3-left">
                    <div className="title">进水流量负荷率 <DatePicker defaultValue={moment(new Date().getTime() - 1000 * 60 * 60 * 24)} onChange={this.getInData} size="small" className="date-picker"/></div>
                    <ReactEcharts ref={(e) => { this.refInFlow = e; }} option={this.state.options} style={{ height: '300px', width: '100%' }} />
                </li>
                <li className="row3-center">
                    <div className="title">鼓风机运行情况</div>
                    <ReactEcharts ref={(e) => { this.refGuFengJi = e; }} option={this.state.options} style={{ height: '300px', width: '100%' }} />
                </li>
                <li className="row3-right"></li>
            </ul>
            <ul className="row">
                <li className="row3-left">
                    <div className="title">出水流量负荷率 <DatePicker defaultValue={moment(new Date().getTime() - 1000 * 60 * 60 * 24)} onChange={this.getOutData} size="small" className="date-picker" /></div>
                    <ReactEcharts ref={(e) => { this.refOutFlow = e; }} option={this.state.options} style={{ height: '300px', width: '100%' }} />
                </li>
                <li className="row3-center"></li>
                <li className="row3-right"></li>
            </ul>
        </>
    }
}
export default History;