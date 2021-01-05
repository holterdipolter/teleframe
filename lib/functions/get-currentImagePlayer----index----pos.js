// name: get currentImagePlayer + -index + -pos
// outputs: 1
try{
    var array = global.get('arrayImages');
    var file = msg.payload.params.data.item.file;
    file = file.slice(file.lastIndexOf("/") + 1);
    var id = parseInt(file.slice(0, file.indexOf(".")));
    
    var noTrashCounter = 0;
    for (var i=0; i < array.length; i++) {

        if (!array[i].trashFlag){
            noTrashCounter++;
        }
        
        if (array[i].fileId === id){
            
            global.set('currentImagePlayer', array[i]);
            flow.set('currentImagePlayerIndex', i);
            flow.set('currentImagePlayerPos', noTrashCounter);
            
            break;
        }
    }
    
    return msg;
    
} catch(e){}
