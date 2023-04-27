const data = [
    {
        top: '60%', left: '27%',
        no: 'TSJ.K5.K5_PAM1B_FIT',
        modalType: 1,
        modalData: {
            title: '调理池A流量', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_PAM1B_FIT']
    },
    {
        top: '70%', left: '34%',
        no: 'TSJ.K5.K5_PAM1B_FIT',
        modalType: 1,
        modalData: {
            title: '调理池B流量', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_PAM1B_FIT']
    },
    {
        top: '60%', left: '39%',
        no: 'TSJ.K5.K5_PAM3B_FIT',
        modalType: 1,
        modalData: {
            title: '调理池C流量', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_PAM3B_FIT']
    },
    {
        top: '70%', left: '46%',
        no: 'TSJ.K5.K5_PAM4B_FIT',
        modalType: 1,
        modalData: {
            title: '调理池D流量', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_PAM4B_FIT']
    },
    {
        top: '60%', left: '67%',
        no: 'TSJ.K5.K5_PAM1A_FIT',
        modalType: 1,
        modalData: {
            title: '浓缩机A流量', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_PAM1A_FIT']
    },
    {
        top: '70%', left: '75%',
        no: 'TSJ.K5.K5_PAM2A_FIT',
        modalType: 1,
        modalData: {
            title: '浓缩机B流量', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_PAM2A_FIT']
    },
    {
        top: '60%', left: '79%',
        no: 'TSJ.K5.K5_PAM3A_FIT',
        modalType: 1,
        modalData: {
            title: '浓缩机C流量', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_PAM3A_FIT']
    },
    {
        top: '70%', left: '86%',
        no: 'TSJ.K5.K5_PAM4A_FIT',
        modalType: 1,
        modalData: {
            title: '浓缩机D流量', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['TSJ.K5.K5_PAM4A_FIT']
    },

    {
        top: '0%', left: '0%',
        modalType: 3,
        title: '脱水间PAM1#制备装置',
        modalData: [
            { title: '搅拌机延迟停机：', unit: '分', no: 'PAM3.PAM3.MD3_Stirrer_DelayStop'},
            { title: '振动器运行时间：', unit: '秒', no: 'PAM3.PAM3.MD3_Vibretor_RunTime'},
            { title: '震动器停止时间：', unit: '分', no: 'PAM3.PAM3.MD3_Vibretor_StopTime'},
        ],
        allStatus: ['PAM3.PAM3.MD3_Stirrer_DelayStop','PAM3.PAM3.MD3_Vibretor_RunTime','PAM3.PAM3.MD3_Vibretor_StopTime']
    },
    {
        top: '0%', left: '85%',
        modalType: 3,
        title: '脱水间PAM2#制备装置',
        modalData: [
            { title: '搅拌机延迟停机：', unit: '分', no: 'PAM4.PAM4.MD4_Stirrer_DelayStop'},
            { title: '振动器运行时间：', unit: '秒', no: 'PAM4.PAM4.MD4_Vibretor_RunTime'},
            { title: '震动器停止时间：', unit: '分', no: 'PAM4.PAM4.MD4_Vibretor_StopTime'},
        ],
        allStatus: ['PAM4.PAM4.MD4_Stirrer_DelayStop','PAM4.PAM4.MD4_Vibretor_RunTime','PAM4.PAM4.MD4_Vibretor_StopTime']
    },
    {
        top: '33%', left: '5.4%', name: '溶解箱搅拌器', type:1,
        allStatus: ['PAM3.PAM3.MD3_DTStirrer_Fault', 'PAM3.PAM3.MD3_DTStirrer_Run'],
        status1: 'PAM3.PAM3.MD3_DTStirrer_Fault',//故障
        status2: 'PAM3.PAM3.MD3_DTStirrer_Run',//运行
        propertise: [
            { no: 'PAM3.PAM3.MD3_DTStirrer_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'PAM3.PAM3.MD3_DTStirrer_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '33%', left: '12.4%', name: '干粉给料器', type:1,
        allStatus: ['PAM3.PAM3.MD3_DPFeeder_Fault', 'PAM3.PAM3.MD3_DPFeeder_Run'],
        status1: 'PAM3.PAM3.MD3_DPFeeder_Fault',//故障
        status2: 'PAM3.PAM3.MD3_DPFeeder_Run',//运行
        propertise: [
            { no: 'PAM3.PAM3.MD3_DPFeeder_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'PAM3.PAM3.MD3_DPFeeder_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '33%', left: '20.4%', name: '熟化箱搅拌器', type:1,
        allStatus: ['PAM3.PAM3.MD3_STStirrer_Fault', 'PAM3.PAM3.MD3_STStirrer_Run'],
        status1: 'PAM3.PAM3.MD3_STStirrer_Fault',//故障
        status2: 'PAM3.PAM3.MD3_STStirrer_Run',//运行
        propertise: [
            { no: 'PAM3.PAM3.MD3_STStirrer_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'PAM3.PAM3.MD3_STStirrer_Run', dataType: 'Boolean', name: '运行'},
        ]
        
    },
    {
        top: '36%', left: '28.4%', name: 'PAM加药泵G', type:5,
        allStatus: ['TSJ.K5.K5_PAM03G_Run'],
        status2: 'TSJ.K5.K5_PAM03G_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03G_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '31.4%', name: 'PAM加药泵H', type:5,
        allStatus: ['TSJ.K5.K5_PAM03H_Run'],
        status2: 'TSJ.K5.K5_PAM03H_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03H_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '34.4%', name: 'PAM加药泵I', type:5,
        allStatus: ['TSJ.K5.K5_PAM03I_Run'],
        status2: 'TSJ.K5.K5_PAM03I_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03I_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '38.4%', name: 'PAM加药泵J', type:5,
        allStatus: ['TSJ.K5.K5_PAM03J_Run'],
        status2: 'TSJ.K5.K5_PAM03J_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03J_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '42%', name: 'PAM加药泵K', type:5,
        allStatus: ['TSJ.K5.K5_PAM03K_Run'],
        status2: 'TSJ.K5.K5_PAM03K_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03K_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '45%', name: 'PAM加药泵L', type:5,
        allStatus: ['TSJ.K5.K5_PAM03L_Run'],
        status2: 'TSJ.K5.K5_PAM03L_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03L_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '32%', left: '53%', name: '溶解箱搅拌器', type:1,
        allStatus: ['PAM4.PAM4.MD4_DTStirrer_Fault', 'PAM4.PAM4.MD4_DTStirrer_Run'],
        status1: 'PAM4.PAM4.MD4_DTStirrer_Fault',//故障
        status2: 'PAM4.PAM4.MD4_DTStirrer_Run',//运行
        propertise: [
            { no: 'PAM4.PAM4.MD4_DTStirrer_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'PAM4.PAM4.MD4_DTStirrer_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '32%', left: '60%', name: '干粉给料机', type:1,
        allStatus: ['PAM4.PAM4.MD4_DPFeeder_Fault', 'PAM4.PAM4.MD4_DPFeeder_Run'],
        status1: 'PAM4.PAM4.MD4_DPFeeder_Fault',//故障
        status2: 'PAM4.PAM4.MD4_DPFeeder_Run',//运行
        propertise: [
            { no: 'PAM4.PAM4.MD4_DPFeeder_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'PAM4.PAM4.MD4_DPFeeder_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '32%', left: '67%', name: '熟化箱搅拌器', type:1,
        allStatus: ['PAM4.PAM4.MD4_STStirrer_Fault', 'PAM4.PAM4.MD4_STStirrer_Run'],
        status1: 'PAM4.PAM4.MD4_STStirrer_Fault',//故障
        status2: 'PAM4.PAM4.MD4_STStirrer_Run',//运行
        propertise: [
            { no: 'PAM4.PAM4.MD4_STStirrer_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'PAM4.PAM4.MD4_STStirrer_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '73%', name: 'PAM加药泵A', type:5,
        allStatus: ['TSJ.K5.K5_PAM03A_Run'],
        status2: 'TSJ.K5.K5_PAM03A_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03A_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '76%', name: 'PAM加药泵B', type:5,
        allStatus: ['TSJ.K5.K5_PAM03B_Run'],
        status2: 'TSJ.K5.K5_PAM03B_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03B_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '79%', name: 'PAM加药泵C', type:5,
        allStatus: ['TSJ.K5.K5_PAM03C_Run'],
        status2: 'TSJ.K5.K5_PAM03C_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03C_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '83%', name: 'PAM加药泵D', type:5,
        allStatus: ['TSJ.K5.K5_PAM03D_Run'],
        status2: 'TSJ.K5.K5_PAM03D_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03D_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '86%', name: 'PAM加药泵E', type:5,
        allStatus: ['TSJ.K5.K5_PAM03E_Run'],
        status2: 'TSJ.K5.K5_PAM03E_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03E_Run', dataType: 'Boolean', name: '运行'},
        ]
    },
    {
        top: '36%', left: '89%', name: 'PAM加药泵F', type:5,
        allStatus: ['TSJ.K5.K5_PAM03F_Run'],
        status2: 'TSJ.K5.K5_PAM03F_Run',//运行
        propertise: [
            { no: 'TSJ.K5.K5_PAM03F_Run', dataType: 'Boolean', name: '运行'},
        ]
    },

    {
        top: '67%', left: '7%',
        no: 'TSJ.K5.K5_TLC1_PAMLJLL',
        modalType: 1,
        modalData: {
            title: '1#调理池PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_TLC1_PAMLJLL']
    },
    {
        top: '75%', left: '7%',
        no: 'TSJ.K5.K5_TLC2_PAMLJLL',
        modalType: 1,
        modalData: {
            title: '2#调理池PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_TLC2_PAMLJLL']
    },
    {
        top: '83%', left: '7%',
        no: 'TSJ.K5.K5_TLC3_PAMLJLL',
        modalType: 1,
        modalData: {
            title: '3#调理池PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_TLC3_PAMLJLL']
    },
    {
        top: '91%', left: '7%',
        no: 'TSJ.K5.K5_TLC4_PAMLJLL',
        modalType: 1,
        modalData: {
            title: '4#调理池PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_TLC4_PAMLJLL']
    },

    {
        top: '67%', left: '55%',
        no: 'TSJ.K5.K5_NSJ1_PAMLJLL',
        modalType: 1,
        modalData: {
            title: '1#浓缩机PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_NSJ1_PAMLJLL']
    },
    {
        top: '75%', left: '55%',
        no: 'TSJ.K5.K5_NSJ2_PAMLJLL',
        modalType: 1,
        modalData: {
            title: '2#浓缩机PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_NSJ2_PAMLJLL']
    },
    {
        top: '83%', left: '55%',
        no: 'TSJ.K5.K5_NSJ3_PAMLJLL',
        modalType: 1,
        modalData: {
            title: '3#浓缩机PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_NSJ3_PAMLJLL']
    },
    {
        top: '91%', left: '55%',
        no: 'TSJ.K5.K5_NSJ4_PAMLJLL',
        modalType: 1,
        modalData: {
            title: '4#浓缩机PAM投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_NSJ4_PAMLJLL']
    },
    
]
export default data;