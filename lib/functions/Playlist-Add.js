// name: Playlist.Add
// outputs: 1
return {
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
        }
};
