import React from 'react';
import antd from 'antd';

function checkAuth(authcode) {
    if(authcode){
        let authCodeList = sessionStorage.getItem('permissions');
        if(authCodeList){
          authCodeList = JSON.parse(authCodeList);
        }else{
          authCodeList = [];
        }
        return authCodeList.indexOf(authcode)!==-1;
    }else{
        return true;
    }
}
class Button extends React.Component {
  render() {
    let icon = null;
    switch(this.props.icon){
      case 'add': // 添加
        icon = <i className="iconfont icon-tianjia"></i>
        break;
      case 'edit': // 编辑
        icon = <i className="iconfont icon-bianji"></i>
        break;
      case 'delete': // 删除
        icon = <i className="iconfont icon-shanchudefuben"></i>
        break;
      case 'search': // 查询
        icon = <i className="iconfont icon-sousuo"></i>
        break;
      case 'qrcode': // 二维码
        icon = <i className="iconfont icon-ico"></i>
        break;
      case 'chongzhi': // 重置
        icon = <i className="iconfont icon-zhongzhi-"></i>
        break;
      case 'info': // 详情
        icon = <i className="iconfont icon-icon_huabanfuben"></i>
        break;
      case 'set': // 设置
        icon = <i className="iconfont icon-shezhi"></i>
        break;
      case 'oanth': // 权限
        icon = <i className="iconfont icon-quanxian"></i>
        break;
      case 'back': // 返回
        icon = <i className="iconfont icon-fanhui"></i>
        break;
      case 'chart': // 数据
        icon = <i className="iconfont icon-shuju"></i>
        break;
      default: 
        icon = null;
    }

    let props = {...this.props};
    props.icon = null;
    return checkAuth(this.props.authcode) ? <antd.Button {...props} icon={icon}>{this.props.children}</antd.Button>:<></>;
  }
}
Button.defaultProps = {
    authcode: null,
}
export default Button;
