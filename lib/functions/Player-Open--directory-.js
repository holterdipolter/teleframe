// name: Player.Open (directory)
// outputs: 1
return {
    payload: 
        {
            "jsonrpc": "2.0",
            "method":"Player.Open",
            "id": 1,
            "args":{
                "item":{
                    "directory":msg.payload   
                }
            }
        }
};