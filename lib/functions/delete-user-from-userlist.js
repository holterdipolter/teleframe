// name: delete user from userlist
// outputs: 2
var userlist = global.get('userlist');
var name = flow.get('userselect');

// Überprüfen ob User bereits in Liste vorhanden

for (var i=0; i < userlist.length; i++) {
    if(userlist[i].name == name){
        userlist.splice(i, 1);
        msg.payload = "Nutzer " + name + " gelöscht!";
        return [msg, null];
    }
}

msg.payload = "Nutzer " + name + " nicht vorhanden";
return [null, msg];