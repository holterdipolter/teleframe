// name: add user to userlist
// outputs: 2
// Variablen abspeichern

var userlist = global.get('userlist');
var name = flow.get('newuser');
var chatid = flow.get('newuserchatid') || "";
var user = { name,
            chatid
        }

// Überprüfen ob Chat-ID bereits in Liste vorhanden

if (chatid === ""){
    msg.payload = "Bitte Chat-ID eintragen";
    return [null, msg];
}

// Überprüfen ob User bereits in Liste vorhanden

for (var i=0; i < userlist.length; i++) {
    if(userlist[i].chatid == user.chatid || userlist[i].name == user.name){
        msg.payload = "Nutzer oder Chat-ID bereits eingetragen";
        return [null, msg];
    }
}

userlist.push(user);
global.set('userlist', userlist);

msg.payload = "Nutzer " + name + " hinzugefügt!";

return [msg, null];