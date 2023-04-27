const data = [
    {
        top: '62%', left: '17%',
        no: 'AB.PLC3.FIT325_OUT_AI',
        modalType: 1,
        modalData: {
            title: '总进水流量', unit: 'L/s'
        },
        allStatus: ['AB.PLC3.FIT325_OUT_AI']
    },
    {
        top: '70%', left: '16%',
        no: 'AB.PLC3.JSLJ_LL',
        modalType: 1,
        modalData: {
            title: '总进水累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC3.JSLJ_LL']
    },
    {
        top: '72%', left: '61%', name: '进水限流阀井_1#电动蝶阀', type: 2,
        allStatus: ['AB.PLC3.DDDF1_Fault', 'AB.PLC3.DDDF1_Close_Place', 'AB.PLC3.DDDF1_Open_Place'],
        status1: 'AB.PLC3.DDDF1_Fault',
        status2: 'AB.PLC3.DDDF1_Close_Place',
        status3: 'AB.PLC3.DDDF1_Open_Place',
        propertise: [
            { no: 'AB.PLC3.DDDF1_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC3.DDDF1_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC3.DDDF1_Open_Place', dataType: 'Boolean', name: '全开'},
            { no: 'AB.PLC3.DDDF1_Close_Place', dataType: 'Boolean', name: '全关'},
            { no: 'AB.PLC3.DDDF1_Open_Fault', dataType: 'Boolean', name: '开阀报警'},
            { no: 'AB.PLC3.DDDF1_Close_Fault', dataType: 'Boolean', name: '关阀报警'},
            { no: 'AB.PLC3.DDDF1_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次'},
        ]
    },
    {
        top: '56%', left: '62%', name: '进水限流阀井_2#电动蝶阀', type: 2,
        allStatus: ['AB.PLC3.DDDF2_Fault', 'AB.PLC3.DDDF2_Close_Place', 'AB.PLC3.DDDF2_Open_Place'],
        status1: 'AB.PLC3.DDDF2_Fault',
        status2: 'AB.PLC3.DDDF2_Close_Place',
        status3: 'AB.PLC3.DDDF2_Open_Place',
        propertise: [
            { no: 'AB.PLC3.DDDF2_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.DDDF2_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.DDDF2_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC3.DDDF2_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC3.DDDF2_Open_Fault', dataType: 'Boolean', name: '开阀报警' },
            { no: 'AB.PLC3.DDDF2_Close_Fault', dataType: 'Boolean', name: '关阀报警' },
            { no: 'AB.PLC3.DDDF2_Fault_Timers', dataType: 'Long', name: '故障次数' ,unit:'次'},
        ]
    },
    {
        top: '71%', left: '51.7%', name: '进水限流阀井_电动固定锥形阀', type: 2,
        allStatus: ['AB.PLC3.DDGDZXF_Fault', 'AB.PLC3.DDGDZXF_Close_Place', 'AB.PLC3.DDGDZXF_Open_Place'],
        status1: 'AB.PLC3.DDGDZXF_Fault',
        status2: 'AB.PLC3.DDGDZXF_Close_Place',
        status3: 'AB.PLC3.DDGDZXF_Open_Place',
        propertise: [
            { no: 'AB.PLC3.DDGDZXF_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.DDGDZXF_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.DDGDZXF_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC3.DDGDZXF_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC3.DDGDZXF_Return_AI', dataType: 'Float', name: '开度反馈',unit:"%" },
            { no: 'AB.PLC3.DDGDZXF_Fault_Timers', dataType: 'Long', name: '故障次数' ,unit:'次'},
        ]
    },
    {
        top: '15%', left: '70.5%', name: '进水限流阀井_电动速闭不锈钢闸门', type: 2,
        allStatus: ['AB.PLC3.DDSBZM_Fault', 'AB.PLC3.DDSBZM_Close_Place', 'AB.PLC3.DDSBZM_Open_Place'],
        status1: 'AB.PLC3.DDSBZM_Fault',
        status2: 'AB.PLC3.DDSBZM_Close_Place',
        status3: 'AB.PLC3.DDSBZM_Open_Place',
        propertise: [
            { no: 'AB.PLC3.DDSBZM_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.DDSBZM_Power_State', dataType: 'Boolean', name: '电源合闸' },
            { no: 'AB.PLC3.DDSBZM_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC3.DDSBZM_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC3.DDSBZM_Open_Fault', dataType: 'Boolean', name: '开阀报警' },
            { no: 'AB.PLC3.DDSBZM_Close_Fault', dataType: 'Boolean', name: '关阀报警' },
            { no: 'AB.PLC3.DDSBZM_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.DDSBZM_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次' },
        ]
    }
]
export default data;