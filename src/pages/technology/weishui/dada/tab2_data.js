const data = [
    {
        top: '44%', left: '28%',
        no: 'UV.UV1.UV1_Measure',
        modalType: 1,
        modalData: {
            title: 'UV1计量', unit: 'UWS/cm²',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['UV.UV1.UV1_Measure']
    },
    {
        top: '44%', left: '38%',
        no: 'UV.UV1.UV1_Strength',
        modalType: 1,
        modalData: {
            title: 'UV1光强', unit: '%',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['UV.UV1.UV1_Strength']
    },
    {
        top: '56%', left: '28%',
        no: 'UV.UV2.UV2_Measure',
        modalType: 1,
        modalData: {
            title: 'UV2计量', unit: 'UWS/cm²',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['UV.UV2.UV2_Measure']
    },
    {
        top: '56%', left: '38%',
        no: 'UV.UV2.UV2_Strength',
        modalType: 1,
        modalData: {
            title: 'UV2光强', unit: '%',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['UV.UV2.UV2_Strength']
    },
    {
        top: '3%', left: '69%',
        no: 'HY.ZS.CK_PT',
        modalType: 1,
        modalData: {
            title: '出口压力', unit: 'Kpa',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['HY.ZS.CK_PT']
    },
    {
        top: '22%', left: '79%',
        no: 'HY.ZS.RK_PT',
        modalType: 1,
        modalData: {
            title: '入口压力', unit: 'Kpa',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['HY.ZS.RK_PT']
    },
    {
        top: '36%', left: '83%',
        no: 'AB.PLC5.LIT524_OUT_AI',
        modalType: 1,
        modalData: {
            title: '中水池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['AB.PLC5.LIT524_OUT_AI']
    },
    {
        top: '41%', left: '12%', name: '1#插板', type:2,
        allStatus: ['AB.PLC5.AC911_Fault', 'AB.PLC5.AC911_Close_Place','AB.PLC5.AC911_Open_Place'],
        status1: 'AB.PLC5.AC911_Fault',//故障
        status2: 'AB.PLC5.AC911_Close_Place',//关到位
        status3:'AB.PLC5.AC911_Open_Place',
        propertise: [
            { no: 'AB.PLC5.AC911_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC5.AC911_Fault', dataType: 'Boolean', name: '故障'},     
            { no: 'AB.PLC5.AC911_Open_Place', dataType: 'Boolean', name: '开到位'},
            { no: 'AB.PLC5.AC911_Close_Place', dataType: 'Boolean', name: '关到位'},
            { no: 'AB.PLC5.AC911_Open_Fault', dataType: 'Boolean', name: '开阀故障'},
            { no: 'AB.PLC5.AC911_Close_Fault', dataType: 'Boolean', name: '关阀故障'},
            { no: 'AB.PLC5.AC911_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
        ]
    },
    {
        top: '62%', left: '10.5%', name: '2#插板', type:2,
        allStatus: ['AB.PLC5.AC912_Fault', 'AB.PLC5.AC912_Close_Place','AB.PLC5.AC912_Open_Place'],
        status1: 'AB.PLC5.AC912_Fault',//故障
        status2: 'AB.PLC5.AC912_Run',//运行
        status3:'AB.PLC5.AC911_Open_Place',
        propertise: [
            { no: 'AB.PLC5.AC912_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC5.AC912_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC5.AC912_Open_Place', dataType: 'Boolean', name: '开到位'},
            { no: 'AB.PLC5.AC912_Close_Place', dataType: 'Boolean', name: '关到位'},
            { no: 'AB.PLC5.AC912_Open_Fault', dataType: 'Boolean', name: '开阀故障'},
            { no: 'AB.PLC5.AC912_Close_Fault', dataType: 'Boolean', name: '关阀故障'},
            { no: 'AB.PLC5.AC912_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
        ]
    },
    {
        top: '9.3%', left: '81.4%', name: '泵1', type: 1, size: '16px',
        allStatus: ['HY.ZS.Pump1_Fault', 'HY.ZS.Pump1_Run'],
        status1: 'HY.ZS.Pump1_Fault',//故障
        status2: 'HY.ZS.Pump1_Run',//运行
        propertise: [
            { no: 'HY.ZS.Pump1_Ready', dataType: 'Boolean', name: '就绪'},
            { no: 'HY.ZS.Pump1_Run', dataType: 'Boolean', name: '运行'},
            { no: 'HY.ZS.Pump1_Fault', dataType: 'Boolean', name: '设备故障'},
            { no: 'HY.ZS.Pump1_FKFault', dataType: 'Boolean', name: '反馈故障'},
            { no: 'HY.ZS.Pump1_BPCMerr', dataType: 'Boolean', name: '通讯故障'},
            { no: 'HY.ZS.Pump1_DC', dataType: 'Float', name: '直流母电压',unit:'V'},
            { no: 'HY.ZS.Pump1_Voltage', dataType: 'Float', name: '输出电压',unit:'V'},
            { no: 'HY.ZS.Pump1_Hz', dataType: 'Float', name: '输出频率',unit:'HZ'},
            { no: 'HY.ZS.Pump1_Wh', dataType: 'DWord', name: '耗电量累计',unit:'KW.h'},
            { no: 'HY.ZS.Pump1_RunTimer', dataType: 'DWord', name: '运行次数',unit:'次'},
            { no: 'HY.ZS.Pump1_RunTime', dataType: 'DWord', name: '运行时间',unit:'min'},
        ]
    },
    {
        top: '9.3%', left: '82.7%', name: '泵2', type: 1, size: '16px',
        allStatus: ['HY.ZS.Pump2_Fault', 'HY.ZS.Pump2_Run'],
        status1: 'HY.ZS.Pump2_Fault',//故障
        status2: 'HY.ZS.Pump2_Run',//运行
        propertise: [
            { no: 'HY.ZS.Pump2_Ready', dataType: 'Boolean', name: '就绪'},
            { no: 'HY.ZS.Pump2_Run', dataType: 'Boolean', name: '运行'},
            { no: 'HY.ZS.Pump2_Fault', dataType: 'Boolean', name: '设备故障'},
            { no: 'HY.ZS.Pump2_FKFault', dataType: 'Boolean', name: '反馈故障'},
            { no: 'HY.ZS.Pump2_BPCMerr', dataType: 'Boolean', name: '通讯故障'},
            { no: 'HY.ZS.Pump2_DC', dataType: 'Float', name: '直流母电压',unit:'V'},
            { no: 'HY.ZS.Pump2_Voltage', dataType: 'Float', name: '输出电压',unit:'V'},
            { no: 'HY.ZS.Pump2_Hz', dataType: 'Float', name: '输出频率',unit:'HZ'},
            { no: 'HY.ZS.Pump2_Wh', dataType: 'DWord', name: '耗电量累计',unit:'KW.h'},
            { no: 'HY.ZS.Pump2_RunTimer', dataType: 'DWord', name: '运行次数',unit:'次'},
            { no: 'HY.ZS.Pump2_RunTime', dataType: 'DWord', name: '运行时间',unit:'min'},
        ]
    },
    {
        top: '9.3%', left: '84%', name: '泵3', type: 1, size: '16px',
        allStatus: ['HY.ZS.Pump3_Fault', 'HY.ZS.Pump3_Run'],
        status1: 'HY.ZS.Pump3_Fault',//故障
        status2: 'HY.ZS.Pump3_Run',//运行
        propertise: [
            { no: 'HY.ZS.Pump3_Ready', dataType: 'Boolean', name: '就绪'},
            { no: 'HY.ZS.Pump3_Run', dataType: 'Boolean', name: '运行'},
            { no: 'HY.ZS.Pump3_Fault', dataType: 'Boolean', name: '设备故障'},
            { no: 'HY.ZS.Pump3_FKFault', dataType: 'Boolean', name: '反馈故障'},
            { no: 'HY.ZS.Pump3_BPCMerr', dataType: 'Boolean', name: '通讯故障'},
            { no: 'HY.ZS.Pump3_DC', dataType: 'Float', name: '直流母电压',unit:'V'},
            { no: 'HY.ZS.Pump3_Voltage', dataType: 'Float', name: '输出电压',unit:'V'},
            { no: 'HY.ZS.Pump3_Hz', dataType: 'Float', name: '输出频率',unit:'HZ'},
            { no: 'HY.ZS.Pump3_Wh', dataType: 'DWord', name: '耗电量累计',unit:'KW.h'},
            { no: 'HY.ZS.Pump3_RunTimer', dataType: 'DWord', name: '运行次数',unit:'次'},
            { no: 'HY.ZS.Pump3_RunTime', dataType: 'DWord', name: '运行时间',unit:'min'},
        ]
    },
    {
        top: '9%', left: '88.5%', name: '尾水_厂内中水池1#变频泵', type:1,
        allStatus: ['AB.PLC5.AC10021_Fault', 'AB.PLC5.AC10021_Run'],
        status1: 'AB.PLC5.AC10021_Fault',//故障
        status2: 'AB.PLC5.AC10021_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC10021_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC5.AC10021_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC5.AC10021_Start_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'AB.PLC5.AC10021_Stop_Fault', dataType: 'Boolean', name: '停止故障'},
            { no: 'AB.PLC5.AC10021_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC5.AC10021_Frequency_PV', dataType: 'Float', name: '频率反馈'},
            { no: 'AB.PLC5.AC10021_Fault_Timers', dataType: 'Long', name: '故障次数'},
            { no: 'AB.PLC5.AC10021_RunTime', dataType: 'Float', name: '运行时间'},
            { no: 'AB.PLC5.AC10021_Maintain_Time', dataType: 'Float', name: '检修时间'},
        ]
    },
    {
        top: '9%', left: '91.5%', name: '尾水_厂内中水池2#变频泵', type:1,
        allStatus: ['AB.PLC5.AC10022_Fault', 'AB.PLC5.AC10022_Run'],
        status1: 'AB.PLC5.AC10022_Fault',//故障
        status2: 'AB.PLC5.AC10022_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC10022_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC5.AC10022_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC5.AC10022_Start_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'AB.PLC5.AC10022_Stop_Fault', dataType: 'Boolean', name: '停止故障'},
            { no: 'AB.PLC5.AC10022_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC5.AC10022_Frequency_PV', dataType: 'Float', name: '频率反馈'},
            { no: 'AB.PLC5.AC10022_Fault_Timers', dataType: 'Long', name: '故障次数'},
            { no: 'AB.PLC5.AC10022_RunTime', dataType: 'Float', name: '运行时间'},
            { no: 'AB.PLC5.AC10022_Maintain_Time', dataType: 'Float', name: '检修时间'},
        ]
    },
]
export default data;