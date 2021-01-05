// name: Player.Open (file)
// outputs: 1
return {
    payload: 
        {
            "jsonrpc": "2.0",
            "method":"Player.Open",
            "id": 1,
            "params":{
                "item":{
                    "file":msg.payload   
                }
                
            }
        }
};