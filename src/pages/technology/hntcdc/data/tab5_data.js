const data = [
    {
        top: '40%', left: '23%',
        no: 'CHPAC.CHPAC.CHPAC_FIT4',
        modalType: 1,
        modalData: {
            title: '4#加药流量', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['CHPAC.CHPAC.CHPAC_FIT4']
    },
    {
        top: '47%', left: '23%',
        no: 'CHPAC.CHPAC.CHPAC_FT4_LJ',
        modalType: 1,
        modalData: {
            title: '4#池PAC投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['CHPAC.CHPAC.CHPAC_FT4_LJ']
    },
    {
        top: '18%', left: '40%',
        no: 'CHPAC.CHPAC.CHPAC_LIT1',
        modalType: 1,
        modalData: {
            title: '1#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['CHPAC.CHPAC.CHPAC_LIT1']
    },
    {
        top: '31%', left: '55%',
        no: 'CHPAC.CHPAC.CHPAC_LIT2',
        modalType: 1,
        modalData: {
            title: '2#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['CHPAC.CHPAC.CHPAC_LIT2']
    },
    {
        top: '47%', left: '74%',
        no: 'CHPAC.CHPAC.CHPAC_LIT3',
        modalType: 1,
        modalData: {
            title: '3#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['CHPAC.CHPAC.CHPAC_LIT3']
    },
    {
        top: '48%', left: '90%',
        no: 'CHPAC.CHPAC.CHPAC_FIT3',
        modalType: 1,
        modalData: {
            title: '3#加药流量', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['CHPAC.CHPAC.CHPAC_FIT3']
    },
    {
        top: '56%', left: '90%',
        no: 'CHPAC.CHPAC.CHPAC_FT3_LJ',
        modalType: 1,
        modalData: {
            title: '3#池PAC投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['CHPAC.CHPAC.CHPAC_FT3_LJ']
    },
    {
        top: '27%', left: '90%',
        no: 'CHPAC.CHPAC.CHPAC_FIT2',
        modalType: 1,
        modalData: {
            title: '2#加药流量', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['CHPAC.CHPAC.CHPAC_FIT2']
    },
    {
        top: '36%', left: '90%',
        no: 'CHPAC.CHPAC.CHPAC_FT2_LJ',
        modalType: 1,
        modalData: {
            title: '2#池PAC投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['CHPAC.CHPAC.CHPAC_FT2_LJ']
    },
    {
        top: '7%', left: '90%',
        no: 'CHPAC.CHPAC.CHPAC_FIT1',
        modalType: 1,
        modalData: {
            title: '1#加药流量', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['CHPAC.CHPAC.CHPAC_FIT1']
    },
    {
        top: '14%', left: '90%',
        no: 'CHPAC.CHPAC.CHPAC_FT1_LJ',
        modalType: 1,
        modalData: {
            title: '1#池PAC投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['CHPAC.CHPAC.CHPAC_FT1_LJ']
    },
      
    {
        top: '0%', left: '40.5%', name: '磁混凝PAC_1#搅拌机', type:1,
        allStatus: ['CHPAC.CHPAC.CHPAC_JBJ1_Fault', 'CHPAC.CHPAC.CHPAC_JBJ1_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_JBJ1_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_JBJ1_RUN',//运行
        propertise: []
    },
    {
        top: '12%', left: '55%', name: '磁混凝PAC_2#搅拌机', type: 1,
        allStatus: ['CHPAC.CHPAC.CHPAC_JBJ2_Fault', 'CHPAC.CHPAC.CHPAC_JBJ2_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_JBJ2_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_JBJ2_RUN',//运行
        propertise: []
    },
    {
        top: '26%', left: '72%', name: '磁混凝PAC_3#搅拌机', type: 1,
        allStatus: ['CHPAC.CHPAC.CHPAC_JBJ3_Fault', 'CHPAC.CHPAC.CHPAC_JBJ3_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_JBJ3_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_JBJ3_RUN',//运行
        propertise: []
    },
    {
        top: '23%', left: '37.5%', name: '磁混凝PAC_1#电动阀', type:6,
        allStatus: ['CHPAC.CHPAC.CHPAC_DDF1_OPEN', 'CHPAC.CHPAC.CHPAC_DDF1_CLOSE'],
        status1: 'CHPAC.CHPAC.CHPAC_DDF1_OPEN',
        status2: 'CHPAC.CHPAC.CHPAC_DDF1_CLOSE',
        propertise: []
    },
    {
        top: '34%', left: '52.5%', name: '磁混凝PAC_2#电动阀', type: 6,
        allStatus: ['CHPAC.CHPAC.CHPAC_DDF2_OPEN', 'CHPAC.CHPAC.CHPAC_DDF2_CLOSE'],
        status1: 'CHPAC.CHPAC.CHPAC_DDF2_OPEN',
        status2: 'CHPAC.CHPAC.CHPAC_DDF2_CLOSE',
        propertise: []
    },
    {
        top: '51%', left: '71%', name: '磁混凝PAC_3#电动阀', type: 6,
        allStatus: ['CHPAC.CHPAC.CHPAC_DDF3_OPEN', 'CHPAC.CHPAC.CHPAC_DDF3_CLOSE'],
        status1: 'CHPAC.CHPAC.CHPAC_DDF3_OPEN',
        status2: 'CHPAC.CHPAC.CHPAC_DDF3_CLOSE',
        propertise: []
    },
    {
        top: '63%', left: '52.5%', name: '磁混凝PAC_4#池投加泵', type:1,
        allStatus: ['CHPAC.CHPAC.CHPAC_JLB1_Fault', 'CHPAC.CHPAC.CHPAC_JLB1_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_JLB1_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_JLB1_RUN',//运行
        propertise: []
    },
    {
        top: '66%', left: '55%', name: '磁混凝PAC_备用泵41', type: 1,
        allStatus: ['CHPAC.CHPAC.CHPAC_JLB2_Fault', 'CHPAC.CHPAC.CHPAC_JLB2_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_JLB2_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_JLB2_RUN',//运行
        propertise: []
    },
    {
        top: '70%', left: '58%', name: '磁混凝PAC_1#池投加泵', type: 1,
        allStatus: ['CHPAC.CHPAC.CHPAC_JLB3_Fault', 'CHPAC.CHPAC.CHPAC_JLB3_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_JLB3_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_JLB3_RUN',//运行
        propertise: []
    },
    {
        top: '73%', left: '61.5%', name: '磁混凝PAC_2#池投加泵', type: 1,
        allStatus: ['CHPAC.CHPAC.CHPAC_JLB4_Fault', 'CHPAC.CHPAC.CHPAC_JLB4_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_JLB4_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_JLB4_RUN',//运行
        propertise: []
    },
    {
        top: '76%', left: '64.5%', name: '磁混凝PAC_备用泵23', type: 1,
        allStatus: ['CHPAC.CHPAC.CHPAC_JLB5_Fault', 'CHPAC.CHPAC.CHPAC_JLB5_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_JLB5_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_JLB5_RUN',//运行
        propertise: []
    },
    {
        top: '80%', left: '68%', name: '磁混凝PAC_3#池投加泵', type: 1,
        allStatus: ['CHPAC.CHPAC.CHPAC_JLB6_Fault', 'CHPAC.CHPAC.CHPAC_JLB6_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_JLB6_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_JLB6_RUN',//运行
        propertise: []
    },
    {
        top: '57%', left: '22%', name: '磁混凝PAC_1#卸料泵', type:1,
        allStatus: ['CHPAC.CHPAC.CHPAC_XLB1_Fault', 'CHPAC.CHPAC.CHPAC_XLB1_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_XLB1_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_XLB1_RUN',//运行
        propertise: []
    },
    {
        top: '61%', left: '26%', name: '磁混凝PAC_2#卸料泵', type: 1,
        allStatus: ['CHPAC.CHPAC.CHPAC_XLB2_Fault', 'CHPAC.CHPAC.CHPAC_XLB2_RUN'],
        status1: 'CHPAC.CHPAC.CHPAC_XLB2_Fault',//故障
        status2: 'CHPAC.CHPAC.CHPAC_XLB2_RUN',//运行
        propertise: []
    },
]
export default data;