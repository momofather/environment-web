const data = [
    {
        top: '12%', left: '46%',
        no: 'AB.PLC3.LIT324_OUT_AI',
        modalType: 1,
        modalData: {
            title: '1＃液位计', unit: 'm',formatter: (v)=> parseFloat(v).toFixed(2)
        },
        allStatus: ['AB.PLC3.LIT324_OUT_AI']
    },
    {
        top: '34.8%', left: '21.6%', name: '放空泵井_1#潜污泵', type: 1,
        allStatus: ['AB.PLC3.AC620_Fault', 'AB.PLC3.AC620_Run'],
        status1: 'AB.PLC3.AC620_Fault',
        status2: 'AB.PLC3.AC620_Run',
        propertise: [
            { no: 'AB.PLC3.AC620_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.AC620_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC3.AC620_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC3.AC620_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC3.AC620_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.AC620_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC3.AC620_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC3.AC620_Maintain_Time', dataType: 'Float', name: '检修周期', unit: '小时' },
            { no: 'AB.PLC3.AC620_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },
    {
        top: '31.1%', left: '26.6%', name: '放空泵井_2#潜污泵', type: 1,
        allStatus: ['AB.PLC3.AC621_Fault', 'AB.PLC3.AC621_Run'],
        status1: 'AB.PLC3.AC621_Fault',
        status2: 'AB.PLC3.AC621_Run',
        propertise: [
            { no: 'AB.PLC3.AC621_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.AC621_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC3.AC621_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC3.AC621_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC3.AC621_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.AC621_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC3.AC621_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC3.AC621_Maintain_Time', dataType: 'Float', name: '检修周期', unit: '小时' },
            { no: 'AB.PLC3.AC621_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },
    {
        top: '27.4%', left: '31.3%', name: '放空泵井_3#潜污泵', type: 1,
        allStatus: ['AB.PLC3.AC622_Fault', 'AB.PLC3.AC622_Run'],
        status1: 'AB.PLC3.AC622_Fault',
        status2: 'AB.PLC3.AC622_Run',
        propertise: [
            { no: 'AB.PLC3.AC622_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.AC622_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC3.AC622_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC3.AC622_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC3.AC622_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.AC622_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC3.AC622_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC3.AC622_Maintain_Time', dataType: 'Float', name: '检修周期', unit: '小时' },
            { no: 'AB.PLC3.AC622_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },
    {
        top: '41%', left: '52%', name: '放空泵井_1#插板阀', type:2,
        allStatus: ['AB.PLC3.AC525_Fault', 'AB.PLC3.AC525_Close_Place', 'AB.PLC3.AC525_Open_Place'],
        status1: 'AB.PLC3.AC525_Fault',
        status2: 'AB.PLC3.AC525_Close_Place',
        status3: 'AB.PLC3.AC525_Open_Place',
        propertise: [
            { no: 'AB.PLC3.AC525_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC3.AC525_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC3.AC525_Open_Place', dataType: 'Boolean', name: '全开'},
            { no: 'AB.PLC3.AC525_Close_Place', dataType: 'Boolean', name: '全关'},
            { no: 'AB.PLC3.AC525_Open_Fault', dataType: 'Boolean', name: '开阀报警'},
            { no: 'AB.PLC3.AC525_Close_Fault', dataType: 'Boolean', name: '开阀报警'},
            { no: 'AB.PLC3.AC525_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次'},
        ]
    },
    {
        top: '29%', left: '68.3%', name: '放空泵井_2#插板阀', type: 2,
        allStatus: ['AB.PLC3.AC526_Fault', 'AB.PLC3.AC526_Close_Place', 'AB.PLC3.AC526_Open_Place'],
        status1: 'AB.PLC3.AC526_Fault',
        status2: 'AB.PLC3.AC526_Close_Place',
        status3: 'AB.PLC3.AC526_Open_Place',
        propertise: [
            { no: 'AB.PLC3.AC526_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.AC526_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.AC526_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC3.AC526_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC3.AC526_Open_Fault', dataType: 'Boolean', name: '开阀报警' },
            { no: 'AB.PLC3.AC526_Close_Fault', dataType: 'Boolean', name: '开阀报警' },
            { no: 'AB.PLC3.AC526_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次'},
        ]
    }
]
export default data;