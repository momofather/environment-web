const data = [
    {
        top: '0%', left: '17.1%', name: '生化池_一体式浮渣分离机', type:1,
        allStatus: ['AB.PLC1.SHC_FZFLJ_Fault', 'AB.PLC1.SHC_FZFLJ_Run'],
        status1: 'AB.PLC1.SHC_FZFLJ_Fault',//故障
        status2: 'AB.PLC1.SHC_FZFLJ_Run',//运行
        propertise: [
            { no: 'AB.PLC1.SHC_FZFLJ_Remote', dataType: 'Boolean', name: '就地/远程'},
            { no: 'AB.PLC1.SHC_FZFLJ_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC1.SHC_FZFLJ_Start_Fault', dataType: 'Boolean', name: '启动报警'},
            { no: 'AB.PLC1.SHC_FZFLJ_Stop_Fault', dataType: 'Boolean', name: '停止报警'},
            { no: 'AB.PLC1.SHC_FZFLJ_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC1.SHC_FZFLJ_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次'},
            { no: 'AB.PLC1.SHC_FZFLJ_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时'},
            { no: 'AB.PLC1.SHC_FZFLJ_RunTime', dataType: 'Float', name: '运行时间', unit: '小时'},
        ]
    },
    {
        top: '18.5%', left: '9.9%', name: '2#生化池后段除臭系统', type:4,
        allStatus: ['CCXT3.2AC28.B101_FAULT_HIS', 'CCXT3.2AC28.B102_FAULT_HIS', 'CCXT3.2AC28.B101_RUN_HIS', 'CCXT3.2AC28.B102_RUN_HIS'],
        status1: 'CCXT3.2AC28.B101_FAULT_HIS',//故障
        status2: 'CCXT3.2AC28.B102_FAULT_HIS',//故障
        status3: 'CCXT3.2AC28.B101_RUN_HIS',//运行
        status4: 'CCXT3.2AC28.B102_RUN_HIS',//运行
        propertise: []
    },
    {
        top: '65.6%', left: '6.7%', name: '1#生化池后段除臭系统', type: 4,
        allStatus: ['CCXT3.2AC27.B101_FAULT_HIS', 'CCXT3.2AC27.B102_FAULT_HIS', 'CCXT3.2AC27.B101_RUN_HIS', 'CCXT3.2AC27.B102_RUN_HIS'],
        status1: 'CCXT3.2AC27.B101_FAULT_HIS',//故障
        status2: 'CCXT3.2AC27.B102_FAULT_HIS',//故障
        status3: 'CCXT3.2AC27.B101_RUN_HIS',//运行
        status4: 'CCXT3.2AC27.B102_RUN_HIS',//运行
        propertise: []
    },
    {
        top: '65%', left: '80%', name: '1#生化池前段除臭系统', type: 4,
        allStatus: ['CCXT2.7AC03.B101_FAULT_HIS', 'CCXT2.7AC03.B102_FAULT_HIS', 'CCXT2.7AC03.B101_RUN_HIS', 'CCXT2.7AC03.B102_RUN_HIS'],
        status1: 'CCXT2.7AC03.B101_FAULT_HIS',//故障
        status2: 'CCXT2.7AC03.B102_FAULT_HIS',//故障
        status3: 'CCXT2.7AC03.B101_RUN_HIS',//运行
        status4: 'CCXT2.7AC03.B102_RUN_HIS',//运行
        propertise: []
    },
    {
        top: '21%', left: '78%', name: '2#生化池前段除臭系统', type: 4,
        allStatus: ['CCXT2.8AC03.B101_FAULT_HIS', 'CCXT2.8AC03.B102_FAULT_HIS', 'CCXT2.8AC03.B101_RUN_HIS', 'CCXT2.8AC03.B102_RUN_HIS'],
        status1: 'CCXT2.8AC03.B101_FAULT_HIS',//故障
        status2: 'CCXT2.8AC03.B102_FAULT_HIS',//故障
        status3: 'CCXT2.8AC03.B101_RUN_HIS',//运行
        status4: 'CCXT2.8AC03.B102_RUN_HIS',//运行
        propertise: []
    },
    {
        top: '85%', left: '85.9%', name: '1#调蓄池除臭系统', type: 4,
        allStatus: ['CCXT4.6AC26.B101_FAULT_HIS', 'CCXT4.6AC26.B102_FAULT_HIS', 'CCXT4.6AC26.B101_RUN_HIS', 'CCXT4.6AC26.B102_RUN_HIS'],
        status1: 'CCXT4.6AC26.B101_FAULT_HIS',//故障
        status2: 'CCXT4.6AC26.B102_FAULT_HIS',//故障
        status3: 'CCXT4.6AC26.B101_RUN_HIS',//运行
        status4: 'CCXT4.6AC26.B102_RUN_HIS',//运行
        propertise: []
    },
    {
        top: '85%', left: '61.4%', name: '2#调蓄池除臭系统', type: 4,
        allStatus: ['CCXT4.6AC27.B101_FAULT_HIS', 'CCXT4.6AC27.B102_FAULT_HIS', 'CCXT4.6AC27.B101_RUN_HIS', 'CCXT4.6AC27.B102_RUN_HIS'],
        status1: 'CCXT4.6AC27.B101_FAULT_HIS',//故障
        status2: 'CCXT4.6AC27.B102_FAULT_HIS',//故障
        status3: 'CCXT4.6AC27.B101_RUN_HIS',//运行
        status4: 'CCXT4.6AC27.B102_RUN_HIS',//运行
        propertise: []
    }
]
export default data;