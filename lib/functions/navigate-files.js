// name: navigate files
// outputs: 1
var array = global.get('arrayVideos') || [];

if (array.length > 0){
    
    var currentVideoIndex = flow.get('currentVideoIndex') || 0;
    
    if (msg.payload === "r"){
    
        if (currentVideoIndex >= (array.length - 1)){
            currentVideoIndex = 0;
        } else {
            currentVideoIndex = currentVideoIndex + 1;
        }
        
    } else if (msg.payload === "l"){
        
        if (currentVideoIndex <= 0){
            currentVideoIndex = array.length - 1;
        } else {
            currentVideoIndex = currentVideoIndex - 1;
        }
        
    } else if (msg.payload === "start"){
        currentVideoIndex = 0;
    }
    
    flow.set('currentVideoIndex', currentVideoIndex);
    global.set('currentVideo', array[currentVideoIndex]);
    msg.payload = array[currentVideoIndex].filename;
    
} else {
    global.set('currentVideo', []);
    msg.payload = "";
}

return msg;