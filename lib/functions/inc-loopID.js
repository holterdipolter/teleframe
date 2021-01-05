// name: inc loopID
// outputs: 1
// assign LoopId to make sure just one loop is running
var loopId = flow.get('arrayImagesLoopId') || 0;
loopId++;
if (loopId === 100){
    loopId = 0;
}
flow.set('arrayImagesLoopId', loopId);

return msg;