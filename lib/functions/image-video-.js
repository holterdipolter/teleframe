// name: image/video?
// outputs: 3
var chatId = 0;
var type = "message";
var content = "";
var payload = { chatId,
                type,
                content
};
var msg2 = {payload};

global.set('lastMimeVideo', "mp4");

if (msg.payload.type === "document"){
    var mimetype = msg.payload.weblink.slice(msg.payload.weblink.lastIndexOf(".") + 1);
    if (mimetype === "jpg" || mimetype === "JPG"){
        msg.payload.type = "photo";
    }
    if (mimetype === "mp4" || mimetype === "MP4" || mimetype === "mov" || mimetype === "MOV" || mimetype === "mkv" || mimetype === "MKV"){
        msg.payload.type = "video";
        global.set('lastMimeVideo', mimetype);
    }
}

if (msg.payload.type === "photo"){
    
    if (msg.payload.chatId < 0){
        return [null, null, msg];
    
    } else {
        msg2.payload.chatId = msg.payload.chatId;
        msg2.payload.content = "Danke " + msg.payload.name + "! Dein Bild ist angekommen.";
        return [msg2, null, msg];        
    }

} else if (msg.payload.type === "video"){
    
    if (msg.payload.chatId < 0){
        return [null, msg, null];
    
    } else {
        msg2.payload.chatId = msg.payload.chatId;
        msg2.payload.content = "Danke " + msg.payload.name + "! Dein Video ist angekommen! Du bekommst eine Nachricht, sobald es verfügbar ist.";
        return [msg2, msg, null];
    }

} else {
    if (msg.payload.chatId < 0){
        msg2.payload.chatId = msg.payload.chatId;
        msg2.payload.content = "Sorry " + msg.payload.name + ", Nachrichten kommen leider nur an, wenn sie ein Foto (jpg) oder ein Video (mp4, mov, mkv) enthalten :-( !";
        return [msg2, null, null];
    }
}