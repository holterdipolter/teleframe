// name: convert image resize
// outputs: 1
var imagepath = global.get('images-processing');
var resultpath = imagepath;

imagepath = imagepath + msg.image.fileId + ".jpg";
var filenameResize = msg.image.fileId + ".rs.jpg";
resultpath = resultpath + filenameResize;

flow.set('filenameResize', filenameResize);

var displayWidth = global.get('displayWidth');
var displayHeight = global.get('displayHeight');
var imageWidth = msg.image.imageWidth;
var imageHeight = msg.image.imageHeight;

var resize = "";
if (imageWidth/imageHeight > displayWidth/displayHeight){
    
    resize = (displayWidth / imageWidth * 100);
    
} else {
    
    resize = (displayHeight / imageHeight * 100);
}

flow.set('lastImageResize', resize);

msg.payload = "convert " + imagepath + " -size " + displayWidth + "x" + displayHeight + " -auto-orient -resize " + resize + "%" + " xc:black +swap -gravity center -composite " + resultpath;

return msg;




