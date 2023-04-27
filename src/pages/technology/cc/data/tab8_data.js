const data = [
    {
        top: '36%', left: '22%',
        modalType: 4,
        title: '1#风机',
        modalData: [
            {  unit: 'Hz', no: 'CCXT2.6AC24.B101_F_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
            {  unit: 'A', no: 'CCXT2.6AC24.B101_I_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
        ],
        allStatus: ['CCXT2.6AC24.B101_F_HIS', 'CCXT2.6AC24.B101_I_HIS']
    },
    {
        top: '67%', left: '18%',
        modalType: 4,
        title: '2#风机',
        modalData: [
            {  unit: 'Hz', no: 'CCXT2.6AC24.B102_F_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
            {  unit: 'A', no: 'CCXT2.6AC24.B102_I_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
        ],
        allStatus: ['CCXT2.6AC24.B102_F_HIS', 'CCXT2.6AC24.B102_I_HIS']
    },
    {
        top: '77%', left: '31%',
        modalType: 4,
        title: '1#加热器',
        modalData: [
            {  unit: 'A', no: 'CCXT2.6AC24.H101_I_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
            {  unit: '℃', no: 'CCXT2.6AC24.PT101_VALUE_HIS', formatter: (v) => parseFloat(v).toFixed(1) },
        ],
        allStatus: ['CCXT2.6AC24.H101_I_HIS', 'CCXT2.6AC24.PT101_VALUE_HIS']
    },
    {
        top: '62%', left: '46%',
        no: 'CCXT2.6AC24.P101_I_HIS',
        modalType: 1,
        modalData: {
            title: '1#水泵', unit: 'A',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['CCXT2.6AC24.P101_I_HIS']
    },
    {
        top: '78%', left: '46%',
        no: 'CCXT2.6AC24.P102_I_HIS',
        modalType: 1,
        modalData: {
            title: '2#水泵', unit: 'A',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['CCXT2.6AC24.P102_I_HIS']
    },
    {
        top: '72%', left: '53%',
        no: 'CCXT2.6AC24.PD101_VALUE_HIS',
        modalType: 1,
        modalData: {
            title: '1#水压压力', unit: 'Mpa',formatter: (v)=>parseFloat(v).toFixed(2),
        },
        allStatus: ['CCXT2.6AC24.PD101_VALUE_HIS']
    },
    {
        top: '74%', left: '0%',
        modalType: 3,
        title: '设备累计运行时间',
        modalData: [
            {  unit:'小时', title: '1#风机', no: 'CCXT2.6AC24.B101_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
            {  unit:'小时', title: '2#风机', no: 'CCXT2.6AC24.B102_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
            {  unit:'小时', title: '1#水泵', no: 'CCXT2.6AC24.P101_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
            {  unit:'小时', title: '2#水泵', no: 'CCXT2.6AC24.P102_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
            {  unit:'小时',title:  '加热器', no: 'CCXT2.6AC24.H101_RUNTIME_TTL_HIS', formatter: (v) => parseFloat(v).toFixed(2) },
        ],
        allStatus: ['CCXT2.6AC24.B101_RUNTIME_TTL_HIS', 'CCXT2.6AC24.B102_RUNTIME_TTL_HIS','CCXT2.6AC24.P101_RUNTIME_TTL_HIS','CCXT2.6AC24.P102_RUNTIME_TTL_HIS','CCXT2.6AC24.H101_RUNTIME_TTL_HIS']
    },
    {
        top: '31%', left: '25%', name: '1#风机', type:1,
        allStatus: ['CCXT2.6AC24.B101_FAULT_HIS', 'CCXT2.6AC24.B101_RUN_HIS'],
        status1: 'CCXT2.6AC24.B101_FAULT_HIS',//故障
        status2: 'CCXT2.6AC24.B101_RUN_HIS',//运行
        propertise: [
            { no: 'CCXT2.6AC24.B101_FAULT_HIS', dataType: 'Boolean', name: '故障'},
            { no: 'CCXT2.6AC24.B101_RUN_HIS', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '61%', left: '21%', name: '2#风机', type:1,
        allStatus: ['CCXT2.6AC24.B102_FAULT_HIS', 'CCXT2.6AC24.B102_RUN_HIS'],
        status1: 'CCXT2.6AC24.B102_FAULT_HIS',//故障
        status2: 'CCXT2.6AC24.B102_RUN_HIS',//运行
        propertise: [
            { no: 'CCXT2.6AC24.B102_FAULT_HIS', dataType: 'Boolean', name: '故障'},
            { no: 'CCXT2.6AC24.B102_RUN_HIS', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '79%', left: '38%', name: '1#加热器', type:1,
        allStatus: ['CCXT2.6AC24.H101_FAULT_HIS', 'CCXT2.6AC24.H101_RUN_HIS'],
        status1: 'CCXT2.6AC24.H101_FAULT_HIS',//故障
        status2: 'CCXT2.6AC24.H101_RUN_HIS',//运行
        propertise: [
            { no: 'CCXT2.6AC24.H101_FAULT_HIS', dataType: 'Boolean', name: '故障'},
            { no: 'CCXT2.6AC24.H101_RUN_HIS', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '67%', left: '47.3%', name: '1#水泵', type:1,
        allStatus: ['CCXT2.6AC24.P101_FAULT_HIS', 'CCXT2.6AC24.P101_RUN_HIS'],
        status1: 'CCXT2.6AC24.P101_FAULT_HIS',//故障
        status2: 'CCXT2.6AC24.P101_RUN_HIS',//运行
        propertise: [
            { no: 'CCXT2.6AC24.P101_FAULT_HIS', dataType: 'Boolean', name: '故障'},
            { no: 'CCXT2.6AC24.P101_RUN_HIS', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '72%', left: '47.3%', name: '2#水泵', type:1,
        allStatus: ['CCXT2.6AC24.P102_FAULT_HIS', 'CCXT2.6AC24.P102_RUN_HIS'],
        status1: 'CCXT2.6AC24.P102_FAULT_HIS',//故障
        status2: 'CCXT2.6AC24.P102_RUN_HIS',//运行
        propertise: [
            { no: 'CCXT2.6AC24.P102_FAULT_HIS', dataType: 'Boolean', name: '故障'},
            { no: 'CCXT2.6AC24.P102_RUN_HIS', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '53%', left: '49.4%', name: '1#电磁阀', type: 5, size: '14px',
        allStatus: ['CCXT2.6AC24.YV101_RUN_HIS'],
        status2: 'CCXT2.6AC24.YV101_RUN_HIS',//运行
        propertise: [
            { no: 'CCXT2.6AC24.YV101_RUN_HIS', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '53%', left: '50.7%', name: '2#电磁阀', type: 5, size: '14px',
        allStatus: ['CCXT2.6AC24.YV102_RUN_HIS'],
        status2: 'CCXT2.6AC24.YV102_RUN_HIS',//运行
        propertise: [
            { no: 'CCXT2.6AC24.YV102_RUN_HIS', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '53%', left: '51.9%', name: '3#电磁阀', type: 5, size: '14px',
        allStatus: [ 'CCXT2.6AC24.YV103_RUN_HIS'],
        status2: 'CCXT2.6AC24.YV103_RUN_HIS',//运行
        propertise: [
            { no: 'CCXT2.6AC24.YV103_RUN_HIS', dataType: 'Boolean', name: '运行'},
        ]
    },
]
export default data;