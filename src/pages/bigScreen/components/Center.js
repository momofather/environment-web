import React, { Component } from 'react';
import InOutWater from './InOutWater';
import Shenghuachi from './Shenghuachi';
import './center.less';
class Center extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabActive: 1,
        }
    }

    tabOnchange = (index) => {
        this.setState({tabActive: index});
    }
    render(){
        return<>
            <ul className="tab-header">
                <li className={this.state.tabActive === 1 ? 'active' : ''} onClick={this.tabOnchange.bind(this, 1)}>进出水</li>
                <li className={this.state.tabActive === 2 ? 'active' : ''} onClick={this.tabOnchange.bind(this, 2)}>1#生化池</li>
                <li className={this.state.tabActive === 3 ? 'active' : ''} onClick={this.tabOnchange.bind(this, 3)}>2#生化池</li>
                <li className={this.state.tabActive === 4 ? 'active' : ''} onClick={this.tabOnchange.bind(this, 4)}>3#生化池</li>
            </ul>
            {this.state.tabActive === 1 && <InOutWater />}
            {this.state.tabActive === 2 && <Shenghuachi poolNumber={1}/>}
            {this.state.tabActive === 3 && <Shenghuachi poolNumber={2} />}
            {this.state.tabActive === 4 && <Shenghuachi poolNumber={3} />}
        </>
    }
}
export default Center;