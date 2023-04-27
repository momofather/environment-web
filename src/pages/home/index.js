import React, {Component } from 'react';
import './home.less';

class Home extends Component {
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            options:{
                backgroundColor: 'rgba(0, 0, 0, 1)',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }]
            }
        }
    };
    componentDidMount(){
    }
    render() {
        return(
            <div className="home">
                <i className="iconfont icon-home"></i>
            </div>
        )
    }
}
export default Home;