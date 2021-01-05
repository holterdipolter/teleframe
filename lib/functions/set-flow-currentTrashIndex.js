// name: set flow.currentTrashIndex
// outputs: 1
array = global.get('arrayImages');

for (var i=0; i < array.length; i++) {
 
    if (array[i].fileId === msg.payload){
        flow.set('currentTrashIndex', i);
        return {payload: i}
    }
}
