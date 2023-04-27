const data = [
    {
        top: '22%', left: '27%',
        no: 'TSJ.K1.K1_WN_FIT',
        modalType: 1,
        modalData: {
            title: '污泥流量A', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['TSJ.K1.K1_WN_FIT']
    },
    {
        top: '22%', left: '34%',
        no: 'TSJ.K1.K1_WNCL_LJLL',
        modalType: 1,
        modalData: {
            title: '污泥累计流量A', unit: 'm³',formatter: (v)=>parseInt(v),
        },
        allStatus: ['TSJ.K1.K1_WNCL_LJLL']
    },
    {
        top: '38%', left: '27%',
        no: 'TSJ.K2.K2_WN_FIT',
        modalType: 1,
        modalData: {
            title: '污泥流量B', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['TSJ.K2.K2_WN_FIT']
    },
    {
        top: '38%', left: '34%',
        no: 'TSJ.K2.K2_WNCL_LJLL',
        modalType: 1,
        modalData: {
            title: '污泥累计流量B', unit: 'm³', formatter: (v) => parseInt(v),
        },
        allStatus: ['TSJ.K2.K2_WNCL_LJLL']
    },
    {
        top: '65%', left: '24%',
        no: 'TSJ.K3.K3_WN_FIT',
        modalType: 1,
        modalData: {
            title: '污泥流量C', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['TSJ.K3.K3_WN_FIT']
    },
    {
        top: '65%', left: '32%',
        no: 'TSJ.K3.K3_WNCL_LJLL',
        modalType: 1,
        modalData: {
            title: '污泥累计流量C', unit: 'm³', formatter: (v) => parseInt(v),
        },
        allStatus: ['TSJ.K3.K3_WNCL_LJLL']
    },
    {
        top: '86%', left: '24%',
        no: 'TSJ.K4.K4_WN_FIT',
        modalType: 1,
        modalData: {
            title: '污泥流量D', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['TSJ.K4.K4_WN_FIT']
    },
    {
        top: '86%', left: '32%',
        no: 'TSJ.K4.K4_WNCL_LJLL',
        modalType: 1,
        modalData: {
            title: '污泥累计流量D', unit: 'm³', formatter: (v) => parseInt(v),
        },
        allStatus: ['TSJ.K4.K4_WNCL_LJLL']
    },
    {
        top: '8%', left: '72%',
        no: 'TSJ.K1.K1_Oil_Pressure',
        modalType: 1,
        modalData: {
            title: '油缸压力A', unit: 'Mpa',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['TSJ.K1.K1_Oil_Pressure']
    },
    {
        top: '25%', left: '73%',
        no: 'TSJ.K2.K2_Oil_Pressure',
        modalType: 1,
        modalData: {
            title: '油缸压力B', unit: 'Mpa',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['TSJ.K2.K2_Oil_Pressure']
    },
    {
        top: '40%', left: '74%',
        no: 'TSJ.K3.K3_Oil_Pressure',
        modalType: 1,
        modalData: {
            title: '油缸压力C', unit: 'Mpa',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['TSJ.K3.K3_Oil_Pressure']
    },
    {
        top: '60%', left: '76%',
        no: 'TSJ.K4.K4_Oil_Pressure',
        modalType: 1,
        modalData: {
            title: '油缸压力D', unit: 'Mpa',formatter: (v)=>parseFloat(v).toFixed(1),
        },
        allStatus: ['TSJ.K4.K4_Oil_Pressure']
    },
    {
        top: '27%', left: '16.4%', name: '污泥进料泵A', type:1,
        allStatus: ['TSJ.K1.K1_P06A_Fault', 'TSJ.K1.K1_P06A_Run'],
        status1: 'TSJ.K1.K1_P06A_Fault',//故障
        status2: 'TSJ.K1.K1_P06A_Run',//运行
        propertise: [
            { no: 'TSJ.K1.K1_P06A_Run', dataType: 'Boolean', name: '运行'},
            { no: 'TSJ.K1.K1_P06A_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K1.K1_P06A_FSFault', dataType: 'Boolean', name: '风扇故障'},
            { no: 'TSJ.K1.K1_P06A_Protect', dataType: 'Boolean', name: '干保护'},
            { no: 'TSJ.K1.K1_WNLJBYC_Err', dataType: 'Boolean', name: '远程错误'}
        ]
    },
    {
        top: '32%', left: '16.4%', name: '污泥进料泵B', type:1,
        allStatus: ['TSJ.K2.K2_P06B_Fault', 'TSJ.K2.K2_P06B_Run'],
        status1: 'TSJ.K2.K2_P06B_Fault',//故障
        status2: 'TSJ.K2.K2_P06B_Run',//运行
        propertise: [
            { no: 'TSJ.K2.K2_P06B_Run', dataType: 'Boolean', name: '运行' },
            { no: 'TSJ.K2.K2_P06B_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'TSJ.K2.K2_P06B_FSFault', dataType: 'Boolean', name: '风扇故障' },
            { no: 'TSJ.K2.K2_P06B_Protect', dataType: 'Boolean', name: '干保护' },
            { no: 'TSJ.K2.K2_WNLJBYC_Err', dataType: 'Boolean', name: '远程错误' }
        ]
    },
    {
        top: '71%', left: '11.4%', name: '污泥进料泵C', type:1,
        allStatus: ['TSJ.K3.K3_P06C_Fault', 'TSJ.K3.K3_P06C_Run'],
        status1: 'TSJ.K3.K3_P06C_Fault',//故障
        status2: 'TSJ.K3.K3_P06C_Run',//运行
        propertise: [
            { no: 'TSJ.K3.K3_P06C_Run', dataType: 'Boolean', name: '运行' },
            { no: 'TSJ.K3.K3_P06C_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'TSJ.K3.K3_P06C_FSFault', dataType: 'Boolean', name: '风扇故障' },
            { no: 'TSJ.K3.K3_P06C_Protect', dataType: 'Boolean', name: '干保护' },
            { no: 'TSJ.K3.K3_WNLJBYC_Err', dataType: 'Boolean', name: '远程错误' }
        ]
    },
    {
        top: '78%', left: '10.4%', name: '污泥进料泵D', type:1,
        allStatus: ['TSJ.K4.K4_P06D_Fault', 'TSJ.K4.K4_P06D_Run'],
        status1: 'TSJ.K4.K4_P06D_Fault',//故障
        status2: 'TSJ.K4.K4_P06D_Run',//运行
        propertise: [
            { no: 'TSJ.K4.K4_P06D_Run', dataType: 'Boolean', name: '运行' },
            { no: 'TSJ.K4.K4_P06D_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'TSJ.K4.K4_P06D_FSFault', dataType: 'Boolean', name: '风扇故障' },
            { no: 'TSJ.K4.K4_P06D_Protect', dataType: 'Boolean', name: '干保护' },
            { no: 'TSJ.K4.K4_WNLJBYC_Err', dataType: 'Boolean', name: '远程错误' }
        ]
    },
    {
        top: '29%', left: '35.4%', name: '污泥进料阀A', type: 5,
        allStatus: ['TSJ.K1.K1_SV1A_Open'],
        status1: 'TSJ.K1.K1_SV1A_Open',
        propertise: []
    },
    {
        top: '35%', left: '35.4%', name: '污泥进料阀B', type: 5,
        allStatus: ['TSJ.K2.K2_SV1B_Open'],
        status1: 'TSJ.K2.K2_SV1B_Open',
        propertise: []
    },
    {
        top: '73%', left: '34.4%', name: '污泥进料阀C', type: 5,
        allStatus: ['TSJ.K3.K3_SV1C_Open'],
        status1: 'TSJ.K3.K3_SV1C_Open',
        propertise: []
    },
    {
        top: '80%', left: '34%', name: '污泥进料阀D', type: 5,
        allStatus: ['TSJ.K4.K4_SV1D_Open'],
        status1: 'TSJ.K4.K4_SV1D_Open',
        propertise: []
    },
    {
        top: '10%', left: '45%', name: '滤布行走电机A', type: 5,
        allStatus: ['TSJ.K1.K1_M01A_Run'],
        status1: 'TSJ.K1.K1_M01A_Run',
        propertise: []
    },
    {
        top: '25%', left: '45%', name: '滤布行走电机B', type: 5,
        allStatus: ['TSJ.K2.K2_M01B_Run'],
        status1: 'TSJ.K2.K2_M01B_Run',
        propertise: []
    },
    {
        top: '45%', left: '45%', name: '滤布行走电机C', type: 5,
        allStatus: ['TSJ.K3.K3_M01C_Run'],
        status1: 'TSJ.K3.K3_M01C_Run',
        propertise: []
    },
    {
        top: '63%', left: '45.5%', name: '滤布行走电机D', type: 5,
        allStatus: ['TSJ.K4.K4_M01D_Run'],
        status1: 'TSJ.K4.K4_M01D_Run',
        propertise: []
    },
    {
        top: '10.2%', left: '69.7%', name: '液压泵A', type: 5,
        allStatus: ['TSJ.K1.K1_P01A_Run'],
        status1: 'TSJ.K1.K1_P01A_Run',
        propertise: []
    },
    {
        top: '25.4%', left: '71.1%', name: '液压泵B', type: 5,
        allStatus: ['TSJ.K2.K2_P01B_Run'],
        status1: 'TSJ.K2.K2_P01B_Run',
        propertise: []
    },
    {
        top: '43%', left: '72.7%', name: '液压泵C', type: 5,
        allStatus: ['TSJ.K3.K3_P01C_Run'],
        status1: 'TSJ.K3.K3_P01C_Run',
        propertise: []
    },
    {
        top: '62.7%', left: '74.7%', name: '液压泵D', type: 5,
        allStatus: ['TSJ.K4.K4_P01D_Run'],
        status1: 'TSJ.K4.K4_P01D_Run',
        propertise: []
    },
    {
        top: '15%', left: '68%', name: '输送机15A', type: 1,
        allStatus: ['TSJ.K2.K2_K15A_Fault', 'TSJ.K2.K2_K15A_Run'],
        status1: 'TSJ.K2.K2_K15A_Fault',//故障
        status2: 'TSJ.K2.K2_K15A_Run',//运行
        propertise: []
    },
    {
        top: '83%', left: '73.5%', name: '输送机15B', type: 1,
        allStatus: ['TSJ.K3.K3_K15B_Fault', 'TSJ.K3.K3_K15B_Run'],
        status1: 'TSJ.K3.K3_K15B_Fault',//故障
        status2: 'TSJ.K3.K3_K15B_Run',//运行
        propertise: []
    },
    {
        top: '20%', left: '67.5%', name: '输送机13A', type: 1,
        allStatus: ['TSJ.K1.K1_K13A_Fault', 'TSJ.K1.K1_K13A_Run'],
        status1: 'TSJ.K1.K1_K13A_Fault',//故障
        status2: 'TSJ.K1.K1_K13A_Run',//运行
        propertise: []
    },
    {
        top: '35%', left: '68.5%', name: '输送机13A', type: 1,
        allStatus: ['TSJ.K2.K2_K13A_Fault', 'TSJ.K2.K2_K13A_Run'],
        status1: 'TSJ.K2.K2_K13A_Fault',//故障
        status2: 'TSJ.K2.K2_K13A_Run',//运行
        propertise: []
    },
    {
        top: '53%', left: '70%', name: '输送机13B', type: 1,
        allStatus: ['TSJ.K3.K3_K13B_Fault', 'TSJ.K3.K3_K13B_Run'],
        status1: 'TSJ.K3.K3_K13B_Fault',//故障
        status2: 'TSJ.K3.K3_K13B_Run',//运行
        propertise: []
    },
    {
        top: '73%', left: '71.5%', name: '输送机13B', type: 1,
        allStatus: ['TSJ.K4.K4_K13B_Fault', 'TSJ.K4.K4_K13B_Run'],
        status1: 'TSJ.K4.K4_K13B_Fault',//故障
        status2: 'TSJ.K4.K4_K13B_Run',//运行
        propertise: []
    },
    {
        top: '20%', left: '69.5%', name: '输送机14A', type:1,
        allStatus: ['TSJ.K1.K1_K14A_Fault', 'TSJ.K1.K1_K14A_Run'],
        status1: 'TSJ.K1.K1_K14A_Fault',//故障
        status2: 'TSJ.K1.K1_K14A_Run',//运行
        propertise: []
    },
    {
        top: '35%', left: '70.5%', name: '输送机14A', type:1,
        allStatus: ['TSJ.K2.K2_K14A_Fault', 'TSJ.K2.K2_K14A_Run'],
        status1: 'TSJ.K2.K2_K14A_Fault',//故障
        status2: 'TSJ.K2.K2_K14A_Run',//运行
        propertise: []
    },
    {
        top: '53%', left: '72%', name: '输送机14B', type:1,
        allStatus: ['TSJ.K3.K3_K14B_Fault', 'TSJ.K3.K3_K14B_Run'],
        status1: 'TSJ.K3.K3_K14B_Fault',//故障
        status2: 'TSJ.K3.K3_K14B_Run',//运行
        propertise: []
    },
    {
        top: '74%', left: '73.7%', name: '输送机14B', type: 1,
        allStatus: ['TSJ.K4.K4_K14B_Fault', 'TSJ.K4.K4_K14B_Run'],
        status1: 'TSJ.K4.K4_K14B_Fault',//故障
        status2: 'TSJ.K4.K4_K14B_Run',//运行
        propertise: []
    },
    {
        top: '19%', left: '76.5%', name: '真空泵A', type:1,
        allStatus: ['TSJ.K1.K1_P08A_Fault', 'TSJ.K1.K1_P08A_Run'],
        status1: 'TSJ.K1.K1_P08A_Fault',//故障
        status2: 'TSJ.K1.K1_P08A_Run',//运行
        propertise: [
            { no: 'TSJ.K1.K1_P08A_Run', dataType: 'Boolean', name: '运行'},
            { no: 'TSJ.K1.K1_P08A_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'TSJ.K1.K1_ZKBYC_Err', dataType: 'Boolean', name: '远程错误'},
        ]
    },
    {
        top: '34%', left: '77.5%', name: '真空泵B', type:1,
        allStatus: ['TSJ.K2.K2_P08B_Fault', 'TSJ.K2.K2_P08B_Run'],
        status1: 'TSJ.K2.K2_P08B_Fault',//故障
        status2: 'TSJ.K2.K2_P08B_Run',//运行
        propertise: [
            { no: 'TSJ.K2.K2_P08B_Run', dataType: 'Boolean', name: '运行' },
            { no: 'TSJ.K2.K2_P08B_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'TSJ.K1.K1_ZKBYC_Err', dataType: 'Boolean', name: '远程错误' },
        ]
    },
    {
        top: '53%', left: '78.5%', name: '真空泵C', type:1,
        allStatus: ['TSJ.K3.K3_P08C_Fault', 'TSJ.K3.K3_P08C_Run'],
        status1: 'TSJ.K3.K3_P08C_Fault',//故障
        status2: 'TSJ.K3.K3_P08C_Run',//运行
        propertise: [
            { no: 'TSJ.K3.K3_P08C_Run', dataType: 'Boolean', name: '运行' },
            { no: 'TSJ.K3.K3_P08C_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'TSJ.K1.K1_ZKBYC_Err', dataType: 'Boolean', name: '远程错误' },
        ]
    },
    {
        top: '73%', left: '79.5%', name: '真空泵D', type:1,
        allStatus: ['TSJ.K4.K4_P08D_Fault', 'TSJ.K4.K4_P08D_Run'],
        status1: 'TSJ.K4.K4_P08D_Fault',//故障
        status2: 'TSJ.K4.K4_P08D_Run',//运行
        propertise: [
            { no: 'TSJ.K4.K4_P08D_Run', dataType: 'Boolean', name: '运行' },
            { no: 'TSJ.K4.K4_P08D_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'TSJ.K1.K1_ZKBYC_Err', dataType: 'Boolean', name: '远程错误' },
        ]
    },
    {
        top: '21%', left: '88.5%', name: '输送机07A', type:1,
        allStatus: ['TSJ.K1.K1_K07A_Fault', 'TSJ.K1.K1_K07A_Run'],
        status1: 'TSJ.K1.K1_K07A_Fault',//故障
        status2: 'TSJ.K1.K1_K07A_Run',//运行
        propertise: []
    },
    {
        top: '33%', left: '90.5%', name: '输送机07B', type:1,
        allStatus: ['TSJ.K4.K4_K07B_Fault', 'TSJ.K4.K4_K07B_Run'],
        status1: 'TSJ.K4.K4_K07B_Fault',//故障
        status2: 'TSJ.K4.K4_K07B_Run',//运行
        propertise: []
    },
    {
        top: '0%', left: '0%', name: '1#气动阀箱', modalType: 5,
        allStatus: [],
        propertise: [
            { no: 'TSJ.K1.K1_SV1A_Open', dataType: 'Boolean', name: '污泥进料阀' },
            { no: 'TSJ.K1.K1_SV2A_Open', dataType: 'Boolean', name: '污泥回流阀' },
            { no: 'TSJ.K1.K1_SV3A_Open', dataType: 'Boolean', name: '隔膜挤压阀' },
            { no: 'TSJ.K1.K1_SV4A_Open', dataType: 'Boolean', name: '中芯清洗阀' },
            { no: 'TSJ.K1.K1_SV5A_Open', dataType: 'Boolean', name: '中芯回吹阀' },
            { no: 'TSJ.K1.K1_SV6A_Open', dataType: 'Boolean', name: '隔膜泄压阀' },
            { no: 'TSJ.K1.K1_SV7A_Open', dataType: 'Boolean', name: '隔膜真空阀' },
            { no: 'TSJ.K1.K1_SV8A_Open', dataType: 'Boolean', name: '隔膜回吹阀' },
            { no: 'TSJ.K1.K1_SWV1_Open', dataType: 'Boolean', name: '滤布清法阀1' },
            { no: 'TSJ.K1.K1_SWV2_Open', dataType: 'Boolean', name: '滤布清法阀2' },
            { no: 'TSJ.K1.K1_SWV3_Open', dataType: 'Boolean', name: '滤布清法阀3' },
            { no: 'TSJ.K1.K1_SWV4_Open', dataType: 'Boolean', name: '滤布清法阀4' },
        ]
    },
    {
        top: '6%', left: '%', name: '2#气动阀箱', modalType: 5,
        allStatus: [],
        propertise: [
            { no: 'TSJ.K2.K2_SV1B_Open', dataType: 'Boolean', name: '污泥进料阀' },
            { no: 'TSJ.K2.K2_SV2B_Open', dataType: 'Boolean', name: '污泥回流阀' },
            { no: 'TSJ.K2.K2_SV3B_Open', dataType: 'Boolean', name: '隔膜挤压阀' },
            { no: 'TSJ.K2.K2_SV4B_Open', dataType: 'Boolean', name: '中芯清洗阀' },
            { no: 'TSJ.K2.K2_SV5B_Open', dataType: 'Boolean', name: '中芯回吹阀' },
            { no: 'TSJ.K2.K2_SV6B_Open', dataType: 'Boolean', name: '隔膜泄压阀' },
            { no: 'TSJ.K2.K2_SV7B_Open', dataType: 'Boolean', name: '隔膜真空阀' },
            { no: 'TSJ.K2.K2_SV8B_Open', dataType: 'Boolean', name: '隔膜回吹阀' },
            { no: 'TSJ.K2.K2_SWV1_Open', dataType: 'Boolean', name: '滤布清法阀1' },
            { no: 'TSJ.K2.K2_SWV2_Open', dataType: 'Boolean', name: '滤布清法阀2' },
            { no: 'TSJ.K2.K2_SWV3_Open', dataType: 'Boolean', name: '滤布清法阀3' },
            { no: 'TSJ.K2.K2_SWV4_Open', dataType: 'Boolean', name: '滤布清法阀4' },
        ]
    },
    {
        top: '12%', left: '0%', name: '3#气动阀箱', modalType: 5,
        allStatus: [],
        propertise: [
            { no: 'TSJ.K3.K3_SV1C_Open', dataType: 'Boolean', name: '污泥进料阀' },
            { no: 'TSJ.K3.K3_SV2C_Open', dataType: 'Boolean', name: '污泥回流阀' },
            { no: 'TSJ.K3.K3_SV3C_Open', dataType: 'Boolean', name: '隔膜挤压阀' },
            { no: 'TSJ.K3.K3_SV4C_Open', dataType: 'Boolean', name: '中芯清洗阀' },
            { no: 'TSJ.K3.K3_SV5C_Open', dataType: 'Boolean', name: '中芯回吹阀' },
            { no: 'TSJ.K3.K3_SV6C_Open', dataType: 'Boolean', name: '隔膜泄压阀' },
            { no: 'TSJ.K3.K3_SV7C_Open', dataType: 'Boolean', name: '隔膜真空阀' },
            { no: 'TSJ.K3.K3_SV8C_Open', dataType: 'Boolean', name: '隔膜回吹阀' },
            { no: 'TSJ.K3.K3_SWV1_Open', dataType: 'Boolean', name: '滤布清法阀1' },
            { no: 'TSJ.K3.K3_SWV2_Open', dataType: 'Boolean', name: '滤布清法阀2' },
            { no: 'TSJ.K3.K3_SWV3_Open', dataType: 'Boolean', name: '滤布清法阀3' },
            { no: 'TSJ.K3.K3_SWV4_Open', dataType: 'Boolean', name: '滤布清法阀4' },
        ]
    },
    {
        top: '18%', left: '0%', name: '4#气动阀箱', modalType: 5,
        allStatus: [],
        propertise: [
            { no: 'TSJ.K4.K4_SV1D_Open', dataType: 'Boolean', name: '污泥进料阀' },
            { no: 'TSJ.K4.K4_SV2D_Open', dataType: 'Boolean', name: '污泥回流阀' },
            { no: 'TSJ.K4.K4_SV3D_Open', dataType: 'Boolean', name: '隔膜挤压阀' },
            { no: 'TSJ.K4.K4_SV4D_Open', dataType: 'Boolean', name: '中芯清洗阀' },
            { no: 'TSJ.K4.K4_SV5D_Open', dataType: 'Boolean', name: '中芯回吹阀' },
            { no: 'TSJ.K4.K4_SV6D_Open', dataType: 'Boolean', name: '隔膜泄压阀' },
            { no: 'TSJ.K4.K4_SV7D_Open', dataType: 'Boolean', name: '隔膜真空阀' },
            { no: 'TSJ.K4.K4_SV8D_Open', dataType: 'Boolean', name: '隔膜回吹阀' },
            { no: 'TSJ.K4.K4_SWV1_Open', dataType: 'Boolean', name: '滤布清法阀1' },
            { no: 'TSJ.K4.K4_SWV2_Open', dataType: 'Boolean', name: '滤布清法阀2' },
            { no: 'TSJ.K4.K4_SWV3_Open', dataType: 'Boolean', name: '滤布清法阀3' },
            { no: 'TSJ.K4.K4_SWV4_Open', dataType: 'Boolean', name: '滤布清法阀4' },
        ]
    },
    {
        top: '10%', left: '50%', name: '1#板框压滤脱水机', modalType: 5,
        allStatus: ['TSJ.K1.K1_LB_Close','TSJ.K1.K1_WN_JL','TSJ.K1.K1_GM_JY','TSJ.K1.K1_GM_XY','TSJ.K1.K1_LB_Open','TSJ.K1.K1_WN_XL','TSJ.K1.K1_LB_QX'],
        'TSJ.K1.K1_LB_Close': '滤板关闭',
        'TSJ.K1.K1_WN_JL': '污泥进料',
        'TSJ.K1.K1_GM_JY': '隔膜挤压',
        'TSJ.K1.K1_GM_XY': '隔膜卸压',
        'TSJ.K1.K1_LB_Open': '滤板打开',
        'TSJ.K1.K1_WN_XL': '污泥卸料',
        'TSJ.K1.K1_LB_QX': '滤布清洗',
        propertise: [
            { no: 'TSJ.K1.K1_LB_UpP', dataType: 'Boolean', name: '滤布上位置'},
            { no: 'TSJ.K1.K1_Estop', dataType: 'Boolean', name: '紧急停止'},
            { no: 'TSJ.K1.K1_Pro_Lag', dataType: 'Boolean', name: '过程滞后'},
            { no: 'TSJ.K1.K1_LB_UnP', dataType: 'Boolean', name: '滤布下位置'},
            { no: 'TSJ.K1.K1_LBXZ_GZ', dataType: 'Boolean', name: '滤布行走过载'},
            { no: 'TSJ.K1.K1_LBWZ_EX', dataType: 'Boolean', name: '滤布位置异常'},
            { no: 'TSJ.K1.K1_LB_Open', dataType: 'Boolean', name: '滤板打开'},
            { no: 'TSJ.K1.K1_GMZK_EX', dataType: 'Boolean', name: '隔膜真空异常'},
            { no: 'TSJ.K1.K1_SCYW_LL', dataType: 'Boolean', name: '储水槽低液位'},
            { no: 'TSJ.K1.K1_DSP_CloseP', dataType: 'Boolean', name: '滴水盘关闭'},
            { no: 'TSJ.K1.K1_KQYL_LL', dataType: 'Boolean', name: '空气低压'},
            { no: 'TSJ.K1.K1_Motor_Fault', dataType: 'Boolean', name: '马达故障'},
            { no: 'TSJ.K1.K1_DSP_OpenP', dataType: 'Boolean', name: '滴水盘打开'},
            { no: 'TSJ.K1.K1_QDF_Fault', dataType: 'Boolean', name: '气动阀故障'},
            { no: 'TSJ.K1.K1_XWKG_EX', dataType: 'Boolean', name: '限位开关异常'},
            { no: 'TSJ.K1.K1_LiSwitch', dataType: 'Boolean', name: '光电开关'},
            { no: 'TSJ.K1.K1_PS11A_Fault', dataType: 'Boolean', name: '仪表气低压PS11'},
            { no: 'TSJ.K1.K1_PS12A_Fault', dataType: 'Boolean', name: '压缩气低压PS12'},
            { no: 'TSJ.K1.K1_PS1', dataType: 'Boolean', name: 'PS1'},
            { no: 'TSJ.K1.K1_DSPKGXW_Fault', dataType: 'Boolean', name: '滴水盘限位故障'},
            { no: 'TSJ.K1.K1_LBSXXW_Fault', dataType: 'Boolean', name: '滤布限位故障'},
            { no: 'TSJ.K1.K1_LB_UpLimit', dataType: 'Boolean', name: '滤布上极限位'},
            { no: 'TSJ.K1.K1_LBSS_XW', dataType: 'Boolean', name: '滤布上升超限位'},
            { no: 'TSJ.K1.K1_LBXJ_XW', dataType: 'Boolean', name: '滤布下降超限位'},
            { no: 'TSJ.K1.K1_LB_UnLimit', dataType: 'Boolean', name: '滤布下极限位'},
            { no: 'TSJ.K1.K1_LBKKWX_Fault', dataType: 'Boolean', name: '滤板限位故障'},
            { no: 'TSJ.K1.K1_YCXZ_fault', dataType: 'Boolean', name: '远程选择错误'},
        ]
    },
    {
        top: '25%', left: '50%', name: '2#板框压滤脱水机', modalType: 5,
        allStatus: ['TSJ.K2.K2_LB_Close','TSJ.K2.K2_WN_JL','TSJ.K2.K2_GM_JY','TSJ.K2.K2_GM_XY','TSJ.K2.K2_LB_Open','TSJ.K2.K2_WN_XL','TSJ.K2.K2_LB_QX'],
        'TSJ.K2.K2_LB_Close': '滤板关闭',
        'TSJ.K2.K2_WN_JL': '污泥进料',
        'TSJ.K2.K2_GM_JY': '隔膜挤压',
        'TSJ.K2.K2_GM_XY': '隔膜卸压',
        'TSJ.K2.K2_LB_Open': '滤板打开',
        'TSJ.K2.K2_WN_XL': '污泥卸料',
        'TSJ.K2.K2_LB_QX': '滤布清洗',
        propertise: [
            { no: 'TSJ.K2.K2_LB_UpP', dataType: 'Boolean', name: '滤布上位置'},
            { no: 'TSJ.K2.K2_Estop', dataType: 'Boolean', name: '紧急停止'},
            { no: 'TSJ.K2.K2_Pro_Lag', dataType: 'Boolean', name: '过程滞后'},
            { no: 'TSJ.K2.K2_LB_UnP', dataType: 'Boolean', name: '滤布下位置'},
            { no: 'TSJ.K2.K2_LBXZ_GZ', dataType: 'Boolean', name: '滤布行走过载'},
            { no: 'TSJ.K2.K2_LBWZ_EX', dataType: 'Boolean', name: '滤布位置异常'},
            { no: 'TSJ.K2.K2_LB_Open', dataType: 'Boolean', name: '滤板打开'},
            { no: 'TSJ.K2.K2_GMZK_EX', dataType: 'Boolean', name: '隔膜真空异常'},
            { no: 'TSJ.K2.K2_SCYW_LL', dataType: 'Boolean', name: '储水槽低液位'},
            { no: 'TSJ.K2.K2_DSP_CloseP', dataType: 'Boolean', name: '滴水盘关闭'},
            { no: 'TSJ.K2.K2_KQYL_LL', dataType: 'Boolean', name: '空气低压'},
            { no: 'TSJ.K2.K2_Motor_Fault', dataType: 'Boolean', name: '马达故障'},
            { no: 'TSJ.K2.K2_DSP_OpenP', dataType: 'Boolean', name: '滴水盘打开'},
            { no: 'TSJ.K2.K2_QDF_Fault', dataType: 'Boolean', name: '气动阀故障'},
            { no: 'TSJ.K2.K2_XWKG_EX', dataType: 'Boolean', name: '限位开关异常'},
            { no: 'TSJ.K2.K2_LiSwitch', dataType: 'Boolean', name: '光电开关'},
            { no: 'TSJ.K2.K2_PS11B_Fault', dataType: 'Boolean', name: '仪表气低压PS11'},
            { no: 'TSJ.K2.K2_PS12B_Fault', dataType: 'Boolean', name: '压缩气低压PS12'},
            { no: 'TSJ.K2.K2_PS1', dataType: 'Boolean', name: 'PS1'},
            { no: 'TSJ.K2.K2_DSPKGXW_Fault', dataType: 'Boolean', name: '滴水盘限位故障'},
            { no: 'TSJ.K2.K2_LBSXXW_Fault', dataType: 'Boolean', name: '滤布限位故障'},
            { no: 'TSJ.K2.K2_LB_UpLimit', dataType: 'Boolean', name: '滤布上极限位'},
            { no: 'TSJ.K2.K2_LBSS_XW', dataType: 'Boolean', name: '滤布上升超限位'},
            { no: 'TSJ.K2.K2_LBXJ_XW', dataType: 'Boolean', name: '滤布下降超限位'},
            { no: 'TSJ.K2.K2_LB_UnLimit', dataType: 'Boolean', name: '滤布下极限位'},
            { no: 'TSJ.K2.K2_LBKKWX_Fault', dataType: 'Boolean', name: '滤板限位故障'},
            { no: 'TSJ.K2.K2_YCXZ_fault', dataType: 'Boolean', name: '远程选择错误'},
        ]
    },
    {
        top: '42%', left: '50%', name: '3#板框压滤脱水机', modalType: 5,
        allStatus: ['TSJ.K3.K3_LB_Close','TSJ.K3.K3_WN_JL','TSJ.K3.K3_GM_JY','TSJ.K3.K3_GM_XY','TSJ.K3.K3_LB_Open','TSJ.K3.K3_WN_XL','TSJ.K3.K3_LB_QX'],
        'TSJ.K3.K3_LB_Close': '滤板关闭',
        'TSJ.K3.K3_WN_JL': '污泥进料',
        'TSJ.K3.K3_GM_JY': '隔膜挤压',
        'TSJ.K3.K3_GM_XY': '隔膜卸压',
        'TSJ.K3.K3_LB_Open': '滤板打开',
        'TSJ.K3.K3_WN_XL': '污泥卸料',
        'TSJ.K3.K3_LB_QX': '滤布清洗',
        propertise: [
            { no: 'TSJ.K3.K3_LB_UpP', dataType: 'Boolean', name: '滤布上位置'},
            { no: 'TSJ.K3.K3_Estop', dataType: 'Boolean', name: '紧急停止'},
            { no: 'TSJ.K3.K3_Pro_Lag', dataType: 'Boolean', name: '过程滞后'},
            { no: 'TSJ.K3.K3_LB_UnP', dataType: 'Boolean', name: '滤布下位置'},
            { no: 'TSJ.K3.K3_LBXZ_GZ', dataType: 'Boolean', name: '滤布行走过载'},
            { no: 'TSJ.K3.K3_LBWZ_EX', dataType: 'Boolean', name: '滤布位置异常'},
            { no: 'TSJ.K3.K3_LB_Open', dataType: 'Boolean', name: '滤板打开'},
            { no: 'TSJ.K3.K3_GMZK_EX', dataType: 'Boolean', name: '隔膜真空异常'},
            { no: 'TSJ.K3.K3_SCYW_LL', dataType: 'Boolean', name: '储水槽低液位'},
            { no: 'TSJ.K3.K3_DSP_CloseP', dataType: 'Boolean', name: '滴水盘关闭'},
            { no: 'TSJ.K3.K3_KQYL_LL', dataType: 'Boolean', name: '空气低压'},
            { no: 'TSJ.K3.K3_Motor_Fault', dataType: 'Boolean', name: '马达故障'},
            { no: 'TSJ.K3.K3_DSP_OpenP', dataType: 'Boolean', name: '滴水盘打开'},
            { no: 'TSJ.K3.K3_QDF_Fault', dataType: 'Boolean', name: '气动阀故障'},
            { no: 'TSJ.K3.K3_XWKG_EX', dataType: 'Boolean', name: '限位开关异常'},
            { no: 'TSJ.K3.K3_LiSwitch', dataType: 'Boolean', name: '光电开关'},
            { no: 'TSJ.K3.K3_PS11A_Fault', dataType: 'Boolean', name: '仪表气低压PS11'},
            { no: 'TSJ.K3.K3_PS12A_Fault', dataType: 'Boolean', name: '压缩气低压PS12'},
            { no: 'TSJ.K3.K3_PS1', dataType: 'Boolean', name: 'PS1'},
            { no: 'TSJ.K3.K3_DSPKGXW_Fault', dataType: 'Boolean', name: '滴水盘限位故障'},
            { no: 'TSJ.K3.K3_LBSXXW_Fault', dataType: 'Boolean', name: '滤布限位故障'},
            { no: 'TSJ.K3.K3_LB_UpLimit', dataType: 'Boolean', name: '滤布上极限位'},
            { no: 'TSJ.K3.K3_LBSS_XW', dataType: 'Boolean', name: '滤布上升超限位'},
            { no: 'TSJ.K3.K3_LBXJ_XW', dataType: 'Boolean', name: '滤布下降超限位'},
            { no: 'TSJ.K3.K3_LB_UnLimit', dataType: 'Boolean', name: '滤布下极限位'},
            { no: 'TSJ.K3.K3_LBKKWX_Fault', dataType: 'Boolean', name: '滤板限位故障'},
            { no: 'TSJ.K3.K3_YCXZ_fault', dataType: 'Boolean', name: '远程选择错误'},
        ]
    },
    {
        top: '62%', left: '50%', name: '4#板框压滤脱水机', modalType: 5,
        allStatus: ['TSJ.K4.K4_LB_Close','TSJ.K4.K4_WN_JL','TSJ.K4.K4_GM_JY','TSJ.K4.K4_GM_XY','TSJ.K4.K4_LB_Open','TSJ.K4.K4_WN_XL','TSJ.K4.K4_LB_QX'],
        'TSJ.K4.K4_LB_Close': '滤板关闭',
        'TSJ.K4.K4_WN_JL': '污泥进料',
        'TSJ.K4.K4_GM_JY': '隔膜挤压',
        'TSJ.K4.K4_GM_XY': '隔膜卸压',
        'TSJ.K4.K4_LB_Open': '滤板打开',
        'TSJ.K4.K4_WN_XL': '污泥卸料',
        'TSJ.K4.K4_LB_QX': '滤布清洗',
        propertise: [
            { no: 'TSJ.K4.K4_LB_UpP', dataType: 'Boolean', name: '滤布上位置'},
            { no: 'TSJ.K4.K4_Estop', dataType: 'Boolean', name: '紧急停止'},
            { no: 'TSJ.K4.K4_SV3D_Open', dataType: 'Boolean', name: '过程滞后'},
            { no: 'TSJ.K4.K4_Pro_Lag', dataType: 'Boolean', name: '滤布下位置'},
            { no: 'TSJ.K4.K4_LBXZ_GZ', dataType: 'Boolean', name: '滤布行走过载'},
            { no: 'TSJ.K4.K4_LBWZ_EX', dataType: 'Boolean', name: '滤布位置异常'},
            { no: 'TSJ.K4.K4_LB_Open', dataType: 'Boolean', name: '滤板打开'},
            { no: 'TSJ.K4.K4_GMZK_EX', dataType: 'Boolean', name: '隔膜真空异常'},
            { no: 'TSJ.K4.K4_SCYW_LL', dataType: 'Boolean', name: '储水槽低液位'},
            { no: 'TSJ.K4.K4_DSP_CloseP', dataType: 'Boolean', name: '滴水盘关闭'},
            { no: 'TSJ.K4.K4_KQYL_LL', dataType: 'Boolean', name: '空气低压'},
            { no: 'TSJ.K4.K4_Motor_Fault', dataType: 'Boolean', name: '马达故障'},
            { no: 'TSJ.K4.K4_DSP_OpenP', dataType: 'Boolean', name: '滴水盘打开'},
            { no: 'TSJ.K4.K4_QDF_Fault', dataType: 'Boolean', name: '气动阀故障'},
            { no: 'TSJ.K4.K4_XWKG_EX', dataType: 'Boolean', name: '限位开关异常'},
            { no: 'TSJ.K4.K4_LiSwitch', dataType: 'Boolean', name: '光电开关'},
            { no: 'TSJ.K4.K4_PS11B_Fault', dataType: 'Boolean', name: '仪表气低压PS11'},
            { no: 'TSJ.K4.K4_PS12B_Fault', dataType: 'Boolean', name: '压缩气低压PS12'},
            { no: 'TSJ.K4.K4_PS1', dataType: 'Boolean', name: 'PS1'},
            { no: 'TSJ.K4.K4_DSPKGXW_Fault', dataType: 'Boolean', name: '滴水盘限位故障'},
            { no: 'TSJ.K4.K4_LBSXXW_Fault', dataType: 'Boolean', name: '滤布限位故障'},
            { no: 'TSJ.K4.K4_LB_UpLimit', dataType: 'Boolean', name: '滤布上极限位'},
            { no: 'TSJ.K4.K4_LBSS_XW', dataType: 'Boolean', name: '滤布上升超限位'},
            { no: 'TSJ.K4.K4_LBXJ_XW', dataType: 'Boolean', name: '滤布下降超限位'},
            { no: 'TSJ.K4.K4_LB_UnLimit', dataType: 'Boolean', name: '滤布下极限位'},
            { no: 'TSJ.K4.K4_LBKKWX_Fault', dataType: 'Boolean', name: '滤板限位故障'},
            { no: 'TSJ.K4.K4_YCXZ_fault', dataType: 'Boolean', name: '远程选择错误'},
        ]
    },
]
export default data;