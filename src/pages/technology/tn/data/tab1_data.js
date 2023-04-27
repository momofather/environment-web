const data = [
    {
        top: '11%', left: '6%',
        no: 'TSJ.K5.K5_LC2A_LIT',
        modalType: 1,
        modalData: {
            title: '调理池A液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['TSJ.K5.K5_LC2A_LIT']
    },
    {
        top: '32%', left: '4%',
        no: 'TSJ.K5.K5_LC2B_LIT',
        modalType: 1,
        modalData: {
            title: '调理池B液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['TSJ.K5.K5_LC2B_LIT']
    },
    {
        top: '55%', left: '2%',
        no: 'TSJ.K5.K5_LC2C_LIT',
        modalType: 1,
        modalData: {
            title: '调理池C液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_LC2C_LIT']
    },
    {
        top: '80%', left: '0%',
        no: 'TSJ.K5.K5_LC2D_LIT',
        modalType: 1,
        modalData: {
            title: '调理池D液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_LC2D_LIT']
    },
    {
        top: '66%', left: '39%',
        no: 'AB.PLC3.LIT401_OUT_AI',
        modalType: 1,
        modalData: {
            title: '废水池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['AB.PLC3.LIT401_OUT_AI']
    },
    {
        top: '14%', left: '73%',
        no: 'TSJ.K5.K5_P01A_FIT',
        modalType: 1,
        modalData: {
            title: '进泥泵A流量', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_P01A_FIT']
    },
    {
        top: '32%', left: '73%',
        no: 'TSJ.K5.K5_P01B_FIT',
        modalType: 1,
        modalData: {
            title: '进泥泵B流量', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_P01B_FIT']
    },
    {
        top: '64%', left: '73%',
        no: 'TSJ.K5.K5_P01C_FIT',
        modalType: 1,
        modalData: {
            title: '进泥泵C流量', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_P01C_FIT']
    },
    {
        top: '84%', left: '73%',
        no: 'TSJ.K5.K5_P01D_FIT',
        modalType: 1,
        modalData: {
            title: '进泥泵D流量', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_P01D_FIT']
    },
    {
        top: '20%', left: '88%',
        no: 'TSJ.K5.K5_LC3A_LIT',
        modalType: 1,
        modalData: {
            title: '贮泥池A液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_LC3A_LIT']
    },
    {
        top: '53%', left: '90%',
        no: 'TSJ.K5.K5_LC3B_LIT',
        modalType: 1,
        modalData: {
            title: '贮泥池B液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_LC3B_LIT']
    },
    {
        top: '5%', left: '12.4%', name: '调理池A搅拌机', type:1,
        allStatus: ['TSJ.K5.K5_K04A_Fault', 'TSJ.K5.K5_K04A_Run'],
        status1: 'TSJ.K5.K5_K04A_Fault',//故障
        status2: 'TSJ.K5.K5_K04A_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_K04A_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K5.K5_K04A_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '15%', left: '13.4%', name: '调理池A入口气动阀', type:6,
        allStatus: ['TSJ.K5.K5_TLCSV1A_OpenP', 'TSJ.K5.K5_TLCSV1A_CloseP'],
        status1: 'TSJ.K5.K5_TLCSV1A_OpenP',//开
        status2: 'TSJ.K5.K5_TLCSV1A_CloseP',//关
        propertise: [
            { no: 'TSJ.K5.K5_TLCSV1A_OpenP', dataType: 'Boolean', name: '打开'},
            { no: 'TSJ.K5.K5_TLCSV1A_CloseP', dataType: 'Boolean', name: '关闭'},
        ]
    },
    {
        top: '24%', left: '11.4%', name: '调理池B搅拌机', type:1,
        allStatus: ['TSJ.K5.K5_K04A_Fault', 'TSJ.K5.K5_K04B_Run'],
        status1: 'TSJ.K5.K5_K04A_Fault',//故障
        status2: 'TSJ.K5.K5_K04B_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_K04A_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K5.K5_K04B_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '35%', left: '11.4%', name: '调理池B入口气动阀', type:6,
        allStatus: ['TSJ.K5.K5_TLCSV1B_OpenP', 'TSJ.K5.K5_TLCSV1B_CloseP'],
        status1: 'TSJ.K5.K5_TLCSV1B_OpenP',//故障
        status2: 'TSJ.K5.K5_TLCSV1B_CloseP',//运行
        propertise: [
            { no: 'TSJ.K5.K5_TLCSV1B_OpenP', dataType: 'Boolean', name: '开'},
            { no: 'TSJ.K5.K5_TLCSV1B_CloseP', dataType: 'Boolean', name: '关'},
        ]
    },
    {
        top: '39%', left: '11.4%', name: '调理池C入口气动阀', type:6,
        allStatus: ['TSJ.K5.K5_TLCSV1C_OpenP', 'TSJ.K5.K5_TLCSV1C_CloseP'],
        status1: 'TSJ.K5.K5_TLCSV1C_OpenP',//故障
        status2: 'TSJ.K5.K5_TLCSV1C_CloseP',//运行
        propertise: [
            { no: 'TSJ.K5.K5_TLCSV1C_OpenP', dataType: 'Boolean', name: '开'},
            { no: 'TSJ.K5.K5_TLCSV1C_CloseP', dataType: 'Boolean', name: '关'},
        ]
    },
    {
        top: '45%', left: '8.4%', name: '调理池C搅拌机', type:1,
        allStatus: ['TSJ.K5.K5_K04C_Fault', 'TSJ.K5.K5_K04C_Run'],
        status1: 'TSJ.K5.K5_K04C_Fault',//故障
        status2: 'TSJ.K5.K5_K04C_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_K04C_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K5.K5_K04C_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '62%', left: '11.4%', name: '调理池D入口气动阀', type:6,
        allStatus: ['TSJ.K5.K5_TLCSV1D_OpenP', 'TSJ.K5.K5_TLCSV1D_CloseP'],
        status1: 'TSJ.K5.K5_TLCSV1D_OpenP',//故障
        status2: 'TSJ.K5.K5_TLCSV1D_CloseP',//运行
        propertise: [
            { no: 'TSJ.K5.K5_TLCSV1D_OpenP', dataType: 'Boolean', name: '开'},
            { no: 'TSJ.K5.K5_TLCSV1D_CloseP', dataType: 'Boolean', name: '关'}
        ]
    },
    {
        top: '70%', left: '6%', name: '调理池D搅拌机', type:1,
        allStatus: ['TSJ.K5.K5_K04D_Fault', 'TSJ.K5.K5_K04D_Run'],
        status1: 'TSJ.K5.K5_K04D_Fault',//故障
        status2: 'TSJ.K5.K5_K04D_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_K04D_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K5.K5_K04D_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '4%', left: '19%', name: '1#浓缩机', type:1,
        allStatus: ['TSJ.K5.K5_NSJ01A_Fault', 'TSJ.K5.K5_NSJ01A_Run'],
        status1: 'TSJ.K5.K5_NSJ01A_Fault',//故障
        status2: 'TSJ.K5.K5_NSJ01A_Run',//运行
        propertise: [
            { no: 'TSJ.K5.AC516_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K5.K5_NSJ01A_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '24%', left: '18%', name: '2#浓缩机', type:1,
        allStatus: ['TSJ.K5.K5_NSJ01B_Fault', 'TSJ.K5.K5_NSJ01B_Run'],
        status1: 'TSJ.K5.K5_NSJ01B_Fault',//故障
        status2: 'TSJ.K5.K5_NSJ01B_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_NSJ01B_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K5.K5_NSJ01B_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '46%', left: '16%', name: '3#浓缩机', type:1,
        allStatus: ['TSJ.K5.K5_NSJ01C_Fault', 'TSJ.K5.K5_NSJ01C_Run'],
        status1: 'TSJ.K5.K5_NSJ01C_Fault',//故障
        status2: 'TSJ.K5.K5_NSJ01C_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_NSJ01C_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K5.K5_NSJ01C_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '70%', left: '14%', name: '4#浓缩机', type:1,
        allStatus: ['TSJ.K5.K5_NSJ01D_Fault', 'TSJ.K5.K5_NSJ01D_Run'],
        status1: 'TSJ.K5.K5_NSJ01D_Fault',//故障
        status2: 'TSJ.K5.K5_NSJ01D_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_NSJ01D_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K5.K5_NSJ01D_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '22%', left: '27%', name: '调理池A出口气动阀', type:6,
        allStatus: ['TSJ.K5.K5_TLCSV2A_OpenP', 'TSJ.K5.K5_TLCSV2A_CloseP'],
        status1: 'TSJ.K5.K5_TLCSV2A_OpenP',//故障
        status2: 'TSJ.K5.K5_TLCSV2A_CloseP',//运行
        propertise: [
            { no: 'TSJ.K5.K5_TLCSV2A_OpenP', dataType: 'Boolean', name: '开'},
            { no: 'TSJ.K5.K5_TLCSV2A_CloseP', dataType: 'Boolean', name: '关'},
        ]
    },
    {
        top: '41%', left: '26%', name: '调理池B出口气动阀', type:6,
        allStatus: ['TSJ.K5.K5_TLCSV2B_OpenP', 'TSJ.K5.K5_TLCSV2B_CloseP'],
        status1: 'TSJ.K5.K5_TLCSV2B_OpenP',//故障
        status2: 'TSJ.K5.K5_TLCSV2B_CloseP',//运行
        propertise: [
            { no: 'TSJ.K5.K5_TLCSV2B_OpenP', dataType: 'Boolean', name: '开'},
            { no: 'TSJ.K5.K5_TLCSV2B_CloseP', dataType: 'Boolean', name: '关'},
        ]
    },
    {
        top: '62%', left: '25%', name: '调理池C出口气动阀', type:6,
        allStatus: ['TSJ.K5.K5_TLCSV2C_OpenP', 'TSJ.K5.K5_TLCSV2C_CloseP'],
        status1: 'TSJ.K5.K5_TLCSV2C_OpenP',//故障
        status2: 'TSJ.K5.K5_TLCSV2C_CloseP',//运行
        propertise: [
            { no: 'TSJ.K5.K5_TLCSV2C_OpenP', dataType: 'Boolean', name: '开'},
            { no: 'TSJ.K5.K5_TLCSV2C_CloseP', dataType: 'Boolean', name: '关'},
        ]
    },
    {
        top: '86%', left: '23%', name: '调理池D出口气动阀', type:6,
        allStatus: ['TSJ.K5.K5_TLCSV2D_OpenP', 'TSJ.K5.K5_TLCSV2D_CloseP'],
        status1: 'TSJ.K5.K5_TLCSV2D_OpenP',//故障
        status2: 'TSJ.K5.K5_TLCSV2D_CloseP',//运行
        propertise: [
            { no: 'TSJ.K5.K5_TLCSV2D_OpenP', dataType: 'Boolean', name: '开'},
            { no: 'TSJ.K5.K5_TLCSV2D_CloseP', dataType: 'Boolean', name: '关'},
        ]
    },
    {
        top: '53%', left: '43%', name: '脱泥间3#废水提升泵', type:1,
        allStatus: ['AB.PLC3.AC7053_Fault', 'AB.PLC3.AC7053_Run'],
        status1: 'AB.PLC3.AC7053_Fault',//故障
        status2: 'AB.PLC3.AC7053_Run',//运行
        propertise: [
            { no: 'AB.PLC3.AC7053_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC3.AC7053_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC3.AC7053_Start_Fault', dataType: 'Boolean', name: '启动报警'},
            { no: 'AB.PLC3.AC7053_Stop_Fault', dataType: 'Boolean', name: '停止报警'},
            { no: 'AB.PLC3.AC7053_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC3.AC7053_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
            { no: 'AB.PLC3.AC7053_RunTime', dataType: 'Float', name: '运行时间',unit:'小时'},
            { no: 'AB.PLC3.AC7053_Maintain_Time', dataType: 'Float', name: '检修时间',unit:'小时'},
        ]
    },
    {
        top: '53%', left: '45%', name: '脱泥间2#废水提升泵', type:1,
        allStatus: ['AB.PLC3.AC7052_Fault', 'AB.PLC3.AC7052_Run'],
        status1: 'AB.PLC3.AC7052_Fault',//故障
        status2: 'AB.PLC3.AC7052_Run',//运行
        propertise: [
            { no: 'AB.PLC3.AC7052_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC3.AC7052_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC3.AC7052_Start_Fault', dataType: 'Boolean', name: '启动报警'},
            { no: 'AB.PLC3.AC7052_Stop_Fault', dataType: 'Boolean', name: '停止报警'},
            { no: 'AB.PLC3.AC7052_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC3.AC7052_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
            { no: 'AB.PLC3.AC7052_RunTime', dataType: 'Float', name: '运行时间',unit:'小时'},
            { no: 'AB.PLC3.AC7052_Maintain_Time', dataType: 'Float', name: '检修时间',unit:'小时'},
        ]
    },
    {
        top: '53%', left: '47.5%', name: '脱泥间1#废水提升泵', type:1,
        allStatus: ['AB.PLC3.AC7051_Fault', 'AB.PLC3.AC7051_Run'],
        status1: 'AB.PLC3.AC7051_Fault',//故障
        status2: 'AB.PLC3.AC7051_Run',//运行
        propertise: [
            { no: 'AB.PLC3.AC7051_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC3.AC7051_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC3.AC7051_Start_Fault', dataType: 'Boolean', name: '启动报警'},
            { no: 'AB.PLC3.AC7051_Stop_Fault', dataType: 'Boolean', name: '停止报警'},
            { no: 'AB.PLC3.AC7051_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC3.AC7051_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
            { no: 'AB.PLC3.AC7051_RunTime', dataType: 'Float', name: '运行时间',unit:'小时'},
            { no: 'AB.PLC3.AC7051_Maintain_Time', dataType: 'Float', name: '检修时间',unit:'小时'},
        ]
    },
    {
        top: '21%', left: '81.5%', name: '1#浓缩机进料泵', type:5,
        allStatus: ['TSJ.K5.K5_P01A_Run'],
        status1: 'TSJ.K5.K5_P01A_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_P01A_Run', dataType: 'Boolean', name: '运行'},
            
        ]
    },
    {
        top: '40%', left: '81.5%', name: '2#浓缩机进料泵', type:5,
        allStatus: [ 'TSJ.K5.K5_P01B_Run'],
        status1: 'TSJ.K5.K5_P01B_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_P01B_Run', dataType: 'Boolean', name: '运行'},
            
        ]
    },
    {
        top: '56%', left: '82.5%', name: '3#浓缩机进料泵', type:5,
        allStatus: [ 'TSJ.K5.K5_P01C_Run'],
        status1: 'TSJ.K5.K5_P01C_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_P01C_Run', dataType: 'Boolean', name: '运行'},
            
        ]
    },
    {
        top: '76%', left: '83.5%', name: '4#浓缩机进料泵', type:5,
        allStatus: [ 'TSJ.K5.K5_P01D_Run'],
        status1: 'TSJ.K5.K5_P01D_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_P01D_Run', dataType: 'Boolean', name: '运行'},
            
        ]
    },
    {
        top: '18%', left: '61%',
        no: 'TSJ.K5.K5_NSJ1_WNLJLL',
        modalType: 1,
        modalData: {
            title: 'l#浓缩机累计进泥量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),
        },
        allStatus: ['TSJ.K5.K5_NSJ1_WNLJLL']
    },
    {
        top: '29%', left: '61%',
        no: 'TSJ.K5.K5_NSJ2_WNLJLL',
        modalType: 1,
        modalData: {
            title: '2#浓缩机累计进泥量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),
        },
        allStatus: ['TSJ.K5.K5_NSJ2_WNLJLL']
    },
    {
        top: '72%', left: '62%',
        no: 'TSJ.K5.K5_NSJ3_WNLJLL',
        modalType: 1,
        modalData: {
            title: '3#浓缩机累计进泥量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),
        },
        allStatus: ['TSJ.K5.K5_NSJ3_WNLJLL']
    },
    {
        top: '82%', left: '62%',
        no: 'TSJ.K5.K5_NSJ4_WNLJLL',
        modalType: 1,
        modalData: {
            title: '4#浓缩机累计进泥量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),
        },
        allStatus: ['TSJ.K5.K5_NSJ4_WNLJLL']
    }
]
export default data;