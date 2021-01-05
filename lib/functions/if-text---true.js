// name: if text = true
// outputs: 2
var arrayElement = flow.get('imageDel');

if (arrayElement.textFlag){
    msg.payload = "Ich möchte löschen...";
    return [null, msg];
} else {
    return [msg, null];
}
