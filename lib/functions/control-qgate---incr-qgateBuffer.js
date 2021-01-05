// name: control qgate + incr qgateBuffer
// outputs: 1
var qgateBuffer = flow.get('qgateBufferVideos') || 0;

if (qgateBuffer === 0){
    
    var msgC = { payload: "trigger",
                 topic: "control"
    }
    
    qgateBuffer = qgateBuffer + 1;
    flow.set('qgateBufferVideos', qgateBuffer);
    
    return [[msg, msgC]];

} else {
    qgateBuffer = qgateBuffer + 1;
    flow.set('qgateBufferVideos', qgateBuffer);
    
    return msg;
}



