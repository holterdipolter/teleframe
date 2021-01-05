// name: restore array element (set index 0)
// outputs: 1
var array = global.get('arrayImages');
var i = flow.get('currentTrashIndex');

array.unshift((array.splice(i, 1))[0]);
array[0].trashFlag = false;
array[0].stickFlag = false;

msg.payload = array;
return msg;