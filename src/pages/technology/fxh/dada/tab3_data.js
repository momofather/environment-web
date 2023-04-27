const data = [
    {
        top: '42%', left: '17%',
        no: 'AB.PLC5.LIT514_OUT_AI',
        modalType: 1,
        modalData: {
            title: '2#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['AB.PLC5.LIT514_OUT_AI']
    },
    {
        top: '88%', left: '14%',
        no: 'AB.PLC5.LIT513_OUT_AI',
        modalType: 1,
        modalData: {
            title: '1#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['AB.PLC5.LIT513_OUT_AI']
    },
    {
        top: '45%', left: '47%',
        no: 'AB.PLC5.LIT515_OUT_AI',
        modalType: 1,
        modalData: {
            title: '清水池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['AB.PLC5.LIT515_OUT_AI']
    },
    {
        top: '45%', left: '59%',
        no: 'FXHLC.FXH.LIT001A_OUT',
        modalType: 1,
        modalData: {
            title: '清水池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT001A_OUT']
    },
    {
        top: '0%', left: '84px',
        modalType: 3,
        title: '出水水质参数',
        modalData: [
            { title: '出水PH：', unit: '', no: 'AB.PLC5.AIT526_PH_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '出水温度：', unit: '℃', no: 'AB.PLC5.AIT526_T_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '出水COD：', unit: 'mg/l', no: 'AB.PLC5.AIT527_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '出水氨氮：', unit: 'mg/l', no: 'AB.PLC5.AIT528_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(3)},
            { title: '出水总磷：', unit: 'mg/l', no: 'AB.PLC5.AIT530_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(3)},
            { title: '出水总氮：', unit: 'mg/l', no: 'AB.PLC5.AIT529_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '出水流量：', unit: 'L/s', no: 'AB.PLC5.FT516_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(1)},
        ],
        allStatus: ['AB.PLC5.AIT526_PH_OUT_AI', 'AB.PLC5.AIT526_T_OUT_AI', 'AB.PLC5.AIT527_OUT_AI', 'AB.PLC5.AIT528_OUT_AI', 'AB.PLC5.AIT530_OUT_AI', 'AB.PLC5.AIT529_OUT_AI', 'AB.PLC5.FT516_OUT_AI']
    },

    {
        top: '57%', left: '8%', name: '中间提升泵井_4#轴流泵', type:1,
        allStatus: ['AB.PLC5.AC910_Fault', 'AB.PLC5.AC910_Run'],
        status1: 'AB.PLC5.AC910_Fault',//故障
        status2: 'AB.PLC5.AC910_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC910_Remote', dataType: 'Boolean', name: '远程'},
            { no: 'AB.PLC5.AC910_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC5.AC910_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC5.AC910_Start_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'AB.PLC5.AC910_Stop_Fault', dataType: 'Boolean', name: '停止故障'},
            { no: 'AB.PLC5.AC910_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
            { no: 'AB.PLC5.AC910_Maintain_Time', dataType: 'Float', name: '检修时间',unit:'小时'},
            { no: 'AB.PLC5.AC910_RunTime', dataType: 'Float', name: '运行时间',unit:'小时'},
        ]
    },
    {
        top: '67%', left: '7%', name: '中间提升泵井_3#轴流泵', type:1,
        allStatus: ['AB.PLC5.AC909_Fault', 'AB.PLC5.AC909_Run'],
        status1: 'AB.PLC5.AC909_Fault',//故障
        status2: 'AB.PLC5.AC909_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC909_Remote', dataType: 'Boolean', name: '远程'},
            { no: 'AB.PLC5.AC909_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC5.AC909_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC5.AC909_Start_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'AB.PLC5.AC909_Stop_Fault', dataType: 'Boolean', name: '停止故障'},
            { no: 'AB.PLC5.AC909_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
            { no: 'AB.PLC5.AC909_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC909_RunTime', dataType: 'Float', name: '运行时间',unit:'小时'},
        ]
    },
    {
        top: '76%', left: '6.5%', name: '中间提升泵井_2#轴流泵', type:1,
        allStatus: ['AB.PLC5.AC908_Fault', 'AB.PLC5.AC908_Run'],
        status1: 'AB.PLC5.AC908_Fault',//故障
        status2: 'AB.PLC5.AC908_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC908_Remote', dataType: 'Boolean', name: '远程'},
            { no: 'AB.PLC5.AC908_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC5.AC908_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC5.AC908_Start_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'AB.PLC5.AC908_Stop_Fault', dataType: 'Boolean', name: '停止故障'},
            { no: 'AB.PLC5.AC908_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
            { no: 'AB.PLC5.AC908_Maintain_Time', dataType: 'Float', name: '检修时间',unit:'小时'},
            { no: 'AB.PLC5.AC908_RunTime', dataType: 'Float', name: '运行时间',unit:'小时'},
        ]
    },
    {
        top: '85%', left: '5.5%', name: '中间提升泵井_1#轴流泵', type:1,
        allStatus: ['AB.PLC5.AC907_Fault', 'AB.PLC5.AC907_Run'],
        status1: 'AB.PLC5.AC907_Fault',//故障
        status2: 'AB.PLC5.AC907_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC907_Remote', dataType: 'Boolean', name: '远程'},
            { no: 'AB.PLC5.AC907_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC5.AC907_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC5.AC907_Start_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'AB.PLC5.AC907_Stop_Fault', dataType: 'Boolean', name: '停止故障'},
            { no: 'AB.PLC5.AC907_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
            { no: 'AB.PLC5.AC907_Maintain_Time', dataType: 'Float', name: '检修时间',unit:'小时'},
            { no: 'AB.PLC5.AC907_RunTime', dataType: 'Float', name: '运行时间',unit:'小时'},
        ]
    },
    
    {
        top: '64%', left: '55.5%', name: '反硝化滤池1#反水洗泵', type:1,
        allStatus: ['FXHLC.FXH.P001A_Trip_Fault', 'FXHLC.FXH.P001A_Running'],
        status1: 'FXHLC.FXH.P001A_Trip_Fault',//故障
        status2: 'FXHLC.FXH.P001A_Running',//运行
        propertise: [
            { no: 'FXHLC.FXH.P001A_Remote', dataType: 'Boolean', name: '远程'},
            { no: 'FXHLC.FXH.P001A_Running', dataType: 'Boolean', name: '运行'},
            { no: 'FXHLC.FXH.P001A_Trip_Fault', dataType: 'Boolean', name: '电气故障'},
            { no: 'FXHLC.FXH.P001A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
        ]
    },
    {
        top: '64%', left: '58.5%', name: '反硝化滤池2#反水洗泵', type:1,
        allStatus: ['FXHLC.FXH.P001B_Trip_Fault', 'FXHLC.FXH.P001B_Running'],
        status1: 'FXHLC.FXH.P001B_Trip_Fault',//故障
        status2: 'FXHLC.FXH.P001B_Running',//运行
        propertise: [
            { no: 'FXHLC.FXH.P001B_Remote', dataType: 'Boolean', name: '远程'},
            { no: 'FXHLC.FXH.P001B_Running', dataType: 'Boolean', name: '运行'},
            { no: 'FXHLC.FXH.P001B_Trip_Fault', dataType: 'Boolean', name: '电气故障'},
            { no: 'FXHLC.FXH.P001B_OT_Fault', dataType: 'Boolean', name: '启动故障'},
        ]
    },
    {
        top: '64%', left: '61.5%', name: '反硝化滤池3#反水洗泵', type:1,
        allStatus: ['FXHLC.FXH.P001C_Trip_Fault', 'FXHLC.FXH.P001C_Running'],
        status1: 'FXHLC.FXH.P001C_Trip_Fault',//故障
        status2: 'FXHLC.FXH.P001C_Running',//运行
        propertise: [
            { no: 'FXHLC.FXH.P001C_Remote', dataType: 'Boolean', name: '远程'},
            { no: 'FXHLC.FXH.P001C_Running', dataType: 'Boolean', name: '运行'},
            { no: 'FXHLC.FXH.P001C_Trip_Fault', dataType: 'Boolean', name: '电气故障'},
            { no: 'FXHLC.FXH.P001C_OT_Fault', dataType: 'Boolean', name: '启动故障'},
        ]
    },

]
export default data;