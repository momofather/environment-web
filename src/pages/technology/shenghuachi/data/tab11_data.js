const data = [
    {
        top: '74%', left: '20.8%', name: '生化池12碳源_1卸料泵', type: 1,
        allStatus: ['TY12.TY12.TY12_XLB1_Fault', 'TY12.TY12.TY12_XLB1_Run'],
        status1: 'TY12.TY12.TY12_XLB1_Fault',
        status2: 'TY12.TY12.TY12_XLB1_Run',
        propertise: []
    },
    {
        top: '74%', left: '25.7%', name: '生化池12碳源_2卸料泵', type: 1,
        allStatus: ['TY12.TY12.TY12_XLB2_Fault', 'TY12.TY12.TY12_XLB2_Run'],
        status1: 'TY12.TY12.TY12_XLB2_Fault',
        status2: 'TY12.TY12.TY12_XLB2_Run',
        propertise: []
    },
    {
        top: '68.7%', left: '46.3%', name: '生化池12碳源_1计量泵', type: 1,
        allStatus: ['TY12.TY12.TY12_JLB1_Fault', 'TY12.TY12.TY12_JLB1_Run'],
        status1: 'TY12.TY12.TY12_JLB1_Fault',
        status2: 'TY12.TY12.TY12_JLB1_Run',
        propertise: []
    },
    {
        top: '68.7%', left: '51.5%', name: '生化池12碳源_2计量泵', type: 1,
        allStatus: ['TY12.TY12.TY12_JLB2_Fault', 'TY12.TY12.TY12_JLB2_Run'],
        status1: 'TY12.TY12.TY12_JLB2_Fault',
        status2: 'TY12.TY12.TY12_JLB2_Run',
        propertise: []
    },
    {
        top: '68.7%', left: '56.6%', name: '生化池12碳源_3计量泵', type: 1,
        allStatus: ['TY12.TY12.TY12_JLB3_Fault', 'TY12.TY12.TY12_JLB3_Run'],
        status1: 'TY12.TY12.TY12_JLB3_Fault',
        status2: 'TY12.TY12.TY12_JLB3_Run',
        propertise: []
    },
    {
        top: '30%', left: '27.4%', name: '生化池12碳源_1电动阀', type: 6,
        allStatus: ['TY12.TY12.TY12_DDF1_Open', 'TY12.TY12.TY12_DDF1_Close'],
        status1: 'TY12.TY12.TY12_DDF1_Open',
        status2: 'TY12.TY12.TY12_DDF1_Close',
        propertise: []
    },
    {
        top: '29%', left: '53%', name: '生化池12碳源_2电动阀', type: 6,
        allStatus: ['TY12.TY12.TY12_DDF2_Open', 'TY12.TY12.TY12_DDF2_Close'],
        status1: 'TY12.TY12.TY12_DDF2_Open',
        status2: 'TY12.TY12.TY12_DDF2_Close',
        propertise: []
    },
    {
        top: '29%', left: '77.3%', name: '生化池12碳源_3电动阀', type: 6,
        allStatus: ['TY12.TY12.TY12_DDF3_Open', 'TY12.TY12.TY12_DDF3_Close'],
        status1: 'TY12.TY12.TY12_DDF3_Open',
        status2: 'TY12.TY12.TY12_DDF3_Close',
        propertise: []
    },
    {
        top: '35%', left: '31%',
        modalType: 1,
        no: 'TY12.TY12.TY12_LIT1',
        modalData: { title: '1#夜位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['TY12.TY12.TY12_LIT1']
    },
    {
        top: '35%', left: '56.5%',
        modalType: 1,
        no: 'TY12.TY12.TY12_LIT2',
        modalData: { title: '2#夜位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['TY12.TY12.TY12_LIT2']
    },
    {
        top: '35%', left: '79%',
        modalType: 1,
        no: 'TY12.TY12.TY12_LIT3',
        modalData: { title: '3#夜位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2)},
        allStatus: ['TY12.TY12.TY12_LIT3']
    },
    {
        top: '68%', left: '63%',
        modalType: 1,
        no: 'TY12.TY12.TY12_FT1_LJ',
        modalData: { title: '缺氧B区累计投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1) },
        allStatus: ['TY12.TY12.TY12_FT1_LJ']
    },
    {
        top: '76%', left: '63%',
        modalType: 1,
        no: 'TY12.TY12.TY12_FIT1',
        modalData: { title: '1#加药流量', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['TY12.TY12.TY12_FIT1']
    },
    {
        top: '68%', left: '72%',
        modalType: 1,
        no: 'TY12.TY12.TY12_FT2_LJ',
        modalData: { title: '缺氧C区累计投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1) },
        allStatus: ['TY12.TY12.TY12_FT2_LJ']
    },
    {
        top: '76%', left: '72%',
        modalType: 1,
        no: 'TY12.TY12.TY12_FIT2',
        modalData: { title: '2#加药流量', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['TY12.TY12.TY12_FIT2']
    },
    {
        top: '82%', left: '45%',
        modalType: 1,
        no: 'TY12.TY12.TY12_JLB1_CCSD',
        modalData: { title: '1#泵冲程', unit: '%', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['TY12.TY12.TY12_JLB1_CCSD']
    },
    {
        top: '82%', left: '50.5%',
        modalType: 1,
        no: 'TY12.TY12.TY12_JLB2_CCSD',
        modalData: { title: '2#泵冲程', unit: '%', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['TY12.TY12.TY12_JLB2_CCSD']
    },
    {
        top: '82%', left: '56.5%',
        modalType: 1,
        no: 'TY12.TY12.TY12_JLB3_CCSD',
        modalData: { title: '3#泵冲程', unit: '%', formatter: (v) => parseFloat(v).toFixed(1)},
        allStatus: ['TY12.TY12.TY12_JLB3_CCSD']
    }
]
export default data;