import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Table,Pagination  } from 'antd';
import './index.less';
class PageTale extends Component{
    params = {};
    state={
        data: {list:[],total:0},
        page: 1,
        limit: 20,
        parameter: {},
        params:{},
        columns: []
    }
    // 获取列表数据
    getList=(pageNum,pageSize=this.state.limit)=>{
        this.props.history.push(this.props.match.url+'?pageNum='+pageNum);
        let params_temp = {
            page: parseInt(pageNum),
            limit: parseInt(pageSize)
        };
        this.setState(params_temp);
        for(let k in this.params){
            params_temp[k] = this.params[k]
        }
        if(this.props.method==='get'){
            React.axios.get(this.props.url,params_temp,res=>{
                this.setState({data: {list:res.data.data,total:res.data.count}});
            })
        }else{
            React.axios.post(this.props.url,params_temp, res=>{
                this.setState({data: {list:res.data.data,total:res.data.count}});
            })
        }
    }
    componentDidMount(){
        if(this.props.onRef){
            this.props.onRef(this)
        }
        if(this.props.number){
            this.props.columns.unshift({
                title: '序号',
                width: '60px',
                align: 'center',
                render: (txt,row,index)=><>{this.props.pager?(this.state.page-1)*this.state.limit+(index+1):index+1}</>
            })
        }
        
        this.setState({
            columns: this.props.columns,
            selectedRowKeys: this.props.selectedRowKeys
        });
        if(this.props.data){
            this.setState({
                data:{list:this.props.data,total:this.props.data.length},
            })
        }else{
            const page = this.getCatchPage();
            this.getList(page.pageNum);
        }
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.data) {
            return {
                data: {list:nextProps.data,total:nextProps.data.length}
            };
        }
        return null;
    }
    // 刷新
    reload=(data)=>{
        let params = {};
        for(let k in data){
            if(data[k]){
                params[k] = data[k];
            }
        }
        this.params = params;
        this.getList(1)
    }

    // 获取缓存的页码
    getCatchPage=()=>{
        let page = {pageNum: 1};
        if(this.props.location.search){
            let params = this.props.location.search.substring(1);
            let array = params.split("&");
            array.forEach(item=>{
                let array2 = item.split("=");
                page[array2[0]] = array2[1];
            })
        }
        return page;
    }
    
    render(){
        const rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: (selectedRowKeys,selectedRowList) => {
                this.setState({selectedRowKeys});
                this.props.onSelectKeys(selectedRowKeys,selectedRowList);
            },
            onSelect: (record, selected)=>{
                if(this.props.onSelect){
                    let row = {...record};
                    row.selected = selected;
                    this.props.onSelect(row);
                }
            }
        };
        return(
            <div className="page-table">
                <Table size="small" locale={{'emptyText': '暂无数据'}} pagination={false} rowKey={this.props.rowKey} rowSelection={this.props.onSelectKeys?rowSelection:null} className="type-data" columns={this.state.columns} dataSource={this.state.data.list} bordered></Table>
                {
                    this.props.pager!==false&&
                    <Pagination 
                        className="pagination" 
                        onShowSizeChange={this.getList} 
                        onChange={this.getList} 
                        pageSize={this.state.limit} 
                        defaultCurrent={this.state.page}
                        current={this.state.page} 
                        total={this.state.data.total}
                        showQuickJumper
                        showSizeChanger
                        showTotal={total => `共${Math.ceil(total/this.state.limit)}页/${total}条数据`}
                        size="small"
                    ></Pagination>
                }
            </div>
        );
    }
}
PageTale.defaultProps = {
    url: '', // 接口地址
    data: null, // 表格数据
    method: 'post', // 请求方式
    columns: [], // 表头数据
    onSelectKeys: null, // 选择数据后触发事件
    selectedRowKeys: [], // 多选时，默认选中的key
    pager: true, // 是否启用分页，默认启用
    rowKey: "id",
    number: true
}
// PageTale.contextTypes = {
//     router: PropTypes.object.isRequired
// }
export default withRouter(PageTale);