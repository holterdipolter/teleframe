// name: set stickFlag
// outputs: 1
var array = global.get('arrayImages');
var arrayElement = array[flow.get('currentBrowserIndex')];

if (arrayElement.stickFlag){
    
    arrayElement.stickFlag = false;
    msg.payload.stickFlag = false;

} else {
    arrayElement.stickFlag =  true;
    msg.payload.stickFlag = true;
}

return msg;