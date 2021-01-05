// name: Gate user exists?
// outputs: 1
// Variablen setzen

var userlist = global.get('userlist');
var chatid = msg.payload.chatId;

// Überprüfen ob User in Liste vorhanden

for (var i=0; i < userlist.length; i++) {
    
    if(userlist[i].chatid == chatid){
        msg.payload.name = userlist[i].name;
        return msg;
    }
}
