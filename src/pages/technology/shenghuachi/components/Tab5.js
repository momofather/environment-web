import React, { Component } from 'react';
import Alarm from '../../components/Alarm';
import data from '../data/tab5_data';
import '../../xgs.less';
class Technology extends Component {
    timer = null;
    constructor(props){
        super(props);
        this.state = {
            status: {},
            array: [],
            timer: null
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
    
    render() {
        return (<div className="img-box">
            <img src={require('../images/03_ao生化池_3号4号生化池操作层上层.jpg')} alt="工艺图" />
            {data.map((item, index) => <Alarm key={index} status={this.state.status} {...item}/>)}
            
            {/* <div className="absolute" bg="true" style={{ top: '13%', left: '9%' }}>
                <div className="row" align="center">
                    <span style={{display: 'block'}}>总空气流量</span>
                    <span>0.00</span>
                    <span>Nm3/h</span>
                </div>
            </div>

            <div className="absolute" bg="true" style={{ top: '31%', left: '21%' }}>
                <div className="row" align="center">
                    <span style={{ display: 'block' }}>明渠流量</span>
                    <span>0.00</span>
                    <span>L/s</span>
                </div>
            </div>

            <div className="absolute" bg="true" style={{ top: '44%', left: '24%' }}>
                <div className="row" align="center">
                    <span style={{ display: 'block' }}>进水累计流量</span>
                    <span>0.00</span>
                    <span>L/s</span>
                </div>
            </div> */}
        </div>);
    }
}
 
export default Technology;