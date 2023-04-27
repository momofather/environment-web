const data = [
    {
        top: '61%', left: '31%', name: '3#生化池_1#剩余污泥泵', type: 1,
        allStatus: ['AB.PLC2.AC320_Fault', 'AB.PLC2.AC320_Run'],
        status1: 'AB.PLC2.AC320_Fault',//故障
        status2: 'AB.PLC2.AC320_Run',//运行
        propertise: [
            { no: 'AB.PLC2.AC320_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC320_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC320_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC320_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC320_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC320_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC2.AC320_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC2.AC320_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'  },
        ]
    },
    {
        top: '74%', left: '31%', name: '3#生化池_除臭污泥投加泵', type: 1,
        allStatus: ['AB.PLC2.AC328_Fault', 'AB.PLC2.AC328_Run'],
        status1: 'AB.PLC2.AC328_Fault',//故障
        status2: 'AB.PLC2.AC328_Run',//运行
        propertise: [
            { no: 'AB.PLC2.AC328_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC328_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC328_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC328_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC328_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC328_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC2.AC328_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC2.AC328_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'  },
        ]
    },
    {
        top: '43.7%', left: '37.6%', name: '3#生化池_1#污泥回流泵', type: 1,
        allStatus: ['AB.PLC2.AC325_Fault', 'AB.PLC2.AC325_Run'],
        status1: 'AB.PLC2.AC325_Fault',//故障
        status2: 'AB.PLC2.AC325_Run',//运行
        propertise: [
            { no: 'AB.PLC2.AC325_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC325_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC325_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC325_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC325_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC325_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC2.AC325_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC2.AC325_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'  },
        ]
    },
    {
        top: '55.8%', left: '37.2%', name: '3#生化池_2#污泥回流泵', type: 1,
        allStatus: ['AB.PLC2.AC326_Fault', 'AB.PLC2.AC326_Run'],
        status1: 'AB.PLC2.AC326_Fault',//故障
        status2: 'AB.PLC2.AC326_Run',//运行
        propertise: [
            { no: 'AB.PLC2.AC326_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC326_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC326_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC326_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC326_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC326_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC2.AC326_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC2.AC326_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'  },
        ]
    },
    {
        top: '75%', left: '55.5%', name: '3#生化池(消氧区)_1#搅拌器', type: 1,
        allStatus: ['AB.PLC2.AC319_Fault', 'AB.PLC2.AC319_Run'],
        status1: 'AB.PLC2.AC319_Fault',//故障
        status2: 'AB.PLC2.AC319_Run',//运行
        propertise: [
            { no: 'AB.PLC2.AC319_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC319_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC319_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC319_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC319_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC319_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC2.AC319_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC2.AC319_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时' },
        ]
    },
    {
        top: '49%', left: '68.7%', name: '3#生化池_1#内回流泵', type: 1,
        allStatus: ['AB.PLC2.AC323_Fault', 'AB.PLC2.AC323_Run'],
        status1: 'AB.PLC2.AC323_Fault',//故障
        status2: 'AB.PLC2.AC323_Run',//运行
        propertise: [
            { no: 'AB.PLC2.AC323_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC323_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC323_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC323_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC323_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC323_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC2.AC323_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC2.AC323_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'  },
        ]
    },
    {
        top: '59.6%', left: '69.1%', name: '3#生化池_2#内回流泵', type: 1,
        allStatus: ['AB.PLC2.AC324_Fault', 'AB.PLC2.AC324_Run'],
        status1: 'AB.PLC2.AC324_Fault',//故障
        status2: 'AB.PLC2.AC324_Run',//运行
        propertise: [
            { no: 'AB.PLC2.AC324_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC324_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC324_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC324_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC324_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC2.AC324_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC2.AC324_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC2.AC324_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'  },
        ]
    },
    {
        top: '87%', left: '37%',
        modalType: 1,
        no: 'AB.PLC2.LIT201_OUT_AI',
        modalData: { title: '3#液位计', unit: 'm', formatter: (v)=>parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC2.LIT201_OUT_AI']
    },
    {
        top: '71%', left: '5%',
        modalType: 1,
        no: 'AB.PLC2.FIT224_OUT_AI',
        modalData: { title: '除臭污泥流量', unit: 'm3/h', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC2.FIT224_OUT_AI']
    },
    {
        top: '64%', left: '23%',
        modalType: 1,
        no: 'AB.PLC2.LIT202_OUT_AI',
        modalData: { title: '3#液位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC2.LIT202_OUT_AI']
    },
    {
        top: '61%', left: '7%',
        modalType: 1,
        no: 'AB.PLC2.FIT223_OUT_AI',
        modalData: { title: '剩余污泥流量', unit: 'm3/h', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC2.FIT223_OUT_AI']
    },
    {
        top: '44%', left: '15%',
        modalType: 1,
        no: 'AB.PLC2.AIT218_OUT_AI',
        modalData: { title: '3#污泥井MLSS', unit: 'mg/L', },
        allStatus: ['AB.PLC2.AIT218_OUT_AI']
    }
]
export default data;