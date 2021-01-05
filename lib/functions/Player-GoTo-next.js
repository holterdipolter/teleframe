// name: Player.GoTo next
// outputs: 1
return {
    payload: 
        {
            "jsonrpc": "2.0",
            "method":"Player.GoTo",
            "id": 1,
            "params":{
                "playerid":2,
                "to": "next"
            }
        }
};