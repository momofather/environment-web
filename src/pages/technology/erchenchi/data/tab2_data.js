const data = [
    {
        top: '86%', left: '4%', name: '二沉池_1#浮渣井排水泵', type:1,
        allStatus: ['AB.PLC6.AC4013_Fault', 'AB.PLC6.AC4013_Run'],
        status1: 'AB.PLC6.AC4013_Fault',//故障
        status2: 'AB.PLC6.AC4013_Run',//运行
        propertise: [
            { no: 'AB.PLC6.AC4013_Remote', dataType: 'Boolean', name: '就地/远程' },
            { no: 'AB.PLC6.AC4013_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC6.AC4013_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC6.AC4013_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC6.AC4013_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC6.AC4013_Fault_Timers', dataType: 'Long', name: '故障次数' },
            { no: 'AB.PLC6.AC4013_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC6.AC4013_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },{
        top: '79%', left: '3%', name: '二沉池_2#浮渣井排水泵', type:1,
        allStatus: ['AB.PLC6.AC4014_Fault', 'AB.PLC6.AC4014_Run'],
        status1: 'AB.PLC6.AC4014_Fault',//故障
        status2: 'AB.PLC6.AC4014_Run',//运行
        propertise: [
            { no: 'AB.PLC6.AC4014_Remote', dataType: 'Boolean', name: '就地/远程' },
            { no: 'AB.PLC6.AC4014_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC6.AC4014_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC6.AC4014_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC6.AC4014_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC6.AC4014_Fault_Timers', dataType: 'Long', name: '故障次数' },
            { no: 'AB.PLC6.AC4014_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC6.AC4014_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },{
        top: '60%', left: '13.5%', name: '二沉池_7#撇渣装置', type: 2,
        allStatus: ['AB.PLC6.AC4007_Fault', 'AB.PLC6.AC4007_Return_Place', 'AB.PLC6.AC4007_Drossing_Place'],
        status1: 'AB.PLC6.AC4007_Fault',
        status2: 'AB.PLC6.AC4007_Return_Place',
        status3: 'AB.PLC6.AC4007_Drossing_Place',
        propertise: [
            { no: 'AB.PLC6.AC4007_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC6.AC4007_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC6.AC4007_Drossing_Place', dataType: 'Boolean', name: '撇渣到位' },
            { no: 'AB.PLC6.AC4007_Return_Place', dataType: 'Boolean', name: '返回到位' },
            { no: 'AB.PLC6.AC4007_Drossing_Fault', dataType: 'Boolean', name: '撇渣报警' },
            { no: 'AB.PLC6.AC4007_Return_Fault', dataType: 'Boolean', name: '返回报警' },
            { no: 'AB.PLC6.AC4007_ValveOpen_Return', dataType: 'Float', name: '位置反馈', unit: '%' },
            { no: 'AB.PLC6.AC4007_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' }
        ]
    },{
        top: '45%', left: '15.5%', name: '二沉池_8#撇渣装置', type: 2,
        allStatus: ['AB.PLC6.AC4008_Fault', 'AB.PLC6.AC4008_Return_Place', 'AB.PLC6.AC4008_Drossing_Place'],
        status1: 'AB.PLC6.AC4008_Fault',
        status2: 'AB.PLC6.AC4008_Return_Place',
        status3: 'AB.PLC6.AC4008_Drossing_Place',
        propertise: [
            { no: 'AB.PLC6.AC4008_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC6.AC4008_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC6.AC4008_Drossing_Place', dataType: 'Boolean', name: '撇渣到位' },
            { no: 'AB.PLC6.AC4008_Return_Place', dataType: 'Boolean', name: '返回到位' },
            { no: 'AB.PLC6.AC4008_Drossing_Fault', dataType: 'Boolean', name: '撇渣报警' },
            { no: 'AB.PLC6.AC4008_Return_Fault', dataType: 'Boolean', name: '返回报警' },
            { no: 'AB.PLC6.AC4008_ValveOpen_Return', dataType: 'Float', name: '位置反馈', unit: '%' },
            { no: 'AB.PLC6.AC4008_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' }
        ]
    },{
        top: '31%', left: '17%', name: '二沉池_9#撇渣装置', type: 2,
        allStatus: ['AB.PLC6.AC4009_Fault', 'AB.PLC6.AC4009_Return_Place', 'AB.PLC6.AC4009_Drossing_Place'],
        status1: 'AB.PLC6.AC4009_Fault',
        status2: 'AB.PLC6.AC4009_Return_Place',
        status3: 'AB.PLC6.AC4009_Drossing_Place',
        propertise: [
            { no: 'AB.PLC6.AC4009_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC6.AC4009_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC6.AC4009_Drossing_Place', dataType: 'Boolean', name: '撇渣到位' },
            { no: 'AB.PLC6.AC4009_Return_Place', dataType: 'Boolean', name: '返回到位' },
            { no: 'AB.PLC6.AC4009_Drossing_Fault', dataType: 'Boolean', name: '撇渣报警' },
            { no: 'AB.PLC6.AC4009_Return_Fault', dataType: 'Boolean', name: '返回报警' },
            { no: 'AB.PLC6.AC4009_ValveOpen_Return', dataType: 'Float', name: '位置反馈', unit: '%' },
            { no: 'AB.PLC6.AC4009_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' }
        ]
    },{
        top: '34%', left: '77.5%', name: '二沉池_9#链条刮泥机', type: 7,
        allStatus: ['AB.PLC6.AC4003_Overload_Fault', 'AB.PLC6.AC4003_Torque_Fault', 'AB.PLC6.AC4003_Run'],
        status1: 'AB.PLC6.AC4003_Overload_Fault',//故障
        status2: 'AB.PLC6.AC4003_Torque_Fault',//运行
        status3: 'AB.PLC6.AC4003_Run',//运行
        propertise: [
            { no: 'AB.PLC6.AC4003_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC6.AC4003_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC6.AC4003_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC6.AC4003_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC6.AC4003_Torque_Fault', dataType: 'Boolean', name: '转矩故障' },
            { no: 'AB.PLC6.AC4003_Overload_Fault', dataType: 'Boolean', name: '过载故障' },
            { no: 'AB.PLC6.AC4003_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC6.AC4003_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC6.AC4003_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },
    {
        top: '47%', left: '79%', name: '二沉池_8#链条刮泥机', type: 7,
        allStatus: ['AB.PLC6.AC4002_Overload_Fault', 'AB.PLC6.AC4002_Torque_Fault', 'AB.PLC6.AC4002_Run'],
        status1: 'AB.PLC6.AC4002_Overload_Fault',//故障
        status2: 'AB.PLC6.AC4002_Torque_Fault',//运行
        status3: 'AB.PLC6.AC4002_Run',//运行
        propertise: [
            { no: 'AB.PLC6.AC4002_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC6.AC4002_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC6.AC4002_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC6.AC4002_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC6.AC4002_Torque_Fault', dataType: 'Boolean', name: '转矩故障' },
            { no: 'AB.PLC6.AC4002_Overload_Fault', dataType: 'Boolean', name: '过载故障' },
            { no: 'AB.PLC6.AC4002_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC6.AC4002_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC6.AC4002_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },{
        top: '61%', left: '80.5%', name: '二沉池_7#链条刮泥机', type: 7,
        allStatus: ['AB.PLC6.AC4001_Overload_Fault', 'AB.PLC6.AC4001_Torque_Fault', 'AB.PLC6.AC4001_Run'],
        status1: 'AB.PLC6.AC4001_Overload_Fault',//故障
        status2: 'AB.PLC6.AC4001_Torque_Fault',//运行
        status3: 'AB.PLC6.AC4001_Run',//运行
        propertise: [
            { no: 'AB.PLC6.AC4001_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC6.AC4001_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC6.AC4001_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC6.AC4001_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC6.AC4001_Torque_Fault', dataType: 'Boolean', name: '转矩故障' },
            { no: 'AB.PLC6.AC4001_Overload_Fault', dataType: 'Boolean', name: '过载故障' },
            { no: 'AB.PLC6.AC4001_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC6.AC4001_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC6.AC4001_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },
    {
        top: '86%', left: '20%',
        no: 'AB.PLC6.LIT615_OUT_AI',
        modalType: 1,
        modalData: {
            title: '液位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)
        },
        allStatus: ['AB.PLC6.LIT615_OUT_AI']
    }
]
export default data;