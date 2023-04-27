import React, { Component } from 'react';
import {Modal} from 'antd';
import './index.less';

export class Icons extends Component {
    iconList = ['icon-tianjia','icon-yonghu','icon-ico','icon-zhongzhi-','icon-icon_huabanfuben','icon-tongzhi','icon-quanxian','icon-shanchudefuben','icon-bianji',
    'icon-shezhi','icon-sousuo','icon-password','icon-fanhui'
];
    render() {
        return (
            <Modal title="图标" footer="" visible={true} maskClosable={false} onCancel={()=>{this.props.onCancel()}}>
                <ul className="icon-modal">
                    {this.iconList.map((item,index)=><li key={index} onClick={()=>{this.props.onOk(item)}}><React.IconFont style={{fontSize: '28px'}} type={item}/></li>)}
                </ul>
            </Modal>
        )
    }
}

export default Icons
