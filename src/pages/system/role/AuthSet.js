import React, {Component} from 'react';
import {Modal,Tree} from 'antd';
import Button from '@/components/button';
class List extends Component{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            type: 1,
            roleObj: null,
            menuData: [],
            menuIdList: [],
            halfCheckedKeys: [],
            disabled: true
        }
    }
    componentDidMount(){
        this.getList();
    }

    submit=()=>{
        let params = this.state.roleObj;
        params.menuIdList = [...this.state.menuIdList,...this.state.halfCheckedKeys];
        React.axios.post('sys/role/update',params,()=>{
            React.message.success("操作成功");
            this.props.onCancel();
        })
    }
    // 获取菜单列表数据
    getList=()=>{
        React.axios.get('sys/menu/menuTree',null,res=>{
            let menuData = this.filterData(res.data);
            if(this.props.roleId){
                React.axios.get(`sys/role/info/${this.props.roleId}`,null,res=>{
                    res.data.menuIdList.forEach(key=>{
                        this.filterParentId(key,menuData);
                    })
                    this.setState({roleObj: res.data,menuData: menuData});
                })
            }
        })
    }
    filterData=(data)=>{
        for(let item of data){
            item.title = item.name;
            item.key = item.menuId;
            if(item.children){
                this.filterData(item.children);
            }
        }
        return data;
    }
    // 过滤掉已选节点的父节点id
    filterParentId = (key,data) => {
        key = key.toString();
        if(data){
            data.forEach(item=>{
                if(item.key===key && !item.children){
                    let menuIdList = this.state.menuIdList;
                    menuIdList.push(key);
                    this.setState({ menuIdList: menuIdList});
                }else{
                    this.filterParentId(key,item.children);
                }
            })
        }
    }
    onCheck=(checkedKeys, {halfCheckedKeys})=>{
        this.setState({
            menuIdList: checkedKeys,
            halfCheckedKeys: halfCheckedKeys,
            disabled: false
        });
    }
    // 获取所选节点的所有子节点id
    getChildId=(checkedKeYs,array,checked)=>{
        if(array){
            for(let item of array){
                let index = checkedKeYs.indexOf(item.menuId);
                // 父节点如果是选中
                if(checked){
                    if(index===-1){
                        checkedKeYs.push(item.menuId);
                    }
                }else{
                    if(index!==-1){
                        checkedKeYs.splice(index,1);
                    }
                }
                this.getChildId(checkedKeYs,item.children,checked);
            }
        }
        return checkedKeYs;
    }
    render(){
        const footer = <div align="center">
            <Button onClick={this.props.onCancel}>取消</Button>
            <Button type="primary" onClick={this.submit} disabled={this.state.disabled}>确定</Button>
        </div>
        return(
            <Modal title='权限配置' footer={footer} bodyStyle={{maxHeight: '700px',overflow: 'auto'}} visible={true} onCancel={this.props.onCancel} onOk={this.submit}>
                {this.state.menuData.length!==0&&<Tree
                    checkable
                    checkedKeys={this.state.menuIdList}
                    onCheck={this.onCheck}
                    treeData={this.state.menuData}
                />}
            </Modal>
        );
    }
}
export default List