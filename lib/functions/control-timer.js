// name: control timer
// outputs: 2
msg.timeout = 3599;

if (msg.payload.method === "Player.OnPlay"){
    
    msg.payload = 1;
    
    if (context.get('pauseFlag') || false){
        msg.timeout = 3599 - flow.get('timecode');
        context.set('pauseFlag', false);
    } else {
        context.set('pauseFlag', false);
    }
    return [msg, null];
    
} else if (msg.payload.method === "Player.OnPause"){
    msg.payload = 0;
    context.set('pauseFlag', true);
    return [msg, null];

} else if (msg.payload.method === "Player.OnStop" || msg.payload === "r" || msg.payload === "l"){
    msg.payload = "cancel";
    //msg.payload = 0;
    //msg.timeout = 3600;
    context.set('pauseFlag', false);
    return [msg, {payload:3600}];
}
