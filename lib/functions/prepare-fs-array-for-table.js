// name: prepare fs-array for table
// outputs: 1
var fileList = [];

var pic;
var text;
var user;
var id;

var array = global.get('arrayImages');

var domain = global.get('domain');
if (domain.slice(-1) === "/"){
    domain.slice(-1);
}

var j = 0;
for (var i=0; i < array.length; i++) {
    
    if (!array[i].trashFlag){
        
        id = array[i].fileId;
        user = array[i].user;
        pic = "https://" + domain + ":" + global.get('port') + "/telegram/images/03.loop/" + array[i].filenamePicThumb;
        
        if (array[i].textFlag){
            text = "<small>" + array[i].text + "</small>";
        } else {
            text = "";
        }
        fileList[j] = {id, pic, text, user};
        j++;        
    }
}

msg.payload = fileList;

return msg;