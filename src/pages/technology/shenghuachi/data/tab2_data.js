const data = [
    {
        top: '87%', left: '41.7%', name: '3#生化池_2#电动旋塞阀（缺氧A区）', type: 2,
        allStatus: ['AB.PLC2.DDXSF22_Fault', 'AB.PLC2.DDXSF22_Close_Place', 'AB.PLC2.DDXSF22_Open_Place'],
        status1: 'AB.PLC2.DDXSF22_Fault',//故障
        status2: 'AB.PLC2.DDXSF22_Close_Place',// 关到位
        status3: 'AB.PLC2.DDXSF22_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC2.DDXSF22_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC2.DDXSF22_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC2.DDXSF22_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC2.DDXSF22_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC2.DDXSF22_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC2.DDXSF22_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '77%', left: '41.9%', name: '3#生化池_3#电动旋塞阀（缺氧B区）', type: 2,
        allStatus: ['AB.PLC2.DDXSF23_Fault', 'AB.PLC2.DDXSF23_Close_Place', 'AB.PLC2.DDXSF23_Open_Place'],
        status1: 'AB.PLC2.DDXSF23_Fault',//故障
        status2: 'AB.PLC2.DDXSF23_Close_Place',// 关到位
        status3: 'AB.PLC2.DDXSF23_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC2.DDXSF23_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC2.DDXSF23_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC2.DDXSF23_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC2.DDXSF23_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC2.DDXSF23_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC2.DDXSF23_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '68%', left: '42%', name: '3#生化池_4#电动旋塞阀（缺氧B区）', type: 2,
        allStatus: ['AB.PLC2.DDXSF24_Fault', 'AB.PLC2.DDXSF24_Close_Place', 'AB.PLC2.DDXSF24_Open_Place'],
        status1: 'AB.PLC2.DDXSF24_Fault',//故障
        status2: 'AB.PLC2.DDXSF24_Close_Place',// 关到位
        status3: 'AB.PLC2.DDXSF24_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC2.DDXSF24_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC2.DDXSF24_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC2.DDXSF24_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC2.DDXSF24_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC2.DDXSF24_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC2.DDXSF24_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '59%', left: '42.1%', name: '3#生化池_1#电动旋塞阀（缺氧区）', type: 2,
        allStatus: ['AB.PLC2.DDXSF21_Fault', 'AB.PLC2.DDXSF21_Close_Place', 'AB.PLC2.DDXSF21_Open_Place'],
        status1: 'AB.PLC2.DDXSF21_Fault',//故障
        status2: 'AB.PLC2.DDXSF21_Close_Place',// 关到位
        status3: 'AB.PLC2.DDXSF21_Open_Place',// 开到位
        propertise: [
            { no: 'AB.PLC2.DDXSF21_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC2.DDXSF21_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC2.DDXSF21_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC2.DDXSF21_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC2.DDXSF21_Return_AI', dataType: 'Float', name: '阀位反馈', unit: '%' },
            { no: 'AB.PLC2.DDXSF21_Fault_Timers', dataType: 'Long', name: '故障次数' }
        ]
    },
    {
        top: '89%', left: '64%',
        no: 'AB.PLC2.FIT221_OUT_AI',
        modalType: 1,
        modalData: {
            title: '缺氧A区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC2.FIT221_OUT_AI']
    },
    {
        top: '89%', left: '50%',
        no: 'AB.PLC2.FIT221_LLLJ',
        modalType: 1,
        modalData: {
            title: '缺氧A区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC2.FIT221_LLLJ']
    },
    {
        top: '79%', left: '64%',
        no: 'AB.PLC2.FIT220_OUT_AI',
        modalType: 1,
        modalData: {
            title: '缺氧B区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC2.FIT220_OUT_AI']
    },
    {
        top: '79%', left: '50%',
        no: 'AB.PLC2.FIT220_LLLJ',
        modalType: 1,
        modalData: {
            title: '缺氧B区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC2.FIT220_LLLJ']
    },
    {
        top: '70%', left: '64%',
        no: 'AB.PLC2.FIT222_OUT_AI',
        modalType: 1,
        modalData: {
            title: '缺氧C区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC2.FIT222_OUT_AI']
    },
    {
        top: '70%', left: '50%',
        no: 'AB.PLC2.FIT222_LLLJ',
        modalType: 1,
        modalData: {
            title: '缺氧C区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC2.FIT222_LLLJ']
    },
    {
        top: '61%', left: '64%',
        no: 'AB.PLC2.FIT219_OUT_AI',
        modalType: 1,
        modalData: {
            title: '厌氧区流量', unit: 'm³/h', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC2.FIT219_OUT_AI']
    },
    {
        top: '61%', left: '50%',
        no: 'AB.PLC2.FIT219_LLLJ',
        modalType: 1,
        modalData: {
            title: '厌氧区累计流量', unit: 'm³', formatter: (v) => parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC2.FIT219_LLLJ']
    }
]
export default data;