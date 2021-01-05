// name: set flow.currentVideoIndex
// outputs: 1
array = global.get('arrayVideos');

for (var i=0; i < array.length; i++) {
 
    if (array[i].fileId === msg.payload.id){
        flow.set('currentVideoIndex', i);
        return {payload: i}
    }
}
