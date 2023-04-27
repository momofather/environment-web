const data = [
    {
        top: '65%', left: '5%',
        no: 'TSJ.K5.K5_LC1A_LIT',
        modalType: 1,
        modalData: {
            title: 'A液位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2),
        },
        allStatus: ['TSJ.K5.K5_LC1A_LIT']
    },
    {
        top: '28%', left: '8%',
        no: 'TSJ.K5.K5_LC1B_LIT',
        modalType: 1,
        modalData: {
            title: 'B液位计', unit: 'm', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_LC1B_LIT']
    },
    {
        top: '48.5%', left: '13%', name: '储药池A搅拌机', type: 1,
        allStatus: ['TSJ.K5.K5_PACK05A_Fault', 'TSJ.K5.K5_PACK05A_Run'],
        status1: 'TSJ.K5.K5_PACK05A_Fault',//故障
        status2: 'TSJ.K5.K5_PACK05A_Run',//运行
        propertise: []
    },
    {
        top: '9.5%', left: '16%', name: '储药池B搅拌机', type:1,
        allStatus: ['TSJ.K5.K5_PACK05B_Fault', 'TSJ.K5.K5_PACK05B_Run'],
        status1: 'TSJ.K5.K5_PACK05B_Fault',//故障
        status2: 'TSJ.K5.K5_PACK05B_Run',//运行
        propertise: []
    },
    {
        top: '30%', left: '42.4%', name: 'PAC加药泵A', type:1,
        allStatus: ['TSJ.K5.K5_PAC05A_Fault', 'TSJ.K5.K5_PAC05A_Run'],
        status1: 'TSJ.K5.K5_PAC05A_Fault',//故障
        status2: 'TSJ.K5.K5_PAC05A_Run',//运行
        propertise: []
    },
    {
        top: '41%', left: '42.4%', name: 'PAC加药泵B', type:1,
        allStatus: ['TSJ.K5.K5_PAC05B_Fault', 'TSJ.K5.K5_PAC05B_Run'],
        status1: 'TSJ.K5.K5_PAC05B_Fault',//故障
        status2: 'TSJ.K5.K5_PAC05B_Run',//运行
        propertise: []
    },
    {
        top: '51%', left: '42.4%', name: 'PAC加药泵C', type:1,
        allStatus: ['TSJ.K5.K5_PAC05C_Fault', 'TSJ.K5.K5_PAC05C_Run'],
        status1: 'TSJ.K5.K5_PAC05C_Fault',//故障
        status2: 'TSJ.K5.K5_PAC05C_Run',//运行
        propertise: []
    },
    {
        top: '61%', left: '42.4%', name: 'PAC加药泵D', type:1,
        allStatus: ['TSJ.K5.K5_PAC05D_Fault', 'TSJ.K5.K5_PAC05D_Run'],
        status1: 'TSJ.K5.K5_PAC05D_Fault',//故障
        status2: 'TSJ.K5.K5_PAC05D_Run',//运行
        propertise: []
    },
    {
        top: '71%', left: '42.4%', name: 'PAC加药泵E', type:1,
        allStatus: ['TSJ.K5.K5_PAC05E_Fault', 'TSJ.K5.K5_PAC05E_Run'],
        status1: 'TSJ.K5.K5_PAC05E_Fault',//故障
        status2: 'TSJ.K5.K5_PAC05E_Run',//运行
        propertise: []
    },
    {
        top: '83%', left: '42.4%', name: 'PAC加药泵F', type:1,
        allStatus: ['TSJ.K5.K5_PAC05F_Fault', 'TSJ.K5.K5_PAC05F_Run'],
        status1: 'TSJ.K5.K5_PAC05F_Fault',//故障
        status2: 'TSJ.K5.K5_PAC05F_Run',//运行
        propertise: []
    },
    {
        top: '65%', left: '81%', name: 'PAC卸料泵A', type:1,
        allStatus: ['TSJ.K5.K5_PAC04A_Fault', 'TSJ.K5.K5_PAC04A_Run'],
        status1: 'TSJ.K5.K5_PAC04A_Fault',//故障
        status2: 'TSJ.K5.K5_PAC04A_Run',//运行
        propertise: []
    },
    {
        top: '75%', left: '81%', name: 'PAC卸料泵B', type:1,
        allStatus: ['TSJ.K5.K5_PAC04B_Fault', 'TSJ.K5.K5_PAC04B_Run'],
        status1: 'TSJ.K5.K5_PAC04B_Fault',//故障
        status2: 'TSJ.K5.K5_PAC04B_Run',//运行
        propertise: []
    },

    {
        top: '39%', left: '49%',
        no: 'TSJ.K5.K5_PAC1_FIT',
        modalType: 1,
        modalData: {
            title: '调理池1流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_PAC1_FIT']
    },
    {
        top: '48%', left: '49%',
        no: 'TSJ.K5.K5_PAC2_FIT',
        modalType: 1,
        modalData: {
            title: '调理池2流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_PAC2_FIT']
    },
    {
        top: '57%', left: '49%',
        no: 'TSJ.K5.K5_PAC3_FIT',
        modalType: 1,
        modalData: {
            title: '调理池3流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_PAC3_FIT']
    },
    {
        top: '66%', left: '49%',
        no: 'TSJ.K5.K5_PAC4_FIT',
        modalType: 1,
        modalData: {
            title: '调理池4流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_PAC4_FIT']
    },

    {
        top: '39%', left: '67%',
        no: 'TSJ.K5.K5_TLC1_PACLJLL',
        modalType: 1,
        modalData: {
            title: '1#调理池PAC投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_TLC1_PACLJLL']
    },
    {
        top: '48%', left: '67%',
        no: 'TSJ.K5.K5_TLC2_PACLJLL',
        modalType: 1,
        modalData: {
            title: '2#调理池PAC投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_TLC2_PACLJLL']
    },
    {
        top: '57%', left: '67%',
        no: 'TSJ.K5.K5_TLC3_PACLJLL',
        modalType: 1,
        modalData: {
            title: '3#调理池PAC投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_TLC3_PACLJLL']
    },
    {
        top: '66%', left: '67%',
        no: 'TSJ.K5.K5_TLC4_PACLJLL',
        modalType: 1,
        modalData: {
            title: '4#调理池PAC投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['TSJ.K5.K5_TLC4_PACLJLL']
    },
    
]
export default data;