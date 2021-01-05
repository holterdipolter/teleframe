// name: auto remove trash-file from arrayImages
// outputs: 1
var array = global.get('arrayImages');

var max = global.get('trashMax') + global.get('loopMax');

if (array.length > max){

    cmd = "";

    for (var i=array.length-1; i >= max; i--) {
        
        if (!array[i].stickFlag){
            
            cmd = cmd + "rm " + global.get('images-loop') + array[i].filenamePic + " ";
            cmd = cmd + global.get('images-loop') + array[i].filenamePicDash + " ";
            cmd = cmd + global.get('images-loop') + array[i].filenamePicThumb + " ";
            
            if (array[i].textFlag){
                
                cmd = cmd + global.get('images-loop') + array[i].filenameText + " ";
                cmd = cmd + global.get('images-loop') + array[i].filenameTextDash + " ";
                cmd = cmd + global.get('images-loop') + array[i].filenameTextThumb + " ";
            }
            
            array.splice(i, 1);
        }
    }
    
    return msg;
}