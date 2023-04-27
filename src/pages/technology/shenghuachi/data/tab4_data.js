const data = [
    {
        top: '53%', left: '11%', name: '1#生化池(消氧区)_1#搅拌器', type:1,
        allStatus: ['AB.PLC1.AC119_Fault', 'AB.PLC1.AC119_Run'],
        status1: 'AB.PLC1.AC119_Fault',//故障
        status2: 'AB.PLC1.AC119_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC119_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC119_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC119_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC119_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC119_Fault', name: '故障', dataType: 'Boolean' }, 
            { no: 'AB.PLC1.AC119_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC119_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC119_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '72%', left: '17%', name: '1#生化池(缺氧区C)_4#推流器', type:1,
        allStatus: ['AB.PLC1.AC118_Fault', 'AB.PLC1.AC118_Run'],
        status1: 'AB.PLC1.AC118_Fault',//故障
        status2: 'AB.PLC1.AC118_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC118_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC118_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC118_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC118_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC118_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC118_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC118_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC118_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '72%', left: '19%', name: '1#生化池(缺氧区C)_3#推流器', type: 1,
        allStatus: ['AB.PLC1.AC117_Fault', 'AB.PLC1.AC117_Run'],
        status1: 'AB.PLC1.AC117_Fault',//故障
        status2: 'AB.PLC1.AC117_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC117_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC117_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC117_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC117_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC117_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC117_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC117_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC117_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '62%', left: '22%', name: '1#生化池(缺氧区C)_2#推流器', type: 1,
        allStatus: ['AB.PLC1.AC116_Fault', 'AB.PLC1.AC116_Run'],
        status1: 'AB.PLC1.AC116_Fault',//故障
        status2: 'AB.PLC1.AC116_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC116_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC116_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC116_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC116_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC116_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC116_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC116_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC116_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '62%', left: '24%', name: '1#生化池(缺氧区C)_1#推流器', type: 1,
        allStatus: ['AB.PLC1.AC115_Fault', 'AB.PLC1.AC115_Run'],
        status1: 'AB.PLC1.AC115_Fault',//故障
        status2: 'AB.PLC1.AC115_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC115_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC115_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC115_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC115_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC115_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC115_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC115_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC115_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '54%', left: '39%', name: '1#生化池(缺氧区B)_3#搅拌机', type: 1,
        allStatus: ['AB.PLC1.AC113_Fault', 'AB.PLC1.AC113_Run'],
        status1: 'AB.PLC1.AC113_Fault',//故障
        status2: 'AB.PLC1.AC113_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC113_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC113_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC113_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC113_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC113_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC113_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC113_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC113_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '70%', left: '38.6%', name: '1#生化池(缺氧区B)_4#搅拌机', type:1,
        allStatus: ['AB.PLC1.AC114_Fault', 'AB.PLC1.AC114_Run'],
        status1: 'AB.PLC1.AC114_Fault',//故障
        status2: 'AB.PLC1.AC114_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC114_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC114_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC114_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC114_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC114_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC114_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC114_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC114_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '70%', left: '47%', name: '1#生化池(缺氧区B)_1#搅拌机', type: 1,
        allStatus: ['AB.PLC1.AC111_Fault', 'AB.PLC1.AC111_Run'],
        status1: 'AB.PLC1.AC111_Fault',//故障
        status2: 'AB.PLC1.AC111_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC111_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC111_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC111_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC111_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC111_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC111_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC111_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC111_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '91%', left: '47.5%', name: '1#生化池(缺氧区B)_2#搅拌机', type: 1,
        allStatus: ['AB.PLC1.AC112_Fault', 'AB.PLC1.AC112_Run'],
        status1: 'AB.PLC1.AC112_Fault',//故障
        status2: 'AB.PLC1.AC112_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC112_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC112_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC112_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC112_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC112_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC112_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC112_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC112_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '70%', left: '51%', name: '1#生化池(好氧区B)_3#搅拌机', type: 1,
        allStatus: ['AB.PLC1.AC109_Fault', 'AB.PLC1.AC109_Run'],
        status1: 'AB.PLC1.AC109_Fault',//故障
        status2: 'AB.PLC1.AC109_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC109_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC109_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC109_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC109_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC109_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC109_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC109_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC109_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '91%', left: '50.5%', name: '1#生化池(好氧区B)_4#搅拌机', type: 1,
        allStatus: ['AB.PLC1.AC110_Fault', 'AB.PLC1.AC110_Run'],
        status1: 'AB.PLC1.AC110_Fault',//故障
        status2: 'AB.PLC1.AC110_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC110_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC110_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC110_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC110_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC110_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC110_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC110_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC110_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '54%', left: '59%', name: '1#生化池(好氧区B)_1#搅拌机', type: 1,
        allStatus: ['AB.PLC1.AC107_Fault', 'AB.PLC1.AC107_Run'],
        status1: 'AB.PLC1.AC107_Fault',//故障
        status2: 'AB.PLC1.AC107_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC107_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC107_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC107_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC107_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC107_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC107_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC107_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC107_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '69%', left: '59.3%', name: '1#生化池(好氧区B)_2#搅拌机', type: 1,
        allStatus: ['AB.PLC1.AC108_Fault', 'AB.PLC1.AC108_Run'],
        status1: 'AB.PLC1.AC108_Fault',//故障
        status2: 'AB.PLC1.AC108_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC108_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC108_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC108_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC108_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC108_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC108_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC108_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC108_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '70%', left: '62%', name: '1#生化池(缺氧区A)_4#推流器', type: 1,
        allStatus: ['AB.PLC1.AC106_Fault', 'AB.PLC1.AC106_Run'],
        status1: 'AB.PLC1.AC106_Fault',//故障
        status2: 'AB.PLC1.AC106_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC106_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC106_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC106_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC106_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC106_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC106_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC106_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC106_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '70%', left: '65%', name: '1#生化池(缺氧区A)_3#推流器', type: 1,
        allStatus: ['AB.PLC1.AC105_Fault', 'AB.PLC1.AC105_Run'],
        status1: 'AB.PLC1.AC105_Fault',//故障
        status2: 'AB.PLC1.AC105_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC105_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC105_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC105_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC105_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC105_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC105_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC105_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC105_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '64%', left: '68%', name: '1#生化池(缺氧区A)_2#推流器', type: 1,
        allStatus: ['AB.PLC1.AC104_Fault', 'AB.PLC1.AC104_Run'],
        status1: 'AB.PLC1.AC104_Fault',//故障
        status2: 'AB.PLC1.AC104_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC104_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC104_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC104_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC104_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC104_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC104_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC104_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC104_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '64%', left: '70.2%', name: '1#生化池(缺氧区A)_1#推流器', type: 1,
        allStatus: ['AB.PLC1.AC103_Fault', 'AB.PLC1.AC103_Run'],
        status1: 'AB.PLC1.AC103_Fault',//故障
        status2: 'AB.PLC1.AC103_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC103_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC103_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC103_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC103_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC103_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC103_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC103_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC103_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '72%', left: '86.4%', name: '1#生化池(厌氧区A)_2#推流器', type: 1,
        allStatus: ['AB.PLC1.AC102_Fault', 'AB.PLC1.AC102_Run'],
        status1: 'AB.PLC1.AC102_Fault',//故障
        status2: 'AB.PLC1.AC102_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC102_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC102_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC102_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC102_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC102_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC102_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC102_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC102_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '64%', left: '90.4%', name: '1#生化池(厌氧区A)_1#推流器', type: 1,
        allStatus: ['AB.PLC1.AC101_Fault', 'AB.PLC1.AC101_Run'],
        status1: 'AB.PLC1.AC101_Fault',//故障
        status2: 'AB.PLC1.AC101_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC101_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC101_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC101_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC101_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC101_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC101_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC101_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC101_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    // 2号生化池
    {
        top: '40%', left: '12%', name: '2#生化池(消氧区)_2#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC219_Fault', 'AB.PLC1.AC219_Run'],
        status1: 'AB.PLC1.AC219_Fault',//故障
        status2: 'AB.PLC1.AC219_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC219_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC219_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC219_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC219_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '22%', left: '18.7%', name: '2#生化池(缺氧区C)_8#推流器', type: 1,
        allStatus: ['AB.PLC1.AC218_Fault', 'AB.PLC1.AC218_Run'],
        status1: 'AB.PLC1.AC218_Fault',//故障
        status2: 'AB.PLC1.AC218_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC218_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC218_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC218_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC218_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC218_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC218_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC218_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC218_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '22%', left: '20.8%', name: '2#生化池(缺氧区C)_7#推流器', type: 1,
        allStatus: ['AB.PLC1.AC217_Fault', 'AB.PLC1.AC217_Run'],
        status1: 'AB.PLC1.AC217_Fault',//故障
        status2: 'AB.PLC1.AC217_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC217_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC217_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC217_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC217_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC217_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC217_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC217_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC217_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '32%', left: '23%', name: '2#生化池(缺氧区C)_6#推流器', type: 1,
        allStatus: ['AB.PLC1.AC216_Fault', 'AB.PLC1.AC216_Run'],
        status1: 'AB.PLC1.AC216_Fault',//故障
        status2: 'AB.PLC1.AC216_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC216_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC216_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC216_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC216_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC216_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC216_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC216_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC216_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '32%', left: '25.5%', name: '2#生化池(缺氧区C)_5#推流器', type: 1,
        allStatus: ['AB.PLC1.AC215_Fault', 'AB.PLC1.AC215_Run'],
        status1: 'AB.PLC1.AC215_Fault',//故障
        status2: 'AB.PLC1.AC215_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC215_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC215_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC215_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC215_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC215_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC215_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC215_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC215_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '29%', left: '40%', name: '2#生化池(缺氧区B)_8#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC214_Fault', 'AB.PLC1.AC214_Run'],
        status1: 'AB.PLC1.AC214_Fault',//故障
        status2: 'AB.PLC1.AC214_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC214_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC214_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC214_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC214_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC214_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC214_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC214_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC214_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '38%', left: '39.7%', name: '2#生化池(缺氧区B)_7#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC213_Fault', 'AB.PLC1.AC213_Run'],
        status1: 'AB.PLC1.AC213_Fault',//故障
        status2: 'AB.PLC1.AC213_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC213_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC213_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC213_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC213_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC213_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC213_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC213_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC213_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '7%', left: '47.6%', name: '2#生化池(缺氧区B)_6#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC212_Fault', 'AB.PLC1.AC212_Run'],
        status1: 'AB.PLC1.AC212_Fault',//故障
        status2: 'AB.PLC1.AC212_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC212_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC212_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC212_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC212_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC212_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC212_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC212_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC212_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '28%', left: '47%', name: '2#生化池(缺氧区B)_5#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC211_Fault', 'AB.PLC1.AC211_Run'],
        status1: 'AB.PLC1.AC211_Fault',//故障
        status2: 'AB.PLC1.AC211_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC211_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC211_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC211_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC211_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC211_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC211_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC211_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC211_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '7%', left: '50.5%', name: '2#生化池(好氧区B)_8#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC210_Fault', 'AB.PLC1.AC210_Run'],
        status1: 'AB.PLC1.AC210_Fault',//故障
        status2: 'AB.PLC1.AC210_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC210_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC210_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC210_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC210_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC210_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC210_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC210_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC210_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '28%', left: '51%', name: '2#生化池(好氧区B)_7#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC209_Fault', 'AB.PLC1.AC209_Run'],
        status1: 'AB.PLC1.AC209_Fault',//故障
        status2: 'AB.PLC1.AC209_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC209_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC209_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC209_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC209_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC209_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC209_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC209_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC209_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '29%', left: '58.3%', name: '2#生化池(好氧区B)_6#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC208_Fault', 'AB.PLC1.AC208_Run'],
        status1: 'AB.PLC1.AC208_Fault',//故障
        status2: 'AB.PLC1.AC208_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC208_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC208_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC208_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC208_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC208_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC208_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC208_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC208_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '37%', left: '58.3%', name: '2#生化池(好氧区B)_5#搅拌器', type: 1,
        allStatus: ['AB.PLC1.AC207_Fault', 'AB.PLC1.AC207_Run'],
        status1: 'AB.PLC1.AC207_Fault',//故障
        status2: 'AB.PLC1.AC207_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC207_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC207_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC207_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC207_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC207_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC207_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC207_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC207_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '25%', left: '61.3%', name: '2#生化池(缺氧区A)_8#推流器', type: 1,
        allStatus: ['AB.PLC1.AC206_Fault', 'AB.PLC1.AC206_Run'],
        status1: 'AB.PLC1.AC206_Fault',//故障
        status2: 'AB.PLC1.AC206_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC206_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC206_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC206_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC206_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC206_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC206_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC206_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC206_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '25%', left: '64%', name: '2#生化池(缺氧区A)_7#推流器', type: 1,
        allStatus: ['AB.PLC1.AC205_Fault', 'AB.PLC1.AC205_Run'],
        status1: 'AB.PLC1.AC205_Fault',//故障
        status2: 'AB.PLC1.AC205_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC205_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC205_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC205_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC205_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC205_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC205_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC205_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC205_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '31%', left: '66.7%', name: '2#生化池(缺氧区A)_6#推流器', type: 1,
        allStatus: ['AB.PLC1.AC204_Fault', 'AB.PLC1.AC204_Run'],
        status1: 'AB.PLC1.AC204_Fault',//故障
        status2: 'AB.PLC1.AC204_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC204_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC204_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC204_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC204_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC204_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC204_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC204_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC204_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '31%', left: '69.6%', name: '2#生化池(缺氧区A)_5#推流器', type: 1,
        allStatus: ['AB.PLC1.AC203_Fault', 'AB.PLC1.AC203_Run'],
        status1: 'AB.PLC1.AC203_Fault',//故障
        status2: 'AB.PLC1.AC203_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC203_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC203_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC203_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC203_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC203_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC203_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC203_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC203_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '25%', left: '84%', name: '2#生化池(厌氧区A)_4#推流器', type: 1,
        allStatus: ['AB.PLC1.AC202_Fault', 'AB.PLC1.AC202_Run'],
        status1: 'AB.PLC1.AC202_Fault',//故障
        status2: 'AB.PLC1.AC202_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC202_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC202_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC202_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC202_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC202_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC202_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC202_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC202_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        top: '31%', left: '88.4%', name: '2#生化池(厌氧区A)_3#推流器', type: 1,
        allStatus: ['AB.PLC1.AC201_Fault', 'AB.PLC1.AC201_Run'],
        status1: 'AB.PLC1.AC201_Fault',//故障
        status2: 'AB.PLC1.AC201_Run',//运行
        propertise: [
            { no: 'AB.PLC1.AC201_Remote', name: '远控', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC201_Run', name: '运行', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC201_Start_Fault', name: '启动报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC201_Stop_Fault', name: '停止报警', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC201_Fault', name: '故障', dataType: 'Boolean' },
            { no: 'AB.PLC1.AC201_Fault_Timers', name: '故障次数', dataType: 'Long' },
            { no: 'AB.PLC1.AC201_Run_Fault', name: '运行时间', dataType: 'Long' },
            { no: 'AB.PLC1.AC201_Remote', name: '检修时间', dataType: 'Float' },
        ]
    },
    {
        bottom: 0, left: '5px',
        modalType: 3,
        title: '1号好氧区',
        modalData: [
            { title: 'A区DO：', unit: 'mg/L', no: 'AB.PLC1.AIT109_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: 'B区DO：', unit: 'mg/L', no: 'AB.PLC1.AIT108_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2)},
            { title: 'C区DO：', unit: 'mg/L', no: 'AB.PLC1.AIT106_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2)},
            { title: 'D区DO：', unit: 'mg/L', no: 'AB.PLC1.AIT105_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2)}
        ],
        allStatus: ['AB.PLC1.AIT109_OUT_AI', 'AB.PLC1.AIT108_OUT_AI', 'AB.PLC1.AIT106_OUT_AI', 'AB.PLC1.AIT105_OUT_AI',]
    },
    {
        bottom: 0, left: '250px',
        modalType: 3,
        title: '1号好氧区',
        modalData: [
            { title: 'A区MLSS：', unit: 'mg/L', no: 'AB.PLC1.AIT129_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'B区MLSS：', unit: 'mg/L', no: 'AB.PLC1.AIT128_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'C区MLSS：', unit: 'mg/L', no: 'AB.PLC1.AIT126_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'D区MLSS：', unit: 'mg/L', no: 'AB.PLC1.AIT125_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)}
        ],
        allStatus: ['AB.PLC1.AIT129_OUT_AI', 'AB.PLC1.AIT128_OUT_AI', 'AB.PLC1.AIT126_OUT_AI', 'AB.PLC1.AIT125_OUT_AI',]
    },
    {
        bottom: 0, left: '500px',
        modalType: 3,
        title: '1号厌氧/缺氧区',
        modalData: [
            { title: '厌氧ORP：', unit: 'mV', no: 'AB.PLC1.AIT119_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'A区ORP：', unit: 'mV', no: 'AB.PLC1.AIT118_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'B区ORP：', unit: 'mV', no: 'AB.PLC1.AIT116_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'C区ORP：', unit: 'mV', no: 'AB.PLC1.AIT115_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)}
        ],
        allStatus: ['AB.PLC1.AIT119_OUT_AI', 'AB.PLC1.AIT118_OUT_AI', 'AB.PLC1.AIT116_OUT_AI', 'AB.PLC1.AIT115_OUT_AI',]
    },
    {
        top: 0, right: '500px',
        modalType: 3,
        title: '2号好氧区',
        modalData: [
            { title: 'A区DO：', unit: 'mg/L', no: 'AB.PLC1.AIT114_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2)},
            { title: 'B区DO：', unit: 'mg/L', no: 'AB.PLC1.AIT113_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2)},
            { title: 'C区DO：', unit: 'mg/L', no: 'AB.PLC1.AIT111_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2)},
            { title: 'D区DO：', unit: 'mg/L', no: 'AB.PLC1.AIT110_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2)}
        ],
        allStatus: ['AB.PLC1.AIT114_OUT_AI', 'AB.PLC1.AIT113_OUT_AI', 'AB.PLC1.AIT111_OUT_AI', 'AB.PLC1.AIT110_OUT_AI',]
    },
    {
        top: 0, right: '250px',
        modalType: 3,
        title: '2号好氧区',
        modalData: [
            { title: 'A区MLSS：', unit: 'mg/L', no: 'AB.PLC1.AIT134_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'B区MLSS：', unit: 'mg/L', no: 'AB.PLC1.AIT133_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'C区MLSS：', unit: 'mg/L', no: 'AB.PLC1.AIT131_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'D区MLSS：', unit: 'mg/L', no: 'AB.PLC1.AIT130_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)}
        ],
        allStatus: ['AB.PLC1.AIT134_OUT_AI', 'AB.PLC1.AIT133_OUT_AI', 'AB.PLC1.AIT131_OUT_AI', 'AB.PLC1.AIT130_OUT_AI', ]
    },
    {
        top: 0, right: '5px',
        modalType: 3,
        title: '2号厌氧/缺氧区',
        modalData: [
            { title: '厌氧ORP：', unit: 'mV', no: 'AB.PLC1.AIT124_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'A区ORP：', unit: 'mV', no: 'AB.PLC1.AIT123_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'B区ORP：', unit: 'mV', no: 'AB.PLC1.AIT121_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)},
            { title: 'C区ORP：', unit: 'mV', no: 'AB.PLC1.AIT120_OUT_AI', formatter: (v) => parseFloat(v).toFixed(1)}
        ],
        allStatus: ['AB.PLC1.AIT124_OUT_AI', 'AB.PLC1.AIT123_OUT_AI', 'AB.PLC1.AIT121_OUT_AI', 'AB.PLC1.AIT120_OUT_AI',]
    },
    {
        top: '65%', left: '5px',
        modalType: 1,
        no: 'AB.PLC1.AIT127_OUT_AI',
        modalData: { title: '1#NH3-N', unit: 'mg/L', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.AIT127_OUT_AI']
    },
    {
        top: '55%', left: '5px',
        modalType: 1,
        no: 'AB.PLC1.AIT135_OUT_AI',
        modalData: { title: '1#污泥井MLSS', unit: 'mg/L', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['AB.PLC1.AIT135_OUT_AI']
    },
    {
        top: '15%', left: '5px',
        modalType: 1,
        no: 'AB.PLC1.AIT132_OUT_AI',
        modalData: { title: '2#NH3-N', unit: 'mg/L', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['AB.PLC1.AIT132_OUT_AI']
    },
    {
        top: '30%', left: '5px',
        modalType: 1,
        no: 'AB.PLC1.AIT136_OUT_AI',
        modalData: { title: '2#污泥井MLSS', unit: 'mg/L', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['AB.PLC1.AIT136_OUT_AI']
    },
]
export default data;