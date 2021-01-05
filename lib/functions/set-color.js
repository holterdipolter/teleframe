// name: set color
// outputs: 2
var msgPlay = {payload: global.get('red')}; // rot
var msgPause = {payload: global.get('yellow')}; // gelb

if (msg.payload === "play" || msg.payload === "kodiPlay"){
    
    msgPause.payload = global.get('buttonColor');
    
    context.set('colorswitchPause', true);
    context.set('colorswitchPlay', true);
    
    if (msg.payload === "play"){
        msgPlay = {payload: global.get('yellow')}; // gelb
        context.set('playPressed', true);
    
    } else if (msg.payload === "kodiPlay") {
    
        context.set('playPressed', false);
    }
    
    return [msgPause, msgPlay];

} else if (msg.payload === "pause"){
    
    if ((context.get('colorswitchPause') || false) && context.set('colorswitchPlay')){
        context.set('colorswitchPause', false);
    
    } else {
        msgPause.payload = global.get('buttonColor');
        context.set('colorswitchPause', true);
    }
    return [msgPause, msgPlay];

} else if (msg.payload === "kodiPause"){
    
    context.set('colorswitchPause', false);
    
    return [msgPause, msgPlay];

} else if (msg.payload === "stop" || msg.payload === "kodiStop"){
    
    msgPause.payload = global.get('buttonColor');
    
    if (context.get('playPressed')){
        msgPlay.payload = global.get('yellow');
    } else {
        msgPlay.payload = global.get('buttonColor');
    }

    context.set('playPressed', false);
    context.set('colorswitchPause', true);
    context.set('colorswitchPlay', false);
    
    return [msgPause, msgPlay];
}
