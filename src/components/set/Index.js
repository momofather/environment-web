import React, {Component} from 'react';
import {Drawer,Checkbox} from 'antd';
import { SketchPicker } from 'react-color';
import Button from '@/components/button';
import './Index.less';

class Set extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            currentTheme: '#6064f4',
            navModel: 'dark',
            showColorPanl: false
        }
    }

    switchVisible = () => {
        this.setState({
            visible: !this.state.visible
        });
    };

    setTheme = (val) => {
        this.setState({currentTheme: val.hex});
        window.less.modifyVars({
            '@primary-color': val.hex
        }).then(() => { 
            React.message.success('主题切换成功')
        })
        .catch(error => {
            React.message.warning(`主题切换失败`);
        });
    }

    changeNav = (val) => {
        this.setState({navModel: val});
        this.props.changeNav(val);
    }
    
    render(){
        return(
            <div className="drawer-set">
                <Button className="open" type="primary" onClick={this.switchVisible} icon="set"></Button>
                <Drawer
                    title="系统设置"
                    placement="right"
                    closable={false}
                    onClose={this.switchVisible}
                    visible={this.state.visible}
                >
                    <div className="theme-set">导航色</div>
                    <div className="nav-set left-dark" onClick={this.changeNav.bind(this,'dark')}><Checkbox checked={this.state.navModel === 'dark'} className="checkbox"/></div>
                    <div className="nav-set left-light" onClick={this.changeNav.bind(this,'light')}><Checkbox checked={this.state.navModel === 'light'} className="checkbox"/></div>
                    <br/><br/>
                    <div className="theme-set">主题色</div>
                    <div className="theme-color" onClick={()=>{this.setState({showColorPanl: true})}} style={{background: this.state.currentTheme}}>
                        {this.state.showColorPanl&&<div className="color-panl" onMouseLeave={()=>{this.setState({showColorPanl: false})}}>
                            <SketchPicker color={ this.state.currentTheme } onChangeComplete={ this.setTheme }/>
                        </div>}
                    </div>
                </Drawer>
            </div>
        );
    }
}
export default Set;