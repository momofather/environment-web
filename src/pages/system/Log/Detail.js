import React,{Component} from "react";
import Button from "@/components/button";

class Detail extends Component{
    render(){
        return(<Button onClick={()=>{this.props.history.goBack()}}>返回</Button>);
    };
};
export default Detail;