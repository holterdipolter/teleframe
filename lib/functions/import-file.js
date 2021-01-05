// name: import file
// outputs: 1
var domain = global.get('domain');
if (domain.slice(-1) === "/"){
    domain.slice(-1);
}
msg = { src: "https://" + domain + ":" + global.get('port') + "/telegram/videos/03.loop/" + msg.payload, payload: msg.payload};

return msg;