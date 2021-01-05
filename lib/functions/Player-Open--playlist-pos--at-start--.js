// name: Player.Open (playlist pos [at start])
// outputs: 1
if (msg.playlistPos >= 0){
} else {
    msg.playlistPos = flow.get('playlistPosStart');
}

return {
    payload: 
        {
            "jsonrpc": "2.0",
            "method":"Player.Open",
            "id": 1,
            "params":{
                "item":{
                    "playlistid":2,
                    "position":msg.playlistPos
                }
            }
        }
};