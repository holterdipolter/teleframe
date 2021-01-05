// name: auto remove files from arrayVideos
// outputs: 1
var array = global.get('arrayVideos');

var max = global.get('storedVideosMax');

if (array.length > max){

    cmd = "";

    for (var i=array.length-1; i >= max; i--) {
        
        if (!array[i].stickFlag){
            
            cmd = cmd + "rm " + global.get('videos-loop') + array[i].filename + " ";
            cmd = cmd + global.get('videos-loop') + array[i].filenameThumb;
            
            array.splice(i, 1);
        }
    }
    
    return msg;
}