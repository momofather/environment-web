import React, { Component } from 'react';
import './alarm.less';

class Alarm extends Component {
    constructor(props){
        super(props);
        this.state = {
            infoModal: false,
            status: '',
            value: {},
            name: ''
        }
    }
    static getDerivedStateFromProps(prevProps){
        if (prevProps.modalType === 1){
            let value = {};
            if (prevProps.modalData.formatter){
                value[prevProps.no] = prevProps.modalData.formatter(prevProps.status[prevProps.no]);
            }else{
                value[prevProps.no] = prevProps.status[prevProps.no];
            }
            return { value: value }
        } else if (prevProps.modalType === 2 || prevProps.modalType === 3 || prevProps.modalType === 4) {
            let value = {};
            prevProps.modalData.forEach(item=>{
                if (item.formatter){
                    value[item.no] = item.formatter(prevProps.status[item.no]);
                }else{
                    value[item.no] = prevProps.status[item.no];
                }
            })
            return { value: value }
        } else if (prevProps.modalType === 5){
            if (prevProps.allStatus.length === 0){
                return { name: prevProps.name };
            }else{
                let name = '';
                for (let val of prevProps.allStatus){
                    if(prevProps.status[val] === 'true'){
                        name = prevProps[val];
                        break;
                    }
                }
                return {name: name};
            }
        }else{
            if (prevProps.type === 1) {
                if (prevProps.status[prevProps.status1] === '1' || prevProps.status[prevProps.status1] === 'true') { // 故障
                    return { status: 'error' }
                } else {
                    if (prevProps.status[prevProps.status2] === '1' || prevProps.status[prevProps.status2] === 'true') { // 运行
                        return { status: 'normal' }
                    } else { // 停止
                        return { status: 'stop' }
                    }
                }
            } else if (prevProps.type === 2){
                if (prevProps.status[prevProps.status1] === '1' || prevProps.status[prevProps.status1] === 'true') { // 故障
                    return { status: 'error' }
                } else {
                    // if (prevProps.status3 === 'AB.PLC5.WSXT_BSBCKF1_Open_Place'){
                    //     debugger
                    // }
                    if (prevProps.status[prevProps.status2] === '1' || prevProps.status[prevProps.status2] === 'true') { // 关到位
                        return { status: 'close' }
                    } else if (prevProps.status[prevProps.status3] === '1' || prevProps.status[prevProps.status3] === 'true') { // 开到位
                        return { status: 'normal' }
                    } else if (prevProps.status[prevProps.status3] !== '1' && prevProps.status[prevProps.status3] !== 'true' && prevProps.status[prevProps.status2] !== '1' && prevProps.status[prevProps.status2] !== 'true'){ // 半开半关
                        return { status: 'normal_close' }
                    }
                }
            } else if (prevProps.type === 3) {
                if (prevProps.status[prevProps.status1] === '1' || prevProps.status[prevProps.status1] === 'true' || prevProps.status[prevProps.status2] === '1' || prevProps.status[prevProps.status2] === 'true') { // 运行中
                    return { status: 'normal' }
                } else {
                    return { status: 'error' }
                }
            } else if (prevProps.type === 4){
                if (prevProps.status[prevProps.status1] === 'true' && prevProps.status[prevProps.status2] === 'true') { // 是否故障
                    return { status: 'error' }
                } else if (prevProps.status[prevProps.status3] === 'true' || prevProps.status[prevProps.status4] === 'true') { // 运行
                    return { status: 'normal' }
                } else {
                    return { status: 'stop' }
                }
            } else if (prevProps.type === 5){ // 只有运行或不运行的状态
                if (prevProps.status[prevProps.status1] === '1' || prevProps.status[prevProps.status1] === 'true') { // 运行中
                    return { status: 'normal' }
                } else {
                    return { status: 'stop' }
                }
            } else if (prevProps.type === 6) { 
                if (prevProps.status[prevProps.status1] === 'true') { // 开到位
                    return { status: 'normal' }
                } else if (prevProps.status[prevProps.status2] === 'true') { // 关到位
                    return { status: 'close' }
                } else { // 半开半关
                    return { status: 'normal_close' }
                }
            } else if (prevProps.type === 7) {
                if (prevProps.status[prevProps.status1] === 'true' || prevProps.status[prevProps.status2] === 'true') {
                    return { status: 'error' }
                } else if (prevProps.status[prevProps.status3] === 'true') {
                    return { status: 'normal' }
                } else {
                    return { status: 'stop' }
                }
            } else if (prevProps.type === 8){ // 故障、运行
                if (prevProps.status[prevProps.status1] === 'true') {
                    return { status: 'error' }
                } else {
                    return { status: 'normal' }
                }
            } else if (prevProps.type === 9) { // 出水调节阀
                if (prevProps.formatter){
                    return { status: prevProps.formatter(prevProps.status[prevProps.status1]) };
                }else{
                    if (parseInt(prevProps.status[prevProps.status1]) === 0) {
                        return { status: 'close' }
                    } else if (parseInt(prevProps.status[prevProps.status1]) === 1) {
                        return { status: 'normal' }
                    } else if (parseInt(prevProps.status[prevProps.status1]) === 2 || parseInt(prevProps.status[prevProps.status1]) === 4) {
                        return { status: 'error' }
                    } else if (parseInt(prevProps.status[prevProps.status1]) === 16) {
                        return { status: 'normal_close' }
                    } else {
                        return { status: 'stop' }
                    }
                }
            }
        }
    }
    info=()=>{
        let array = [], propertise = this.props.propertise;
        if (propertise.length > 0){
            propertise.forEach(item => {
                array.push(item.no);
            })
            React.axios.post('api/opcServer/getOpcServer15Data', array, res => {
                this.setState({ status: res.data });
                propertise.forEach(item => {
                    if (item.dataType === 'Boolean') {
                        if (res.data[item.no] === '1' || res.data[item.no] === 'true') {
                            item.value = 'normal';
                        }else{
                            item.value = 'stop';
                        }
                    } else if (item.dataType === 'Word'){
                        if (item.formatter(res.data[item.no])){
                            item.value = 'normal';
                        }else{
                            item.value = 'stop';
                        }
                        item.dataType = 'Boolean';
                    } else {
                        item.value = parseInt(res.data[item.no]);
                    }
                })
                this.setState({ propertise: propertise, infoModal: true, name: this.props.name });
            })
        }
    }
    render() {
        return <>
            {!this.props.modalType && <div className="absolute alarm" style={{ top: this.props.top, left: this.props.left }} onClick={this.info} title={this.props.name}>
                <img style={{ width: this.props.size ? this.props.size : '24px'}} className={'alarm-icon ' + this.state.status} src={require('./images/'+this.state.status+'.png')} alt="" />
            </div>}

            {this.props.modalType === 1 && <div className="absolute modal1" style={{ top: this.props.top, left: this.props.left }}>
                <div className="title">{this.props.modalData.title}</div>
                <div className="value"><span className="val">{this.props.modalData.formatter ? this.props.modalData.formatter(this.state.value[this.props.no]) : this.state.value[this.props.no]}</span><span className="unit">{this.props.modalData.unit}</span></div>
            </div>}

            {this.props.modalType === 2 && <div className="absolute modal2" style={{ top: this.props.top, left: this.props.left }}>
                {this.props.modalData.map((item,index) => <div key= { index }>
                    <span className="title">{item.title}</span>
                    <span className="value">{this.state.value[item.no]}</span>
                    <span className="unit">{item.unit}</span>
                </div>)}
            </div>}

            {this.props.modalType === 3 && <div className="absolute modal3" style={{ top: this.props.top, left: this.props.left, bottom: this.props.bottom, right: this.props.right }}>
                <div className="title">{this.props.title}</div>
                {this.props.modalData.map((item, index) => <div key={index} className="val-box">
                    <span className="sub_title">{item.title}</span>
                    <span className="value">{this.state.value[item.no]}</span>
                    <span className="unit">{item.unit}</span>
                </div>)}
            </div>}

            {this.props.modalType === 4 && <div className="absolute modal4" style={{ top: this.props.top, left: this.props.left, bottom: this.props.bottom, right: this.props.right }}>
                <div className="title">{this.props.title}</div>
                {this.props.modalData.map((item, index) => <div key={index} className="value">
                    <span className="val">{this.state.value[item.no]}</span>
                    <span className="unit">{item.unit}</span>
                </div>)}
            </div>}

            {this.props.modalType === 5 && <div className="absolute modal5" onClick={this.info} style={{ top: this.props.top, left: this.props.left, bottom: this.props.bottom, right: this.props.right }}>
                {this.state.name}
            </div>}

            {this.state.infoModal && <div className="modal">
                <div className="modal-box">
                    <div className="modal-title">{this.state.name}</div>
                    <div className="modal-body">
                        {this.state.propertise.map((item, index) => <div key={index} className={item.dataType === 'Boolean' ? 'form-item' : 'block'} style={{ display: 'inline-block',width: item.width}}>
                            {item.dataType === 'Boolean' && <>
                                <img className="alarm-icon" style={{ width: '24px' }} src={require('./images/' + item.value + '.png')} alt="" />
                                <label>{item.name}</label>
                            </>}
                            
                            {item.dataType !== 'Boolean' && <>
                                <label>{item.name}</label>
                                <span className="value">{item.value}</span>
                                <span className="unit">{item.unit}</span>
                            </>}
                        </div>)}
                    </div>
                    <div className="close-btn" onClick={() => { this.setState({ infoModal: false }) }}>关闭</div>
                </div>
            </div>
            }
        </>
    }
}
export default Alarm;