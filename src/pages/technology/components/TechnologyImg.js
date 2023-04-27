import React, { Component } from 'react';
import {CloseCircleOutlined} from '@ant-design/icons'
import { Select } from 'antd';
import Info from './Info';
import './technologyImg.less';
class TechnologyImg extends Component {
    refImg = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            data: [],
            devices: [],
            info: false
        }
    };
    onClick=(e)=>{
        if(this.props.isEdit){
            const imgW = this.refImg.current.clientWidth;
            const imgH = this.refImg.current.clientHeight;

            const mouseX = e.nativeEvent.offsetX;
            const mousey = e.nativeEvent.offsetY;
            let data = this.state.data;
            data.push({
                devid: '',
                name: '',
                number: '',
                parentId: '',
                positonId: `${(mouseX/imgW)*100}%,${(mousey/imgH)*100}%`
                
            });
            this.setState({data});
        }
    }
    componentDidMount(){
        this.setState({
            data:this.props.data
        })
        this.getDevicesList();
    }
    static getDerivedStateFromProps(nextProps) {
        if (nextProps.data) {
            return {
                data: nextProps.data
            };
        }
        return null;
    }
    // 删除标注
    del=(index)=>{
        let data = this.state.data;
        data.splice(index,1);
        this.setState({data});
    }
    getData=()=>{
        return this.state.data;
    }
    // 获取设备列表
    getDevicesList=()=>{
        React.axios.get('api/device/tdevice/list',{page:1,limit: 10000,params:{}},res=>{
            this.setState({devices: res.data.data});
        })
    }
    // 监听设备下拉框选择
    handlerDevice=(index,value)=>{
        let device = null;
        this.state.devices.forEach((item)=>{
            if(item.number === value){
                device = item;
            }
        });
        let data = this.state.data;
        data[index].devid = device.id;
        data[index].name = device.name;
        data[index].number = device.number;
        this.setState({data});
    }
    showInfo=()=>{
        this.setState({info: !this.state.info});
    }
    render() { 
        return (
            <div style={{position: 'relative'}}>
                <div ref={this.refImg} onClick={this.onClick}>
                    <img src={this.props.img} alt="工艺图"/>
                </div>
                {this.props.isEdit?<>
                    {this.state.data.map((res,i)=>{
                        return <div key={i} style={{top: res.positonId?res.positonId.split(',')[1]:0, left: res.positonId?res.positonId.split(',')[0]:0}} className="shebie">
                            <Select size="small" style={{width: '100px'}} onChange={this.handlerDevice.bind(this,i)} value={res.number}>
                                {this.state.devices.map(res=><Select.Option key={res.id} value={res.number}>{res.name}</Select.Option>)}
                            </Select>
                            <CloseCircleOutlined className="del" onClick={this.del.bind(this,i)}/>
                        </div>
                    })}
                </>:<>
                    {this.state.data.map((res,i)=>{
                        return <React.IconFont onClick={this.showInfo} key={i} style={{top: res.positonId?res.positonId.split(',')[1]:0, left: res.positonId?res.positonId.split(',')[0]:0}} className={'status'+(i%2)} type="icon-baojing" />
                    })}
                    {this.state.info&&<Info cancel={this.showInfo} />}
                </>}
            </div>
        );
    }
}
TechnologyImg.defaultProps = {
    isEdit: true, // 是否可以编辑标注
    data: [], // 表格数据
    img: null
}
export default TechnologyImg;