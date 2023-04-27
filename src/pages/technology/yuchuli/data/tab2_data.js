const data = [
    {
        top: '82%', left: '20%',
        no: 'AB.PLC3.FIT325_OUT_AI',
        modalType: 1,
        modalData: {
            title: '总进水流量', unit: 'L/s'
        },
        allStatus: ['AB.PLC3.FIT325_OUT_AI']
    },
    {
        top: '0%', left: '37%',
        no: 'AB.PLC3.LIT309_OUT_AI',
        modalType: 1,
        modalData: {
            title: '1＃液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['AB.PLC3.LIT309_OUT_AI']
    },
    {
        top: '70%', left: '35%',
        no: 'AB.PLC3.LIT310_OUT_AI',
        modalType: 1,
        modalData: {
            title: '２＃液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
    },
        allStatus: ['AB.PLC3.LIT310_OUT_AI']
    },
    {
        top: '73%', left: '47.5%',
        no: 'AB.PLC3.FIT311_OUT_AI',
        modalType: 1,
        modalData: {
            title: '1#流量计', unit: 'm³/h',formatter: (v)=> parseFloat(v).toFixed(2)
        },
        allStatus: ['AB.PLC3.FIT311_OUT_AI']
    },
    {
        top: '88%', left: '56%',
        no: 'AB.PLC3.FIT312_OUT_AI',
        modalType: 1,
        modalData: {
            title: '2#流量计', unit: 'm³/h',formatter: (v)=> parseFloat(v).toFixed(2)
        },
        allStatus: ['AB.PLC3.FIT312_OUT_AI']
    },
    {
        top: '86%', left: '68%',
        modalType: 2,
        modalData: [
            { title: '1#调蓄池液位计：', unit: 'm', no: 'AB.PLC3.LIT326_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '2#调蓄池液位计：', unit: 'm', no: 'AB.PLC3.LIT327_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)}
        ],
        allStatus: ['AB.PLC3.LIT326_OUT_AI','AB.PLC3.LIT327_OUT_AI']
    },
    {
        top: '42%', left: '2%',
        modalType: 3,
        title: '粗格栅H2S',
        modalData: [
            { title: '1#H2S：', unit: 'ppm', no: 'AB.PLC3.GIT305_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '2#H2S：', unit: 'ppm', no: 'AB.PLC3.GIT306_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '3#H2S：', unit: 'ppm', no: 'AB.PLC3.GIT307_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '4#H2S：', unit: 'ppm', no: 'AB.PLC3.GIT308_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)}
        ],
        allStatus: ['AB.PLC3.GIT305_OUT_AI','AB.PLC3.GIT306_OUT_AI','AB.PLC3.GIT307_OUT_AI','AB.PLC3.GIT308_OUT_AI']
    },


    {
        top: '5%', left: '70%',
        modalType: 3,
        title: '调蓄池H2S',
        modalData: [
            { title: '1#H2S：', unit: 'ppm', no: 'AB.PLC3.AIT328_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '2#H2S：', unit: 'ppm', no: 'AB.PLC3.AIT329_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '3#H2S：', unit: 'ppm', no: 'AB.PLC3.AIT330_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '4#H2S：', unit: 'ppm', no: 'AB.PLC3.AIT331_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)}
        ],
        allStatus: ['AB.PLC3.AIT328_OUT_AI','AB.PLC3.AIT329_OUT_AI','AB.PLC3.AIT330_OUT_AI','AB.PLC3.AIT331_OUT_AI']
    },
    {
        top: '5%', left: '85%',
        modalType: 3,
        title: '调蓄池CH4',
        modalData: [
            { title: '1#CH4：', unit: '%LEL', no: 'AB.PLC3.AIT332_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '2#CH4：', unit: '%LEL', no: 'AB.PLC3.AIT333_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '3#CH4：', unit: '%LEL', no: 'AB.PLC3.AIT334_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)},
            { title: '4#CH4：', unit: '%LEL', no: 'AB.PLC3.AIT335_OUT_AI', formatter: (v)=> parseFloat(v).toFixed(2)}
        ],
        allStatus: ['AB.PLC3.AIT332_OUT_AI','AB.PLC3.AIT333_OUT_AI','AB.PLC3.AIT334_OUT_AI','AB.PLC3.AIT335_OUT_AI']
    },
    {
        top: '18%',
        left: '19%',
        name: '粗格栅_1#铸铁镶铜方闸门(栅前)',
        type: 2,
        allStatus: ['AB.PLC3.AC606_Fault', 'AB.PLC3.AC606_Close_Place', 'AB.PLC3.AC606_Open_Place'],
        status1: 'AB.PLC3.AC606_Fault', //故障
        status2: 'AB.PLC3.AC606_Close_Place', //全关
        status3: 'AB.PLC3.AC606_Open_Place', //全关
        propertise: [
            {
                no: 'AB.PLC3.AC606_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC606_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC606_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC606_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC606_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC606_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.AC606_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',unit:'次',
                
            }, 
        ]
    },
    {
        top: '25%',
        left: '18.6%',
        name: '粗格栅_2#铸铁镶铜方闸门(栅前)',
        type: 2,
        allStatus: ['AB.PLC3.AC607_Fault', 'AB.PLC3.AC607_Close_Place', 'AB.PLC3.AC607_Open_Place'],
        status1: 'AB.PLC3.AC607_Fault',
        status2: 'AB.PLC3.AC607_Close_Place',
        status3: 'AB.PLC3.AC607_Open_Place',
        propertise: [
            {
                no: 'AB.PLC3.AC607_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC607_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC607_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC607_Open_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC607_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC607_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.AC607_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',unit:'次',
            }, 
        ]
    }, 
    {
        top: '32%',
        left: '18.3%',
        name: '粗格栅_3#铸铁镶铜方闸门(栅前)',
        type: 2,
        allStatus: ['AB.PLC3.AC608_Fault', 'AB.PLC3.AC608_Close_Place', 'AB.PLC3.AC608_Open_Place'],
        status1: 'AB.PLC3.AC608_Fault',
        status2: 'AB.PLC3.AC608_Close_Place',
        status3: 'AB.PLC3.AC608_Open_Place',
        propertise: [
            {
                no: 'AB.PLC3.AC608_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC608_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC608_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC608_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC608_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC608_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            
            {
                no: 'AB.PLC3.AC608_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
        ]
    }, {
        top: '39%',
        left: '18%',
        name: '粗格栅_4#铸铁镶铜方闸门(栅前)',
        type: 2,
        allStatus: ['AB.PLC3.AC609_Fault', 'AB.PLC3.AC609_Close_Place', 'AB.PLC3.AC609_Open_Place'],
        status1: 'AB.PLC3.AC609_Fault',
        status2: 'AB.PLC3.AC609_Close_Place',
        status3: 'AB.PLC3.AC609_Open_Place',
        propertise: [
            {
                no: 'AB.PLC3.AC609_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC609_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC609_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC609_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC609_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC609_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.AC609_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
        ]
    }, {
        top: '40%',
        left: '14%',
        name: '粗格栅_电动速闭不锈钢阀门',
        type: 2,
        allStatus: ['AB.PLC3.AC628_Fault', 'AB.PLC3.AC628_Close_Place', 'AB.PLC3.AC628_Open_Place'],
        status1: 'AB.PLC3.AC628_Fault',
        status2: 'AB.PLC3.AC628_Close_Place',
        status3: 'AB.PLC3.AC628_Open_Place',
        propertise: [
            {
                no: 'AB.PLC3.AC628_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC628_Power_State',
                dataType: 'Boolean',
                name: '电源合闸'
            },
            {
                no: 'AB.PLC3.AC628_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            
            {
                no: 'AB.PLC3.AC628_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC628_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC628_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.AC628_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC628_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:"次"
            },
        ]
    },
    {
        top: '15.2%',
        left: '30.3%',
        name: '1#粗格栅',
        type: 4,
        allStatus: ['CGS.CGS1.CGS1_ZHGZ', 'CGS.CGS1.CGS1_ZHGZ','CGS.CGS1.CGS1_XJDW','CGS.CGS1.CGS1_SSDW'],
        status1: 'CGS.CGS1.CGS1_ZHGZ',
        status2: 'CGS.CGS1.CGS1_ZHGZ',
        status3: 'CGS.CGS1.CGS1_XJDW',
        status4: 'CGS.CGS1.CGS1_SSDW',
        propertise: [{
                no: 'CGS.CGS1.CGS1_YKXH',
                dataType: 'Boolean',
                name: '远程'
            },
            {
                no: 'CGS.CGS1.CGS1_ZHGZ',
                dataType: 'Boolean',
                name: '综合故障'
            },
            {
                no: 'CGS.CGS1.CGS1_SSXH',
                dataType: 'Boolean',
                name: '上升信号'
            },
            {
                no: 'CGS.CGS1.CGS1_SSDW',
                dataType: 'Boolean',
                name: '上升到位'
            },
            {
                no: 'CGS.CGS1.CGS1_SSCX',
                dataType: 'Boolean',
                name: '上升超限'
            },
            {
                no: 'CGS.CGS1.CGS1_XJXH',
                dataType: 'Boolean',
                name: '下降信号'
            },
            {
                no: 'CGS.CGS1.CGS1_XJDW',
                dataType: 'Boolean',
                name: '下降到位'
            },
            {
                no: 'CGS.CGS1.CGS1_XJCX',
                dataType: 'Boolean',
                name: '下降超限'
            },
            {
                no: 'CGS.CGS1.CGS1_SJDJ_GLJ',
                dataType: 'Boolean',
                name: '过力矩信号'
            },
            {
                no: 'CGS.CGS1.CGS1_KPDW',
                dataType: 'Boolean',
                name: '开耙到位'
            },
            {
                no: 'CGS.CGS1.CGS1_KPCX',
                dataType: 'Boolean',
                name: '开耙超限'
            },
            {
                no: 'CGS.CGS1.CGS1_YYDJ_YX',
                dataType: 'Boolean',
                name: '推杆电机运行'
            },
            
            {
                no: 'CGS.CGS1.CGS1_BPDW',
                dataType: 'Boolean',
                name: '闭耙到位'
            },
            {
                no: 'CGS.CGS1.CGS1_KPXH',
                dataType: 'Boolean',
                name: '开耙信号'
            },
            
            {
                no: 'CGS.CGS1.CGS1_BPXH',
                dataType: 'Boolean',
                name: '闭耙信号'
            },
            {
                no: 'CGS.CGS1.CGS1_BPCX',
                dataType: 'Boolean',
                name: '闭耙超限'
            }, 
            {
                no: 'CGS.CGS1.CGS1_PDGZ',
                dataType: 'Boolean',
                name: '耙斗故障信号'
            },
        ]
    },
    {
        top: '21.5%',
        left: '30.1%',
        name: '2#粗格栅',
        type: 4,
        allStatus: ['CGS.CGS2.CGS2_ZHGZ','CGS.CGS2.CGS2_ZHGZ','CGS.CGS2.CGS2_XJDW','CGS.CGS2.CGS2_SSDW'],
        status1: 'CGS.CGS2.CGS2_ZHGZ',
        status2: 'CGS.CGS2.CGS2_ZHGZ',
        status3: 'CGS.CGS2.CGS2_XJDW',
        status4: 'CGS.CGS2.CGS2_SSDW',
        propertise: [{
                no: 'CGS.CGS2.CGS2_YKXH',
                dataType: 'Boolean',
                name: '远程'
            },
            {
                no: 'CGS.CGS2.CGS2_ZHGZ',
                dataType: 'Boolean',
                name: '综合故障'
            },
            {
                no: 'CGS.CGS2.CGS2_SSXH',
                dataType: 'Boolean',
                name: '上升信号'
            },
            {
                no: 'CGS.CGS2.CGS2_SSDW',
                dataType: 'Boolean',
                name: '上升到位'
            },
            {
                no: 'CGS.CGS2.CGS2_SSCX',
                dataType: 'Boolean',
                name: '上升超限'
            },
            {
                no: 'CGS.CGS2.CGS2_XJXH',
                dataType: 'Boolean',
                name: '下降信号'
            },
            {
                no: 'CGS.CGS2.CGS2_XJCX',
                dataType: 'Boolean',
                name: '下降超限'
            },
            {
                no: 'CGS.CGS2.CGS2_XJDW',
                dataType: 'Boolean',
                name: '下降到位'
            },
            {
                no: 'CGS.CGS2.CGS2_SJDJ_GLJ',
                dataType: 'Boolean',
                name: '过力矩信号'
            },
            {
                no: 'CGS.CGS2.CGS2_KPXH',
                dataType: 'Boolean',
                name: '开耙信号'
            },
            {
                no: 'CGS.CGS2.CGS2_YYDJ_YX',
                dataType: 'Boolean',
                name: '推杆电机运行'
            },
            {
                no: 'CGS.CGS2.CGS2_BPXH',
                dataType: 'Boolean',
                name: '闭耙信号'
            },
            {
                no: 'CGS.CGS2.CGS2_PDGZ',
                dataType: 'Boolean',
                name: '耙斗故障信号'
            },
            
            
            {
                no: 'CGS.CGS2.CGS2_KPDW',
                dataType: 'Boolean',
                name: '开耙到位'
            },
            {
                no: 'CGS.CGS2.CGS2_BPDW',
                dataType: 'Boolean',
                name: '闭耙到位'
            },
            
            
            {
                no: 'CGS.CGS2.CGS2_KPCX',
                dataType: 'Boolean',
                name: '开耙超限'
            },
            {
                no: 'CGS.CGS2.CGS2_BPCX',
                dataType: 'Boolean',
                name: '闭耙超限'
            },
        ]
    },
    {

        top: '28%',
        left: '29.8%',
        name: '3#粗格栅',
        type: 4,
        allStatus: ['CGS.CGS3.CGS3_ZHGZ','CGS.CGS3.CGS3_ZHGZ','CGS.CGS3.CGS3_XJDW','CGS.CGS3.CGS3_SSDW'],
        status1: 'CGS.CGS3.CGS3_ZHGZ',
        status2: 'CGS.CGS3.CGS3_ZHGZ',
        status3: 'CGS.CGS3.CGS3_XJDW',
        status4: 'CGS.CGS3.CGS3_SSDW',
        propertise: [{
                no: 'CGS.CGS3.CGS3_YKXH',
                dataType: 'Boolean',
                name: '远程'
            },
            {
                no: 'CGS.CGS3.CGS3_ZHGZ',
                dataType: 'Boolean',
                name: '综合故障'
            },
            {
                no: 'CGS.CGS3.CGS3_SSXH',
                dataType: 'Boolean',
                name: '上升信号'
            },
            {
                no: 'CGS.CGS3.CGS3_SSDW',
                dataType: 'Boolean',
                name: '上升到位'
            },
            {
                no: 'CGS.CGS3.CGS3_SSCX',
                dataType: 'Boolean',
                name: '上升超限'
            },
            {
                no: 'CGS.CGS3.CGS3_XJXH',
                dataType: 'Boolean',
                name: '下降信号'
            },
            {
                no: 'CGS.CGS3.CGS3_XJDW',
                dataType: 'Boolean',
                name: '下降到位'
            },
            {
                no: 'CGS.CGS3.CGS3_XJCX',
                dataType: 'Boolean',
                name: '下降超限'
            },
            {
                no: 'CGS.CGS3.CGS3_SJDJ_GLJ',
                dataType: 'Boolean',
                name: '过力矩信号'
            },
            {
                no: 'CGS.CGS3.CGS3_KPXH',
                dataType: 'Boolean',
                name: '开耙信号'
            },
            {
                no: 'CGS.CGS3.CGS3_KPDW',
                dataType: 'Boolean',
                name: '开耙到位'
            },
            {
                no: 'CGS.CGS3.CGS3_KPCX',
                dataType: 'Boolean',
                name: '开耙超限'
            },
            {
                no: 'CGS.CGS3.CGS3_YYDJ_YX',
                dataType: 'Boolean',
                name: '推杆电机运行'
            },
            {
                no: 'CGS.CGS3.CGS3_BPXH',
                dataType: 'Boolean',
                name: '闭耙信号'
            },
            {
                no: 'CGS.CGS3.CGS3_BPDW',
                dataType: 'Boolean',
                name: '闭耙到位'
            },
            
            {
                no: 'CGS.CGS3.CGS3_BPCX',
                dataType: 'Boolean',
                name: '闭耙超限'
            }, 
            {
                no: 'CGS.CGS3.CGS3_PDGZ',
                dataType: 'Boolean',
                name: '耙斗故障信号'
            }, 
        ]
    }, {
        top: '35%',
        left: '29.5%',
        name: '4#粗格栅',
        type: 4,
        allStatus: ['CGS.CGS4.CGS4_ZHGZ','CGS.CGS4.CGS4_ZHGZ','CGS.CGS4.CGS4_XJDW','CGS.CGS4.CGS4_SSDW'],
        status1: 'CGS.CGS4.CGS4_ZHGZ',
        status2: 'CGS.CGS4.CGS4_ZHGZ',
        status3: 'CGS.CGS4.CGS4_XJDW',
        status4: 'CGS.CGS4.CGS4_SSDW',
        propertise: [
            {
                no: 'CGS.CGS4.CGS4_YKXH',
                dataType: 'Boolean',
                name: '远程'
            },
            {
                no: 'CGS.CGS4.CGS4_ZHGZ',
                dataType: 'Boolean',
                name: '综合故障'
            },
            {
                no: 'CGS.CGS4.CGS4_SSXH',
                dataType: 'Boolean',
                name: '上升信号'
            },
            {
                no: 'CGS.CGS4.CGS4_SSDW',
                dataType: 'Boolean',
                name: '上升到位'
            },
            {
                no: 'CGS.CGS4.CGS4_SSCX',
                dataType: 'Boolean',
                name: '上升超限'
            },
            {
                no: 'CGS.CGS4.CGS4_XJXH',
                dataType: 'Boolean',
                name: '下降信号'
            },
            {
                no: 'CGS.CGS4.CGS4_XJDW',
                dataType: 'Boolean',
                name: '下降到位'
            },
            {
                no: 'CGS.CGS4.CGS4_XJCX',
                dataType: 'Boolean',
                name: '下降超限'
            },
            {
                no: 'CGS.CGS4.CGS4_SJDJ_GLJ',
                dataType: 'Boolean',
                name: '过力矩信号'
            },
            
            {
                no: 'CGS.CGS4.CGS4_KPXH',
                dataType: 'Boolean',
                name: '开耙信号'
            },
            {
                no: 'CGS.CGS4.CGS4_KPDW',
                dataType: 'Boolean',
                name: '开耙到位'
            },
            {
                no: 'CGS.CGS4.CGS4_KPCX',
                dataType: 'Boolean',
                name: '开耙超限'
            },
            {
                no: 'CGS.CGS4.CGS4_YYDJ_YX',
                dataType: 'Boolean',
                name: '推杆电机运行'
            },
            {
                no: 'CGS.CGS4.CGS4_BPXH',
                dataType: 'Boolean',
                name: '闭耙信号'
            },
            {
                no: 'CGS.CGS4.CGS4_BPDW',
                dataType: 'Boolean',
                name: '闭耙到位'
            },
            {
                no: 'CGS.CGS4.CGS4_BPCX',
                dataType: 'Boolean',
                name: '闭耙超限'
            },  
            {
                no: 'CGS.CGS4.CGS4_PDGZ',
                dataType: 'Boolean',
                name: '耙斗故障信号'
            },
        ]
    },
    {
        top: '18.3%',
        left: '35.4%',
        name: '粗格栅_1#铸铁镶铜方闸门(栅后)',
        type: 2,
        allStatus: ['AB.PLC3.AC610_Fault', 'AB.PLC3.AC610_Close_Place', 'AB.PLC3.AC610_Open_Place'],
        status1: 'AB.PLC3.AC610_Fault',
        status2: 'AB.PLC3.AC610_Close_Place',
        status3: 'AB.PLC3.AC610_Open_Place',
        propertise: [
            {
                no: 'AB.PLC3.AC610_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC610_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            
            {
                no: 'AB.PLC3.AC610_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC610_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC610_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC610_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.AC610_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
            
        ]
    }, {
        top: '25%',
        left: '35.2%',
        name: '粗格栅_2#铸铁镶铜方闸门(栅后)',
        type: 2,
        allStatus: ['AB.PLC3.AC611_Fault', 'AB.PLC3.AC611_Close_Place', 'AB.PLC3.AC611_Open_Place'],
        status1: 'AB.PLC3.AC611_Fault',
        status2: 'AB.PLC3.AC611_Close_Place',
        status3: 'AB.PLC3.AC611_Open_Place',
        propertise: [
            {
                no: 'AB.PLC3.AC611_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC611_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            
            {
                no: 'AB.PLC3.AC611_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC611_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC611_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC611_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.AC611_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
        ]
    }, {
        top: '32%',
        left: '35%',
        name: '粗格栅_3#铸铁镶铜方闸门(栅后)',
        type: 2,
        allStatus: ['AB.PLC3.AC612_Fault', 'AB.PLC3.AC612_Close_Place', 'AB.PLC3.AC612_Open_Place'],
        status1: 'AB.PLC3.AC612_Fault',
        status2: 'AB.PLC3.AC612_Close_Place',
        status3: 'AB.PLC3.AC612_Open_Place',
        propertise: [
            {
                no: 'AB.PLC3.AC612_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC612_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC612_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC612_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC612_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC612_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.AC612_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
        ]
    }, {
        top: '39%',
        left: '34.5%',
        name: '粗格栅_4#铸铁镶铜方闸门(栅后)',
        type: 2,
        allStatus: ['AB.PLC3.AC613_Fault', 'AB.PLC3.AC613_Close_Place', 'AB.PLC3.AC613_Open_Place'],
        status1: 'AB.PLC3.AC613_Fault',
        status2: 'AB.PLC3.AC613_Close_Place',
        status3: 'AB.PLC3.AC613_Open_Place',
        propertise: [
            {
                no: 'AB.PLC3.AC613_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC613_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC613_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC613_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC613_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC613_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.AC613_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
        ]
    },
    {
        top: '25.5%',
        left: '39.5%',
        name: '提升泵房_铸铁镶铜方闸门',
        type: 2,
        allStatus: ['AB.PLC3.AC605_Fault', 'AB.PLC3.AC605_Close_Place', 'AB.PLC3.AC605_Open_Place'],
        status1: 'AB.PLC3.AC605_Fault',
        status2: 'AB.PLC3.AC605_Close_Place',
        status3: 'AB.PLC3.AC605_Open_Place',
        propertise: [
            {
                no: 'AB.PLC3.AC605_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC605_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC605_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC605_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC605_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.AC605_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.AC605_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
        ]
    },
    {
        top: '17%',
        left: '45%',
        name: '1#污水提升泵(变频)',
        type: 1,
        allStatus: ['AB.PLC3.AC527_Fault', 'AB.PLC3.AC527_Run', ],
        status1: 'AB.PLC3.AC527_Fault', //故障
        status2: 'AB.PLC3.AC527_Run', //运行
        propertise: [
            {
                no: 'AB.PLC3.AC527_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC527_Run',
                dataType: 'Boolean',
                name: '运行'
            },
            {
                no: 'AB.PLC3.AC527_Start_Fault',
                dataType: 'Boolean',
                name: '启动报警'
            },
            {
                no: 'AB.PLC3.AC527_Stop_Fault',
                dataType: 'Boolean',
                name: '停止报警'
            },{
                no: 'AB.PLC3.AC527_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC527_Frequency_PV',
                dataType: 'Float',
                name: '频率反馈',
                unit:'Hz'
            },
            {
                no: 'AB.PLC3.AC527_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
            {
                no: 'AB.PLC3.AC527_RunTime',
                dataType: 'Float',
                name: '累计运行',
                unit:'小时'
            },
            {
                no: 'AB.PLC3.AC527_Maintain_Time',
                dataType: 'Float',
                name: '检修时间',
                unit:'小时'
            },
        ]
    },
    {
        top: '23%',
        left: '45%',
        name: '2#污水提升泵(软起)',
        type: 1,
        allStatus: ['AB.PLC3.AC528_Fault', 'AB.PLC3.AC528_Run', ],
        status1: 'AB.PLC3.AC528_Fault', //故障
        status2: 'AB.PLC3.AC528_Run', //运行
        propertise: [
            {
                no: 'AB.PLC3.AC528_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC528_Run',
                dataType: 'Boolean',
                name: '运行'
            },
            {
                no: 'AB.PLC3.AC528_Start_Fault',
                dataType: 'Boolean',
                name: '启动报警'
            },
            {
                no: 'AB.PLC3.AC528_Stop_Fault',
                dataType: 'Boolean',
                name: '停止报警'
            },{
                no: 'AB.PLC3.AC528_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            
            {
                no: 'AB.PLC3.AC528_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
            {
                no: 'AB.PLC3.AC528_RunTime',
                dataType: 'Float',
                name: '累计运行',
                unit:'小时'
            },
            {
                no: 'AB.PLC3.AC528_Maintain_Time',
                dataType: 'Float',
                name: '检修时间',
                unit:'小时'
            },
            {
                no: 'AB.PLC3.AC528_Frequency_PV',
                dataType: 'Float',
                name: '频率反馈',
                unit:'Hz'
            },
        ]
    },
    {
        top: '41%',
        left: '45%',
        name: '1#污水提升泵(变频)',
        type: 1,
        allStatus: ['AB.PLC3.AC529_Fault', 'AB.PLC3.AC529_Run', ],
        status1: 'AB.PLC3.AC529_Fault', //故障
        status2: 'AB.PLC3.AC529_Run', //运行
        propertise: [
            {
                no: 'AB.PLC3.AC529_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC529_Run',
                dataType: 'Boolean',
                name: '运行'
            },
            {
                no: 'AB.PLC3.AC529_Start_Fault',
                dataType: 'Boolean',
                name: '启动报警'
            },
            {
                no: 'AB.PLC3.AC529_Stop_Fault',
                dataType: 'Boolean',
                name: '停止报警'
            },{
                no: 'AB.PLC3.AC529_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC529_Frequency_PV',
                dataType: 'Float',
                name: '频率反馈',
                unit:'Hz'
            },
            {
                no: 'AB.PLC3.AC529_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
            {
                no: 'AB.PLC3.AC529_RunTime',
                dataType: 'Float',
                name: '累计运行',
                unit:'小时'
            },
            {
                no: 'AB.PLC3.AC529_Maintain_Time',
                dataType: 'Float',
                name: '检修时间',
                unit:'小时'
            },
        ]
    },
    {
        top: '47.5%',
        left: '45%',
        name: '2#污水提升泵(软起)',
        type: 1,
        allStatus: ['AB.PLC3.AC530_Fault', 'AB.PLC3.AC530_Run', ],
        status1: 'AB.PLC3.AC530_Fault', //故障
        status2: 'AB.PLC3.AC530_Run', //运行
        propertise: [
            {
                no: 'AB.PLC3.AC530_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC530_Run',
                dataType: 'Boolean',
                name: '运行'
            },
            {
                no: 'AB.PLC3.AC530_Start_Fault',
                dataType: 'Boolean',
                name: '启动报警'
            },
            {
                no: 'AB.PLC3.AC530_Stop_Fault',
                dataType: 'Boolean',
                name: '停止报警'
            },{
                no: 'AB.PLC3.AC530_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            
            {
                no: 'AB.PLC3.AC530_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
            {
                no: 'AB.PLC3.AC530_RunTime',
                dataType: 'Float',
                name: '累计运行',
                unit:'小时'
            },
            {
                no: 'AB.PLC3.AC530_Maintain_Time',
                dataType: 'Float',
                name: '检修时间',
                unit:'小时'
            },
        ]
    },
    {
        top: '53.5%',
        left: '45%',
        name: '3#污水提升泵(变频)',
        type: 1,
        allStatus: ['AB.PLC3.AC603_Fault', 'AB.PLC3.AC603_Run', ],
        status1: 'AB.PLC3.AC603_Fault', //故障
        status2: 'AB.PLC3.AC603_Run', //运行
        propertise: [
            {
                no: 'AB.PLC3.AC603_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC603_Run',
                dataType: 'Boolean',
                name: '停止'
            },
            {
                no: 'AB.PLC3.AC603_Start_Fault',
                dataType: 'Boolean',
                name: '启动报警'
            },
            {
                no: 'AB.PLC3.AC603_Spot_Fault',
                dataType: 'Boolean',
                name: '停止报警'
            },
            {
                no: 'AB.PLC3.AC603_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC603_Maintain_Notice',
                dataType: 'Boolean',
                name: '检修周期'
            },
            {
                no: 'AB.PLC3.AC603_Frequency_PV',
                dataType: 'Float',
                name: '运行频率',
                unit:'Hz'
            },
            {
                no: 'AB.PLC3.AC603_Fault_Timers',
                dataType: 'Lang',
                name: '故障次数',
                unit:'次'
            },
            {
                no: 'AB.PLC3.AC603_RunTime',
                dataType: 'Float',
                name: '累计运行'
            },
            {
                no: 'AB.PLC3.AC603_Maintain_Time',
                dataType: 'Float',
                name: '检修时间',
                unit:'小时'
            },
        ]
    },
    {
        top: '61%',
        left: '45%',
        name: '4#污水提升泵(软起)',
        type: 1,
        allStatus: ['AB.PLC3.AC604_Fault', 'AB.PLC3.AC604_Run', ],
        status1: 'AB.PLC3.AC604_Fault', //故障
        status2: 'AB.PLC3.AC604_Run', //运行
        propertise: [
            {
                no: 'AB.PLC3.AC604_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC604_Run',
                dataType: 'Boolean',
                name: '运行'
            },
            {
                no: 'AB.PLC3.AC604_Start_Fault',
                dataType: 'Boolean',
                name: '启动报警'
            },
            {
                no: 'AB.PLC3.AC604_Stop_Fault',
                dataType: 'Boolean',
                name: '停止报警'
            },
            {
                no: 'AB.PLC3.AC604_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC604_Fault_Timers',
                dataType: 'Lang',
                name: '故障次数'
            },
            {
                no: 'AB.PLC3.AC604_RunTime',
                dataType: 'Float',
                name: '累计运行'
            },
            {
                no: 'AB.PLC3.AC604_Maintain_Time',
                dataType: 'Float',
                name: '检修时间'
            },
            // {
            //     no: 'AB.PLC3.AC604_Remote',
            //     dataType: 'Boolean',
            //     name: '远控'
            // },
        ]
    },
    {
        top: '83%',
        left: '44.5%',
        name: '4#污水提升泵(软起)',
        type: 1,
        allStatus: ['AB.PLC3.AC602_Fault', 'AB.PLC3.AC602_Run', ],
        status1: 'AB.PLC3.AC602_Fault', //故障
        status2: 'AB.PLC3.AC602_Run', //运行
        propertise: [
            {
                no: 'AB.PLC3.AC602_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC602_Run',
                dataType: 'Boolean',
                name: '运行'
            },
            {
                no: 'AB.PLC3.AC602_Start_Fault',
                dataType: 'Boolean',
                name: '启动报警'
            },
            {
                no: 'AB.PLC3.AC602_Stop_Fault',
                dataType: 'Boolean',
                name: '停止报警'
            },
            {
                no: 'AB.PLC3.AC602_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC602_Fault_Timers',
                dataType: 'Lang',
                name: '故障次数'
            },
            {
                no: 'AB.PLC3.AC602_RunTime',
                dataType: 'Float',
                name: '累计运行'
            },
            {
                no: 'AB.PLC3.AC602_Maintain_Time',
                dataType: 'Float',
                name: '检修时间'
            },
            // {
            //     no: 'AB.PLC3.AC602_Remote',
            //     dataType: 'Boolean',
            //     name: '远控'
            // },
        ]
    },
    {
        top: '89%',
        left: '44.5%',
        name: '3#污水提升泵(变频)',
        type: 1,
        allStatus: ['AB.PLC3.AC601_Fault', 'AB.PLC3.AC601_Run', ],
        status1: 'AB.PLC3.AC601_Fault', //故障
        status2: 'AB.PLC3.AC601_Run', //运行
        propertise: [
            {
                no: 'AB.PLC3.AC601_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC601_Run',
                dataType: 'Boolean',
                name: '停止'
            },
            {
                no: 'AB.PLC3.AC601_Start_Fault',
                dataType: 'Boolean',
                name: '启动报警'
            },
            {
                no: 'AB.PLC3.AC601_Spot_Fault',
                dataType: 'Boolean',
                name: '停止报警'
            },
            {
                no: 'AB.PLC3.AC601_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC601_Frequency_PV',
                dataType: 'Float',
                name: '运行频率',
                unit:'Hz'
            },
            {
                no: 'AB.PLC3.AC601_Fault_Timers',
                dataType: 'Lang',
                name: '故障次数',
                unit:'次'
            },
            {
                no: 'AB.PLC3.AC601_RunTime',
                dataType: 'Float',
                name: '累计运行'
            },
            {
                no: 'AB.PLC3.AC601_Maintain_Notice',
                dataType: 'Boolean',
                name: '检修周期'
            },
            {
                no: 'AB.PLC3.AC601_Maintain_Time',
                dataType: 'Float',
                name: '检修时间',
                unit:'小时'
            },
            // {
            //     no: 'AB.PLC3.AC603_Remote',
            //     dataType: 'Boolean',
            //     name: '输出控制'
            // },
        ]
    },
    {
        top: '1%',
        left: '57.5%',
        name: '提升泵至调蓄池出管口_1#蝶阀',
        type: 2,
        allStatus: ['AB.PLC3.TSB_TXCCKDF1_Fault', 'AB.PLC3.TSB_TXCCKDF1_Close_Place', 'AB.PLC3.TSB_TXCCKDF1_Open_Place'],
        status1: 'AB.PLC3.TSB_TXCCKDF1_Fault', //故障
        status2: 'AB.PLC3.TSB_TXCCKDF1_Close_Place', //全关
        status3: 'AB.PLC3.TSB_TXCCKDF1_Open_Place', //全关
        propertise: [
            
            {
                no: 'AB.PLC3.TSB_TXCCKDF1_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF1_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF1_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF1_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF1_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF1_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF1_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            }
        ]
    },
    {
        top: '7%',
        left: '57.5%',
        name: '提升泵至调蓄池出管口_2#蝶阀',
        type: 2,
        allStatus: ['AB.PLC3.TSB_TXCCKDF2_Fault', 'AB.PLC3.TSB_TXCCKDF2_Close_Place', 'AB.PLC3.TSB_TXCCKDF2_Open_Place'],
        status1: 'AB.PLC3.TSB_TXCCKDF2_Fault', //故障
        status2: 'AB.PLC3.TSB_TXCCKDF2_Close_Place', //全关
        status3: 'AB.PLC3.TSB_TXCCKDF2_Open_Place', //全关
        propertise: [
            {
                no: 'AB.PLC3.TSB_TXCCKDF2_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF2_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF2_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF2_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF2_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF2_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF2_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            }
        ]
    }, {
        top: '71%',
        left: '58.5%',
        name: '提升泵至调蓄池出管口_4#蝶阀',
        type: 2,
        allStatus: ['AB.PLC3.TSB_TXCCKDF4_Fault', 'AB.PLC3.TSB_TXCCKDF4_Close_Place', 'AB.PLC3.TSB_TXCCKDF4_Open_Place'],
        status1: 'AB.PLC3.TSB_TXCCKDF4_Fault', //故障
        status2: 'AB.PLC3.TSB_TXCCKDF4_Close_Place', //全关
        status3: 'AB.PLC3.TSB_TXCCKDF4_Open_Place', //全关
        propertise: [
            {
                no: 'AB.PLC3.TSB_TXCCKDF4_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF4_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF4_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF4_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF4_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF4_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF4_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            }
        ]
    },
    {
        top: '78%',
        left: '58.5%',
        name: '提升泵至调蓄池出管口_3#蝶阀',
        type: 2,
        allStatus: ['AB.PLC3.TSB_TXCCKDF3_Fault', 'AB.PLC3.TSB_TXCCKDF3_Close_Place', 'AB.PLC3.TSB_TXCCKDF3_Open_Place'],
        status1: 'AB.PLC3.TSB_TXCCKDF3_Fault', //故障
        status2: 'AB.PLC3.TSB_TXCCKDF3_Close_Place', //全关
        status3: 'AB.PLC3.TSB_TXCCKDF3_Open_Place', //全关
        propertise: [
            {
                no: 'AB.PLC3.TSB_TXCCKDF3_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF3_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF3_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF3_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF3_Open_Fault',
                dataType: 'Boolean',
                name: '开阀报警'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF3_Close_Fault',
                dataType: 'Boolean',
                name: '关阀报警'
            },
            {
                no: 'AB.PLC3.TSB_TXCCKDF3_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            }
        ]
    }, {
        top: '57%',
        left: '53.5%',
        name: '调蓄池出口_1#电动旋塞阀',
        type: 2,
        allStatus: ['AB.PLC3.AC618_Fault', 'AB.PLC3.AC618_Close_Place', 'AB.PLC3.AC618_Open_Place'],
        status1: 'AB.PLC3.AC618_Fault', //故障
        status2: 'AB.PLC3.AC618_Close_Place', //全关
        status3: 'AB.PLC3.AC618_Open_Place', //全关
        propertise: [
            {
                no: 'AB.PLC3.AC618_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC618_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC618_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC618_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC618_Return_AI',
                dataType: 'Float',
                name: '开度反馈',
                unit:'%'
            },
            {
                no: 'AB.PLC3.AC618_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
        ]
    },
    {
        top: '57%',
        left: '56.5%',
        name: '调蓄池出口_2#电动旋塞阀',
        type: 2,
        allStatus: ['AB.PLC3.AC619_Fault', 'AB.PLC3.AC619_Close_Place', 'AB.PLC3.AC619_Open_Place'],
        status1: 'AB.PLC3.AC619_Fault', //故障
        status2: 'AB.PLC3.AC619_Close_Place', //全关
        status3: 'AB.PLC3.AC619_Open_Place', //全关
        propertise: [
            {
                no: 'AB.PLC3.AC619_Remote',
                dataType: 'Boolean',
                name: '远控'
            },
            {
                no: 'AB.PLC3.AC619_Fault',
                dataType: 'Boolean',
                name: '故障'
            },
            {
                no: 'AB.PLC3.AC619_Open_Place',
                dataType: 'Boolean',
                name: '全开'
            },
            {
                no: 'AB.PLC3.AC619_Close_Place',
                dataType: 'Boolean',
                name: '全关'
            },
            {
                no: 'AB.PLC3.AC619_Return_AI',
                dataType: 'Float',
                name: '开度反馈',
                unit:'%'
            },
            {
                no: 'AB.PLC3.AC619_Fault_Timers',
                dataType: 'Long',
                name: '故障次数',
                unit:'次'
            },
        ]

    },
]
export default data;