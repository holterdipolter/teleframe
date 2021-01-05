// name: get file
// outputs: 1
var file;

if (msg.topic === "text" && msg.payload.text !== ""){
    file = msg.payload.id + ".text.dash.jpg";

} else {
    file = msg.payload.id + ".pic.dash.jpg";
}

var filename = global.get('images-loop') + file;

return {filename};