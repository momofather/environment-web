const data = [
    {
        top: '72%', left: '2%',
        no: 'AB.PLC5.FIT523_OUT_AI',
        modalType: 1,
        modalData: {
            title: '中水流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['AB.PLC5.FIT523_OUT_AI']
    },
    {
        top: '82%', left: '0%',
        no: 'AB.PLC5.FIT523_LLLJ',
        modalType: 1,
        modalData: {
            title: '厂外中水累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['AB.PLC5.FIT523_LLLJ']
    },
    {
        top: '73%', left: '13%',
        no: 'AB.PLC5.FIT531_OUT_AI',
        modalType: 1,
        modalData: {
            title: '驿马河流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['AB.PLC5.FIT531_OUT_AI']
    },
    {
        top: '87%', left: '11%',
        no: 'AB.PLC5.FIT531_LLLJ',
        modalType: 1,
        modalData: {
            title: '驿马河补水累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['AB.PLC5.FIT531_LLLJ']
    },
    {
        top: '24%', left: '29%',
        no: 'AB.PLC5.LIT517_OUT_AI',
        modalType: 1,
        modalData: {
            title: '中水池液位', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['AB.PLC5.LIT517_OUT_AI']
    },
    {
        top: '68%', left: '28%',
        no: 'AB.PLC5.LIT518_OUT_AI',
        modalType: 1,
        modalData: {
            title: '补水池液位', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['AB.PLC5.LIT518_OUT_AI']
    },
    {
        top: '6%', left: '48%',
        no: 'AB.PLC5.GIT525_OUT_AI',
        modalType: 1,
        modalData: {
            title: '氯气检测仪', unit: 'ppm', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['AB.PLC5.GIT525_OUT_AI']
    },
    {
        top: '47%', left: '49%',
        no: 'AB.PLC5.FT516_OUT_AI',
        modalType: 1,
        modalData: {
            title: '明渠流量', unit: 'L/s', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['AB.PLC5.FT516_OUT_AI']
    },
    {
        top: '65%', left: '48%',
        no: 'AB.PLC5.CSLJ_LL',
        modalType: 1,
        modalData: {
            title: '出水累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),
        },
        allStatus: ['AB.PLC5.CSLJ_LL']
    },
    {
        top: '0%', left: '83%',
        modalType: 3,
        title: '尾水提升泵井液位',
        modalData: [
            { title: '1#液位：', unit: 'm', no: 'AB.PLC5.LIT519_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2) },
            { title: '2#液位：', unit: 'm', no: 'AB.PLC5.LIT520_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2) },
            { title: '3#液位：', unit: 'm', no: 'AB.PLC5.LIT521_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2) },
            { title: '4#液位：', unit: 'm', no: 'AB.PLC5.LIT522_OUT_AI', formatter: (v) => parseFloat(v).toFixed(2) },
        ],
        allStatus: ['AB.PLC5.LIT519_OUT_AI', 'AB.PLC5.LIT520_OUT_AI', 'AB.PLC5.LIT521_OUT_AI', 'AB.PLC5.LIT522_OUT_AI',]
    },
    {
        top: '23%', left: '6.2%', name: '尾水泵房_集水坑排污泵', type: 1,
        allStatus: ['AB.PLC5.AC1004_Fault', 'AB.PLC5.AC1004_Run'],
        status1: 'AB.PLC5.AC1004_Fault',//故障
        status2: 'AB.PLC5.AC1004_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC1004_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC1004_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC1004_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC1004_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC1004_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC1004_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC1004_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC1004_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC1004_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
        ]
    },
    {
        top: '33%', left: '20.5%', name: '厂外中水泵出水管线_1#电动蝶阀', type: 2,
        allStatus: ['AB.PLC5.WSXT_CWZSBCKF1_Fault', 'AB.PLC5.WSXT_CWZSBCKF1_Close_Place', 'AB.PLC5.WSXT_CWZSBCKF1_Open_Place'],
        status1: 'AB.PLC5.WSXT_CWZSBCKF1_Fault',//故障
        status2: 'AB.PLC5.WSXT_CWZSBCKF1_Close_Place',//关到位
        status3: 'AB.PLC5.WSXT_CWZSBCKF1_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSXT_CWZSBCKF1_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF1_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF1_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF1_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF1__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF1_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF1_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次', },

        ]
    },
    {
        top: '32%', left: '23%', name: '尾水泵房_1#单极双吸离心泵132KW', type: 1,
        allStatus: ['AB.PLC5.AC918_Fault', 'AB.PLC5.AC918_Run'],
        status1: 'AB.PLC5.AC918_Fault',//故障
        status2: 'AB.PLC5.AC918_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC918_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC918_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC918_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC918_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC918_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC918_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC918_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC918_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
            { no: 'AB.PLC5.AC918_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },
    {
        top: '40%', left: '24%', name: '厂外中水泵出水管线_2#电动蝶阀', type: 2,
        allStatus: ['AB.PLC5.WSXT_CWZSBCKF2_Fault', 'AB.PLC5.WSXT_CWZSBCKF2_Close_Place', 'AB.PLC5.WSXT_CWZSBCKF2_Open_Place'],
        status1: 'AB.PLC5.WSXT_CWZSBCKF2_Fault',//故障
        status2: 'AB.PLC5.WSXT_CWZSBCKF2_Close_Place',//关到位
        status3: 'AB.PLC5.WSXT_CWZSBCKF2_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSXT_CWZSBCKF2_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF2_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF2_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF2_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF2__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF2_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF2_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
    {
        top: '39%', left: '26%', name: '尾水泵房_2#单极双吸离心泵132KW', type: 1,
        allStatus: ['AB.PLC5.AC919_Fault', 'AB.PLC5.AC919_Run'],
        status1: 'AB.PLC5.AC919_Fault',//故障
        status2: 'AB.PLC5.AC919_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC919_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC919_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC919_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC919_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC919_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC919_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC919_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC919_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
            { no: 'AB.PLC5.AC919_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
        ]
    },
    {
        top: '46%', left: '20%', name: '厂外中水泵出水管线_3#电动蝶阀', type: 2,
        allStatus: ['AB.PLC5.WSXT_CWZSBCKF3_Fault', 'AB.PLC5.WSXT_CWZSBCKF3_Close_Place', 'AB.PLC5.WSXT_CWZSBCKF3_Open_Place'],
        status1: 'AB.PLC5.WSXT_CWZSBCKF3_Fault',//故障
        status2: 'AB.PLC5.WSXT_CWZSBCKF3_Close_Place',//关到位
        status3: 'AB.PLC5.WSXT_CWZSBCKF3_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSXT_CWZSBCKF3_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF3_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF3_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF3_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF3__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF3_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSXT_CWZSBCKF3_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },

        ]
    },
    {
        top: '45%', left: '22.4%', name: '尾水泵房_3#单极双吸离心泵132KW ', type: 1,
        allStatus: ['AB.PLC5.AC1010_Fault', 'AB.PLC5.AC1010_Run'],
        status1: 'AB.PLC5.AC1010_Fault',//故障
        status2: 'AB.PLC5.AC1010_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC1010_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC1010_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC1010_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC1010_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC1010_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC1010_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC1010_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC1010_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC1010_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
        ]
    },
    {
        top: '54%', left: '22.5%', name: '补水泵出水管_1#电动蝶阀', type: 2,
        allStatus: ['AB.PLC5.WSXT_BSBCKF1_Fault', 'AB.PLC5.WSXT_BSBCKF1_Close_Place', 'AB.PLC5.WSXT_BSBCKF1_Open_Place'],
        status1: 'AB.PLC5.WSXT_BSBCKF1_Fault',//故障
        status2: 'AB.PLC5.WSXT_BSBCKF1_Close_Place',//关到位
        status3: 'AB.PLC5.WSXT_BSBCKF1_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSXT_BSBCKF1_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSXT_BSBCKF1_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSXT_BSBCKF1_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSXT_BSBCKF1_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSXT_BSBCKF1__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSXT_BSBCKF1_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSXT_BSBCKF1_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
    {
        top: '54%', left: '25.5%', name: '尾水泵房_1#单极双吸离心泵220KW', type: 1,
        allStatus: ['AB.PLC5.AC917_Fault', 'AB.PLC5.AC917_Run'],
        status1: 'AB.PLC5.AC917_Fault',//故障
        status2: 'AB.PLC5.AC917_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC917_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC917_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC917_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC917_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC917_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC917_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC917_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC917_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC917_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
        ]
    },
    {
        top: '61%', left: '19%', name: '补水泵出水管_2#电动蝶阀', type: 2,
        allStatus: ['AB.PLC5.WSXT_BSBCKF2_Fault', 'AB.PLC5.WSXT_BSBCKF2_Close_Place', 'AB.PLC5.WSXT_BSBCKF2_Open_Place'],
        status1: 'AB.PLC5.WSXT_BSBCKF2_Fault',//故障
        status2: 'AB.PLC5.WSXT_BSBCKF2_Close_Place',//关到位
        status3: 'AB.PLC5.WSXT_BSBCKF2_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSXT_BSBCKF2_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSXT_BSBCKF2_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSXT_BSBCKF2_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSXT_BSBCKF2_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSXT_BSBCKF2__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSXT_BSBCKF2_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSXT_BSBCKF2_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
    {
        top: '61%', left: '21%', name: '尾水泵房_2#单极双吸离心泵', type: 1,
        allStatus: ['AB.PLC5.AC1008_Fault', 'AB.PLC5.AC1008_Run'],
        status1: 'AB.PLC5.AC1008_Fault',//故障
        status2: 'AB.PLC5.AC1008_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC1008_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC1008_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC1008_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC1008_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC1008_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC1008_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC1008_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC1008_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC1008_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
        ]
    },
    {
        top: '82%', left: '24.5%', name: '补水泵出水管_3#电动蝶阀', type: 2,
        allStatus: ['AB.PLC5.WSXT_BSBCKF3_Fault', 'AB.PLC5.WSXT_BSBCKF3_Close_Place', 'AB.PLC5.WSXT_BSBCKF3_Open_Place'],
        status1: 'AB.PLC5.WSXT_BSBCKF3_Fault',//故障
        status2: 'AB.PLC5.WSXT_BSBCKF3_Close_Place',//关到位
        status3: 'AB.PLC5.WSXT_BSBCKF3_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSXT_BSBCKF3_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSXT_BSBCKF3_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSXT_BSBCKF3_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSXT_BSBCKF3_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSXT_BSBCKF3__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSXT_BSBCKF3_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSXT_BSBCKF3_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
    {
        top: '84%', left: '26.5%', name: '尾水泵房_3#单极双吸离心泵', type: 1,
        allStatus: ['AB.PLC5.AC1009_Fault', 'AB.PLC5.AC1009_Run'],
        status1: 'AB.PLC5.AC1009_Fault',//故障
        status2: 'AB.PLC5.AC1009_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC1009_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC1009_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC1009_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC1009_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC1009_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC1009_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC1009_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC1009_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC1009_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
        ]
    },
    {
        top: '2%', left: '75%', name: '尾水泵房_1#轴流泵', type: 1,
        allStatus: ['AB.PLC5.AC920_Fault', 'AB.PLC5.AC920_Run'],
        status1: 'AB.PLC5.AC920_Fault',//故障
        status2: 'AB.PLC5.AC920_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC920_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC920_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC920_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC920_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC920_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC920_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC920_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC920_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC920_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
        ]
    },
    {
        top: '9%', left: '75.5%', name: '尾水泵房_2#轴流泵', type: 1,
        allStatus: ['AB.PLC5.AC921_Fault', 'AB.PLC5.AC921_Run'],
        status1: 'AB.PLC5.AC921_Fault',//故障
        status2: 'AB.PLC5.AC921_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC921_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC921_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC921_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC921_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC921_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC921_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC921_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC921_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC921_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
        ]
    },
    {
        top: '35%', left: '75%', name: '厂外中水池入口插板闸门', type: 2,
        allStatus: ['AB.PLC5.CWZSCRK_CBZM_Fault', 'AB.PLC5.CWZSCRK_CBZM_Close_Place', 'AB.PLC5.CWZSCRK_CBZM_Open_Place'],
        status1: 'AB.PLC5.CWZSCRK_CBZM_Fault',//故障
        status2: 'AB.PLC5.CWZSCRK_CBZM_Close_Place',//关到位
        status3: 'AB.PLC5.CWZSCRK_CBZM_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.CWZSCRK_CBZM_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.CWZSCRK_CBZM_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.CWZSCRK_CBZM_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.CWZSCRK_CBZM_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.CWZSCRK_CBZM__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.CWZSCRK_CBZM_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.CWZSCRK_CBZM_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
    {
        top: '46%', left: '77%', name: '尾水轴流泵井入口1#插板闸门', type: 2,
        allStatus: ['AB.PLC5.WSBJRK_CBZM1_Fault', 'AB.PLC5.WSBJRK_CBZM1_Close_Place', 'AB.PLC5.WSBJRK_CBZM1_Open_Place'],
        status1: 'AB.PLC5.WSBJRK_CBZM1_Fault',//故障
        status2: 'AB.PLC5.WSBJRK_CBZM1_Close_Place',//关到位
        status3: 'AB.PLC5.WSBJRK_CBZM1_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSBJRK_CBZM1_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSBJRK_CBZM1_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSBJRK_CBZM1_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSBJRK_CBZM1_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSBJRK_CBZM1__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSBJRK_CBZM1_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSBJRK_CBZM1_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
    {
        top: '51%', left: '77%', name: '尾水轴流泵井入口2#插板闸门', type: 2,
        allStatus: ['AB.PLC5.WSBJRK_CBZM2_Fault', 'AB.PLC5.WSBJRK_CBZM2_Close_Place', 'AB.PLC5.WSBJRK_CBZM2_Open_Place'],
        status1: 'AB.PLC5.WSBJRK_CBZM2_Fault',//故障
        status2: 'AB.PLC5.WSBJRK_CBZM2_Close_Place',//关到位
        status3: 'AB.PLC5.WSBJRK_CBZM2_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSBJRK_CBZM2_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSBJRK_CBZM2_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSBJRK_CBZM2_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSBJRK_CBZM2_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSBJRK_CBZM2__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSBJRK_CBZM2_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSBJRK_CBZM2_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
    {
        top: '59%', left: '76%', name: '驿马河补水池入口插板闸门', type: 2,
        allStatus: ['AB.PLC5.YMHBSCRK_CBZM_Fault', 'AB.PLC5.YMHBSCRK_CBZM_Close_Place', 'AB.PLC5.YMHBSCRK_CBZM_Open_Place'],
        status1: 'AB.PLC5.YMHBSCRK_CBZM_Fault',//故障
        status2: 'AB.PLC5.YMHBSCRK_CBZM_Close_Place',//关到位
        status3: 'AB.PLC5.YMHBSCRK_CBZM_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.YMHBSCRK_CBZM_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.YMHBSCRK_CBZM_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.YMHBSCRK_CBZM_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.YMHBSCRK_CBZM_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.YMHBSCRK_CBZM__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.YMHBSCRK_CBZM_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.YMHBSCRK_CBZM_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
    {
        top: '85%', left: '80%', name: '尾水泵房_3#轴流泵', type: 1,
        allStatus: ['AB.PLC5.AC1005_Fault', 'AB.PLC5.AC1005_Run'],
        status1: 'AB.PLC5.AC1005_Fault',//故障
        status2: 'AB.PLC5.AC1005_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC1005_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC1005_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC1005_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC1005_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC1005_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC1005_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC1005_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC1005_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC1005_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
        ]
    },
    {
        top: '92%', left: '81%', name: '尾水泵房_4#轴流泵', type: 1,
        allStatus: ['AB.PLC5.AC1006_Fault', 'AB.PLC5.AC1006_Run'],
        status1: 'AB.PLC5.AC1006_Fault',//故障
        status2: 'AB.PLC5.AC1006_Run',//运行
        propertise: [
            { no: 'AB.PLC5.AC1006_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.AC1006_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.AC1006_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC5.AC1006_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC5.AC1006_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC5.AC1006_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'AB.PLC5.AC1006_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
            { no: 'AB.PLC5.AC1006_Maintain_Time', dataType: 'Float', name: '检修时间', unit: '小时' },
            { no: 'AB.PLC5.AC1006_RunTime', dataType: 'Float', name: '运行时间', unit: '小时' },
        ]
    },
    {
        top: '49%', left: '89%', name: '尾水排放总管_1#电动蝶阀', type: 2,
        allStatus: ['AB.PLC5.WSXT_PFZGF1_Fault', 'AB.PLC5.WSXT_PFZGF1_Close_Place', 'AB.PLC5.WSXT_PFZGF1_Open_Place'],
        status1: 'AB.PLC5.WSXT_PFZGF1_Fault',//故障
        status2: 'AB.PLC5.WSXT_PFZGF1_Close_Place',//关到位
        status3: 'AB.PLC5.WSXT_PFZGF1_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSXT_PFZGF1_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSXT_PFZGF1_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSXT_PFZGF1_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSXT_PFZGF1_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSXT_PFZGF1__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSXT_PFZGF1_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSXT_PFZGF1_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
    {
        top: '49%', left: '92%', name: '尾水排放总管_2#电动蝶阀', type: 2,
        allStatus: ['AB.PLC5.WSXT_PFZGF2_Fault', 'AB.PLC5.WSXT_PFZGF2_Close_Place', 'AB.PLC5.WSXT_PFZGF2_Open_Place'],
        status1: 'AB.PLC5.WSXT_PFZGF2_Fault',//故障
        status2: 'AB.PLC5.WSXT_PFZGF2_Close_Place',//关到位
        status3: 'AB.PLC5.WSXT_PFZGF2_Open_Place',//开到位
        propertise: [
            { no: 'AB.PLC5.WSXT_PFZGF2_Remote', dataType: 'Boolean', name: '远程' },
            { no: 'AB.PLC5.WSXT_PFZGF2_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC5.WSXT_PFZGF2_Open_Place', dataType: 'Boolean', name: '开到位' },
            { no: 'AB.PLC5.WSXT_PFZGF2_Close_Place', dataType: 'Boolean', name: '关到位' },
            { no: 'AB.PLC5.WSXT_PFZGF2__Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC5.WSXT_PFZGF2_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC5.WSXT_PFZGF2_Fault_Timers', dataType: 'Long', name: '故障次数', unit: '次' },
        ]
    },
]
export default data;