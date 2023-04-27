import React from 'react';
import {Tag} from 'antd';
export default{
    status: {
        1: <Tag color="#87d068">正常</Tag>,
        0: <Tag color="red">禁用</Tag>
    },
    menuType: { // 菜单类型
        0: '目录',
        1: '菜单',
        2: '按钮'
    },
    units: { // 计量单位
        jian: '件',
        ge: '个',
        kg: '千克'
    },
    inMethodCode: 'inMethod', // 入库方式数据字典编码
    outMethodCode: 'outMethod', // 出库方式数据字典编码
    goodTypeCode: 'goodType', // 物料种类数据字典编码
    allocationStatus: {
        1: <Tag color="red">待出库</Tag>,
        2: <Tag color="red">待入库</Tag>,
        3: <Tag color="#87d068">调拨完成</Tag>
    },
    // 消息类型
    messageType: {
        allocation: '调拨待办'
    },
    // 消息阅读状态
    readStatus: {
        "1": <Tag color="red">未读</Tag>,
        "2": <Tag color="#87d068">已读</Tag>
    },
    deliverymodes: { // 盘点方式
        warehouse: '按仓库盘点',
        material: '按物料盘点'
    },
}