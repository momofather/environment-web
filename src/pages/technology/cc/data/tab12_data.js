    const data = [
        {
        top: '50%', left: '6%',
        modalType: 4,
        title: '1#风机',
        modalData: [
            {  unit: 'Hz', no: 'CCXT1.7AC02.B101_F_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
            {  unit: 'A', no: 'CCXT1.7AC02.B101_I_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
        ],
        allStatus: ['CCXT1.7AC02.B101_F_HIS', 'CCXT1.7AC02.B101_I_HIS']
    },
    {
        top: '80%', left: '15%',
        modalType: 4,
        title: '2#风机',
        modalData: [
            {  unit: 'Hz', no: 'CCXT1.7AC02.B102_F_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
            {  unit: 'A', no: 'CCXT1.7AC02.B102_I_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
        ],
        allStatus: ['CCXT1.7AC02.B102_F_HIS', 'CCXT1.7AC02.B102_I_HIS']
    },
    {
        top: '62%', left: '31%',
        modalType: 4,
        title: '1#加热器',
        modalData: [
            {  unit: 'A', no: 'CCXT1.7AC02.H101_I_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
            {  unit: '℃', no: 'CCXT1.7AC02.PT101_VALUE_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
        ],
        allStatus: ['CCXT1.7AC02.H101_I_HIS', 'CCXT1.7AC02.PT101_VALUE_HIS']
    },
    {
        top: '55%', left: '30%',
        no: 'CCXT1.7AC02.P101_I_HIS',
        modalType: 1,
        modalData: {
            title: '1#水泵', unit: 'A',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['CCXT1.7AC02.P101_I_HIS']
    },
    {
        top: '58%', left: '21%',
        no: 'CCXT1.7AC02.P102_I_HIS',
        modalType: 1,
        modalData: {
            title: '2#水泵', unit: 'A',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['CCXT1.7AC02.P102_I_HIS']
    },
    {
        top: '83%', left: '26%',
        no: 'CCXT1.7AC02.PD101_VALUE_HIS',
        modalType: 1,
        modalData: {
            title: '1#水压压力', unit: 'Mpa',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['CCXT1.7AC02.PD101_VALUE_HIS']
    },
    {
        top: '74%', left: '0%',
        modalType: 3,
        title: '设备累计运行时间',
        modalData: [
            {  unit:'小时', title: '1#风机', no: 'CCXT1.7AC02.B101_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
            {  unit:'小时', title: '2#风机', no: 'CCXT1.7AC02.B102_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
            {  unit:'小时', title: '1#水泵', no: 'CCXT1.7AC02.P101_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
            {  unit:'小时', title: '2#水泵', no: 'CCXT1.7AC02.P102_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
            {  unit:'小时',title:  '加热器', no: 'CCXT1.7AC02.H101_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
        ],
        allStatus: ['CCXT1.7AC02.B101_RUNTIME_TTL_HIS', 'CCXT1.7AC02.B102_RUNTIME_TTL_HIS','CCXT1.7AC02.P101_RUNTIME_TTL_HIS','CCXT1.7AC02.P102_RUNTIME_TTL_HIS','CCXT1.7AC02.H101_RUNTIME_TTL_HIS']

    },
        {
            top: '50%', left: '11%', name: '1#风机', type:1,
            allStatus: ['CCXT1.7AC02.B101_FAULT_HIS', 'CCXT1.7AC02.B101_RUN_HIS'],
            status1: 'CCXT1.7AC02.B101_FAULT_HIS',//故障
            status2: 'CCXT1.7AC02.B101_RUN_HIS',//运行
            propertise: [
                { no: 'CCXT1.7AC02.B101_FAULT_HIS', dataType: 'Boolean', name: '故障'},
                { no: 'CCXT1.7AC02.B101_RUN_HIS', dataType: 'Boolean', name: '运行'},
            ]
        },
        {
            top: '76%', left: '16%', name: '2#风机', type:1,
            allStatus: ['CCXT1.7AC02.B102_FAULT_HIS', 'CCXT1.7AC02.B102_RUN_HIS'],
            status1: 'CCXT1.7AC02.B102_FAULT_HIS',//故障
            status2: 'CCXT1.7AC02.B102_RUN_HIS',//运行
            propertise: [
                { no: 'CCXT1.7AC02.B102_FAULT_HIS', dataType: 'Boolean', name: '故障'},
                { no: 'CCXT1.7AC02.B102_RUN_HIS', dataType: 'Boolean', name: '运行'},
            ]
        },
        {
            top: '59%', left: '26%', name: '2#水泵', type:1,
            allStatus: ['CCXT1.7AC02.P102_FAULT_HIS', 'CCXT1.7AC02.P102_RUN_HIS'],
            status1: 'CCXT1.7AC02.P102_FAULT_HIS',//故障
            status2: 'CCXT1.7AC02.P102_RUN_HIS',//运行
            propertise: [
                { no: 'CCXT1.7AC02.P102_FAULT_HIS', dataType: 'Boolean', name: '故障'},
                { no: 'CCXT1.7AC02.P102_RUN_HIS', dataType: 'Boolean', name: '运行'},
            ]
        },
        {
            top: '58%', left: '28%', name: '1#水泵', type:1,
            allStatus: ['CCXT1.7AC02.P101_FAULT_HIS', 'CCXT1.7AC02.P101_RUN_HIS'],
            status1: 'CCXT1.7AC02.P101_FAULT_HIS',//故障
            status2: 'CCXT1.7AC02.P101_RUN_HIS',//运行
            propertise: [
                { no: 'CCXT1.7AC02.P101_FAULT_HIS', dataType: 'Boolean', name: '故障'},
                { no: 'CCXT1.7AC02.P101_RUN_HIS', dataType: 'Boolean', name: '运行'},
            ]
        },
        {
            top: '62%', left: '29%', name: '1#加热器', type:1,
            allStatus: ['CCXT1.7AC02.H101_FAULT_HIS', 'CCXT1.7AC02.H101_RUN_HIS'],
            status1: 'CCXT1.7AC02.H101_FAULT_HIS',//故障
            status2: 'CCXT1.7AC02.H101_RUN_HIS',//运行
            propertise: [
                { no: 'CCXT1.7AC02.H101_FAULT_HIS', dataType: 'Boolean', name: '故障'},
                { no: 'CCXT1.7AC02.H101_RUN_HIS', dataType: 'Boolean', name: '运行'},
            ]
        },
        {
            top: '41%', left: '27.5%', name: '1#电磁阀', type:5,
            allStatus: [ 'CCXT1.7AC02.YV101_RUN_HIS'],
            status2: 'CCXT1.7AC02.YV101_RUN_HIS',//运行
            propertise: [
                { no: 'CCXT1.7AC02.YV101_RUN_HIS', dataType: 'Boolean', name: '运行'},
            ]
        },
        {
            top: '25%', left: '41%', name: '2#电磁阀', type:5,
            allStatus: ['CCXT1.7AC02.YV102_RUN_HIS'],
            status2: 'CCXT1.7AC02.YV102_RUN_HIS',//运行
            propertise: [
                { no: 'CCXT1.7AC02.YV102_RUN_HIS', dataType: 'Boolean', name: '运行'},
            ]
        },
        {
            top: '17%', left: '53%', name: '3#电磁阀', type:5,
            allStatus: ['CCXT1.7AC02.YV103_RUN_HIS'],
            status2: 'CCXT1.7AC02.YV103_RUN_HIS',//运行
            propertise: [
                { no: 'CCXT1.7AC02.YV103_RUN_HIS', dataType: 'Boolean', name: '运行'},
            ]
        },
    ]
    export default data;