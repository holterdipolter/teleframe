// name: Settings.SetSettingValue: debug.showloginfo
// outputs: 1
return {
    payload: 
        {
            "jsonrpc": "2.0",
            "method":"Settings.SetSettingValue",
            "id": 1,
            "params":{
                "setting":"debug.showloginfo",
                "value":msg.payload
            }
        }
};