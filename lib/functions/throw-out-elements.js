// name: throw out elements
// outputs: 1
if (flow.get('arrayImagesLoopId') === msg.loopId){
    
    var i = msg.index;
    var array = global.get('arrayImages');
    var textActive = global.get('textActive') || false;
    var msgRes = {reset: "reset"};
    
    var twoSlotFlag;
    if (msg.playlistPos === 0){
        twoSlotFlag = false;
    } else {
        twoSlotFlag = context.get('twoSlotFlag', 'mem') || false;
    }
    
    // if trashFlag -> inkrement
    while (array[i].trashFlag){
        
        if (i === array.length-1){
            i = 0;
        } else {
            i++;
        }
        if (i === msg.indexStart){
            context.set('twoSlotFlag', false, 'mem');
            return msgRes;
        }    
    }
    
    // set Slot-flag
    if (array[i].textFlag && textActive && !twoSlotFlag){
        twoSlotFlag = true;
    } else {
        twoSlotFlag = false;
    }
    context.set('twoSlotFlag', twoSlotFlag, 'mem');
    
    // Ausgeben an der Stelle index
    if (twoSlotFlag){
        array[i].playlistPosText = msg.playlistPos;
        msg.payload = global.get('images-loop') + array[i].filenameText;
    
    } else {
        array[i].playlistPosPic = msg.playlistPos;
        msg.payload = global.get('images-loop') + array[i].filenamePic;
    }
    
    // index inkrementieren wenn nur ein slot
    if (!twoSlotFlag){
        if (i === array.length-1){
            msg.index = 0;
        } else {
            msg.index = i + 1;
        }
        if (msg.indexStart === msg.index){
            msg.reset = "reset";
        }
    }
    
    // stelle delays ein je nach aktueller Playlist Postiton
    //if (msg.playlistPos === 0){
    //    msg.delay= 300;
    //}
    //if (msg.playlistPos === 1){
    //    msg.delay= 900;
    //}
    
    // erhöhe Playlist Postiton
    msg.playlistPos = msg.playlistPos +1;

    return msg;
}