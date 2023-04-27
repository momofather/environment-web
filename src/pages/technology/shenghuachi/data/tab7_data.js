const data = [
    {
        top: '40%', left: '31%', name: '2#生化池_2#剩余污泥泵', type: 1,
        allStatus: ['AB.PLC1.AC220_Fault', 'AB.PLC1.AC220_Run'],
        status1: 'AB.PLC1.AC220_Fault_Fault',//故障
        status2: 'AB.PLC1.AC220_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC220_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC220_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC220_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC220_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC220_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC220_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC1.AC220_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC1.AC220_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'},
        ]
    },
    {
        top: '51%', left: '31%', name: '2#生化池_除臭污泥投加泵', type: 1,
        allStatus: ['AB.PLC1.AC236_Fault', 'AB.PLC1.AC236_Run'],
        status1: 'AB.PLC1.AC236_Fault',//故障
        status2: 'AB.PLC1.AC236_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC236_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC236_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC236_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC236_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC236_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC220_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC1.AC220_RunTime', name: '运行时间', dataType: 'Long', unit: '小时' },
            { no: 'AB.PLC1.AC220_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时' },
        ]
    },
    {
        top: '61%', left: '31%', name: '1#生化池_1#剩余污泥泵', type: 1,
        allStatus: ['AB.PLC1.AC120_Fault', 'AB.PLC1.AC120_Run'],
        status1: 'AB.PLC1.AC120_Fault',//故障
        status2: 'AB.PLC1.AC120_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC120_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC120_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC120_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC120_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC120_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC120_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC1.AC120_RunTime', name: '运行时间', dataType: 'Long', unit: '小时' },
            { no: 'AB.PLC1.AC120_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时' },
        ]
    },
    {
        top: '74%', left: '31%', name: '1#生化池_除臭污泥投加泵', type: 1,
        allStatus: ['AB.PLC1.AC130_Fault', 'AB.PLC1.AC130_Run'],
        status1: 'AB.PLC1.AC130_Fault',//故障
        status2: 'AB.PLC1.AC130_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC130_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC130_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC130_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC130_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC130_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC130_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC1.AC130_RunTime', name: '运行时间', dataType: 'Long', unit: '小时' },
            { no: 'AB.PLC1.AC130_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时' },
        ]
    },
    {
        top: '19%', left: '38%', name: '2#生化池_4#污泥回流泵', type: 1,
        allStatus: ['AB.PLC1.AC223_Fault', 'AB.PLC1.AC223_Run'],
        status1: 'AB.PLC1.AC223_Fault',//故障
        status2: 'AB.PLC1.AC223_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC223_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC223_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC223_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC223_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC223_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC223_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC1.AC223_RunTime', name: '运行时间', dataType: 'Long', unit: '小时' },
            { no: 'AB.PLC1.AC223_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时' },
        ]
    },
    {
        top: '30%', left: '37.9%', name: '2#生化池_3#污泥回流泵', type: 1,
        allStatus: ['AB.PLC1.AC222_Fault', 'AB.PLC1.AC222_Run'],
        status1: 'AB.PLC1.AC222_Fault',//故障
        status2: 'AB.PLC1.AC222_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC222_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC222_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC222_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC222_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC222_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC222_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次' },
            { no: 'AB.PLC1.AC222_RunTime', name: '运行时间', dataType: 'Long', unit: '小时' },
            { no: 'AB.PLC1.AC222_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时' },
        ]
    },
    {
        top: '43.7%', left: '37.6%', name: '1#生化池_1#污泥回流泵', type: 1,
        allStatus: ['AB.PLC1.AC126_Fault', 'AB.PLC1.AC126_Run'],
        status1: 'AB.PLC1.AC126_Fault',//故障
        status2: 'AB.PLC1.AC126_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC126_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC126_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC126_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC126_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC126_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC126_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC1.AC126_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC1.AC126_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时' },
        ]
    },
    {
        top: '56%', left: '37.3%', name: '1#生化池_2#污泥回流泵', type: 1,
        allStatus: ['AB.PLC1.AC127_Fault', 'AB.PLC1.AC127_Run'],
        status1: 'AB.PLC1.AC127_Fault',//故障
        status2: 'AB.PLC1.AC127_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC127_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC127_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC127_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC127_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC127_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC127_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC1.AC127_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC1.AC127_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'},
        ]
    },
    {
        top: '75%', left: '55.5%', name: '1#生化池(消氧区)_1#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC119_Fault', 'AB.PLC1.AC119_Run'],
        status1: 'AB.PLC1.AC119_Fault',//故障
        status2: 'AB.PLC1.AC119_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC119_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC119_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC119_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC119_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC119_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC119_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC1.AC119_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC1.AC119_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'},
        ]
    },
    {
        top: '16%', left: '54.8%', name: '2#生化池(消氧区)_2#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC219_Fault', 'AB.PLC1.AC219_Run'],
        status1: 'AB.PLC1.AC219_Fault',//故障
        status2: 'AB.PLC1.AC219_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC219_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC1.AC219_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC1.AC219_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'},
        ]
    },
    {
        top: '12%', left: '67.3%', name: '2#生化池_4#内回流泵', type: 1,
        allStatus: ['AB.PLC1.AC225_Fault', 'AB.PLC1.AC225_Run'],
        status1: 'AB.PLC1.AC225_Fault',//故障
        status2: 'AB.PLC1.AC225_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC225_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC225_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC225_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC225_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC225_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC225_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC1.AC225_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC1.AC225_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'},
        ]
    },
    {
        top: '20%', left: '67.7%', name: '2#生化池_3#内回流泵', type: 1,
        allStatus: ['AB.PLC1.AC224_Fault', 'AB.PLC1.AC224_Run'],
        status1: 'AB.PLC1.AC224_Fault',//故障
        status2: 'AB.PLC1.AC224_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC224_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC224_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC224_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC224_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC224_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC224_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC1.AC224_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC1.AC224_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'},
        ]
    },
    {
        top: '49%', left: '68.7%', name: '1#生化池_1#内回流泵', type: 1,
        allStatus: ['AB.PLC1.AC124_Fault', 'AB.PLC1.AC124_Run'],
        status1: 'AB.PLC1.AC124_Fault',//故障
        status2: 'AB.PLC1.AC124_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC124_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC124_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC124_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC124_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC124_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC124_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC1.AC124_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC1.AC124_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'},
        ]
    },
    {
        top: '59.6%', left: '69.1%', name: '1#生化池_2#内回流泵', type: 1,
        allStatus: ['AB.PLC1.AC125_Fault', 'AB.PLC1.AC125_Run'],
        status1: 'AB.PLC1.AC125_Fault',//故障
        status2: 'AB.PLC1.AC125_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC125_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC125_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC125_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC125_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC125_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC125_Fault_Timers', name: '故障次数', dataType: 'Long', unit: '次'},
            { no: 'AB.PLC1.AC125_RunTime', name: '运行时间', dataType: 'Long', unit: '小时'},
            { no: 'AB.PLC1.AC125_Maintain_Time', name: '检修时间', dataType: 'Float', unit: '小时'},
        ]
    },
    {
        top: '87%', left: '37%',
        modalType: 1,
        no: 'AB.PLC1.LIT101_OUT_AI',
        modalData: { title: '1#液位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.LIT101_OUT_AI']
    },
    {
        top: '70%', left: '1%',
        modalType: 1,
        no: 'AB.PLC1.FIT146_OUT_AI',
        modalData: { title: '除臭污泥流量', unit: 'm3/h', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.FIT146_OUT_AI']
    },
    {
        top: '66%', left: '23%',
        modalType: 1,
        no: 'AB.PLC1.LIT103_OUT_AI',
        modalData: { title: '1#液位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.LIT103_OUT_AI']
    },
    {
        top: '61%', left: '7%',
        modalType: 1,
        no: 'AB.PLC1.FIT145_OUT_AI',
        modalData: { title: '剩余污泥流量', unit: 'm3/h', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.FIT145_OUT_AI']
    },
    {
        top: '45%', left: '14%',
        modalType: 1,
        no: 'AB.PLC1.AIT135_OUT_AI',
        modalData: { title: '1#污泥井MLSS', unit: 'mg/L', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.AIT135_OUT_AI']
    },
    {
        top: '34%', left: '14%',
        modalType: 1,
        no: 'AB.PLC1.AIT136_OUT_AI',
        modalData: { title: '2#污泥井MLSS', unit: 'mg/L', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.AIT136_OUT_AI']
    },
    {
        top: '13%', left: '25%',
        modalType: 1,
        no: 'AB.PLC1.LIT104_OUT_AI',
        modalData: { title: '2#液位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.LIT104_OUT_AI']
    },
    {
        top: '0', left: '37%',
        modalType: 1,
        no: 'AB.PLC1.LIT102_OUT_AI',
        modalData: { title: '2#液位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.LIT102_OUT_AI']
    }
]
export default data;