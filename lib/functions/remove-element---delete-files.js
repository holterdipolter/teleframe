// name: remove element + delete files
// outputs: 1
var i = flow.get('currentTrashIndex');
var array = global.get('arrayImages');
var cmd = "rm ";

cmd = cmd + global.get('images-loop') + array[i].filenamePic + " ";
cmd = cmd + global.get('images-loop') + array[i].filenamePicDash + " ";
cmd = cmd + global.get('images-loop') + array[i].filenamePicThumb + " ";

if (array[i].textFlag){
    cmd = cmd + global.get('images-loop') + array[i].filenameText + " ";
    cmd = cmd + global.get('images-loop') + array[i].filenameTextDash + " ";
    cmd = cmd + global.get('images-loop') + array[i].filenameTextThumb + " ";
}

array.splice(i, 1);

msg.payload = cmd;

return msg;
