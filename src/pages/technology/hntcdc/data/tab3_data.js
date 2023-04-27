const data = [
    {
        top: '11%', left: '45.4%', name: '反硝化池1#混凝池搅拌机', type:1,
        allStatus: ['FXHLC.FXH.MX002A_Trip_Fault', 'FXHLC.FXH.MX002A_Running'],
        status1: 'FXHLC.FXH.MX002A_Trip_Fault',//故障
        status2: 'FXHLC.FXH.MX002A_Running',//运行
        propertise: [
            { no: 'FXHLC.FXH.MX002A_Remote', dataType: 'Boolean', name: '远控'},
            { no: 'FXHLC.FXH.MX002A_Running', dataType: 'Boolean', name: '运行'},
            { no: 'FXHLC.FXH.MX002A_Trip_Fault', dataType: 'Boolean', name: '故障'},
            { no: 'FXHLC.FXH.MX002A_OT_Fault', dataType: 'Boolean', name: '启动故障'}
        ]
    },
    {
        top: '11%', left: '78.4%', name: '反硝化池2#混凝池搅拌机', type: 1,
        allStatus: ['FXHLC.FXH.MX002B_Trip_Fault', 'FXHLC.FXH.MX002B_Running'],
        status1: 'FXHLC.FXH.MX002B_Trip_Fault',//故障
        status2: 'FXHLC.FXH.MX002B_Running',//运行
        propertise: [
            { no: 'FXHLC.FXH.MX002B_Remote', dataType: 'Boolean', name: '远控' },
            { no: 'FXHLC.FXH.MX002B_Running', dataType: 'Boolean', name: '运行' },
            { no: 'FXHLC.FXH.MX002B_Trip_Fault', dataType: 'Boolean', name: '故障' },
            { no: 'FXHLC.FXH.MX002B_OT_Fault', dataType: 'Boolean', name: '启动故障' }
        ]
    },
]
export default data;