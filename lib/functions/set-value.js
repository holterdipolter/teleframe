// name: set value
// outputs: 1
if(msg.payload === "l"){
    msg.payload = (global.get('trashMax') || 1) - 1;
    if (msg.payload < 1){
        msg.payload = 1;
    }
} else {
    msg.payload = (global.get('trashMax') || 1) + 1;
    if (msg.payload > 999){
        msg.payload = 999;
    }
}
return msg;