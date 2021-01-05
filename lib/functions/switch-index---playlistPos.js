// name: switch index / playlistPos
// outputs: 3
var array = global.get('arrayImages');

// wenn kein Index angegeben, setze 0
if (msg.index >= 0){} else {msg.index = 0;}

// wenn indexStart.trashFlag=true -> suche nächsten Index mit trashFlag=false
var i = msg.index;

while (array[i].trashFlag){
    i++;
    if (i === array.length){
        i = 0;
    }
    // wenn kein Index mit trashFlag=false gefunden -> stop
    if (i === msg.index){
        return {};
    }
}

var playlistPos;

// prüfe ob Index Text enthält und ob textActive aktiviert ist
// wenn ja, übernehme playlistPosText
if (array[i].textFlag && global.get('textActive')){
    playlistPos = array[i].playlistPosText;
} else {
    playlistPos = array[i].playlistPosPic;
}

if (playlistPos > 0){

    return [null, null, {playlistPos}]

} else {
    if (msg.restoreStatus){
        return [null, {index: i}, null];
    } else {
        return [{index: i}, null, null];
    }
}

