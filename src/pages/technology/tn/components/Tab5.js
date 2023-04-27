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
            <img src={require('../images/07_脱泥_03_空压机和储水罐.jpg')} alt="工艺图" />
            {this.state.alarm.map(item => <div className="absolute alarm" style={{top: item.top,left:item.left}}>
                <React.IconFont className="alarm-icon normal" type="icon-baojing" style={{ fontSize: '24px' }} />
                <span className="number">1#</span>
            </div>)}
        </div>);
    }
}
 
export default Technology;