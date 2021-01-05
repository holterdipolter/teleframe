// name: tele Message sim
// outputs: 1
var chatId = msg.payload;
var messageId = 12;
var type = "message";
var content = "blubb"

msg.payload ={ chatId, messageId, type, content }


return msg;