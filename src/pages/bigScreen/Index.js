import React, { Component } from 'react';
import { Carousel } from 'antd';
import moment from 'moment';
import History from './History';
import Center from './components/Center';
import Page2 from './Page2';
import './index.less';
const style1 = {
    marginRight: '20px', 
    marginLeft: '20px'
}
class BigScreen extends Component {
    carouselRef = React.createRef();
    timer1 = null;
    timer2 = null;
    timer3 = null;
    timer4 = null;
    constructor(props){
        super(props);
        this.state = {
            currentTime: moment().format('YYYY年M月D日 HH:mm:ss'),
            shcActive: 1,
            inWaterData: {},
            outWaterData: {},
            data1: {},
            data2: {},
            data3: {},
            data12: [],
            shcData: {
                1: {
                    a_do: 'AB.PLC1.AIT109_OUT_AI',
                    b_do: 'AB.PLC1.AIT108_OUT_AI',
                    c_do: 'AB.PLC1.AIT106_OUT_AI',
                    d_do: 'AB.PLC1.AIT105_OUT_AI',
                    a_mlss: 'AB.PLC1.AIT129_OUT_AI',
                    b_mlss: 'AB.PLC1.AIT128_OUT_AI',
                    c_mlss: 'AB.PLC1.AIT126_OUT_AI',
                    d_mlss: 'AB.PLC1.AIT125_OUT_AI',
                    a_orp: 'AB.PLC1.AIT118_OUT_AI',
                    b_orp: 'AB.PLC1.AIT116_OUT_AI',
                    c_orp: 'AB.PLC1.AIT115_OUT_AI',
                    y_orp: 'AB.PLC1.AIT119_OUT_AI',
                    nh3n: 'AB.PLC1.AIT127_OUT_AI',
                    wn_mlss: 'AB.PLC1.AIT135_OUT_AI'
                },
                2: {
                    a_do: 'AB.PLC1.AIT114_OUT_AI',
                    b_do: 'AB.PLC1.AIT113_OUT_AI',
                    c_do: 'AB.PLC1.AIT111_OUT_AI',
                    d_do: 'AB.PLC1.AIT110_OUT_AI',
                    a_mlss: 'AB.PLC1.AIT134_OUT_AI',
                    b_mlss: 'AB.PLC1.AIT133_OUT_AI',
                    c_mlss: 'AB.PLC1.AIT131_OUT_AI',
                    d_mlss: 'AB.PLC1.AIT130_OUT_AI',
                    a_orp: 'AB.PLC1.AIT123_OUT_AI',
                    b_orp: 'AB.PLC1.AIT121_OUT_AI',
                    c_orp: 'AB.PLC1.AIT120_OUT_AI',
                    y_orp: 'AB.PLC1.AIT124_OUT_AI',
                    nh3n: 'AB.PLC1.AIT132_OUT_AI',
                    wn_mlss: 'AB.PLC1.AIT136_OUT_AI'
                },
                3: {
                    a_do: 'AB.PLC2.AIT207_OUT_AI',
                    b_do: 'AB.PLC2.AIT206_OUT_AI',
                    c_do: 'AB.PLC2.AIT204_OUT_AI',
                    d_do: 'AB.PLC2.AIT203_OUT_AI',
                    a_mlss: 'AB.PLC2.AIT217_OUT_AI',
                    b_mlss: 'AB.PLC2.AIT216_OUT_AI',
                    c_mlss: 'AB.PLC2.AIT214_OUT_AI',
                    d_mlss: 'AB.PLC2.AIT213_OUT_AI',
                    a_orp: 'AB.PLC2.AIT211_OUT_AI',
                    b_orp: 'AB.PLC2.AIT209_OUT_AI',
                    c_orp: 'AB.PLC2.AIT208_OUT_AI',
                    y_orp: 'AB.PLC2.AIT212_OUT_AI',
                    nh3n: 'AB.PLC2.AIT215_OUT_AI',
                    wn_mlss: 'AB.PLC2.AIT218_OUT_AI'
                }
            },
            alarm: [
                {
                    no: 'AB.PLC3.AC522_Fault',
                    name: '沉砂池2#插板闸故障',
                    isFault: false,
                }
            ],
            history: {
                show: false,
                tag: '',
                title: ''
            },
        }
    }

    getInWater=()=>{
        let array= [
            'AB.PLC3.AIT319_PH_OUT_AI',
            'AB.PLC3.AIT320_OUT_AI',
            'AB.PLC3.AIT321_OUT_AI',
            'AB.PLC3.AIT323_OUT_AI',
            'AB.PLC3.AIT322_OUT_AI',
            'AB.PLC3.FIT325_OUT_AI',
            'AB.PLC3.JSLJ_LL',
        ]
        React.axios.post('api/opcServer/getOpcServer1Data', array, res=>{
            this.setState({inWaterData: res.data});
        })
    }
    getOutWater=()=>{
        let array = [
            'AB.PLC5.AIT526_PH_OUT_AI',
            'AB.PLC5.AIT527_OUT_AI',
            'AB.PLC5.AIT528_OUT_AI',
            'AB.PLC5.AIT530_OUT_AI',
            'AB.PLC5.AIT529_OUT_AI',
            'AB.PLC5.FT516_OUT_AI',
            'AB.PLC5.CSLJ_LL',
        ]
        React.axios.post('api/opcServer/getOpcServer2Data', array, res => {
            this.setState({ outWaterData: res.data });
        })
    }

    // 生化池1
    getData1=()=>{
        let array = [
            'AB.PLC1.AIT109_OUT_AI', 'AB.PLC1.AIT108_OUT_AI', 'AB.PLC1.AIT106_OUT_AI', 'AB.PLC1.AIT105_OUT_AI',
            'AB.PLC1.AIT129_OUT_AI', 'AB.PLC1.AIT128_OUT_AI', 'AB.PLC1.AIT126_OUT_AI', 'AB.PLC1.AIT125_OUT_AI',
            'AB.PLC1.AIT119_OUT_AI', 'AB.PLC1.AIT118_OUT_AI', 'AB.PLC1.AIT116_OUT_AI', 'AB.PLC1.AIT115_OUT_AI',
            'AB.PLC1.AIT127_OUT_AI', 'AB.PLC1.AIT135_OUT_AI',
        ]
        React.axios.post('api/opcServer/getOpcServer3Data', array, res => {
            this.setState({ data1: res.data });
        })
    }
    // 生化池2
    getData2 = () => {
        let array = [
            'AB.PLC1.AIT114_OUT_AI', 'AB.PLC1.AIT113_OUT_AI', 'AB.PLC1.AIT111_OUT_AI', 'AB.PLC1.AIT110_OUT_AI',
            'AB.PLC1.AIT124_OUT_AI', 'AB.PLC1.AIT123_OUT_AI', 'AB.PLC1.AIT121_OUT_AI', 'AB.PLC1.AIT120_OUT_AI',
            'AB.PLC1.AIT134_OUT_AI', 'AB.PLC1.AIT133_OUT_AI', 'AB.PLC1.AIT131_OUT_AI', 'AB.PLC1.AIT130_OUT_AI',
            'AB.PLC1.AIT136_OUT_AI', 'AB.PLC1.AIT132_OUT_AI',
        ]
        React.axios.post('api/opcServer/getOpcServer4Data', array, res => {
            this.setState({ data2: res.data });
        })
    }

    // 生化池3
    getData3 = () => {
        let array = [
            'AB.PLC2.AIT207_OUT_AI', 'AB.PLC2.AIT206_OUT_AI', 'AB.PLC2.AIT204_OUT_AI', 'AB.PLC2.AIT203_OUT_AI',
            'AB.PLC2.AIT217_OUT_AI', 'AB.PLC2.AIT216_OUT_AI', 'AB.PLC2.AIT214_OUT_AI', 'AB.PLC2.AIT213_OUT_AI',
            'AB.PLC2.AIT212_OUT_AI', 'AB.PLC2.AIT211_OUT_AI', 'AB.PLC2.AIT209_OUT_AI', 'AB.PLC2.AIT208_OUT_AI',
            'AB.PLC2.AIT215_OUT_AI', 'AB.PLC2.AIT218_OUT_AI'
        ]
        React.axios.post('api/opcServer/getOpcServer5Data', array, res => {
            this.setState({ data3: res.data });
        })
    }

    // 报警设备
    getAlarmDevices=()=>{
        let array = [];
        this.state.alarm.forEach(item=>{
            array.push(item.no);
        })
        React.axios.post('api/opcServer/getWarningData', array, res => {
            let alarm = this.state.alarm;
            alarm.forEach(item=>{
                if(res.data[item.no] === 'true'){
                    item.isFault = true;
                }
            })
            this.setState({ alarm: alarm});
        })
    }

    // 历史数据
    showHistory=(tag,title)=>{
        this.componentWillUnmount();
        this.setState({
            history: {
                tag: tag,
                title: title,
                show: true
            }
        });
    }

    componentDidMount() {
        this.getInWater();
        this.getOutWater();
        this.getData1();
        this.getData2();
        this.getData3();
        this.getAlarmDevices();
        this.timer1 = setInterval(()=>{
            this.getInWater();
            this.getOutWater();
            this.getAlarmDevices();
        },5000);
        this.timer2 = setInterval(() => {
            this.getData1();
        }, 5000);
        this.timer3 = setInterval(() => {
            this.getData2();
        }, 5000);
        this.timer4 = setInterval(() => {
            this.getData3();
        }, 5000);

        setInterval(()=>{
            this.setState({currentTime: moment().format('YYYY年M月D日 HH:mm:ss')});
        },1000);

        document.onmousewheel = (e) => {
            if (this.carouselRef.current){
                if(e.wheelDelta < 0){
                    this.carouselRef.current.next();
                } else {
                    this.carouselRef.current.prev();
                }
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer1);
        clearInterval(this.timer2);
        clearInterval(this.timer3);
        clearInterval(this.timer4);
    }
    goHome = ()=>{
        let menus = JSON.parse(sessionStorage.getItem('menus')), path = sessionStorage.getItem('activi_router_path');
        if(!path){
            path = menus[0].list[0].url;
        }
        this.props.history.push(`/${React.Version}${path}`);
    }
    
    render() {
        return (
            <div className="big-screen">
                <img src="./logo2.png" alt="logo" className="logo" onClick={this.goHome}/>
                <div className="big-header">
                    成都东安水质净化厂生产运行监测平台
                    <span className="time">{this.state.currentTime}</span>
                </div>
                <Carousel ref={this.carouselRef} dots={false}>
                    <div>
                        <ul className="row">
                            <li className="row1_left" align="center">
                                <div className="title">进水质量实时监测</div>
                                <div className="data" align="center" onClick={this.showHistory.bind(this, 'AB.PLC3.AIT320_OUT_AI', '进水COD')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.inWaterData['AB.PLC3.AIT320_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">mg/L</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">COD</div>
                                </div>
                                <div className="data" align="center" style={style1} onClick={this.showHistory.bind(this, 'AB.PLC3.AIT321_OUT_AI', '进水NH3-N')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.inWaterData['AB.PLC3.AIT321_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">mg/L</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">NH3-N</div>
                                </div>
                                <div className="data" align="center" onClick={this.showHistory.bind(this, 'AB.PLC3.AIT323_OUT_AI', '进水TP')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.inWaterData['AB.PLC3.AIT323_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">mg/L</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">TP</div>
                                </div>
                                <div className="data" align="center" onClick={this.showHistory.bind(this, 'AB.PLC3.AIT322_OUT_AI', '进水TN')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.inWaterData['AB.PLC3.AIT322_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">mg/L</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">TN</div>
                                </div>
                                <div className="data" align="center" style={style1} onClick={this.showHistory.bind(this, 'AB.PLC3.AIT319_PH_OUT_AI', '进水PH')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.inWaterData['AB.PLC3.AIT319_PH_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit"></div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">PH</div>
                                </div>
                                <div className="data" align="center" onClick={this.showHistory.bind(this, 'AB.PLC3.FIT325_OUT_AI', '进水流量')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.inWaterData['AB.PLC3.FIT325_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">L/s</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">流量</div>
                                </div>
                                <div className="in_total">
                                    <div className="in_total_name">进水流量</div>
                                    <div className="value_box">
                                        <span className="label">累计</span>
                                        <span className="value">{parseFloat(this.state.inWaterData['AB.PLC3.JSLJ_LL']).toFixed(1)}</span>
                                        <span className="unit">m³</span>
                                    </div>
                                </div>
                            </li>
                            <li className="row2_center" style={{ margin: '0 20px' }}>
                                <Center />
                            </li>
                            <li className="row1_left" align="center">
                                <div className="title">出水质量实时监测</div>
                                <div className="data" align="center" onClick={this.showHistory.bind(this, 'AB.PLC5.AIT527_OUT_AI', '出水COD')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.outWaterData['AB.PLC5.AIT527_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">mg/L</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">COD</div>
                                </div>
                                <div className="data" align="center" style={style1} onClick={this.showHistory.bind(this, 'AB.PLC5.AIT528_OUT_AI', '出水NH3-N')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.outWaterData['AB.PLC5.AIT528_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">mg/L</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">NH3-N</div>
                                </div>
                                <div className="data" align="center" onClick={this.showHistory.bind(this, 'AB.PLC5.AIT530_OUT_AI', '出水TP')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.outWaterData['AB.PLC5.AIT530_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">mg/L</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">TP</div>
                                </div>
                                <div className="data" align="center" onClick={this.showHistory.bind(this, 'AB.PLC5.AIT529_OUT_AI', '出水TN')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.outWaterData['AB.PLC5.AIT529_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">mg/L</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">TN</div>
                                </div>
                                <div className="data" align="center" style={style1} onClick={this.showHistory.bind(this, 'AB.PLC5.AIT526_PH_OUT_AI', '出水PH')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.outWaterData['AB.PLC5.AIT526_PH_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit"></div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">PH</div>
                                </div>
                                <div className="data" align="center" onClick={this.showHistory.bind(this, 'AB.PLC5.FT516_OUT_AI', '出水流量')}>
                                    <div className="value">
                                        <span>{parseFloat(this.state.outWaterData['AB.PLC5.FT516_OUT_AI']).toFixed(3)}</span>
                                        <div className="unit">L/s</div>
                                        <div className="wave1"></div>
                                        <div className="wave2"></div>
                                        <div className="wave3"></div>
                                    </div>
                                    <div className="name">流量</div>
                                </div>
                                <div className="in_total">
                                    <div className="in_total_name">出水流量</div>
                                    <div className="value_box">
                                        <span className="label">累计</span>
                                        <span className="value">{parseFloat(this.state.outWaterData['AB.PLC5.CSLJ_LL']).toFixed(1)}</span>
                                        <span className="unit">m³</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="row">
                            <li className="row2_left" style={{ marginRight: '20px' }}>
                                <div className="row2_left_1">
                                    <div className="title">生化池</div>
                                    <div className={this.state.shcActive === 1 ? 'title_item active' : 'title_item'} onClick={() => { this.setState({ shcActive: 1})}}>1#生化池</div>
                                    <div className={this.state.shcActive === 2 ? 'title_item active' : 'title_item'} onClick={() => { this.setState({ shcActive: 2 }) }}>2#生化池</div>
                                    <div className={this.state.shcActive === 3 ? 'title_item active' : 'title_item'} onClick={() => { this.setState({ shcActive: 3 }) }}>3#生化池</div>
                                </div>
                                <div className="row2_left_2">
                                    <div className="title">{this.state.shcActive}号好氧区</div>
                                    <div className="title_item">
                                        <span className="label">A区DO：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].a_do]).toFixed(2)}</span>
                                        <span className="unit">mg/L</span>
                                    </div>
                                    <div className="title_item">
                                        <span className="label">B区DO：</span>
                                        <span className="val">{parseFloat(this.state['data' + this.state.shcActive][this.state.shcData[this.state.shcActive].b_do]).toFixed(2)}</span>
                                        <span className="unit">mg/L</span>
                                    </div>
                                    <div className="title_item">
                                        <span className="label">C区DO：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].c_do]).toFixed(2)}</span>
                                        <span className="unit">mg/L</span>
                                    </div>
                                    <div className="title_item">
                                        <span className="label">D区DO：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].d_do]).toFixed(2)}</span>
                                        <span className="unit">mg/L</span>
                                    </div>
                                </div>
                                <div className="row2_left_2">
                                    <div className="title">{this.state.shcActive}号好氧区</div>
                                    <div className="title_item">
                                        <span className="label">A区MLSS：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].a_mlss]).toFixed(1)}</span>
                                        <span className="unit">mg/L</span>
                                    </div>
                                    <div className="title_item">
                                        <span className="label">B区MLSS：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].b_mlss]).toFixed(1)}</span>
                                        <span className="unit">mg/L</span>
                                    </div>
                                    <div className="title_item">
                                        <span className="label">C区MLSS：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].c_mlss]).toFixed(1)}</span>
                                        <span className="unit">mg/L</span>
                                    </div>
                                    <div className="title_item">
                                        <span className="label">D区MLSS：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].d_mlss]).toFixed(1)}</span>
                                        <span className="unit">mg/L</span>
                                    </div>
                                </div>
                                <div className="row2_left_2">
                                    <div className="title">{this.state.shcActive}号厌氧/缺氧区</div>

                                    <div className="title_item">
                                        <span className="label">缺氧区ORP：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].y_orp]).toFixed(1)}</span>
                                        <span className="unit">mV</span>
                                    </div>
                                    <div className="title_item">
                                        <span className="label">A区ORP：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].a_orp]).toFixed(1)}</span>
                                        <span className="unit">mV</span>
                                    </div>
                                    <div className="title_item">
                                        <span className="label">B区ORP：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].b_orp]).toFixed(1)}</span>
                                        <span className="unit">mV</span>
                                    </div>
                                    <div className="title_item">
                                        <span className="label">C区ORP：</span>
                                        <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].c_orp]).toFixed(1)}</span>
                                        <span className="unit">mV</span>
                                    </div>
                                </div>
                                <div className="row2_left_3">
                                    <div className="mlss">
                                        <div className="title">{this.state.shcActive}#污泥MLSS</div>
                                        <div className="title_item">
                                            <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].wn_mlss]).toFixed(1)}</span>
                                            <span className="unit">mg/L</span>
                                        </div>
                                    </div>
                                    <div className="mlss">
                                        <div className="title">{this.state.shcActive}#NH3-N</div>
                                        <div className="title_item">
                                            <span className="val">{parseFloat(this.state['data'+this.state.shcActive][this.state.shcData[this.state.shcActive].nh3n]).toFixed(2)}</span>
                                            <span className="unit">mg/L</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="row2_right">
                                <div className="title">报警信息</div>
                                {this.state.alarm.map((item, index) => item.isFault && <div className="list">{index + 1}.{item.name}</div>)}
                            </li>
                        </ul>
                    </div>
                    <div style={{height: '100%'}}>
                        <Page2 />
                    </div>
                </Carousel>
                
                {this.state.history.show && <History data={this.state.history} onCancel={() => { this.setState({ history: { show: false } }); this.componentDidMount();}}/>}
            </div>
        );
    }
}
 
export default BigScreen;