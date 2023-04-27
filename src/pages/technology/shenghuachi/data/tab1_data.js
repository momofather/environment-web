const data = [
    {
        top: '87%', left: '41.7%', name: '1#生化池_2#电动旋塞阀（缺氧A区）', type:2,
        allStatus: ['AB.PLC1.DDXSF13_Fault', 'AB.PLC1.DDXSF13_Close_Place', 'AB.PLC1.DDXSF13_Open_Place'],
        status1: 'AB.PLC1.DDXSF13_Fault',//故障
        status2: 'AB.PLC1.DDXSF13_Close_Place',// 关到位
        status3: 'AB.PLC1.DDXSF13_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC1.DDXSF13_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC1.DDXSF13_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC1.DDXSF13_Open_Place', dataType: 'Boolean', name: '全开'},
            { no: 'AB.PLC1.DDXSF13_Close_Place', dataType: 'Boolean', name: '全关'},
            { no: 'AB.PLC1.DDXSF13_Return_AI', dataType: 'Float', name: '阀位反馈'},
            { no: 'AB.PLC1.DDXSF13_Fault_Timers', dataType: 'Long', name: '故障次数'}
        ]
    },
    {
        top: '77%', left: '41.9%', name: '1#生化池_3#电动旋塞阀（缺氧B区）', type:2,
        allStatus: ['AB.PLC1.DDXSF14_Fault', 'AB.PLC1.DDXSF14_Close_Place', 'AB.PLC1.DDXSF14_Open_Place'],
        status1: 'AB.PLC1.DDXSF14_Fault',//故障
        status2: 'AB.PLC1.DDXSF14_Close_Place',// 关到位
        status3: 'AB.PLC1.DDXSF14_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC1.DDXSF14_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC1.DDXSF14_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC1.DDXSF14_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC1.DDXSF14_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC1.DDXSF14_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC1.DDXSF14_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '68%', left: '42%', name: '1#生化池_4#电动旋塞阀（缺氧C区）', type: 2,
        allStatus: ['AB.PLC1.DDXSF17_Fault', 'AB.PLC1.DDXSF17_Close_Place', 'AB.PLC1.DDXSF17_Open_Place'],
        status1: 'AB.PLC1.DDXSF17_Fault',//故障
        status2: 'AB.PLC1.DDXSF17_Close_Place',// 关到位
        status3: 'AB.PLC1.DDXSF17_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC1.DDXSF17_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC1.DDXSF17_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC1.DDXSF17_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC1.DDXSF17_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC1.DDXSF17_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC1.DDXSF17_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '59%', left: '42.1%', name: '1#生化池_1#电动旋塞阀（厌氧A区）', type: 2,
        allStatus: ['AB.PLC1.DDXSF11_Fault', 'AB.PLC1.DDXSF11_Close_Place', 'AB.PLC1.DDXSF11_Open_Place'],
        status1: 'AB.PLC1.DDXSF11_Fault',//故障
        status2: 'AB.PLC1.DDXSF11_Close_Place',// 关到位
        status3: 'AB.PLC1.DDXSF11_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC1.DDXSF11_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC1.DDXSF11_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC1.DDXSF11_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC1.DDXSF11_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC1.DDXSF11_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC1.DDXSF11_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '33%', left: '42.5%', name: '2#生化池_1#电动旋塞阀（厌氧A区）', type: 2,
        allStatus: ['AB.PLC1.DDXSF12_Fault', 'AB.PLC1.DDXSF12_Close_Place', 'AB.PLC1.DDXSF12_Open_Place'],
        status1: 'AB.PLC1.DDXSF12_Fault',//故障
        status2: 'AB.PLC1.DDXSF12_Close_Place',// 关到位
        status3: 'AB.PLC1.DDXSF12_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC1.DDXSF12_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC1.DDXSF12_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC1.DDXSF12_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC1.DDXSF12_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC1.DDXSF12_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC1.DDXSF12_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '25%', left: '42.6%', name: '2#生化池_4#电动旋塞阀（缺氧C区）', type: 2,
        allStatus: ['AB.PLC1.DDXSF18_Fault', 'AB.PLC1.DDXSF18_Close_Place', 'AB.PLC1.DDXSF18_Open_Place'],
        status1: 'AB.PLC1.DDXSF18_Fault',//故障
        status2: 'AB.PLC1.DDXSF18_Close_Place',// 关到位
        status3: 'AB.PLC1.DDXSF18_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC1.DDXSF18_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC1.DDXSF18_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC1.DDXSF18_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC1.DDXSF18_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC1.DDXSF18_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC1.DDXSF18_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '18%', left: '42.6%', name: '2#生化池_3#电动旋塞阀（缺氧B区）', type: 2,
        allStatus: ['AB.PLC1.DDXSF16_Fault', 'AB.PLC1.DDXSF16_Close_Place', 'AB.PLC1.DDXSF16_Open_Place'],
        status1: 'AB.PLC1.DDXSF16_Fault',//故障
        status2: 'AB.PLC1.DDXSF16_Close_Place',// 关到位
        status3: 'AB.PLC1.DDXSF16_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC1.DDXSF16_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC1.DDXSF16_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC1.DDXSF16_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC1.DDXSF16_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC1.DDXSF16_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC1.DDXSF16_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '10%', left: '42.8%', name: '2#生化池_1#电动旋塞阀（缺氧A区）', type: 2,
        allStatus: ['AB.PLC1.DDXSF15_Fault', 'AB.PLC1.DDXSF15_Close_Place', 'AB.PLC1.DDXSF15_Open_Place'],
        status1: 'AB.PLC1.DDXSF15_Fault',//故障
        status2: 'AB.PLC1.DDXSF15_Close_Place',// 关到位
        status3: 'AB.PLC1.DDXSF15_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC1.DDXSF15_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC1.DDXSF15_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC1.DDXSF15_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC1.DDXSF15_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC1.DDXSF15_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC1.DDXSF15_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '89%', left: '64%',
        no: 'AB.PLC1.FIT140_OUT_AI',
        modalType: 1,
        modalData: {
            title: '缺氧A区流量', unit: 'm³/h', formatter: (v)=> parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT140_OUT_AI']
    },
    {
        top: '89%', left: '50%',
        no: 'AB.PLC1.FIT140_LLLJ',
        modalType: 1,
        modalData: {
            title: '缺氧A区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT140_LLLJ']
    },
    {
        top: '79%', left: '64%',
        no: 'AB.PLC1.FIT139_OUT_AI',
        modalType: 1,
        modalData: {
            title: '缺氧B区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT139_OUT_AI']
    },
    {
        top: '79%', left: '50%',
        no: 'AB.PLC1.FIT139_LLLJ',
        modalType: 1,
        modalData: {
            title: '缺氧B区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT139_LLLJ']
    },
    {
        top: '70%', left: '64%',
        no: 'AB.PLC1.FIT144_OUT_AI',
        modalType: 1,
        modalData: {
            title: '缺氧C区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT144_OUT_AI']
    },
    {
        top: '70%', left: '50%',
        no: 'AB.PLC1.FIT144_LLLJ',
        modalType: 1,
        modalData: {
            title: '缺氧C区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT144_LLLJ']
    },
    {
        top: '61%', left: '64%',
        no: 'AB.PLC1.FIT137_OUT_AI',
        modalType: 1,
        modalData: {
            title: '厌氧区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT137_OUT_AI']
    },
    {
        top: '61%', left: '50%',
        no: 'AB.PLC1.FIT137_LLLJ',
        modalType: 1,
        modalData: {
            title: '厌氧区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT137_LLLJ']
    },
    {
        top: '36%', left: '62%',
        no: 'AB.PLC1.FIT137_OUT_AI',
        modalType: 1,
        modalData: {
            title: '厌氧区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT137_OUT_AI']
    },
    {
        top: '36%', left: '50%',
        no: 'AB.PLC1.FIT138_LLLJ',
        modalType: 1,
        modalData: {
            title: '厌氧区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT138_LLLJ']
    },
    {
        top: '28.2%', left: '62%',
        no: 'AB.PLC1.FIT143_OUT_AI',
        modalType: 1,
        modalData: {
            title: '缺氧C区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT143_OUT_AI']
    },
    {
        top: '28.2%', left: '50%',
        no: 'AB.PLC1.FIT143_LLLJ',
        modalType: 1,
        modalData: {
            title: '缺氧C区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT143_LLLJ']
    },
    {
        top: '20.5%', left: '62%',
        no: 'AB.PLC1.FIT141_OUT_AI',
        modalType: 1,
        modalData: {
            title: '缺氧B区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT141_OUT_AI']
    },
    {
        top: '20.5%', left: '50%',
        no: 'AB.PLC1.FIT141_LLLJ',
        modalType: 1,
        modalData: {
            title: '缺氧B区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT141_LLLJ']
    },
    {
        top: '13%', left: '62%',
        no: 'AB.PLC1.FIT142_OUT_AI',
        modalType: 1,
        modalData: {
            title: '缺氧A区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT142_OUT_AI']
    },
    {
        top: '13%', left: '50%',
        no: 'AB.PLC1.FIT142_LLLJ',
        modalType: 1,
        modalData: {
            title: '缺氧A区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC1.FIT142_LLLJ']
    }
]
export default data;