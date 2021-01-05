// name: Player.Open (playlist id)
// outputs: 1
if (msg.payload.params.data.position !== undefined){
    
    var playlistPos = msg.payload.params.data.position;

    if (playlistPos === flow.get('playlistPosStart', 'mem')){
    
        return {
            payload:{
                    "jsonrpc": "2.0",
                    "method":"Player.Open",
                    "id": 1,
                    "params":{
                        "item":{
                            "playlistid":2,
                            "position":flow.get('playlistPosStart', 'mem')
                        }
                    }
            }
        };
    }
}