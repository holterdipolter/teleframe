// name: set arrayImages playlistPos -1
// outputs: 1
var array = global.get('arrayImages');

for (var i=0; i < array.length; i++) {
    array[i].playlistPosPic = -1;
    array[i].playlistPosText = -1;
}
    
return msg;