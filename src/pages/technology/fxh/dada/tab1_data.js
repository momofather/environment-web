const data = [
    {
        top: '13%', left: '0%',
        no: 'FXHLC.FXH.PIT002A_OUT',
        modalType: 1,
        modalData: {
            title: '反洗气体压力', unit: 'Kpa',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.PIT002A_OUT']
    },
    {
        top: '55%', left: '0%',
        no: 'FXHLC.FXH.PIT001A_OUT',
        modalType: 1,
        modalData: {
            title: '压缩空气压力', unit: 'Mpa',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.PIT001A_OUT']
    },
    {
        top: '91%', left: '0%',
        no: 'HNCDC.T12.T12_WLIT602_OUT',
        modalType: 1,
        modalData: {
            title: '出水硝氮', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['HNCDC.T12.T12_WLIT602_OUT']
    },
    {
        top: '59%', left: '9%',
        no: 'FXHLC.FXH.LIT_1201_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_1201_OUT']
    },
    {
        top: '59%', left: '16%',
        no: 'FXHLC.FXH.LIT_1101_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_1101_OUT']
    },
    {
        top: '59%', left: '23%',
        no: 'FXHLC.FXH.LIT_1001_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_1001_OUT']
    },
    {
        top: '59%', left: '30%',
        no: 'FXHLC.FXH.LIT_901_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_901_OUT']
    },
    {
        top: '59%', left: '37%',
        no: 'FXHLC.FXH.LIT_801_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_801_OUT']
    },
    {
        top: '59%', left: '44%',
        no: 'FXHLC.FXH.LIT_701_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_701_OUT']
    },
    {
        top: '59%', left: '51%',
        no: 'FXHLC.FXH.LIT_601_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_601_OUT']
    },
    {
        top: '59%', left: '58%',
        no: 'FXHLC.FXH.LIT_501_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_501_OUT']
    },
    {
        top: '59%', left: '65%',
        no: 'FXHLC.FXH.LIT_401_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_401_OUT']
    },
    {
        top: '59%', left: '73%',
        no: 'FXHLC.FXH.LIT_301_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_301_OUT']
    },
    {
        top: '59%', left: '80%',
        no: 'FXHLC.FXH.LIT_201_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_201_OUT']
    },
    {
        top: '59%', left: '87%',
        no: 'FXHLC.FXH.LIT_101_OUT',
        modalType: 1,
        modalData: {
            title: '滤池液位', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.LIT_101_OUT']
    },
    {
        top: '91%', left: '0%',
        no: 'FXHLC.FXH.AIT002A_OUT',
        modalType: 1,
        modalData: {
            title: '出水硝氮', unit: 'mg/L',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.AIT002A_OUT']
    },
    {
        top: '0%', left: '90%',
        no: 'FXHLC.FXH.AIT001A_OUT',
        modalType: 1,
        modalData: {
            title: '进水硝氮', unit: 'mg/L',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.AIT001A_OUT']
    },
    {
        top: '9%', left: '90%',
        no: 'FXHLC.FXH.AIT003A_OUT',
        modalType: 1,
        modalData: {
            title: '进水溶解氧', unit: 'mg/L',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.AIT003A_OUT']
    },
    {
        top: '25%', left: '90%',
        no: 'FXHLC.FXH.FIT001A_OUT',
        modalType: 1,
        modalData: {
            title: '进水流量', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXHLC.FXH.FIT001A_OUT']
    },




    {
        top: '12%', left: '10%', name: '风机母管排气阀', type:2,
        allStatus: ['FXHLC.FXH.MV001A_Trip_Fault', 'FXHLC.FXH.MV001A_Closed', 'FXHLC.FXH.MV001A_Opened'],
        status1: 'FXHLC.FXH.MV001A_Trip_Fault',//故障
        status2: 'FXHLC.FXH.MV001A_Closed',//关到位
        status3: 'FXHLC.FXH.MV001A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.MV001A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.MV001A_Trip_Fault', dataType: 'Boolean', name: '电气故障'},
            { no: 'FXHLC.FXH.MV001A_OT_Fault', dataType: 'Boolean', name: '开关故障'},
            { no: 'FXHLC.FXH.MV001A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.MV001A_Closed', dataType: 'Boolean', name: '关到位'},
        ]
    },
    {
        top: '12%', left: '14.5%', name: '12#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV1201E_OT_Fault', 'FXHLC.FXH.AV1201E_Closed', 'FXHLC.FXH.AV1201E_Opened'],
        status1: 'FXHLC.FXH.AV1201E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1201E_Closed',//关到位
        status3: 'FXHLC.FXH.AV1201E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1201E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV1201E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV1201E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV1201E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV1201E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1201E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1201E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '21.5%', name: '11#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV1101E_OT_Fault', 'FXHLC.FXH.AV1101E_Closed', 'FXHLC.FXH.AV1101E_Opened'],
        status1: 'FXHLC.FXH.AV1101E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1101E_Closed',//关到位
        status3: 'FXHLC.FXH.AV1101E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1101E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV1101E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV1101E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV1101E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV1101E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1101E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1101E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '27.5%', name: '10#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV1001E_OT_Fault', 'FXHLC.FXH.AV1001E_Closed', 'FXHLC.FXH.AV1001E_Opened'],
        status1: 'FXHLC.FXH.AV1001E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1001E_Closed',//关到位
        status3: 'FXHLC.FXH.AV1001E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1001E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV1001E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV1001E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV1001E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV1001E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1001E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1001E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '33.5%', name: '9#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV901E_OT_Fault', 'FXHLC.FXH.AV901E_Closed', 'FXHLC.FXH.AV901E_Opened'],
        status1: 'FXHLC.FXH.AV901E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV901E_Closed',//关到位
        status3: 'FXHLC.FXH.AV901E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV901E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV901E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV901E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV901E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV901E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV901E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV901E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '40.7%', name: '8#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV801E_OT_Fault', 'FXHLC.FXH.AV801E_Closed', 'FXHLC.FXH.AV801E_Opened'],
        status1: 'FXHLC.FXH.AV801E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV801E_Closed',//关到位
        status3: 'FXHLC.FXH.AV801E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV801E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV801E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV801E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV801E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV801E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV801E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV801E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '46.5%', name: '7#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV701E_OT_Fault', 'FXHLC.FXH.AV701E_Closed', 'FXHLC.FXH.AV701E_Opened'],
        status1: 'FXHLC.FXH.AV701E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV701E_Closed',//关到位
        status3: 'FXHLC.FXH.AV701E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV701E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV701E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV701E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV701E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV701E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV701E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV701E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        
        ]
    },
    {
        top: '12%', left: '53.5%', name: '6#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV601E_OT_Fault', 'FXHLC.FXH.AV601E_Closed', 'FXHLC.FXH.AV601E_Opened'],
        status1: 'FXHLC.FXH.AV601E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV601E_Closed',//关到位
        status3: 'FXHLC.FXH.AV601E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV601E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV601E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV601E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV601E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV601E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV601E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV601E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '59.5%', name: '5#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV501E_OT_Fault', 'FXHLC.FXH.AV501E_Closed', 'FXHLC.FXH.AV501E_Opened'],
        status1: 'FXHLC.FXH.AV501E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV501E_Closed',//关到位
        status3: 'FXHLC.FXH.AV501E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV501E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV501E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV501E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV501E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV501E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV501E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV501E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '66.5%', name: '4#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV401E_OT_Fault', 'FXHLC.FXH.AV401E_Closed', 'FXHLC.FXH.AV401E_Opened'],
        status1: 'FXHLC.FXH.AV401E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV401E_Closed',//关到位
        status3: 'FXHLC.FXH.AV401E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV401E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV401E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV401E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV401E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV401E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV401E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV401E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '72.5%', name: '3#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV301E_OT_Fault', 'FXHLC.FXH.AV301E_Closed', 'FXHLC.FXH.AV301E_Opened'],
        status1: 'FXHLC.FXH.AV301E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV301E_Closed',//关到位
        status3: 'FXHLC.FXH.AV301E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV301E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV301E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV301E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV301E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV301E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV301E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV301E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '79.5%', name: '2#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV201E_OT_Fault', 'FXHLC.FXH.AV201E_Closed', 'FXHLC.FXH.AV201E_Opened'],
        status1: 'FXHLC.FXH.AV201E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV201E_Closed',//关到位
        status3: 'FXHLC.FXH.AV201E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV201E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV201E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV201E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV201E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV201E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV201E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV201E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '12%', left: '85.5%', name: '1#滤池反洗进气阀', type:2,
        allStatus: ['FXHLC.FXH.AV101E_OT_Fault', 'FXHLC.FXH.AV101E_Closed', 'FXHLC.FXH.AV101E_Opened'],
        status1: 'FXHLC.FXH.AV101E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV101E_Closed',//关到位
        status3: 'FXHLC.FXH.AV101E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV101E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV101E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV101E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV101E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV101E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV101E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV101E_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '15.5%', name: '12#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV1201A_OT_Fault', 'FXHLC.FXH.AV1201A_Closed', 'FXHLC.FXH.AV1201A_Opened'],
        status1: 'FXHLC.FXH.AV1201A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1201A_Closed',//关到位
        status3: 'FXHLC.FXH.AV1201A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1201A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV1201A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV1201A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV1201A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV1201A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1201A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1201A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '21.5%', name: '11#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV1101A_OT_Fault', 'FXHLC.FXH.AV1101A_Closed', 'FXHLC.FXH.AV1101A_Opened'],
        status1: 'FXHLC.FXH.AV1101A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1101A_Closed',//关到位
        status3: 'FXHLC.FXH.AV1101A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1101A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV1101A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV1101A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV1101A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV1101A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1101A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1101A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '27.5%', name: '10#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV1001A_OT_Fault', 'FXHLC.FXH.AV1001A_Closed', 'FXHLC.FXH.AV1001A_Opened'],
        status1: 'FXHLC.FXH.AV1001A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1001A_Closed',//关到位
        status3: 'FXHLC.FXH.AV1001A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1001A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV1001A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV1001A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV1001A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV1001A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1001A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1001A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '33.5%', name: '9#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV901A_OT_Fault', 'FXHLC.FXH.AV901A_Closed', 'FXHLC.FXH.AV901A_Opened'],
        status1: 'FXHLC.FXH.AV901A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV901A_Closed',//关到位
        status3: 'FXHLC.FXH.AV901A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV901A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV901A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV901A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV901A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV901A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV901A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV901A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '40.5%', name: '8#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV801A_OT_Fault', 'FXHLC.FXH.AV801A_Closed', 'FXHLC.FXH.AV801A_Opened'],
        status1: 'FXHLC.FXH.AV801A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV801A_Closed',//关到位
        status3: 'FXHLC.FXH.AV801A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV801A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV801A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV801A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV801A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV801A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV801A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV801A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '46.5%', name: '7#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV701A_OT_Fault', 'FXHLC.FXH.AV701A_Closed', 'FXHLC.FXH.AV701A_Opened'],
        status1: 'FXHLC.FXH.AV701A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV701A_Closed',//关到位
        status3: 'FXHLC.FXH.AV701A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV701A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV701A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV701A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV701A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV701A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV701A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV701A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '53.5%', name: '6#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV601A_OT_Fault', 'FXHLC.FXH.AV601A_Closed', 'FXHLC.FXH.AV601A_Opened'],
        status1: 'FXHLC.FXH.AV601A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV601A_Closed',//关到位
        status3: 'FXHLC.FXH.AV601A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV601A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV601A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV601A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV601A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV601A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV601A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV601A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '59.5%', name: '5#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV501A_OT_Fault', 'FXHLC.FXH.AV501A_Closed', 'FXHLC.FXH.AV501A_Opened'],
        status1: 'FXHLC.FXH.AV501A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV501A_Closed',//关到位
        status3: 'FXHLC.FXH.AV501A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV501A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV501A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV501A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV501A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV501A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV501A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV501A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '66.5%', name: '4#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV401A_OT_Fault', 'FXHLC.FXH.AV401A_Closed', 'FXHLC.FXH.AV401A_Opened'],
        status1: 'FXHLC.FXH.AV401A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV401A_Closed',//关到位
        status3: 'FXHLC.FXH.AV401A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV401A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV401A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV401A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV401A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV401A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV401A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV401A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '73.5%', name: '3#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV301A_OT_Fault', 'FXHLC.FXH.AV301A_Closed', 'FXHLC.FXH.AV301A_Opened'],
        status1: 'FXHLC.FXH.AV301A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV301A_Closed',//关到位
        status3: 'FXHLC.FXH.AV301A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV301A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV301A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV301A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV301A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV301A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV301A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV301A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '78.5%', name: '2#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV201A_OT_Fault', 'FXHLC.FXH.AV201A_Closed', 'FXHLC.FXH.AV201A_Opened'],
        status1: 'FXHLC.FXH.AV201A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV201A_Closed',//关到位
        status3: 'FXHLC.FXH.AV201A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV201A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV201A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV201A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV201A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV201A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV201A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV201A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '20%', left: '85.5%', name: '1#池进水阀', type:2,
        allStatus: ['FXHLC.FXH.AV101A_OT_Fault', 'FXHLC.FXH.AV101A_Closed', 'FXHLC.FXH.AV101A_Opened'],
        status1: 'FXHLC.FXH.AV101A_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV101A_Closed',//关到位
        status3: 'FXHLC.FXH.AV101A_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV101A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV101A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV101A_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV101A_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV101A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV101A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV101A_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },

    {
        top: '30%', left: '15.5%', name: '12#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV1201D_OT_Fault', 'FXHLC.FXH.AV1201D_Closed', 'FXHLC.FXH.AV1201D_Opened'],
        status1: 'FXHLC.FXH.AV1201D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1201D_Closed',//关到位
        status3: 'FXHLC.FXH.AV1201D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1201D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV1201D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV1201D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV1201D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV1201D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1201D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1201D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
            
        ]
    },
    {
        top: '30%', left: '21.5%', name: '11#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV1101D_OT_Fault', 'FXHLC.FXH.AV1101D_Closed', 'FXHLC.FXH.AV1101D_Opened'],
        status1: 'FXHLC.FXH.AV1101D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1101D_Closed',//关到位
        status3: 'FXHLC.FXH.AV1101D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1101D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV1101D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV1101D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV1101D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV1101D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1101D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1101D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '27.5%', name: '10#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV1001D_OT_Fault', 'FXHLC.FXH.AV1001D_Closed', 'FXHLC.FXH.AV1001D_Opened'],
        status1: 'FXHLC.FXH.AV1001D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1001D_Closed',//关到位
        status3: 'FXHLC.FXH.AV1001D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1001D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV1001D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV1001D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV1001D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV1001D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1001D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1001D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '34.5%', name: '9#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV901D_OT_Fault', 'FXHLC.FXH.AV901D_Closed', 'FXHLC.FXH.AV901D_Opened'],
        status1: 'FXHLC.FXH.AV901D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV901D_Closed',//关到位
        status3: 'FXHLC.FXH.AV901D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV901D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV901D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV901D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV901D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV901D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV901D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV901D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '40.5%', name: '8#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV801D_OT_Fault', 'FXHLC.FXH.AV801D_Closed', 'FXHLC.FXH.AV801D_Opened'],
        status1: 'FXHLC.FXH.AV801D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV801D_Closed',//关到位
        status3: 'FXHLC.FXH.AV801D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV801D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV801D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV801D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV801D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV801D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV801D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV801D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '46.5%', name: '7#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV701D_OT_Fault', 'FXHLC.FXH.AV701D_Closed', 'FXHLC.FXH.AV701D_Opened'],
        status1: 'FXHLC.FXH.AV701D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV701D_Closed',//关到位
        status3: 'FXHLC.FXH.AV701D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV701D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV701D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV701D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV701D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV701D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV701D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV701D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '53.5%', name: '6#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV601D_OT_Fault', 'FXHLC.FXH.AV601D_Closed', 'FXHLC.FXH.AV601D_Opened'],
        status1: 'FXHLC.FXH.AV601D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV601D_Closed',//关到位
        status3: 'FXHLC.FXH.AV601D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV601D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV601D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV601D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV601D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV601D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV601D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV601D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '59.5%', name: '5#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV501D_OT_Fault', 'FXHLC.FXH.AV501D_Closed', 'FXHLC.FXH.AV501D_Opened'],
        status1: 'FXHLC.FXH.AV501D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV501D_Closed',//关到位
        status3: 'FXHLC.FXH.AV501D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV501D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV501D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV501D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV501D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV501D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV501D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV501D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '66.5%', name: '4#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV401D_OT_Fault', 'FXHLC.FXH.AV401D_Closed', 'FXHLC.FXH.AV401D_Opened'],
        status1: 'FXHLC.FXH.AV401D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV401D_Closed',//关到位
        status3: 'FXHLC.FXH.AV401D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV401D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV401D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV401D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV401D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV401D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV401D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV401D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '72.5%', name: '3#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV301D_OT_Fault', 'FXHLC.FXH.AV301D_Closed', 'FXHLC.FXH.AV301D_Opened'],
        status1: 'FXHLC.FXH.AV301D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV301D_Closed',//关到位
        status3: 'FXHLC.FXH.AV301D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV301D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV301D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV301D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV301D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV301D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV301D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV301D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '78.5%', name: '2#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV201D_OT_Fault', 'FXHLC.FXH.AV201D_Closed', 'FXHLC.FXH.AV201D_Opened'],
        status1: 'FXHLC.FXH.AV201D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV201D_Closed',//关到位
        status3: 'FXHLC.FXH.AV201D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV201D_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV201D_OT_Fault', dataType: 'Boolean', name: '综合故障' },
            { no: 'FXHLC.FXH.AV201D_Opened', dataType: 'Boolean', name: '开到位' },
            { no: 'FXHLC.FXH.AV201D_Closed', dataType: 'Boolean', name: '关到位' },
            { no: 'FXHLC.FXH.AV201D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV201D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV201D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '30%', left: '85.5%', name: '1#池反洗排水阀', type:2,
        allStatus: ['FXHLC.FXH.AV101D_OT_Fault', 'FXHLC.FXH.AV101D_Closed', 'FXHLC.FXH.AV101D_Opened'],
        status1: 'FXHLC.FXH.AV101D_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV101D_Closed',//关到位
        status3: 'FXHLC.FXH.AV101D_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV101D_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV101D_OT_Fault', dataType: 'Boolean', name: '综合故障'},
            { no: 'FXHLC.FXH.AV101D_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV101D_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV101D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV101D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV101D_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' }
        ]
    },
    {
        top: '66%', left: '3.5%', name: '1#管廊积水泵', type:1,
        allStatus: ['FXHLC.FXH.P005A_Trip_Fault', 'FXHLC.FXH.AV1201E_Closed',],
        status1: 'FXHLC.FXH.P005A_Trip_Fault',//故障
        status2: 'FXHLC.FXH.P005A_Running',//运行
        propertise: [
            { no: 'FXHLC.FXH.P005A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH. P005A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH. P005A_Trip_Fault', dataType: 'Boolean', name: '电气故障'},
            { no: 'FXHLC.FXH. P005A_Running', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '75%', left: '11.5%', name: '12#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV1201C_Status'],
        status1: 'FXHLC.FXH.AV1201C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV1201C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV1201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV1201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV1201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '18.5%', name: '11#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV1101C_Status'],
        status1: 'FXHLC.FXH.AV1101C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV1101C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV1101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV1101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV1101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '25.5%', name: '10#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV1001C_Status'],
        status1: 'FXHLC.FXH.AV1001C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV1001C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV1001C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV1001C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV1001C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1001C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1001C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '32.5%', name: '9#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV901C_Status'],
        status1: 'FXHLC.FXH.AV901C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV901C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV901C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV901C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV901C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV901C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV901C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '39.5%', name: '8#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV801C_Status'],
        status1: 'FXHLC.FXH.AV801C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV801C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV801C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV801C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV801C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV801C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV801C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '46.5%', name: '7#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV701C_Status'],
        status1: 'FXHLC.FXH.AV701C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV701C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV701C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV701C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV701C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV701C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV701C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '53.5%', name: '6#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV601C_Status'],
        status1: 'FXHLC.FXH.AV601C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV601C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV601C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV601C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV601C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV601C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV601C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '60.5%', name: '5#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV501C_Status'],
        status1: 'FXHLC.FXH.AV501C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV501C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV501C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV501C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV501C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV501C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV501C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '67.5%', name: '4#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV401C_Status'],
        status1: 'FXHLC.FXH.AV401C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV401C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV401C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV401C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV401C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV401C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV401C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '74.5%', name: '3#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV301C_Status'],
        status1: 'FXHLC.FXH.AV301C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV301C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV301C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV301C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV301C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV301C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV301C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '81.5%', name: '2#池反洗进水阀', type: 9,
        allStatus: ['FXHLC.FXH.AV201C_Status'],
        status1: 'FXHLC.FXH.AV201C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV201C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV201C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '75%', left: '88.5%', name: '1#池反洗进水阀', type:9,
        allStatus: ['FXHLC.FXH.AV101C_Status'],
        status1: 'FXHLC.FXH.AV101C_Status',//故障
        propertise: [
            { no: 'FXHLC.FXH.AV101C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV101C_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
        ]
    },
    {
        top: '80%', left: '11.5%', name: '12#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV1201B_Status'],
        status1: 'FXHLC.FXH.AV1201B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV1201B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV1201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV1201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV1201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F12_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '18.5%', name: '11#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV1101B_Status'],
        status1: 'FXHLC.FXH.AV1101B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV1101B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV1101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV1101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV1101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F11_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '25.5%', name: '10#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV1001B_Status'],
        status1: 'FXHLC.FXH.AV1001B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV1001B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV1001B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV1001B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV1001B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV1001B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV1001B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F10_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '32.5%', name: '9#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV901B_Status'],
        status1: 'FXHLC.FXH.AV901B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV901B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV901B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV901B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV901B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV901B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV901B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F9_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '39.5%', name: '8#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV801B_Status'],
        status1: 'FXHLC.FXH.AV801B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV801B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV801B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV801B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV801B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV801B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV801B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F8_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '46.5%', name: '7#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV701B_Status'],
        status1: 'FXHLC.FXH.AV701B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV701B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV701B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV701B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV701B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV701B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV701B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F7_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '53.5%', name: '6#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV601B_Status'],
        status1: 'FXHLC.FXH.AV601B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV601B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV601B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV601B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV601B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV601B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV601B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F6_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '60.5%', name: '5#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV501B_Status'],
        status1: 'FXHLC.FXH.AV501B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV501B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV501B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV501B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV501B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV501B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV501B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F5_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '67.5%', name: '4#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV401B_Status'],
        status1: 'FXHLC.FXH.AV401B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV401B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV401B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV401B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV401B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV401B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV401B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F4_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '74.5%', name: '3#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV301B_Status'],
        status1: 'FXHLC.FXH.AV301B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV301B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV301B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV301B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV301B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV301B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV301B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F3_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '81.5%', name: '2#出水调节阀', type: 9,
        allStatus: ['FXHLC.FXH.AV201B_Status'],
        status1: 'FXHLC.FXH.AV201B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV201B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.AV201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位' },
            { no: 'FXHLC.FXH.AV201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位' },
            { no: 'FXHLC.FXH.AV201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障' },
            { no: 'FXHLC.FXH.AV201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障' },
            { no: 'FXHLC.FXH.AV201B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中' },
            { no: 'FXHLC.FXH.F2_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%' },
        ]
    },
    {
        top: '80%', left: '88.5%', name: '1#出水调节阀', type:9,
        allStatus: ['FXHLC.FXH.AV101B_Status'],
        status1: 'FXHLC.FXH.AV101B_Status',
        propertise: [
            { no: 'FXHLC.FXH.AV101B_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 1, name: '开到位'},
            { no: 'FXHLC.FXH.AV101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 0, name: '关到位'},
            { no: 'FXHLC.FXH.AV101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 2, name: '电气故障'},
            { no: 'FXHLC.FXH.AV101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 4, name: '开关故障'},
            { no: 'FXHLC.FXH.AV101B_Status', dataType: 'Word', formatter: (v) => parseInt(v) === 8, name: '开关阀进行中'},
            { no: 'FXHLC.FXH.F1_Outletvalve_OpeningDis', dataType: 'Float', name: '开度显示', unit: '%'},
        ]
    },
    {
        top: '81%', left: '95.5%', name: '62', type:2,
        allStatus: ['FXHLC.FXH.AV1201E_OT_Fault', 'FXHLC.FXH.AV1201E_Closed', 'FXHLC.FXH.AV1201E_Opened'],
        status1: 'FXHLC.FXH.AV1201E_OT_Fault',//故障
        status2: 'FXHLC.FXH.AV1201E_Closed',//关到位
        status3: 'FXHLC.FXH.AV1201E_Opened',//开到位
        propertise: [
            { no: 'FXHLC.FXH.AV1201E_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.AV1201E_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.AV1201E_Opened', dataType: 'Boolean', name: '开到位'},
            { no: 'FXHLC.FXH.AV1201E_Closed', dataType: 'Boolean', name: '关到位'},
            { no: 'FXHLC.FXH.AV1201E_Status', dataType: 'Word', name: '进气阀状态'},
        ]
    },
    {
        top: '23%', left: '7%', name: '1#反洗风机', type:1,
        allStatus: ['FXHLC.FXH.BL001A_Trip_Fault', 'FXHLC.FXH.BL001A_Running'],
        status1: 'FXHLC.FXH.BL001A_Trip_Fault',//故障
        status2: 'FXHLC.FXH.BL001A_Running',
        propertise: [
            { no: 'FXHLC.FXH.BL001A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.BL001A_Trip_Fault', dataType: 'Boolean', name: '电气故障'},
            { no: 'FXHLC.FXH.BL001A_OT_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'FXHLC.FXH.BL001A_Running', dataType: 'Boolean', name: '运行'},
            { no: 'FXHLC.FXH.BL001A_Total_Runtime_Hour', dataType: 'Float', name: '运行时间', unit: '小时' }
        ]
    },
    {
        top: '30%', left: '6%', name: '2#反洗风机', type:1,
        allStatus: ['FXHLC.FXH.BL001B_Trip_Fault', 'FXHLC.FXH.BL001B_Running'],
        status1: 'FXHLC.FXH.BL001B_Trip_Fault',//故障
        status2: 'FXHLC.FXH.BL001B_Running',
        propertise: [
            { no: 'FXHLC.FXH.BL001B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.BL001B_Trip_Fault', dataType: 'Boolean', name: '电气故障' },
            { no: 'FXHLC.FXH.BL001B_OT_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'FXHLC.FXH.BL001B_Running', dataType: 'Boolean', name: '运行' },
            { no: 'FXHLC.FXH.BL001B_Total_Runtime_Hour', dataType: 'Float', name: '运行时间', unit: '小时' }
        ]
    },
    {
        top: '37%', left: '5%', name: '3#反洗风机', type: 1,
        allStatus: ['FXHLC.FXH.BL001C_Trip_Fault', 'FXHLC.FXH.BL001C_Running'],
        status1: 'FXHLC.FXH.BL001C_Trip_Fault',//故障
        status2: 'FXHLC.FXH.BL001C_Running',
        propertise: [
            { no: 'FXHLC.FXH.BL001C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.BL001C_Trip_Fault', dataType: 'Boolean', name: '电气故障' },
            { no: 'FXHLC.FXH.BL001C_OT_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'FXHLC.FXH.BL001C_Running', dataType: 'Boolean', name: '运行' },
            { no: 'FXHLC.FXH.BL001C_Total_Runtime_Hour', dataType: 'Float', name: '运行时间', unit: '小时' }
        ]
    },
]
export default data;