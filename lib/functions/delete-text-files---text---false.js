// name: delete text files + text = false
// outputs: 1
var arrayElement = flow.get('imageDel');

var cmd = "rm ";

cmd = cmd + global.get('images-loop') + arrayElement.filenameText + " ";
cmd = cmd + global.get('images-loop') + arrayElement.filenameTextDash + " ";
cmd = cmd + global.get('images-loop') + arrayElement.filenameTextThumb + " ";

arrayElement.filenameText = false;
arrayElement.filenameTextDash = false;
arrayElement.filenameTextThumb = false;
arrayElement.text = false;
arrayElement.textFlag = false;

msg.payload = cmd;

return msg;
