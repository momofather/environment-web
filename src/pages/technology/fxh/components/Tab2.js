import React, { Component } from 'react';
import data from '../dada/tab2_data';
import lamb1Data from '../dada/lamb1_data';
import lamb2Data from '../dada/lamb2_data';
import Alarm from '../../components/Alarm';
import '../../xgs.less';

class Technology extends Component {
    timer = null;
    constructor(props){
        super(props);
        this.state = {
            status: {},
            lambStatus: {},
            array: [],
            timer: null,
            title:'',
            lambData: []
        }
    }
    componentDidMount(){
        let array = [];
        for (let item of data) {
            item.allStatus.forEach(val=>{
                array.push(val);
            })
        }
        this.setState({ array: array},()=>{
            this.getvalue();
            if(!this.timer){
                this.timer = setInterval(()=>{
                    this.getvalue();
                },10000)
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getvalue=()=>{
        if (this.state.array.length !== 0){
            let size = 8; // 每此请求传递参数的数量
            let count = Math.ceil(this.state.array.length / size);
            for (let i = 0; i < count; i++) {
                let j = i * size;
                let count2 = (i + 1) * size;
                if (count2 > this.state.array.length) {
                    count2 = this.state.array.length;
                }
                let array = [];
                for (; j < count2; j++) {
                    array.push(this.state.array[j]);
                }
                React.axios.post(`api/opcServer/getOpcServer${i + 1}Data`, array, res => {
                    let _status = this.state.status;
                    for (let k in res.data) {
                        _status[k] = res.data[k];
                    }
                    this.setState({ status: _status });
                })
            }
        }
    }
    // 显示灯管
    showLamb = (data, title)=>{
        let tags = [];
        data.forEach(item=>{
            item.forEach(item2=>{
                if (item2.no) tags.push(item2.no);
            })
        })
        this.setState({
            lambStatus: [],
            lambData: [],
            title: title,
        });
        React.axios.post(`api/opcServer/getOpcServer10Data`, tags, res => {
            this.setState({
                lambStatus: res.data,
                lambData: data
            });
        })
        this.setState({
            lambDataModal: true
        })
    }
    
    render() {
        return (<div className="img-box">
            <img src={require('../images/06_反硝化与尾水_03_紫外线消毒渠和厂内中水接触消毒池.jpg')} alt="工艺图" />
            {data.map((item, index) => <Alarm key={index} status={this.state.status} {...item}/>)}
            <div className="_1" title="紫外线消毒渠1#系统" onClick={this.showLamb.bind(this, lamb1Data, '紫外线消毒渠1#系统')}></div>
            <div className="_2" title="紫外线消毒渠2#系统" onClick={this.showLamb.bind(this, lamb2Data, '紫外线消毒渠2#系统')}></div>
            {
                this.state.lambDataModal && <div className="lamb_modal">
                    <div className="modal-box">
                        <div className="modal-title">{this.state.title}</div>
                        <div className="modal-body">
                            {this.state.lambData.length === 0 && <div className="loding">正在获取数据...</div>}
                            
                            {this.state.lambData.map((item, index) => <div key={index} className="lamb-row">
                                {item.map((item2, j) => {
                                    if(index===0){
                                        return <div key={j} className={this.state.lambStatus[item2.no] === 'true' ? 'normal' : ''}>{item2.name}</div>
                                    }else{
                                        return <div key={j} className={this.state.lambStatus[item2.no] === 'false' ? 'normal' : ''}>{item2.name}</div>
                                    }
                                })}
                            </div>)}
                        </div>
                        <div className="close-btn" onClick={() => { this.setState({ lambDataModal: false})}}>关闭</div>
                    </div>
                </div>
            }
        </div>)}
            
}

export default Technology;