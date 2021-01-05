// name: Playlist.Clear/.Add
// outputs: 1
var playlistPos = msg.playlistPos -1;   // msg.playlistPos = current pos + 1

if (flow.get('arrayImagesLoopId') === msg.loopId){
    msgAdd = {
        payload:{
                "jsonrpc": "2.0",
                "method":"Playlist.Add",
                "id": 1,
                "params":{
                    "playlistid":2,
                    "item":{
                        "file":msg.payload
                    }
                }
            },
        playlistPos
    };
    
    var msgClear = {
        payload:{
                "jsonrpc": "2.0",
                "id": 1,
                "method":"Playlist.Clear",
                "params":{
                    "playlistid":2
                }
            }
    };

    if (playlistPos === 0){
        return [[msgClear, msgAdd]];
 
    } else {
        return msgAdd;
    }
}

