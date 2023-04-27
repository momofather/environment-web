const data = [
    {
        top: '84%', left: '4%', name: '二沉池_1#撇渣装置', type:2,
        allStatus: ['AB.PLC5.AC925_Fault', 'AB.PLC5.AC925_Return_Place', 'AB.PLC5.AC925_Drossing_Place'],
        status1: 'AB.PLC5.AC925_Fault',
        status2: 'AB.PLC5.AC925_Return_Place',
        status3: 'AB.PLC5.AC925_Drossing_Place',
        propertise: [
            { no: 'AB.PLC5.AC925_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC5.AC925_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC5.AC925_Drossing_Place', dataType: 'Boolean', name: '撇渣到位'},
            { no: 'AB.PLC5.AC925_Return_Place', dataType: 'Boolean', name: '返回到位'},
            { no: 'AB.PLC5.AC925_Drossing_Fault', dataType: 'Boolean', name: '撇渣报警'},
            { no: 'AB.PLC5.AC925_Return_Fault', dataType: 'Boolean', name: '返回报警'},
            { no: 'AB.PLC5.AC925_ValveOpen_Return', dataType: 'Float', name: '位置反馈', unit: '%'},
            { no: 'AB.PLC5.AC925_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次'}
        ]
    },{
        top: '65%', left: '7%', name: '二沉池_2#撇渣装置', type: 2,
        allStatus: ['AB.PLC5.AC926_Fault', 'AB.PLC5.AC926_Return_Place', 'AB.PLC5.AC926_Drossing_Place'],
        status1: 'AB.PLC5.AC926_Fault',
        status2: 'AB.PLC5.AC926_Return_Place',
        status3: 'AB.PLC5.AC926_Drossing_Place',
        propertise: [
            { no: 'AB.PLC5.AC926_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC5.AC926_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC926_Drossing_Place', dataType: 'Boolean', name: '撇渣到位' },
            { no: 'AB.PLC5.AC926_Return_Place', dataType: 'Boolean', name: '返回到位' },
            { no: 'AB.PLC5.AC926_Drossing_Fault', dataType: 'Boolean', name: '撇渣报警' },
            { no: 'AB.PLC5.AC926_Return_Fault', dataType: 'Boolean', name: '返回报警' },
            { no: 'AB.PLC5.AC926_ValveOpen_Return', dataType: 'Float', name: '位置反馈', unit: '%' },
            { no: 'AB.PLC5.AC926_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次' }
        ]
    },{
        top: '47%', left: '9.5%', name: '二沉池_3#撇渣装置', type: 2,
        allStatus: ['AB.PLC5.AC927_Fault', 'AB.PLC5.AC927_Return_Place', 'AB.PLC5.AC927_Drossing_Place'],
        status1: 'AB.PLC5.AC927_Fault',
        status2: 'AB.PLC5.AC927_Return_Place',
        status3: 'AB.PLC5.AC927_Drossing_Place',
        propertise: [
            { no: 'AB.PLC5.AC927_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC5.AC927_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC927_Drossing_Place', dataType: 'Boolean', name: '撇渣到位' },
            { no: 'AB.PLC5.AC927_Return_Place', dataType: 'Boolean', name: '返回到位' },
            { no: 'AB.PLC5.AC927_Drossing_Fault', dataType: 'Boolean', name: '撇渣报警' },
            { no: 'AB.PLC5.AC927_Return_Fault', dataType: 'Boolean', name: '返回报警' },
            { no: 'AB.PLC5.AC927_ValveOpen_Return', dataType: 'Float', name: '位置反馈', unit: '%' },
            { no: 'AB.PLC5.AC927_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次' }
        ]
    },{
        top: '32%', left: '11.5%', name: '二沉池_4#撇渣装置', type: 2,
        allStatus: ['AB.PLC5.AC928_Fault', 'AB.PLC5.AC928_Return_Place', 'AB.PLC5.AC928_Drossing_Place'],
        status1: 'AB.PLC5.AC928_Fault',
        status2: 'AB.PLC5.AC928_Return_Place',
        status3: 'AB.PLC5.AC928_Drossing_Place',
        propertise: [
            { no: 'AB.PLC5.AC928_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC5.AC928_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC928_Drossing_Place', dataType: 'Boolean', name: '撇渣到位' },
            { no: 'AB.PLC5.AC928_Return_Place', dataType: 'Boolean', name: '返回到位' },
            { no: 'AB.PLC5.AC928_Drossing_Fault', dataType: 'Boolean', name: '撇渣报警' },
            { no: 'AB.PLC5.AC928_Return_Fault', dataType: 'Boolean', name: '返回报警' },
            { no: 'AB.PLC5.AC928_ValveOpen_Return', dataType: 'Float', name: '位置反馈', unit: '%' },
            { no: 'AB.PLC5.AC928_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次' }
        ]
    },{
        top: '17%', left: '13.5%', name: '二沉池_5#撇渣装置', type: 2,
        allStatus: ['AB.PLC5.AC929_Fault', 'AB.PLC5.AC929_Return_Place', 'AB.PLC5.AC929_Drossing_Place'],
        status1: 'AB.PLC5.AC929_Fault',
        status2: 'AB.PLC5.AC929_Return_Place',
        status3: 'AB.PLC5.AC929_Drossing_Place',
        propertise: [
            { no: 'AB.PLC5.AC929_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC5.AC929_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC929_Drossing_Place', dataType: 'Boolean', name: '撇渣到位' },
            { no: 'AB.PLC5.AC929_Return_Place', dataType: 'Boolean', name: '返回到位' },
            { no: 'AB.PLC5.AC929_Drossing_Fault', dataType: 'Boolean', name: '撇渣报警' },
            { no: 'AB.PLC5.AC929_Return_Fault', dataType: 'Boolean', name: '返回报警' },
            { no: 'AB.PLC5.AC929_ValveOpen_Return', dataType: 'Float', name: '位置反馈', unit: '%' },
            { no: 'AB.PLC5.AC929_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次' }
        ]
    },{
        top: '6%', left: '15.5%', name: '二沉池_6#撇渣装置', type: 2,
        allStatus: ['AB.PLC5.AC930_Fault', 'AB.PLC5.AC930_Return_Place', 'AB.PLC5.AC930_Drossing_Place'],
        status1: 'AB.PLC5.AC930_Fault',
        status2: 'AB.PLC5.AC930_Return_Place',
        status3: 'AB.PLC5.AC930_Drossing_Place',
        propertise: [
            { no: 'AB.PLC5.AC930_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC5.AC930_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC930_Drossing_Place', dataType: 'Boolean', name: '撇渣到位' },
            { no: 'AB.PLC5.AC930_Return_Place', dataType: 'Boolean', name: '返回到位' },
            { no: 'AB.PLC5.AC930_Drossing_Fault', dataType: 'Boolean', name: '撇渣报警' },
            { no: 'AB.PLC5.AC930_Return_Fault', dataType: 'Boolean', name: '返回报警' },
            { no: 'AB.PLC5.AC930_ValveOpen_Return', dataType: 'Float', name: '位置反馈', unit: '%' },
            { no: 'AB.PLC5.AC930_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次' }
        ]
    },
    {
        top: '6%', left: '77.5%', name: '二沉池_6#链条刮泥机', type:7,
        allStatus: ['AB.PLC5.AC924_Overload_Fault', 'AB.PLC5.AC924_Torque_Fault', 'AB.PLC5.AC924_Run'],
        status1: 'AB.PLC5.AC924_Overload_Fault',//故障
        status2: 'AB.PLC5.AC924_Torque_Fault',//运行
        status3: 'AB.PLC5.AC924_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC924_Remote', dataType: 'Boolean', name: '本地'},
            { no: 'AB.PLC5.AC924_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC5.AC924_Start_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'AB.PLC5.AC924_Stop_Fault', dataType: 'Boolean', name: '停止故障'},
            { no: 'AB.PLC5.AC924_Torque_Fault', dataType: 'Boolean', name: '转矩故障'},
            { no: 'AB.PLC5.AC924_Overload_Fault', dataType: 'Boolean', name: '过载故障'},
            { no: 'AB.PLC5.AC924_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次'},
            { no: 'AB.PLC5.AC924_RunTime', dataType: 'Float', name: '累计运行', unit: '小时'},
            { no: 'AB.PLC5.AC924_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时'},
        ]
    },{
        top: '20%', left: '78.5%', name: '二沉池_5#链条刮泥机', type: 7,
        allStatus: ['AB.PLC5.AC923_Overload_Fault', 'AB.PLC5.AC923_Torque_Fault', 'AB.PLC5.AC923_Run'],
        status1: 'AB.PLC5.AC923_Overload_Fault',//故障
        status2: 'AB.PLC5.AC923_Torque_Fault',//运行
        status3: 'AB.PLC5.AC923_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC923_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC5.AC923_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC923_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC923_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC923_Torque_Fault', dataType: 'Boolean', name: '转矩故障' },
            { no: 'AB.PLC5.AC923_Overload_Fault', dataType: 'Boolean', name: '过载故障' },
            { no: 'AB.PLC5.AC923_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次' },
            { no: 'AB.PLC5.AC923_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC5.AC923_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },{
        top: '34%', left: '80.5%', name: '二沉池_4#链条刮泥机', type: 7,
        allStatus: ['AB.PLC5.AC922_Overload_Fault', 'AB.PLC5.AC922_Torque_Fault', 'AB.PLC5.AC922_Run'],
        status1: 'AB.PLC5.AC922_Overload_Fault',//故障
        status2: 'AB.PLC5.AC922_Torque_Fault',//运行
        status3: 'AB.PLC5.AC922_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC922_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC5.AC922_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC922_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC922_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC922_Torque_Fault', dataType: 'Boolean', name: '转矩故障' },
            { no: 'AB.PLC5.AC922_Overload_Fault', dataType: 'Boolean', name: '过载故障' },
            { no: 'AB.PLC5.AC922_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次' },
            { no: 'AB.PLC5.AC922_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC5.AC922_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },{
        top: '49%', left: '82.5%', name: '二沉池_3#链条刮泥机', type: 7,
        allStatus: ['AB.PLC5.AC903_Overload_Fault', 'AB.PLC5.AC903_Torque_Fault', 'AB.PLC5.AC903_Run'],
        status1: 'AB.PLC5.AC903_Overload_Fault',//故障
        status2: 'AB.PLC5.AC903_Torque_Fault',//运行
        status3: 'AB.PLC5.AC903_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC903_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC5.AC903_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC903_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC903_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC903_Torque_Fault', dataType: 'Boolean', name: '转矩故障' },
            { no: 'AB.PLC5.AC903_Overload_Fault', dataType: 'Boolean', name: '过载故障' },
            { no: 'AB.PLC5.AC903_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次' },
            { no: 'AB.PLC5.AC903_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC5.AC903_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },{
        top: '66%', left: '84.5%', name: '二沉池_2#链条刮泥机', type: 7,
        allStatus: ['AB.PLC5.AC902_Overload_Fault', 'AB.PLC5.AC902_Torque_Fault', 'AB.PLC5.AC902_Run'],
        status1: 'AB.PLC5.AC902_Overload_Fault',//故障
        status2: 'AB.PLC5.AC902_Torque_Fault',//运行
        status3: 'AB.PLC5.AC902_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC902_Remote', dataType: 'Boolean', name: '本地' },
            { no: 'AB.PLC5.AC902_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC902_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC902_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC902_Torque_Fault', dataType: 'Boolean', name: '转矩故障' },
            { no: 'AB.PLC5.AC902_Overload_Fault', dataType: 'Boolean', name: '过载故障' },
            { no: 'AB.PLC5.AC902_Fault_Timers', dataType: 'Long', name: '故障次数',unit: '次' },
            { no: 'AB.PLC5.AC902_RunTime', dataType: 'Float', name: '累计运行', unit: '小时' },
            { no: 'AB.PLC5.AC902_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },
    {
        top: '86%', left: '86.5%', name: '二沉池_1#链条刮泥机', type: 7,
        allStatus: ['AB.PLC5.AC901_Overload_Fault', 'AB.PLC5.AC901_Torque_Fault', 'AB.PLC5.AC901_Run'],
        status1: 'AB.PLC5.AC901_Overload_Fault',//故障
        status2: 'AB.PLC5.AC901_Torque_Fault',//运行
        status3: 'AB.PLC5.AC901_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC901_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC5.AC901_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC901_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC901_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC901_Torque_Fault', dataType: 'Boolean', name: '转矩故障' },
            { no: 'AB.PLC5.AC901_Overload_Fault', dataType: 'Boolean', name: '过载故障' },
            { no: 'AB.PLC5.AC901_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次'},
            { no: 'AB.PLC5.AC901_RunTime', dataType: 'Float', name: '累计运行', unit: '小时'},
            { no: 'AB.PLC5.AC901_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },
    
]
export default data;