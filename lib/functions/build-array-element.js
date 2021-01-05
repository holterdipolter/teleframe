// name: build array element
// outputs: 1
var fileId = msg.payload;

var filenamePic = fileId + ".pic.jpg";
var filenamePicDash = fileId + ".pic.dash.jpg";
var filenamePicThumb = fileId + ".pic.thumb.jpg";
var filenameText;
var filenameTextDash;
var filenameTextThumb;
var text;
var textFlag;
var playlistPosPic = -1;
var playlistPosText = -1;

if ((flow.get('lastTelegramMessage') || false ) === false){
    text = false;
    textFlag = false;
    filenameText = false;
    filenameTextDash = false;
    filenameTextThumb = false;
} else {
    text = flow.get('lastTelegramMessage');
    textFlag = true;
    filenameText = fileId + ".text.jpg";
    filenameTextDash = fileId + ".text.dash.jpg";
    filenameTextThumb = fileId + ".text.thumb.jpg";
}

var imageHeight = msg.height;
var imageWidth = msg.width;

var user = flow.get('lastTelegramUsername');
var chatId = flow.get('lastTelegramChatid');

var stickFlag = false;
var trashFlag = false;
var timestamp = Date.now();

var image = {   fileId, 
                filenamePic, 
                filenamePicDash,
                filenamePicThumb,
                filenameText,
                filenameTextDash,
                filenameTextThumb,
                text,
                textFlag,
                imageHeight,
                imageWidth,
                user,
                chatId,
                stickFlag,
                trashFlag,
                playlistPosPic,
                playlistPosText,
                timestamp
}

// global.set('currentImage', image);

msg = { image };

return msg;