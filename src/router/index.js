import {lazy} from 'react';
import pack from '../../package.json';

import Deliverymode from "@/pages/system/dictionary/deliverymode/List";
import DeviceInfo from "@/pages/device/info/List";
import DeviceEdit from "@/pages/device/info/Edit";
import Goods from "@/pages/inventory/goods/List";
import GoodsType from "@/pages/inventory/goodsType/List";
import GoodsMove from "@/pages/inventory/goodsMove/List";
import GoodsChecking from "@/pages/inventory/goodsChecking/List";
import LaunchCheck from "@/pages/inventory/goodsChecking/launchCheck";
import Inventory from "@/pages/inventory/inventory/List";
import InventoryDetail from "@/pages/inventory/inventory/Detail";
import InWarehouse from "@/pages/inventory/inWarehouse/List";
import OutWarehouse from "@/pages/inventory/outWarehouse/List";
import Message from "@/pages/message/Index";
import Hncdc from "@/pages/runRecord/hncdc";
import Weishui from "@/pages/runRecord/weishui";
import Fxh from "@/pages/runRecord/fxh";
import Yuchuli from "@/pages/runRecord/yuchuli";
import Lxgfj from "@/pages/runRecord/lxgfj/Index";
import Water from "@/pages/runRecord/water";
import ShengHuaChi from "@/pages/runRecord/shenghuachi/Index";
import Log from '@/pages/system/Log/List';
import Detail from '@/pages/system/Log/Detail';
import Menu from '@/pages/system/menu/List';
import Organization from '@/pages/system/Organization/List';
import Role from '@/pages/system/role/List';
import Supplier from "@/pages/inventory/supplier/List";
import Technology from "@/pages/technology/Index";
import Warehouse from "@/pages/inventory/warehouse/List";
import WarehouseLocation from "@/pages/inventory/warehouseLocation/List";
import WarehouseShelves from "@/pages/inventory/warehouseShelves/List";
import UserList from '@/pages/system/User/List';
import Unit from "@/pages/system/dictionary/unit/List";
import ReportForm from "@/pages/reportForm";

import Flow from "@/pages/dataAnalysis/flow";
import NengHao from "@/pages/dataAnalysis/nenghao";
import ProductionIndex from "@/pages/dataAnalysis/productionIndex";
import Pressure from "@/pages/dataAnalysis/pressure";
import WaterQuality from "@/pages/dataAnalysis/waterQuality";

const routerPrefix = '/'+pack.Version; // 路由前缀
export const mainRoutes = [
    {
        path: '/login',
        name: '登录',
        component: lazy(()=>import('@/pages/login'))
    },
    {
        path: '/404',
        name: '404',
        component: lazy(()=>import('@/pages/404'))
    },
    {
        path: '/403',
        name: '403',
        component: lazy(()=>import('@/pages/403'))
    },
    {
        path: '/bigscreen',
        name: '大屏',
        component: lazy(()=>import('@/pages/bigScreen/Index'))
    },
]

export const adminRoutes = [
    {
        path: routerPrefix+'/home',
        name: '首页',
        component: lazy(()=>import('@/pages/home')),
        exact: true
    },
    {
        path: routerPrefix+'/system/menu/list',
        name: '菜单管理',
        component: Menu,
        exact: true
    },
    {
        path: routerPrefix+'/system/role/list',
        name: '角色管理',
        component: Role,
        exact: true
    },
    {
        path:routerPrefix+"/system/user/list",
        name: '用户管理',
        component: UserList,
        exact:true,
    },
    {
        path:routerPrefix+"/system/organization/list",
        name: '组织结构',
        component: Organization,
        exact:true,
    },
    {
        path:routerPrefix+"/system/log/list",
        name: '系统日志',
        component: Log,
        exact:true,
    },
    {
        path:routerPrefix+"/system/log/detail",
        name: '日志详情',
        component: Detail,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/warehouse/list",
        name: '仓库管理',
        component: Warehouse,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/inventory/list",
        name: '库存管理',
        component: Inventory,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/inventory/detail/:id",
        name: '库存详情',
        component: InventoryDetail,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/warehouseLocation/list/:id",
        name: '仓库区域',
        component: WarehouseLocation,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/warehouseShelves/list/:warehouseId/:warehouseLocationId",
        name: '区域货架',
        component: WarehouseShelves,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/goods/list",
        name: '物料管理',
        component: Goods,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/goodsType/list",
        name: '物料种类管理',
        component: GoodsType,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/goodsMove/list",
        name: '调拨管理',
        component: GoodsMove,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/goodsMove/edit/:id?",
        name: '添加/编辑调拨',
        component: lazy(()=>import('@/pages/inventory/goodsMove/components/Edit')),
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/goodsMove/detail/:id",
        name: '调拨详情',
        component: lazy(()=>import('@/pages/inventory/goodsMove/components/Detail')),
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/outWarehouse/list",
        name:"出库单",
        component: OutWarehouse,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/inWarehouse/list",
        name:"入库单",
        component: InWarehouse,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/goodsChecking/list",
        name:"库存盘点",
        component: GoodsChecking,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/goodsChecking/launchCheck/:id?",
        name:"发起盘点",
        component: LaunchCheck,
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/goodsChecking/detail/:id",
        name:"盘点详情",
        component: lazy(()=>import('@/pages/inventory/goodsChecking/components/Detail')),
        exact:true,
    },
    {
        path:routerPrefix+"/inventory/supplier/list",
        name:"供应商",
        component: Supplier,
        exact:true,
    },
    {
        path:routerPrefix+"/device/info/list",
        name: '设备管理',
        component: DeviceInfo,
        exact:true,
    },
    {
        path:routerPrefix+"/device/info/edit/:id?",
        name: '编辑设备',
        component: DeviceEdit,
        exact:true,
    },
    {
        path:routerPrefix+"/technology/index/:id",
        name: '工艺管理',
        component: Technology,
        exact:true,
    },
    {
        path:routerPrefix+"/message/index",
        name: '消息通知',
        component: Message,
        exact:true,
    },
    {
        path:routerPrefix+"/message/allocation/:id",
        name: '调拨待办',
        component: lazy(()=>import('@/pages/message/Allocation')),
        exact:true,
    },
    {
        path:routerPrefix+"/message/detail/:id",
        name: '消息详情',
        component: lazy(()=>import('@/pages/message/Details')),
        exact:true,
    },
    {
        path:routerPrefix+"/runRecord/fxh",
        name: '深床反硝化滤池',
        component: Fxh,
        exact:true,
    },
    {
        path:routerPrefix+"/runRecord/weishui",
        name: '尾水系统',
        component: Weishui,
        exact:true,
    },
    {
        path:routerPrefix+"/runRecord/water",
        name: '进出水记录',
        component: Water,
        exact:true,
    },
    {
        path: routerPrefix +"/runRecord/hncdc",
        name: '混凝沉淀池',
        component: Hncdc,
        exact:true,
    },
    {
        path: routerPrefix +"/runRecord/yuchuli",
        name: '预处理',
        component: Yuchuli,
        exact:true,
    },
    {
        path: routerPrefix + "/runRecord/shenghuachi",
        name: '生化池',
        component: ShengHuaChi,
        exact: true,
    },
    {
        path: routerPrefix + "/runRecord/lxgfj",
        name: '离心鼓风机',
        component: Lxgfj,
        exact: true,
    },
    {
        path:routerPrefix+"/system/dictionary/deliverymode",
        name: '出入库方式',
        component: Deliverymode,
        exact:true,
    },
    {
        path:routerPrefix+"/system/dictionary/unit",
        name: '计量单位',
        component: Unit,
        exact:true,
    },
    {
        path: routerPrefix + "/reportForm",
        name: '月报表',
        component: ReportForm,
        exact: true,
    },
    {
        path: routerPrefix + "/dataAnalysis/productionIndex",
        name: '生产指标',
        component: ProductionIndex,
        exact: true,
    },
    {
        path: routerPrefix + "/dataAnalysis/nenghao",
        name: '能耗分析',
        component: NengHao,
        exact: true,
    },
    {
        path: routerPrefix + "/dataAnalysis/waterQuality",
        name: '水质分析',
        component: WaterQuality,
        exact: true,
    },
    {
        path: routerPrefix + "/dataAnalysis/flow",
        name: '流量分析',
        component: Flow,
        exact: true,
    },
    {
        path: routerPrefix + "/dataAnalysis/pressure",
        name: '压力分析',
        component: Pressure,
        exact: true,
    },
]