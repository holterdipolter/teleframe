// name: if ping true/false
// outputs: 4
if (msg.payload){
    
    flow.set('pingCounter', 12);
    flow.set('onlineFlag', true);
    
    if (!(flow.get('onlineFlag'))){
        
        msg.payload = "firstOnline";
        return [null, msg, null, msg];  
        
    } else {
    
        msg.payload = "online";
        return [null, null, null, msg];        
    }
    
} else {
    
    flow.set('pingCounter', flow.get('pingCounter') -1);
    
    if (flow.get('pingCounter') <= 0){
        
        flow.set('onlineFlag', false);
        msg.payload = "offline, pingCounter = " + (flow.get('pingCounter') + " -> stop");
        return [msg, null, null, null];
        
    } else {
        msg.payload = "offline, pingCounter = " + (flow.get('pingCounter'));
        return [null, null, msg, null];
    }
}
