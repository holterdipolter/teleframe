// name: rename user
// outputs: 2
var userlist = global.get('userlist');
var name = flow.get('userselect');
var newname = flow.get('newusername');


// Überprüfen ob Name bereits in Liste vorhanden

for (var i=0; i < userlist.length; i++) {
    if(userlist[i].name == newname){
        msg.payload = "Name bereits eingetragen";
        return [msg, null];
    }
}

// User umbennen

for (i=0; i < userlist.length; i++) {
    if(userlist[i].name == name){
        userlist[i].name = newname;
        msg.payload = "Nutzer " + name + " nach " + newname + " umbenannt!";
        return [null, msg];
    }
}

msg.payload = "Nutzer " + name + " nicht vorhanden";
return [msg, null];

