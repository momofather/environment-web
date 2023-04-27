const data = [
    {
        top: '12%', left: '8%',
        no: 'AB.PLC3.FIT336_OUT_AI',
        modalType: 1,
        modalData: {
            title: '总空气流量', unit: 'Nm³/h',formatter: (v)=> parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC3.FIT336_OUT_AI']
    },
    {
        top: '28%', left: '16%',
        no: 'AB.PLC3.FIT318_OUT_AI',
        modalType: 1,
        modalData: {
            title: '明渠流量', unit: 'm³/h',formatter: (v)=> parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC3.FIT318_OUT_AI']
    },
    {
        top: '41%', left: '20%',
        no: 'AB.PLC3.JSLJ_LL',
        modalType: 1,
        modalData: {
            title: '进水累计流量', unit: 'm³',formatter: (v)=> parseFloat(v).toFixed(1)
        },
        allStatus: ['AB.PLC3.JSLJ_LL']
    },
    {
        top: '31%', left: '27%',
        no: 'XGS.XGSB.X2HY_CK_PT',
        modalType: 1,
        modalData: {
            title: '出口压力', unit: 'Kpa',formatter: (v)=> parseFloat(v).toFixed(1)
        },
        allStatus: ['XGS.XGSB.X2HY_CK_PT']
    },
    {
        top: '36%', left: '41%',
        no: 'XGS.XGSB.X2HY_TargetPT',
        modalType: 1,
        modalData: {
            title: '目标压力', unit: 'Kpa',formatter: (v)=> parseFloat(v).toFixed(1)
        },
        allStatus: ['XGS.XGSB.X2HY_TargetPT']
    },
    {
        top: '27%', left: '47%',
        no: 'XGS.XGSB.X2HY_RK_PT',
        modalType: 1,
        modalData: {
            title: '水箱液位', unit: 'mm',formatter: (v)=> parseFloat(v).toFixed(1)
        },
        allStatus: ['XGS.XGSB.X2HY_RK_PT']
    },
    {
        top: '2.9%', left: '30.8%', name: '沉砂池_1#罗茨鼓风机', type:1,
        allStatus: ['AB.PLC3.AC516_Fault', 'AB.PLC3.AC516_Run'],
        status1: 'AB.PLC3.AC516_Fault',//故障
        status2: 'AB.PLC3.AC516_Run',//运行
        propertise: [
            { no: 'AB.PLC3.AC516_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'AB.PLC3.AC516_Run', dataType: 'Boolean', name: '运行'},
            { no: 'AB.PLC3.AC516_Start_Fault', dataType: 'Boolean', name: '启动故障'},
            { no: 'AB.PLC3.AC516_Stop_Fault', dataType: 'Boolean', name: '停止故障'},
            { no: 'AB.PLC3.AC516_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'AB.PLC3.AC516_Fault_Timers', dataType: 'Long', name: '故障次数'},
            { no: 'AB.PLC3.AC516_RunTime', dataType: 'Float', name: '累计运行'},
            { no: 'AB.PLC3.AC516_Maintain_Notice', dataType: 'Boolean', name: '检修提醒'},
            { no: 'AB.PLC3.AC516_Maintain_Time', dataType: 'Float', name: '检修时间'},
        ]
    },
    {
        top: '5%', left: '25%', name: '沉砂池_2#罗茨鼓风机', type:1,
        allStatus: ['AB.PLC3.AC517_Fault', 'AB.PLC3.AC517_Run'],
        status1: 'AB.PLC3.AC517_Fault',//故障
        status2: 'AB.PLC3.AC517_Run',//运行
        propertise: [
            { no: 'AB.PLC3.AC517_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.AC517_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC3.AC517_Start_Fault', dataType: 'Boolean', name: '启动报警' },
            { no: 'AB.PLC3.AC517_Stop_Fault', dataType: 'Boolean', name: '停止报警' },
            { no: 'AB.PLC3.AC517_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.AC517_RunTime', dataType: 'Float', name: '累计运行' },
            { no: 'AB.PLC3.AC517_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC3.AC517_Maintain_Time', dataType: 'Float', name: '检修时间' },
            { no: 'AB.PLC3.AC517_Fault_Timers', dataType: 'Long', name: '故障次数' },
        ]
    },
    {
        top: '7%', left: '19%', name: '沉砂池_3#罗茨鼓风机', type: 1,
        allStatus: ['AB.PLC3.AC518_Fault', 'AB.PLC3.AC518_Run'],
        status1: 'AB.PLC3.AC518_Fault',//故障
        status2: 'AB.PLC3.AC518_Run',//运行
        propertise: [
            { no: 'AB.PLC3.AC518_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.AC518_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC3.AC518_Start_Fault', dataType: 'Boolean', name: '启动报警' },
            { no: 'AB.PLC3.AC518_Stop_Fault', dataType: 'Boolean', name: '停止报警' },
            { no: 'AB.PLC3.AC518_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.AC518_Fault_Timers', dataType: 'Long', name: '故障次数' },
            { no: 'AB.PLC3.AC518_RunTime', dataType: 'Float', name: '累计运行' },
            { no: 'AB.PLC3.AC518_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC3.AC518_Maintain_Time', dataType: 'Float', name: '检修时间' },
        ]
    },
    {
        top: '23%', left: '43%', name: '沉砂池压榨机', type: 1,
        allStatus: ['CSC.CSCB.X5R09_Fault', 'CSC.CSCB.X5R09_Run'],
        status1: 'CSC.CSCB.X5R09_Fault',//故障
        status2: 'CSC.CSCB.X5R09_Run',//运行
        propertise: [
            { no: 'CSC.CSCB.X5R09_TimeStart', dataType: 'Boolean', name: '时间启动' },
            { no: 'CSC.CSCB.X5R09_LITStart', dataType: 'Boolean', name: '液位启动' },
            { no: 'CSC.CSCB.X5R09_Run', dataType: 'Boolean', name: '运行' },
            { no: 'CSC.CSCB.X5R09_Lbit', dataType: 'Boolean', name: '液位' },
            { no: 'CSC.CSCB.X5R09_Fault', dataType: 'Boolean', name: '故障' },
            
        ]
    },
    {
        top: '20%', left: '68%', name: '沉砂池1#撇渣器', type: 1,
        allStatus: ['CSC.CSCB.X5Skimmer1_Fault', 'CSC.CSCB.X5Skimmer1_Run'],
        status1: 'CSC.CSCB.X5Skimmer1_Fault',//故障
        status2: 'CSC.CSCB.X5Skimmer1_Run',//运行
        propertise: [
            { no: 'CSC.CSCB.X5Skimmer1_Fault_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'CSC.CSCB.X5Skimmer1_Fault_Run', dataType: 'Boolean', name: '运行' },
            { no: 'CSC.CSCB.X5Skimmer1_Fault_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'CSC.CSCB.X5Skimmer1_Fault_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
            { no: 'CSC.CSCB.X5Skimmer1_Fault_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'CSC.CSCB.X5Skimmer1_Fault_Fault_Timers', dataType: 'Long', name: '故障次数' },
            { no: 'CSC.CSCB.X5Skimmer1_Fault_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'CSC.CSCB.X5Skimmer1_Fault_Maintain_Time', dataType: 'Float', name: '检修时间' },
            { no: 'CSC.CSCB.X5Skimmer1_Fault_RunTime', dataType: 'Float', name: '运行时间' },
        ]
    },
    {
        top: '17%', left: '85.5%', name: '沉砂池1#浮渣排水泵', type: 1,
        allStatus: ['CSC.CSCB.X5PSB1_Fault', 'CSC.CSCB.X5PSB1_Run'],
        status1: 'CSC.CSCB.X5PSB1_Fault',//故障
        status2: 'CSC.CSCB.X5PSB1_Run',//运行
        propertise: []
    },
    {
        top: '47%', left: '93.5%', name: '沉砂池2#浮渣排水泵', type: 1,
        allStatus: ['CSC.CSCB.X5PSB2_Fault', 'CSC.CSCB.X5PSB2_Run'],
        status1: 'CSC.CSCB.X5PSB2_Fault',//故障
        status2: 'CSC.CSCB.X5PSB2_Run',//运行
        propertise: []
        
    },
    {
        top: '56%', left: '78.5%', name: '沉砂池2#撇渣器', type: 1,
        allStatus: ['CSC.CSCB.X5Skimmer2_Fault', 'CSC.CSCB.X5Skimmer2_Run'],
        status1: 'CSC.CSCB.X5Skimmer2_Fault',//故障
        status2: 'CSC.CSCB.X5Skimmer2_Run',//运行
        propertise: [
            { no: 'AB.PLC3.AC518_Remote', dataType: 'Boolean', name: '就地/远程' },
            { no: 'AB.PLC3.AC518_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.AC518_Fault_Timers', dataType: 'Long', name: '故障次数' },
            { no: 'AB.PLC3.AC518_Maintain_Notice', dataType: 'Boolean', name: '检修提醒' },
            { no: 'AB.PLC3.AC518_Maintain_Time', dataType: 'Float', name: '检修时间' },
            { no: 'AB.PLC3.AC518_Run', dataType: 'Boolean', name: '运行' },
            { no: 'AB.PLC3.AC518_RunTime', dataType: 'Float', name: '运行时间' },
            { no: 'AB.PLC3.AC518_Start_Fault', dataType: 'Boolean', name: '启动故障' },
            { no: 'AB.PLC3.AC518_Stop_Fault', dataType: 'Boolean', name: '停止故障' },
        ]
    },
    {
        top: '1%', left: '59.5%', name: '沉砂池1#洗砂器', type: 1,
        allStatus: ['CSC.CSCA.X4XSQ1_PSJ_Fault', 'CSC.CSCA.X4XSQ1_PSJ_Run'],
        status1: 'CSC.CSCA.X4XSQ1_PSJ_Fault',//故障
        status2: 'CSC.CSCA.X4XSQ1_PSJ_Run',//关
        propertise: [
            { no: 'CSC.CSCB.X5SYS_LocMode', dataType: 'Boolean', name: '现场手动模式' },
            { no: 'CSC.CSCA.X4SYS_Estop', dataType: 'Boolean', name: '系统急停' },
            { no: 'CSC.CSCA.X4XSQ1_PSJ_Run', dataType: 'Boolean', name: '排砂机运行' },
            { no: 'CSC.CSCA.X4XSQ1_JBJ_Run', dataType: 'Boolean', name: '搅拌机运行' },
            { no: 'CSC.CSCA.X4XSQ1_EV_Run', dataType: 'Boolean', name: '电磁阀' },
            { no: 'CSC.CSCA.X4XSQ1_PSJ_Fault', dataType: 'Boolean', name: '排砂机故障' },
            { no: 'CSC.CSCA.X4XSQ1_JBJ_Fault', dataType: 'Boolean', name: '搅拌机故障' },
            { no: 'CSC.CSCA.X4XSQ1_V_OvLoad', dataType: 'Boolean', name: '电动阀过载' },
            { no: 'CSC.CSCA.X4XSQ1_V_OpenP', dataType: 'Boolean', name: '全开' },
            { no: 'CSC.CSCA.X4XSQ1_V_CloseP', dataType: 'Boolean', name: '全关' },
            { no: 'CSC.CSCA.X4XSQ1_V_OvTime', dataType: 'Boolean', name: '电动阀超时' },
            { no: 'CSC.CSCA.X4XSQ1_SW_HAA', dataType: 'Boolean', name: '沙位高高' },
            { no: 'CSC.CSCA.X4XSQ1_SW_HA', dataType: 'Boolean', name: '沙位高' },
            { no: 'CSC.CSCA.X4XSQ1_SW_Low', dataType: 'Boolean', name: '沙位低' },
            { no: 'CSC.CSCA.X4XSQ1_SW_OUT', dataType: 'Word', name: '沙位',unit:'cm' },
        ]
    },
    {
        top: '10%', left: '62%', name: '沉砂池2#洗砂器', type: 1,
        allStatus: ['CSC.CSCA.X4XSQ2_PSJ_Fault', 'CSC.CSCA.X4XSQ2_PSJ_Run'],
        status1: 'CSC.CSCA.X4XSQ2_PSJ_Fault',
        status2: 'CSC.CSCA.X4XSQ2_PSJ_Run',
        propertise: [
            { no: 'CSC.CSCB.X5SYS_LocMode', dataType: 'Boolean', name: '现场手动模式' },
            { no: 'CSC.CSCA.X4SYS_Estop', dataType: 'Boolean', name: '系统急停' },
            { no: 'CSC.CSCA.X4XSQ2_PSJ_Run', dataType: 'Boolean', name: '排砂机运行' },
            { no: 'CSC.CSCA.X4XSQ2_JBJ_Run', dataType: 'Boolean', name: '搅拌机运行' },
            { no: 'CSC.CSCA.X4XSQ2_EV_Run', dataType: 'Boolean', name: '电磁阀' },
            { no: 'CSC.CSCA.X4XSQ2_PSJ_Fault', dataType: 'Boolean', name: '排砂机故障' },
            { no: 'CSC.CSCA.X4XSQ2_JBJ_Fault', dataType: 'Boolean', name: '搅拌机故障' },
            { no: 'CSC.CSCA.X4XSQ2_V_OvLoad', dataType: 'Boolean', name: '电动阀过载' },
            { no: 'CSC.CSCA.X4XSQ2_V_OpenP', dataType: 'Boolean', name: '全开' },
            { no: 'CSC.CSCA.X4XSQ2_V_CloseP', dataType: 'Boolean', name: '全关' },
            { no: 'CSC.CSCA.X4XSQ2_V_OvTime', dataType: 'Boolean', name: '电动阀超时' },
            { no: 'CSC.CSCA.X4XSQ2_SW_HAA', dataType: 'Boolean', name: '沙位高高' },
            { no: 'CSC.CSCA.X4XSQ2_SW_HA', dataType: 'Boolean', name: '沙位高' },
            { no: 'CSC.CSCA.X4XSQ2_SW_Low', dataType: 'Boolean', name: '沙位低' },
            { no: 'CSC.CSCA.X4XSQ2_SW_OUT', dataType: 'Word', name: '沙位',unit:'cm' },
        ]
    },
    {
        top: '1%', left: '67.5%', name: '沉砂池1#搅拌机', type: 1,
        allStatus: ['CSC.CSCA.X4XSQ1_JBJ_Fault', 'CSC.CSCA.X4XSQ1_JBJ_Run'],
        status1: 'CSC.CSCA.X4XSQ1_JBJ_Fault',//故障
        status2: 'CSC.CSCA.X4XSQ1_JBJ_Run',//运行
        propertise: []
    },
    
    {
        top: '10%', left: '70.5%', name: '沉砂池2#搅拌机', type: 1,
        allStatus: ['CSC.CSCA.X4XSQ2_JBJ_Fault', 'CSC.CSCA.X4XSQ2_JBJ_Run'],
        status1: 'CSC.CSCA.X4XSQ2_JBJ_Fault',//故障
        status2: 'CSC.CSCA.X4XSQ2_JBJ_Run',//运行
        propertise: []
    },
    {
        top: '85%', left: '22%', name: '沉砂池2#排砂螺杆', type: 1,
        allStatus: ['CSC.CSCA.X4PSLG2_Fault', 'CSC.CSCA.X4PSLG2_Run'],
        status1: 'CSC.CSCA.X4PSLG2_Fault',//故障
        status2: 'CSC.CSCA.X4PSLG2_Run',//运行
        propertise: [
            { no: 'CSC.CSCA.X4PSLG_LocMode', dataType: 'Boolean', name: '现场手动模式' },
            { no: 'CSC.CSCA.X4PSLG_AtuoMode', dataType: 'Boolean', name: '自动模式' },
            { no: 'CSC.CSCA.X4PSLG2_Ready', dataType: 'Boolean', name: '就绪' },
            { no: 'CSC.CSCA.X4SYS_Estop', dataType: 'Boolean', name: '系统急停' },
            { no: 'CSC.CSCA.X4PSLG2_Run', dataType: 'Boolean', name: '螺杆运行' },
            { no: 'CSC.CSCA.X4PSLG2_Fault', dataType: 'Boolean', name: '螺杆故障' },
        ]
    },
    {
        top: '68%', left: '20%', name: '沉砂池1#排砂螺杆', type: 1,
        allStatus: ['CSC.CSCA.X4PSLG1_Fault', 'CSC.CSCA.X4PSLG1_Run'],
        status1: 'CSC.CSCA.X4PSLG1_Fault',//故障
        status2: 'CSC.CSCA.X4PSLG1_Run',//运行
        propertise: [
            { no: 'CSC.CSCA.X4PSLG_LocMode', dataType: 'Boolean', name: '现场手动模式' },
            { no: 'CSC.CSCA.X4PSLG_AtuoMode', dataType: 'Boolean', name: '自动模式' },
            { no: 'CSC.CSCA.X4PSLG1_Ready', dataType: 'Boolean', name: '就绪' },
            { no: 'CSC.CSCA.X4SYS_Estop', dataType: 'Boolean', name: '系统急停' },
            { no: 'CSC.CSCA.X4PSLG1_Run', dataType: 'Boolean', name: '螺杆运行' },
            { no: 'CSC.CSCA.X4PSLG1_Fault', dataType: 'Boolean', name: '螺杆故障' },
        ]
    },
    {
        top: '51%', left: '31%', name: '沉砂池_1#排砂泵', type: 1,
        allStatus: ['CSC.CSCA.X4SB1_Fault', 'CSC.CSCA.X4SB1_Run'],
        status1: 'CSC.CSCA.X4SB1_Fault',//故障
        status2: 'CSC.CSCA.X4SB1_Run',//运行
        propertise: [
            { no: 'CSC.CSCA.X4SB1_AutoMode', dataType: 'Boolean', name: '自动模式' },
            { no: 'CSC.CSCA.X4SB1_Run', dataType: 'Boolean', name: '排砂泵运行' },
            { no: 'CSC.CSCA.X4SB1_Fault', dataType: 'Boolean', name: '排砂泵故障' },
        ]
    },
    {
        top: '60%', left: '32%', name: '沉砂池_2#排砂泵', type: 1,
        allStatus: ['CSC.CSCA.X4SB2_Fault', 'CSC.CSCA.X4SB2_Run'],
        status1: 'CSC.CSCA.X4SB2_Fault',//故障
        status2: 'CSC.CSCA.X4SB2_Run',//运行
        propertise: [
            { no: 'CSC.CSCA.X4SB2_AutoMode', dataType: 'Boolean', name: '自动模式' },
            { no: 'CSC.CSCA.X4SB2_Run', dataType: 'Boolean', name: '排砂泵运行' },
            { no: 'CSC.CSCA.X4SB2_Fault', dataType: 'Boolean', name: '排砂泵故障' },
        ]
    },
    {
        top: '68%', left: '33%', name: '沉砂池_3#排砂泵', type: 1,
        allStatus: ['CSC.CSCA.X4SB3_Fault', 'CSC.CSCA.X4SB3_Run'],
        status1: 'CSC.CSCA.X4SB3_Fault',//故障
        status2: 'CSC.CSCA.X4SB3_Run',//运行
        propertise: [
            { no: 'CSC.CSCA.X4SB3_AutoMode', dataType: 'Boolean', name: '自动模式' },
            { no: 'CSC.CSCA.X4SB3_Run', dataType: 'Boolean', name: '排砂泵运行' },
            { no: 'CSC.CSCA.X4SB3_Fault', dataType: 'Boolean', name: '排砂泵故障' },
        ]
    },
    {
        top: '52%', left: '21%', name: '沉沙池_1#插板闸', type: 2,
        allStatus: ['AB.PLC3.AC521_Fault', 'AB.PLC3.AC521_Close_Place','AB.PLC3.AC521_Open_Place'],
        status1: 'AB.PLC3.AC521_Fault',//故障
        status2: 'AB.PLC3.AC521_Close_Place',
        status3: 'AB.PLC3.AC521_Open_Place',
        propertise: [
            { no: 'AB.PLC3.AC521_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.AC521_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.AC521_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC3.AC521_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC3.AC521_Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC3.AC521_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC3.AC521_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次' },
        ]
    },
    {
        top: '64%', left: '22.5%', name: '沉沙池_2#插板闸', type: 2,
        allStatus: ['AB.PLC3.AC522_Fault', 'AB.PLC3.AC522_Close_Place', 'AB.PLC3.AC522_Open_Place'],
        status1: 'AB.PLC3.AC522_Fault',//故障
        status2: 'AB.PLC3.AC522_Close_Place',
        status3: 'AB.PLC3.AC522_Open_Place',
        propertise: [
            { no: 'AB.PLC3.AC522_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'AB.PLC3.AC522_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'AB.PLC3.AC522_Open_Place', dataType: 'Boolean', name: '全开' },
            { no: 'AB.PLC3.AC522_Close_Place', dataType: 'Boolean', name: '全关' },
            { no: 'AB.PLC3.AC522_Open_Fault', dataType: 'Boolean', name: '开阀故障' },
            { no: 'AB.PLC3.AC522_Close_Fault', dataType: 'Boolean', name: '关阀故障' },
            { no: 'AB.PLC3.AC522_Fault_Timers', dataType: 'Long', name: '故障次数',unit:'次' },
        ]
    },
    {
        top: '33.3%', left: '39.6%', name: '沉沙池_1#冲洗水泵', type: 9, size: '16px',
        allStatus: ['XGS.XGSB.X2HY_MP1_Status'],
        status1: 'XGS.XGSB.X2HY_MP1_Status',
        formatter: (v) => {
            if (parseInt(v) === 0 || parseInt(v) === 1 || parseInt(v) === 1){
                return 'stop';
            } else if (parseInt(v) === 3) {
                return 'error';
            } else {
                return 'normal';
            }
        },
        propertise: []
    },
    {
        top: '35.3%', left: '40%', name: '沉沙池_2#冲洗水泵', type: 9, size: '16px',
        allStatus: ['XGS.XGSB.X2HY_MP2_Status'],
        status1: 'XGS.XGSB.X2HY_MP2_Status',
        formatter: (v) => {
            if (parseInt(v) === 0 || parseInt(v) === 1 || parseInt(v) === 1) {
                return 'stop';
            } else if (parseInt(v) === 3) {
                return 'error';
            } else {
                return 'normal';
            }
        },
        propertise: []
    },
    {
        top: '37.3%', left: '40.3%', name: '沉沙池_3#冲洗水泵', type: 9, size: '16px',
        allStatus: ['XGS.XGSB.X2HY_MP3_Status'],
        status1: 'XGS.XGSB.X2HY_MP3_Status',
        formatter: (v) => {
            if (parseInt(v) === 0 || parseInt(v) === 1 || parseInt(v) === 1) {
                return 'stop';
            } else if (parseInt(v) === 3) {
                return 'error';
            } else {
                return 'normal';
            }
        },
        propertise: []
    }
]
export default data;