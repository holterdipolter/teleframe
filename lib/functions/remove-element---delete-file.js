// name: remove element + delete file
// outputs: 1
var i = flow.get('currentVideoIndex');
var array = global.get('arrayVideos');
var cmd = "";

cmd = cmd + "rm " + global.get('videos-loop') + array[i].filename + " " + global.get('videos-loop') + array[i].filenameThumb;

array.splice(i, 1);

msg.payload = cmd;

return msg;