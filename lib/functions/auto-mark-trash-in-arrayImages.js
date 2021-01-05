// name: auto mark trash in arrayImages
// outputs: 1
var array = global.get('arrayImages');

if (array.length > global.get('loopMax')){

    for (var i=global.get('loopMax'); i < array.length; i++) {
        
        if (!array[i].stickFlag){
            array[i].trashFlag = true;
        }
    }
    
    msg.payload = array;
    
    return msg;
}