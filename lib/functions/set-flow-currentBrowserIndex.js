// name: set flow.currentBrowserIndex
// outputs: 1
array = global.get('arrayImages');

for (var i=0; i < array.length; i++) {
 
    if (array[i].fileId === msg.payload){
        flow.set('currentBrowserIndex', i);
        return {payload: i}
    }
}
