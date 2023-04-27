const data = [
    {
        top: '19%', left: '35%',
        no: 'FXTY.FXTY.FXTY_LT1',
        modalType: 1,
        modalData: {
            title: '1#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXTY.FXTY.FXTY_LT1']
    },
    {
        top: '30%', left: '48%',
        no: 'FXTY.FXTY.FXTY_LT2',
        modalType: 1,
        modalData: {
            title: '2#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXTY.FXTY.FXTY_LT2']
    },
    {
        top: '45%', left: '61%',
        no: 'FXTY.FXTY.FXTY_LT3',
        modalType: 1,
        modalData: {
            title: '3#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXTY.FXTY.FXTY_LT3']
    },
    {
        top: '59%', left: '75%',
        no: 'FXTY.FXTY.FXTY_LT4',
        modalType: 1,
        modalData: {
            title: '4#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXTY.FXTY.FXTY_LT4']
    },
    {
        top: '78%', left: '90%',
        no: 'FXTY.FXTY.FXTY_LT5',
        modalType: 1,
        modalData: {
            title: '5#液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXTY.FXTY.FXTY_LT5']
    },
    {
        top: '50%', left: '30%',
        no: 'FXTY.FXTY.FXTY_FT1',
        modalType: 1,
        modalData: {
            title: '碳源加药量', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXTY.FXTY.FXTY_FT1']
    },
    {
        top: '60%', left: '30%',
        no: 'FXTY.FXTY.FXTY_FXH_JYLSD',
        modalType: 1,
        modalData: {
            title: '投加量设定', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['FXTY.FXTY.FXTY_FXH_JYLSD']
    },
    {
        top: '70%', left: '30%',
        no: 'FXTY.FXTY.FXTY_FIT1_LJ',
        modalType: 1,
        modalData: {
            title: '反硝化碳源投加量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(2),

        },
        allStatus: ['FXTY.FXTY.FXTY_FIT1_LJ']
    },


    {
        top: '21%', left: '33%', name: '反硝化碳源_1#电动阀', type:6,
        allStatus: ['FXTY.FXTY.FXTY_DDF1_OPEN', 'FXTY.FXTY.FXTY_DDF1_CLOSE'],
        status1: 'FXTY.FXTY.FXTY_DDF1_OPEN', // 全开
        status2: 'FXTY.FXTY.FXTY_DDF1_CLOSE',// 全关
        propertise: []
    },
    {
        top: '34%', left: '46%', name: '反硝化碳源_2#电动阀', type: 6,
        allStatus: ['FXTY.FXTY.FXTY_DDF2_OPEN', 'FXTY.FXTY.FXTY_DDF2_CLOSE'],
        status1: 'FXTY.FXTY.FXTY_DDF2_OPEN', // 全开
        status2: 'FXTY.FXTY.FXTY_DDF2_CLOSE',// 全关
        propertise: []
    },
    {
        top: '50%', left: '58%', name: '反硝化碳源_3#电动阀', type: 6,
        allStatus: ['FXTY.FXTY.FXTY_DDF3_OPEN', 'FXTY.FXTY.FXTY_DDF3_CLOSE'],
        status1: 'FXTY.FXTY.FXTY_DDF3_OPEN', // 全开
        status2: 'FXTY.FXTY.FXTY_DDF3_CLOSE',// 全关
        propertise: []
    },
    {
        top: '64%', left: '72.5%', name: '反硝化碳源_4#电动阀', type: 6,
        allStatus: ['FXTY.FXTY.FXTY_DDF4_OPEN', 'FXTY.FXTY.FXTY_DDF4_CLOSE'],
        status1: 'FXTY.FXTY.FXTY_DDF4_OPEN', // 全开
        status2: 'FXTY.FXTY.FXTY_DDF4_CLOSE',// 全关
        propertise: []
    },
    {
        top: '80%', left: '87.5%', name: '反硝化碳源_5#电动阀', type: 6,
        allStatus: ['FXTY.FXTY.FXTY_DDF5_OPEN', 'FXTY.FXTY.FXTY_DDF5_CLOSE'],
        status1: 'FXTY.FXTY.FXTY_DDF5_OPEN', // 全开
        status2: 'FXTY.FXTY.FXTY_DDF5_CLOSE',// 全关
        propertise: []
    },
    {
        top: '52%', left: '44%', name: '反硝化碳源_1#计量泵', type:1,
        allStatus: ['FXTY.FXTY.FXTY_JLB1_Fault', 'FXTY.FXTY.FXTY_JLB1_RUN'],
        status1: 'FXTY.FXTY.FXTY_JLB1_Fault',//故障
        status2: 'FXTY.FXTY.FXTY_JLB1_RUN',//运行
        propertise: []
    },
    {
        top: '59%', left: '49.5%', name: '反硝化碳源_2#计量泵', type: 1,
        allStatus: ['FXTY.FXTY.FXTY_JLB2_Fault', 'FXTY.FXTY.FXTY_JLB2_RUN'],
        status1: 'FXTY.FXTY.FXTY_JLB2_Fault',//故障
        status2: 'FXTY.FXTY.FXTY_JLB2_RUN',//运行
        propertise: []
    },
    {
        top: '58%', left: '19%', name: '反硝化碳源_1#卸料泵', type:1,
        allStatus: ['FXTY.FXTY.FXTY_XLB1_Fault', 'FXTY.FXTY.FXTY_XLB1_RUN'],
        status1: 'FXTY.FXTY.FXTY_XLB1_Fault',//故障
        status2: 'FXTY.FXTY.FXTY_XLB1_RUN',//运行
        propertise: []
    },
    {
        top: '62%', left: '23%', name: '反硝化碳源_2#卸料泵', type: 1,
        allStatus: ['FXTY.FXTY.FXTY_XLB2_Fault', 'FXTY.FXTY.FXTY_XLB2_RUN'],
        status1: 'FXTY.FXTY.FXTY_XLB2_Fault',//故障
        status2: 'FXTY.FXTY.FXTY_XLB2_RUN',//运行
        propertise: []
    },
    
]
export default data;