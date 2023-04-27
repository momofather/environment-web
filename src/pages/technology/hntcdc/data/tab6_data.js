const data = [
    {
        top: '9%', left: '10.5%', name: '干粉给料机', type:1,
        allStatus: ['PAM1.PAM1.MD1_DPFeeder_Fault', 'PAM1.PAM1.MD1_DPFeeder_Run'],
        status1: 'PAM1.PAM1.MD1_DPFeeder_Fault',//故障
        status2: 'PAM1.PAM1.MD1_DPFeeder_Run',//运行
        propertise: []
    },
    {
        top: '9%', left: '16%', name: '溶解箱搅拌器', type:1,
        allStatus: ['PAM1.PAM1.MD1_DTStirrer_Fault', 'PAM1.PAM1.MD1_DTStirrer_Run'],
        status1: 'PAM1.PAM1.MD1_DTStirrer_Fault',//故障
        status2: 'PAM1.PAM1.MD1_DTStirrer_Run',//运行
        propertise: []
    },
    {
        top: '14%', left: '25%', name: '熟化箱搅拌器', type:1,
        allStatus: ['PAM1.PAM1.MD1_STStirrer_Fault', 'PAM1.PAM1.MD1_STStirrer_Run'],
        status1: 'PAM1.PAM1.MD1_STStirrer_Fault',//故障
        status2: 'PAM1.PAM1.MD1_STStirrer_Run',//运行
        propertise: []
    },
    {
        top: '24%', left: '29%',
        no: 'XPAM.XPAM.XPAM_TJB4_MF',
        modalType: 1,
        modalData: {
            title: '', unit: 'Hz', formatter: v => parseFloat(v).toFixed(1)
        },
        allStatus: ['XPAM.XPAM.XPAM_TJB4_MF']
    },
    {
        top: '27.5%', left: '30.7%', name: '新增PAM_4#投加泵', type: 1,
        allStatus: ['XPAM.XPAM.XPAM_TJB4_FT', 'XPAM.XPAM.XPAM_TJB4_RUN'],
        status1: 'XPAM.XPAM.XPAM_TJB4_FT',//故障
        status2: 'XPAM.XPAM.XPAM_TJB4_RUN',//运行
        propertise: [
            // { no: 'XPAM.XPAM.XPAM_TJB4_RUN', dataType: 'Boolean', name: '运行' },
            // { no: 'XPAM.XPAM.XPAM_TJB4_FT', dataType: 'Boolean', name: '故障' },
            // { no: 'XPAM.XPAM.XPAM_TJB4_GZ', dataType: 'Boolean', name: '干转' },
            // { no: 'XPAM.XPAM.XPAM_TJB4_MF', dataType: 'Float', name: '运行频率反馈', formatter: (v) => parseFloat(v).toFixed(1) }
        ]
    },
    {
        top: '26%', left: '34.2%',
        no: 'CHPAM.CHPAM.CHPAM_JYB4_Fre_PV',
        modalType: 1,
        modalData: {
            title: '', unit: 'Hz', formatter: v => parseFloat(v).toFixed(1)
        },
        allStatus: ['CHPAM.CHPAM.CHPAM_JYB4_Fre_PV']
    },
    {
        top: '30.2%', left: '35.2%', name: '四号加药泵', type:1,
        allStatus: ['CHPAM.CHPAM.CHPAM_JYB4_Fault', 'CHPAM.CHPAM.CHPAM_JYB4_Run'],
        status1: 'CHPAM.CHPAM.CHPAM_JYB4_Fault',//故障
        status2: 'CHPAM.CHPAM.CHPAM_JYB4_Run',//运行
        propertise: []
    },
    {
        top: '29%', left: '39%',
        no: 'CHPAM.CHPAM.CHPAM_BYB34_Fre_PV',
        modalType: 1,
        modalData: {
            title: '', unit: 'Hz', formatter: v => parseFloat(v).toFixed(1)
        },
        allStatus: ['CHPAM.CHPAM.CHPAM_BYB34_Fre_PV']
    },
    {
        top: '32.8%', left: '40%', name: '三四号池备用泵', type:1,
        allStatus: ['CHPAM.CHPAM.CHPAM_BYB34_Fault', 'CHPAM.CHPAM.CHPAM_BYB34_Run'],
        status1: 'CHPAM.CHPAM.CHPAM_BYB34_Fault',//故障
        status2: 'CHPAM.CHPAM.CHPAM_BYB34_Run',//运行
        propertise: []
    },
    {
        top: '31.5%', left: '44%',
        no: 'XPAM.XPAM.XPAM_TJB3_MF',
        modalType: 1,
        modalData: {
            title: '', unit: 'Hz', formatter: v => parseFloat(v).toFixed(1)
        },
        allStatus: ['XPAM.XPAM.XPAM_TJB3_MF']
    },
    {
        top: '35.5%', left: '45%', name: '新PAM_3#投加泵', type:1,
        allStatus: ['XPAM.XPAM.XPAM_TJB3_FT', 'XPAM.XPAM.XPAM_TJB3_RUN'],
        status1: 'XPAM.XPAM.XPAM_TJB3_FT',//故障
        status2: 'XPAM.XPAM.XPAM_TJB3_RUN',//运行
        propertise: [
            // { no: 'XPAM.XPAM.XPAM_TJB3_RUN', dataType: 'Boolean', name: '运行' },
            // { no: 'XPAM.XPAM.XPAM_TJB3_FT', dataType: 'Boolean', name: '故障' },
            // { no: 'XPAM.XPAM.XPAM_TJB3_GZ', dataType: 'Boolean', name: '干转' },
            // { no: 'XPAM.XPAM.XPAM_TJB3_MF', dataType: 'Float', name: '运行频率反馈', formatter: (v) => parseFloat(v).toFixed(1) }
        ]
    },
    {
        top: '35%', left: '49%',
        no: 'CHPAM.CHPAM.CHPAM_JYB2_Fre_PV',
        modalType: 1,
        modalData: {
            title: '', unit: 'Hz', formatter: v => parseFloat(v).toFixed(1)
        },
        allStatus: ['CHPAM.CHPAM.CHPAM_JYB2_Fre_PV']
    },
    {
        top: '38.4%', left: '50%', name: '二号加药泵', type:1,
        allStatus: ['CHPAM.CHPAM.CHPAM_JYB2_Fault', 'CHPAM.CHPAM.CHPAM_JYB2_Run'],
        status1: 'CHPAM.CHPAM.CHPAM_JYB2_Fault',//故障
        status2: 'CHPAM.CHPAM.CHPAM_JYB2_Run',//运行
        propertise: []
    },
    {
        top: '37.6%', left: '54%',
        no: 'CHPAM.CHPAM.CHPAM_BYB12_Fre_PV',
        modalType: 1,
        modalData: {
            title: '', unit: 'Hz', formatter: v => parseFloat(v).toFixed(1)
        },
        allStatus: ['CHPAM.CHPAM.CHPAM_BYB12_Fre_PV']
    },
    {
        top: '41.2%', left: '55.2%', name: '一二号池备用投加泵', type:1,
        allStatus: ['CHPAM.CHPAM.CHPAM_BYB12_Fault', 'CHPAM.CHPAM.CHPAM_BYB12_Run'],
        status1: 'CHPAM.CHPAM.CHPAM_BYB12_Fault',//故障
        status2: 'CHPAM.CHPAM.CHPAM_BYB12_Run',//运行
        propertise: []
    },
    {
        top: '40%', left: '60%',
        no: 'XPAM.XPAM.XPAM_TJB2_MF',
        modalType: 1,
        modalData: {
            title: '', unit: 'Hz', formatter: v => parseFloat(v).toFixed(1)
        },
        allStatus: ['XPAM.XPAM.XPAM_TJB2_MF']
    },
    {
        top: '44.2%', left: '60.8%', name: '新PAM_2#投加泵', type: 1,
        allStatus: ['XPAM.XPAM.XPAM_TJB2_FT', 'XPAM.XPAM.XPAM_TJB3_RUN'],
        status1: 'XPAM.XPAM.XPAM_TJB2_FT',//故障
        status2: 'XPAM.XPAM.XPAM_TJB2_RUN',//运行
        propertise: [
            // { no: 'XPAM.XPAM.XPAM_TJB2_RUN', dataType: 'Boolean', name: '运行' },
            // { no: 'XPAM.XPAM.XPAM_TJB2_FT', dataType: 'Boolean', name: '故障' },
            // { no: 'XPAM.XPAM.XPAM_TJB2_GZ', dataType: 'Boolean', name: '干转' },
            // { no: 'XPAM.XPAM.XPAM_TJB2_MF', dataType: 'Float', name: '运行频率反馈', formatter: (v) => parseFloat(v).toFixed(1) }
        ]
    },
    {
        top: '43%', left: '65%',
        no: 'XPAM.XPAM.XPAM_TJB1_MF',
        modalType: 1,
        modalData: {
            title: '', unit: 'Hz', formatter: v => parseFloat(v).toFixed(1)
        },
        allStatus: ['XPAM.XPAM.XPAM_TJB1_MF']
    },
    {
        top: '47.2%', left: '66.4%', name: '新PAM_1#投加泵', type: 1,
        allStatus: ['XPAM.XPAM.XPAM_TJB1_FT', 'XPAM.XPAM.XPAM_TJB3_RUN'],
        status1: 'XPAM.XPAM.XPAM_TJB1_FT',//故障
        status2: 'XPAM.XPAM.XPAM_TJB1_RUN',//运行
        propertise: [
            // { no: 'XPAM.XPAM.XPAM_TJB1_RUN', dataType: 'Boolean', name: '运行' },
            // { no: 'XPAM.XPAM.XPAM_TJB1_FT', dataType: 'Boolean', name: '故障' },
            // { no: 'XPAM.XPAM.XPAM_TJB1_GZ', dataType: 'Boolean', name: '干转' },
            // { no: 'XPAM.XPAM.XPAM_TJB1_MF', dataType: 'Float', name: '运行频率反馈', formatter: (v) => parseFloat(v).toFixed(1) }
        ]
    },
    {
        top: '40%', left: '73.5%', name: '熟化箱搅拌器', type: 1,
        allStatus: ['PAM2.PAM2.MD2_STStirrer_Fault', 'PAM2.PAM2.MD2_STStirrer_Run'],
        status1: 'PAM2.PAM2.MD2_STStirrer_Fault',//故障
        status2: 'PAM2.PAM2.MD2_STStirrer_Run',//运行
        propertise: []
    },
    {
        top: '45%', left: '85%', name: '溶解箱搅拌器', type: 1,
        allStatus: ['PAM2.PAM2.MD2_DTStirrer_Fault', 'PAM2.PAM2.MD2_DTStirrer_Run'],
        status1: 'PAM2.PAM2.MD2_DTStirrer_Fault',//故障
        status2: 'PAM2.PAM2.MD2_DTStirrer_Run',//运行
        propertise: []
    },
    {
        top: '53%', left: '90%', name: '干粉给料机', type: 1,
        allStatus: ['PAM2.PAM2.MD2_DPFeeder_Fault', 'PAM2.PAM2.MD2_DPFeeder_Run'],
        status1: 'PAM2.PAM2.MD2_DPFeeder_Fault',//故障
        status2: 'PAM2.PAM2.MD2_DPFeeder_Run',//运行
        propertise: []
    },

    {
        top: '51%', left: '30%',
        no: 'CHPAM.CHPAM.CHPAM_FIT4',
        modalType: 1,
        modalData: {
            title: '4#池投加量', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['CHPAM.CHPAM.CHPAM_FIT4']
    },
    {
        top: '56%', left: '37%',
        no: 'CHPAM.CHPAM.CHPAM_FIT3',
        modalType: 1,
        modalData: {
            title: '3#池投加量', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['CHPAM.CHPAM.CHPAM_FIT3']
    },
    {
        top: '60%', left: '44.4%',
        no: 'CHPAM.CHPAM.CHPAM_FIT2',
        modalType: 1,
        modalData: {
            title: '2#池投加量', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['CHPAM.CHPAM.CHPAM_FIT2']
    },
    {
        top: '65%', left: '51%',
        no: 'CHPAM.CHPAM.CHPAM_FIT1',
        modalType: 1,
        modalData: {
            title: '1#池投加量', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['CHPAM.CHPAM.CHPAM_FIT1']
    },
    {
        top: '75%', left: '24%',
        no: 'CHPAM.CHPAM.CHPAM_FIT8',
        modalType: 1,
        modalData: {
            title: '4#池稀释后', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['CHPAM.CHPAM.CHPAM_FIT8']
    },
    {
        top: '80%', left: '30%',
        no: 'CHPAM.CHPAM.CHPAM_FIT7',
        modalType: 1,
        modalData: {
            title: '3#池稀释后', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['CHPAM.CHPAM.CHPAM_FIT7']
    },
    {
        top: '82%', left: '40%',
        no: 'CHPAM.CHPAM.CHPAM_FIT6',
        modalType: 1,
        modalData: {
            title: '2#池稀释后', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['CHPAM.CHPAM.CHPAM_FIT6']
    },
    {
        top: '87%', left: '46%',
        no: 'CHPAM.CHPAM.CHPAM_FIT5',
        modalType: 1,
        modalData: {
            title: '1#池稀释后', unit: 'L/h', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['CHPAM.CHPAM.CHPAM_FIT5']
    },

    {
        top: '48%', left: '10px',
        no: 'XPAM.XPAM.XPAM_LLLJ1',
        modalType: 1,
        modalData: {
            title: '池混凝_1#PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['XPAM.XPAM.XPAM_LLLJ1']
    },
    {
        top: '56%', left: '10px',
        no: 'XPAM.XPAM.XPAM_LLLJ2',
        modalType: 1,
        modalData: {
            title: '池混凝_2#PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['XPAM.XPAM.XPAM_LLLJ2']
    },
    {
        top: '64%', left: '10px',
        no: 'XPAM.XPAM.XPAM_LLLJ3',
        modalType: 1,
        modalData: {
            title: '池混凝_3#PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['XPAM.XPAM.XPAM_LLLJ3']
    },
    {
        top: '72%', left: '10px',
        no: 'XPAM.XPAM.XPAM_LLLJ4',
        modalType: 1,
        modalData: {
            title: '池混凝_4#PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['XPAM.XPAM.XPAM_LLLJ4']
    },

    {
        top: '48%', left: '200px',
        no: 'XPAM.XPAM.XPAM_LLLJ5',
        modalType: 1,
        modalData: {
            title: '1#池PAM稀释后投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['XPAM.XPAM.XPAM_LLLJ5']
    },
    {
        top: '56%', left: '200px',
        no: 'XPAM.XPAM.XPAM_LLLJ6',
        modalType: 1,
        modalData: {
            title: '2#池PAM稀释后投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['XPAM.XPAM.XPAM_LLLJ6']
    },
    {
        top: '64%', left: '200px',
        no: 'XPAM.XPAM.XPAM_LLLJ7',
        modalType: 1,
        modalData: {
            title: '3#池PAM稀释后投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['XPAM.XPAM.XPAM_LLLJ7']
    },
    {
        top: '72%', left: '200px',
        no: 'XPAM.XPAM.XPAM_LLLJ8',
        modalType: 1,
        modalData: {
            title: '4#池PAM稀释后投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1),

        },
        allStatus: ['XPAM.XPAM.XPAM_LLLJ8']
    },
]
export default data;