const data = [
    {
        top: '7%', left: '27%',
        no: 'HNCDC.T12.T12_WLIT602_OUT',
        modalType: 1,
        modalData: {
            title: '污泥界面仪2', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['HNCDC.T12.T12_WLIT602_OUT']
    },
    {
        top: '7%', left: '67%',
        no: 'HNCDC.T12.T12_WLIT601_OUT',
        modalType: 1,
        modalData: {
            title: '污泥界面仪1', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['HNCDC.T12.T12_WLIT601_OUT']
    },
    {
        top: '63%', left: '38%',
        no: 'HNCDC.T12.T12_SP_FIT102_OUT',
        modalType: 1,
        modalData: {
            title: '污泥流量2', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['HNCDC.T12.T12_SP_FIT102_OUT']
    },
    {
        top: '63%', left: '57%',
        no: 'HNCDC.T12.T12_SP_FIT101_OUT',
        modalType: 1,
        modalData: {
            title: '污泥流量1', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['HNCDC.T12.T12_SP_FIT101_OUT']
    },
    {
        top: '84%', left: '33%',
        no: 'HNCDC.T12.T12_MP_FIT102_OUT',
        modalType: 1,
        modalData: {
            title: '磁粉流量2', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['HNCDC.T12.T12_MP_FIT102_OUT']
    },
    {
        top: '84%', left: '62%',
        no: 'HNCDC.T12.T12_MP_FIT101_OUT',
        modalType: 1,
        modalData: {
            title: '磁粉流量1', unit: 'm³/h',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['HNCDC.T12.T12_MP_FIT101_OUT']
    },
    {
        top: '93%', left: '38%',
        no: 'HNCDC.T12.T12_ULG101_OUT',
        modalType: 1,
        modalData: {
            title: '液位计', unit: 'm',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['HNCDC.T12.T12_ULG101_OUT']
    },
    {
        top: '90%', left: '78%',
        no: 'HNCDC.T12.T12_TP601_OUT',
        modalType: 1,
        modalData: {
            title: '进水总磷', unit: 'mg/L',formatter: (v)=>parseFloat(v).toFixed(2),
        
        },
        allStatus: ['HNCDC.T12.T12_TP601_OUT']
    },
    {
        top: '20%', left: '78%',
        no: 'HNCDC.T34.T34_T1_PAC',
        modalType: 1,
        modalData: {
            title: '1#PAC计算量', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['HNCDC.T34.T34_T1_PAC']
    },
    {
        top: '20%', left: '88%',
        no: 'HNCDC.T34.T34_T1_PAM',
        modalType: 1,
        modalData: {
            title: '1#PAM计算量', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['HNCDC.T34.T34_T1_PAM']
    },
    {
        top: '30%', left: '78%',
        no: 'HNCDC.T34.T34_T2_PAC',
        modalType: 1,
        modalData: {
            title: '2#PAC计算量', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['HNCDC.T34.T34_T2_PAC']
    },
    {
        top: '30%', left: '88%',
        no: 'HNCDC.T34.T34_T2_PAM',
        modalType: 1,
        modalData: {
            title: '2#PAM计算量', unit: 'L/h',formatter: (v)=>parseFloat(v).toFixed(1),
        
        },
        allStatus: ['HNCDC.T34.T34_T2_PAM']
    },
    
    {
        top: '0%', left: '37.5%', name: '12组混凝沉淀池_出水闸门2', type: 2,
        allStatus: ['HNCDC.T12.T12_V104_Fault', 'HNCDC.T12.T12_V104_Close_Plcae', 'HNCDC.T12.T12_V104_Open_Plcae'],
        status1: 'HNCDC.T12.T12_V104_Fault',
        status2: 'HNCDC.T12.T12_V104_Close_Plcae',
        status3: 'HNCDC.T12.T12_V104_Open_Plcae',
        propertise: [
            { no: 'HNCDC.T12.T12_V104_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_V104_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'HNCDC.T12.T12_V104_Open_Plcae', dataType: 'Boolean', name: '全开' },
            { no: 'HNCDC.T12.T12_V104_Close_Plcae', dataType: 'Boolean', name: '全关' },
        ]
    },
    {
        top: '0%', left: '62.5%', name: '12组混凝沉淀池_出水闸门1', type:2,
        allStatus: ['HNCDC.T12.T12_V103_Fault', 'HNCDC.T12.T12_V103_Close_Plcae', 'HNCDC.T12.T12_V103_Open_Plcae'],
        status1: 'HNCDC.T12.T12_V103_Fault',
        status2: 'HNCDC.T12.T12_V103_Close_Plcae',
        status3: 'HNCDC.T12.T12_V103_Open_Plcae',
        propertise: [
            { no: 'HNCDC.T12.T12_V103_Rem', dataType: 'Boolean', name: '远控'},
            { no: 'HNCDC.T12.T12_V103_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'HNCDC.T12.T12_V103_Open_Plcae', dataType: 'Boolean', name: '全开'},
            { no: 'HNCDC.T12.T12_V103_Close_Plcae', dataType: 'Boolean', name: '全关'},
        ]
    },
    {
        top: '23.5%', left: '37%', name: '12组混凝沉淀池_浓缩刮泥机2', type: 1,
        allStatus: ['HNCDC.T12.T12_M204_Fault', 'HNCDC.T12.T12_M204_Run'],
        status1: 'HNCDC.T12.T12_M204_Fault',//故障
        status2: 'HNCDC.T12.T12_M204_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M204_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M204_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M204_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '23.5%', left: '63%', name: '12组混凝沉淀池_浓缩刮泥机1', type:1,
        allStatus: ['HNCDC.T12.T12_M104_Fault', 'HNCDC.T12.T12_M104_Run'],
        status1: 'HNCDC.T12.T12_M104_Fault',//故障
        status2: 'HNCDC.T12.T12_M104_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M104_Rem', dataType: 'Boolean', name: '远控'},
            { no: 'HNCDC.T12.T12_M104_Run', dataType: 'Boolean', name: '运行'},
            { no: 'HNCDC.T12.T12_M104_Fault', dataType: 'Boolean', name: '故障'}
        ]
    },
    {
        top: '57.5%', left: '31.5%', name: '12组混凝沉淀池_絮凝搅拌器2', type:1,
        allStatus: ['HNCDC.T12.T12_M203_Fault', 'HNCDC.T12.T12_M203_Run'],
        status1: 'HNCDC.T12.T12_M203_Fault',//故障
        status2: 'HNCDC.T12.T12_M203_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M203_Rem', dataType: 'Boolean', name: '远控'},
            { no: 'HNCDC.T12.T12_M203_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M203_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '57.5%', left: '68.5%', name: '12组混凝沉淀池_絮凝搅拌器1', type: 1,
        allStatus: ['HNCDC.T12.T12_M103_Fault', 'HNCDC.T12.T12_M103_Run'],
        status1: 'HNCDC.T12.T12_M103_Fault',//故障
        status2: 'HNCDC.T12.T12_M103_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M103_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M103_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M103_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '67.5%', left: '48.5%', name: '12组混凝沉淀池_磁粉启闭机2', type: 2,
        allStatus: ['HNCDC.T12.T12_MP_V102_Fault', 'HNCDC.T12.T12_MP_V102_Close_Plcae', 'HNCDC.T12.T12_MP_V102_Open_Plcae'],
        status1: 'HNCDC.T12.T12_MP_V102_Fault',
        status2: 'HNCDC.T12.T12_MP_V102_Close_Plcae',
        status3: 'HNCDC.T12.T12_MP_V102_Open_Plcae',
        propertise: [
            { no: 'HNCDC.T12.T12_MP_V102_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_MP_V102_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'HNCDC.T12.T12_MP_V102_Open_Plcae', dataType: 'Boolean', name: '全开' },
            { no: 'HNCDC.T12.T12_MP_V102_Close_Plcae', dataType: 'Boolean', name: '全关' },
        ]
    },
    {
        top: '67.5%', left: '51.5%', name: '12组混凝沉淀池_磁粉启闭机1', type: 2,
        allStatus: ['HNCDC.T12.T12_MP_V101_Fault', 'HNCDC.T12.T12_MP_V101_Close_Plcae', 'HNCDC.T12.T12_MP_V101_Open_Plcae'],
        status1: 'HNCDC.T12.T12_MP_V101_Fault',
        status2: 'HNCDC.T12.T12_MP_V101_Close_Plcae',
        status3: 'HNCDC.T12.T12_MP_V101_Open_Plcae',
        propertise: [
            { no: 'HNCDC.T12.T12_MP_V101_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_MP_V101_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'HNCDC.T12.T12_MP_V101_Open_Plcae', dataType: 'Boolean', name: '全开' },
            { no: 'HNCDC.T12.T12_MP_V101_Close_Plcae', dataType: 'Boolean', name: '全关' },
        ]
    },
    {
        top: '73.5%', left: '25.5%', name: '12组混凝沉淀池_混凝搅拌器2', type: 1,
        allStatus: ['HNCDC.T12.T12_M201_Fault', 'HNCDC.T12.T12_M201_Run'],
        status1: 'HNCDC.T12.T12_M201_Fault',//故障
        status2: 'HNCDC.T12.T12_M201_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M201_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M201_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M201_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '73.5%', left: '32.5%', name: '12组混凝沉淀池_加载搅拌器2', type: 1,
        allStatus: ['HNCDC.T12.T12_M202_Fault', 'HNCDC.T12.T12_M202_Run'],
        status1: 'HNCDC.T12.T12_M202_Fault',//故障
        status2: 'HNCDC.T12.T12_M202_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M202_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M202_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M202_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '73.5%', left: '38.5%', name: '12组混凝沉淀池_高剪切机2', type: 1,
        allStatus: ['HNCDC.T12.T12_M205_Fault', 'HNCDC.T12.T12_M205_Run'],
        status1: 'HNCDC.T12.T12_M205_Fault',//故障
        status2: 'HNCDC.T12.T12_M205_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M205_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M205_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M205_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '72.5%', left: '41%', name: '12组混凝沉淀池_污泥回流泵4', type: 1,
        allStatus: ['HNCDC.T12.T12_SP104_Fault', 'HNCDC.T12.T12_SP104_Run'],
        status1: 'HNCDC.T12.T12_SP104_Fault',//故障
        status2: 'HNCDC.T12.T12_SP104_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_SP104_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_SP104_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_SP104_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '78.5%', left: '63%', name: '12组混凝沉淀池_磁分离器1', type: 1,
        allStatus: ['HNCDC.T12.T12_M106_Fault', 'HNCDC.T12.T12_M106_Run'],
        status1: 'HNCDC.T12.T12_M106_Fault',//故障
        status2: 'HNCDC.T12.T12_M106_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M106_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M106_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M106_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '72.5%', left: '44%', name: '12组混凝沉淀池_污泥回流泵3', type: 1,
        allStatus: ['HNCDC.T12.T12_SP103_Fault', 'HNCDC.T12.T12_SP103_Run'],
        status1: 'HNCDC.T12.T12_SP103_Fault',//故障
        status2: 'HNCDC.T12.T12_SP103_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_SP103_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_SP103_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_SP103_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '72.5%', left: '47%', name: '12组混凝沉淀池_磁粉回收泵3', type: 1,
        allStatus: ['HNCDC.T12.T12_MP103_Fault', 'HNCDC.T12.T12_MP103_Run'],
        status1: 'HNCDC.T12.T12_MP103_Fault',//故障
        status2: 'HNCDC.T12.T12_MP103_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_MP103_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_MP103_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_MP103_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '72.5%', left: '50%', name: '12组混凝沉淀池_磁粉回收泵2', type: 1,
        allStatus: ['HNCDC.T12.T12_MP102_Fault', 'HNCDC.T12.T12_MP102_Run'],
        status1: 'HNCDC.T12.T12_MP102_Fault',//故障
        status2: 'HNCDC.T12.T12_MP102_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_MP102_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_MP102_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_MP102_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '72.5%', left: '53%', name: '12组混凝沉淀池_磁粉回收泵1', type: 1,
        allStatus: ['HNCDC.T12.T12_MP101_Fault', 'HNCDC.T12.T12_MP101_Run'],
        status1: 'HNCDC.T12.T12_MP101_Fault',//故障
        status2: 'HNCDC.T12.T12_MP101_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_MP101_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_MP101_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_MP101_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '72.5%', left: '56%', name: '12组混凝沉淀池_污泥回流泵2', type: 1,
        allStatus: ['HNCDC.T12.T12_SP102_Fault', 'HNCDC.T12.T12_SP102_Run'],
        status1: 'HNCDC.T12.T12_SP102_Fault',//故障
        status2: 'HNCDC.T12.T12_SP102_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_SP102_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_SP102_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_SP102_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '72.5%', left: '59%', name: '12组混凝沉淀池_污泥回流泵1', type: 1,
        allStatus: ['HNCDC.T12.T12_SP101_Fault', 'HNCDC.T12.T12_SP101_Run'],
        status1: 'HNCDC.T12.T12_SP101_Fault',//故障
        status2: 'HNCDC.T12.T12_SP101_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_SP101_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_SP101_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_SP101_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '73.5%', left: '61%', name: '12组混凝沉淀池_高剪切机1', type: 1,
        allStatus: ['HNCDC.T12.T12_M105_Fault', 'HNCDC.T12.T12_M105_Run'],
        status1: 'HNCDC.T12.T12_M105_Fault',//故障
        status2: 'HNCDC.T12.T12_M105_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M105_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M105_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M105_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '73.5%', left: '67.5%', name: '12组混凝沉淀池_加载搅拌器1', type: 1,
        allStatus: ['HNCDC.T12.T12_M102_Fault', 'HNCDC.T12.T12_M102_Run'],
        status1: 'HNCDC.T12.T12_M102_Fault',//故障
        status2: 'HNCDC.T12.T12_M102_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M102_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M102_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M102_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '73.5%', left: '74.5%', name: '12组混凝沉淀池_混凝搅拌器1', type: 1,
        allStatus: ['HNCDC.T12.T12_M101_Fault', 'HNCDC.T12.T12_M101_Run'],
        status1: 'HNCDC.T12.T12_M101_Fault',//故障
        status2: 'HNCDC.T12.T12_M101_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M101_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M101_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M101_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '78.5%', left: '37%', name: '12组混凝沉淀池_磁分离器2', type: 1,
        allStatus: ['HNCDC.T12.T12_M206_Fault', 'HNCDC.T12.T12_M206_Run'],
        status1: 'HNCDC.T12.T12_M206_Fault',//故障
        status2: 'HNCDC.T12.T12_M206_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_M206_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_M206_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_M206_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '89.5%', left: '25%', name: '12组混凝沉淀池_进水闸门2', type:2,
        allStatus: ['HNCDC.T12.T12_V102_Fault', 'HNCDC.T12.T12_V102_Close_Plcae', 'HNCDC.T12.T12_V102_Open_Plcae'],
        status1: 'HNCDC.T12.T12_V102_Fault',
        status2: 'HNCDC.T12.T12_V102_Close_Plcae',
        status3: 'HNCDC.T12.T12_V102_Open_Plcae',
        propertise: [
            { no: 'HNCDC.T12.T12_MP_V102_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_MP_V102_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'HNCDC.T12.T12_MP_V102_Open_Plcae', dataType: 'Boolean', name: '全开' },
            { no: 'HNCDC.T12.T12_MP_V102_Close_Plcae', dataType: 'Boolean', name: '全关' },
        ]
    },
    {
        top: '86.5%', left: '47%', name: '12组混凝沉淀池_污泥输送泵1', type: 1,
        allStatus: ['HNCDC.T12.T12_EP101_Fault', 'HNCDC.T12.T12_EP101_Run'],
        status1: 'HNCDC.T12.T12_EP101_Fault',//故障
        status2: 'HNCDC.T12.T12_EP101_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_EP101_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_EP101_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_EP101_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '91.5%', left: '47%', name: '12组混凝沉淀池_污泥输送泵2', type: 1,
        allStatus: ['HNCDC.T12.T12_EP102_Fault', 'HNCDC.T12.T12_EP102_Run'],
        status1: 'HNCDC.T12.T12_EP102_Fault',//故障
        status2: 'HNCDC.T12.T12_EP102_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_EP102_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_EP102_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_EP102_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '83.5%', left: '55%', name: '12组混凝沉淀池_潜水排污泵', type:1,
        allStatus: ['HNCDC.T12.T12_DP101_Fault', 'HNCDC.T12.T12_DP101_Run'],
        status1: 'HNCDC.T12.T12_DP101_Fault',//故障
        status2: 'HNCDC.T12.T12_DP101_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_DP101_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_DP101_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_DP101_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '86.5%', left: '57%', name: '12组混凝沉淀池_鼓风机1', type:1,
        allStatus: ['HNCDC.T12.T12_Blower101_Fault', 'HNCDC.T12.T12_Blower101_Run'],
        status1: 'HNCDC.T12.T12_Blower101_Fault',//故障
        status2: 'HNCDC.T12.T12_Blower101_Run',//运行
        propertise: [
            { no: 'HNCDC.T12.T12_Blower101_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_Blower101_Run', dataType: 'Boolean', name: '运行' },
            { no: 'HNCDC.T12.T12_Blower101_Fault', dataType: 'Boolean', name: '故障' }
        ]
    },
    {
        top: '90.5%', left: '75%', name: '12组混凝沉淀池_进水闸门1', type: 2,
        allStatus: ['HNCDC.T12.T12_V101_Fault', 'HNCDC.T12.T12_V101_Close_Plcae', 'HNCDC.T12.T12_V101_Open_Plcae'],
        status1: 'HNCDC.T12.T12_V101_Fault',
        status2: 'HNCDC.T12.T12_V101_Close_Plcae',
        status3: 'HNCDC.T12.T12_V101_Open_Plcae',
        propertise: [
            { no: 'HNCDC.T12.T12_MP_V101_Rem', dataType: 'Boolean', name: '远控' },
            { no: 'HNCDC.T12.T12_MP_V101_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'HNCDC.T12.T12_MP_V101_Open_Plcae', dataType: 'Boolean', name: '全开' },
            { no: 'HNCDC.T12.T12_MP_V101_Close_Plcae', dataType: 'Boolean', name: '全关' },
        ]
    },
]
export default data;