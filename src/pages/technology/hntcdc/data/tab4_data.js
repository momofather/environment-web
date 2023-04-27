const data = [
    {
        top: '45%', left: '68%', name: '1#反冲洗废水泵', type:1,
        allStatus: ['FXHLC.FXH.P002A_Trip_Fault', 'FXHLC.FXH.P002A_Running'],
        status1: 'FXHLC.FXH.P002A_Trip_Fault',//故障
        status2: 'FXHLC.FXH.P002A_Running',//运行
        propertise: [
            { no: 'FXHLC.FXH.P002A_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.P002A_Running', dataType: 'Boolean', name: '运行' },
            { no: 'FXHLC.FXH.P002A_Trip_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'FXHLC.FXH.P002A_OT_Fault', dataType: 'Boolean', name: '启动故障' }
        ]
    },
    {
        top: '45%', left: '74.4%', name: '2#反冲洗废水泵', type: 1,
        allStatus: ['FXHLC.FXH.P002B_Trip_Fault', 'FXHLC.FXH.P002B_Running'],
        status1: 'FXHLC.FXH.P002B_Trip_Fault',//故障
        status2: 'FXHLC.FXH.P002B_Running',//运行
        propertise: [
            { no: 'FXHLC.FXH.P002B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.P002B_Running', dataType: 'Boolean', name: '运行' },
            { no: 'FXHLC.FXH.P002B_Trip_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'FXHLC.FXH.P002B_OT_Fault', dataType: 'Boolean', name: '启动故障' }
        ]
    },
    {
        top: '45%', left: '80%', name: '3#反冲洗废水泵', type: 1,
        allStatus: ['FXHLC.FXH.P002C_Trip_Fault', 'FXHLC.FXH.P002C_Running'],
        status1: 'FXHLC.FXH.P002C_Trip_Fault',//故障
        status2: 'FXHLC.FXH.P002C_Running',//运行
        propertise: [
            { no: 'FXHLC.FXH.P002C_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.P002C_Running', dataType: 'Boolean', name: '运行' },
            { no: 'FXHLC.FXH.P002C_Trip_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'FXHLC.FXH.P002C_OT_Fault', dataType: 'Boolean', name: '启动故障' }
        ]
    },
]
export default data;