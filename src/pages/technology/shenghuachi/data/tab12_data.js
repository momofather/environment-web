const data = [
    {
        top: '69%', left: '40.7%', name: '生化池3碳源_1计量泵', type: 1,
        allStatus: ['TY3.TY3.TY3_JLB1_Fault', 'TY3.TY3.TY3_JLB1_Run'],
        status1: 'TY3.TY3.TY3_JLB1_Fault',
        status2: 'TY3.TY3.TY3_JLB1_Run',
        propertise: []
    },
    {
        top: '69%', left: '45.7%', name: '生化池3碳源_2计量泵', type: 1,
        allStatus: ['TY3.TY3.TY3_JLB2_Fault', 'TY3.TY3.TY3_JLB2_Run'],
        status1: 'TY3.TY3.TY3_JLB2_Fault',
        status2: 'TY3.TY3.TY3_JLB2_Run',
        propertise: []
    },
    {
        top: '74%', left: '71.4%', name: '生化池3碳源_1卸料泵', type: 1,
        allStatus: ['TY3.TY3.TY3_XLB1_Fault', 'TY3.TY3.TY3_XLB1_Run'],
        status1: 'TY3.TY3.TY3_XLB1_Fault',
        status2: 'TY3.TY3.TY3_XLB1_Run',
        propertise: []
    },
    {
        top: '74%', left: '76.4%', name: '生化池3碳源_2卸料泵', type: 1,
        allStatus: ['TY3.TY3.TY3_XLB2_Fault', 'TY3.TY3.TY3_XLB2_Run'],
        status1: 'TY3.TY3.TY3_XLB2_Fault',
        status2: 'TY3.TY3.TY3_XLB2_Run',
        propertise: []
    },
    {
        top: '29%', left: '17.6%', name: '生化池3碳源_1电动阀', type: 6,
        allStatus: ['TY3.TY3.TY3_DDF1_Open', 'TY3.TY3.TY3_DDF1_Close'],
        status1: 'TY3.TY3.TY3_DDF1_Open',
        status2: 'TY3.TY3.TY3_DDF1_Close',
        propertise: []
    },
    {
        top: '29%', left: '42.4%', name: '生化池3碳源_2电动阀', type: 6,
        allStatus: ['TY3.TY3.TY3_DDF2_Open', 'TY3.TY3.TY3_DDF2_Close'],
        status1: 'TY3.TY3.TY3_DDF2_Open',
        status2: 'TY3.TY3.TY3_DDF2_Close',
        propertise: []
    },
    {
        top: '29%', left: '68%', name: '生化池3碳源_3电动阀', type: 6,
        allStatus: ['TY3.TY3.TY3_DDF3_Open', 'TY3.TY3.TY3_DDF3_Close'],
        status1: 'TY3.TY3.TY3_DDF3_Open',
        status2: 'TY3.TY3.TY3_DDF3_Close',
        propertise: []
    },
    {
        top: '35%', left: '22%',
        modalType: 1,
        no: 'TY3.TY3.TY3_LIT1',
        modalData: { title: '1#夜位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['TY3.TY3.TY3_LIT1']
    },
    {
        top: '35%', left: '46%',
        modalType: 1,
        no: 'TY3.TY3.TY3_LIT2',
        modalData: { title: '2#夜位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['TY3.TY3.TY3_LIT2']
    },
    {
        top: '35%', left: '71%',
        modalType: 1,
        no: 'TY3.TY3.TY3_LIT3',
        modalData: { title: '3#夜位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['TY3.TY3.TY3_LIT3']
    },
    {
        top: '69%', left: '26%',
        modalType: 1,
        no: 'TY3.TY3.TY3_FT1_LJ',
        modalData: { title: '缺氧区累计投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1) },
        allStatus: ['TY3.TY3.TY3_FT1_LJ']
    },
    {
        top: '76%', left: '26%',
        modalType: 1,
        no: 'TY3.TY3.TY3_FIT1',
        modalData: { title: '1#加药流量', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['TY3.TY3.TY3_FIT1']
    },
    {
        top: '82%', left: '39%',
        modalType: 1,
        no: 'TY3.TY3.TY3_JLB1_CCSD',
        modalData: { title: '1#泵冲程', unit: '%', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['TY3.TY3.TY3_JLB1_CCSD']
    },
    {
        top: '82%', left: '44.5%',
        modalType: 1,
        no: 'TY3.TY3.TY3_JLB2_CCSD',
        modalData: { title: '2#泵冲程', unit: '%', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['TY3.TY3.TY3_JLB2_CCSD']
    }
]
export default data;