// name: Settings.SetSettingValue: slideshow.staytime
// outputs: 1
return {
    payload: 
        {
            "jsonrpc": "2.0",
            "method":"Settings.SetSettingValue",
            "id": 1,
            "params":{
                "setting":"slideshow.staytime",
                "value":msg.payload
            }
        }
};