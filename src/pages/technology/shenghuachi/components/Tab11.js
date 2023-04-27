import React, { Component } from 'react';
import Alarm from '../../components/Alarm';
import data from '../data/tab11_data';
import '../../xgs.less';
class Technology extends Component {
    timer = null;
    constructor(props) {
        super(props);
        this.state = {
            status: {},
            array: [],
            timer: null
        }
    }

    componentDidMount() {
        let array = [];
        for (let item of data) {
            item.allStatus.forEach(val => {
                array.push(val);
            })
        }
        this.setState({ array: array }, () => {
            this.getvalue();
            if (!this.timer) {
                this.timer = setInterval(() => {
                    this.getvalue();
                }, 5000)
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getvalue = () => {
        if (this.state.array.length !== 0) {
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
            <img src={require('../images/03_ao生化池_1号加药房.jpg')} alt="工艺图" />
            {data.map((item, index) => <Alarm key={index} status={this.state.status} {...item} />)}
        </div>);
    }
}
 
export default Technology;