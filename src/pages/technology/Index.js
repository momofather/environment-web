import React, { Component } from 'react';
import YuChuLi from './yuchuli/Index';
import ShengHuaChi from './shenghuachi/Index';
import ErChiChi from './erchenchi/Index';
import Hntcdc from './hntcdc/Index';
import Fxh from './fxh/Index';
import WeiShui from './weishui/Index';
import Tn from './tn/Index';
import Cc from './cc/Index';
import './index.less';
class Technology extends Component {
    constructor(props){
        super(props);
        this.state = {
            flag: null
        }
    }
    componentDidMount(){
        this.setState({ flag: this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf("/") + 1) });
        this.props.history.listen(location => {
            this.setState({ flag: location.pathname.substring(location.pathname.lastIndexOf("/") + 1)});
        })
    }
    render() {
        return (<>
            {this.state.flag ==='yuchuli' && <YuChuLi />}
            {this.state.flag === 'ao' && <ShengHuaChi />}
            {this.state.flag === 'erchenchi' && <ErChiChi />}
            {this.state.flag === 'hntcdc' && <Hntcdc />}
            {this.state.flag === 'fxh' && <Fxh />}
            {this.state.flag === 'weishui' && <WeiShui />}
            {this.state.flag === 'tuoni' && <Tn />}
            {this.state.flag === 'chuchou' && <Cc />}
        </>);
    }
}
 
export default Technology;