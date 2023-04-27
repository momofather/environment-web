import React, { Component } from 'react';
import '../../xgs.less';
class Technology extends Component {
    state = {
        alarm: [
            { top: '8.5%', left: '44.5%' }
        ]
    }
    componentDidMount(){
        
    }
    
    render() {
        return (<div className="img-box">
            <img src={require('../images/07_脱泥_03_空压机和储水罐（待定？）.jpg')} alt="工艺图" />
            {this.state.alarm.map(item => <div className="absolute alarm" style={{top: item.top,left:item.left}}>
                <React.IconFont className="alarm-icon normal" type="icon-baojing" style={{ fontSize: '24px' }} />
                <span className="number">1#</span>
            </div>)}
            
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