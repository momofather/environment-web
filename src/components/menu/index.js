import React, {Component} from 'react';
import { Menu } from 'antd';
import {withRouter} from "react-router-dom";
const { SubMenu } = Menu;
class Smenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultOpenKeys: sessionStorage.getItem('defaultOpenKeys')?JSON.parse(sessionStorage.getItem('defaultOpenKeys')):[],
        }
    }

    componentDidMount(){
        this.props.history.push(`/${React.Version+sessionStorage.getItem('activi_router_path')}`);
    }

    link=({key})=>{
        sessionStorage.setItem('activi_router_path',key);
        sessionStorage.setItem('defaultOpenKeys',JSON.stringify(this.state.defaultOpenKeys));
        this.props.history.push(`/${React.Version+key}`);
    }
    onOpenChange=(keys)=>{
        this.setState({defaultOpenKeys: keys});
    }
    
    renderMenu=(data)=>{
        if(data){
            return data.map((item,i)=>{
                if (item.list) {  //如果有子节点，继续递归调用，直到没有子节点
                    return (
                     <SubMenu title={item.name} key={i} icon={<React.IconFont style={{fontSize: '16px'}} type={item.icon} />}>
                         {this.renderMenu(item.list)}
                     </SubMenu>
                    )
                }else {
                    if(item.visible){
                        return <Menu.Item icon={<React.IconFont style={{fontSize: '16px'}} type={item.icon} />} title={item.name} key={item.url}>{item.name}</Menu.Item>
                    }else{
                        return null;
                    }
                }
            })
        }
    }
    render() {
        return (
            <Menu
                mode="inline"
                theme={this.props.theme}
                defaultSelectedKeys={[sessionStorage.getItem('activi_router_path')]}
                defaultOpenKeys={this.state.defaultOpenKeys}
                style={{ height: '100%', borderRight: 0,overflow: 'auto' }}
                onClick={this.link}
                onOpenChange={this.onOpenChange}
            >
                {this.renderMenu(this.props.data)}
            </Menu>
        )
    }
}
export default withRouter(Smenu);