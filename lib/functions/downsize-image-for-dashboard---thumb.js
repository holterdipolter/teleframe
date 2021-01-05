// name: downsize image for dashboard + thumb
// outputs: 1
var resize = 416;
var resizeThumb = 113;
var quality = 60;

var cmd;

var imagepath = global.get('images-processing');
var resultpath = imagepath;
var resultpathThumb = imagepath;

if (msg.topic === "textTrueText"){
    imagepath = imagepath + msg.image.filenameText;
    resultpath = resultpath + msg.image.filenameTextDash;
    resultpathThumb = resultpathThumb + msg.image.filenameTextThumb;
} else {
    imagepath = imagepath + msg.image.filenamePic;
    resultpath = resultpath + msg.image.filenamePicDash;
    resultpathThumb = resultpathThumb + msg.image.filenamePicThumb;
}

cmd = "convert " + imagepath + " -resize " + resize + " -quality " + quality + " " + resultpath + " && ";
cmd = cmd + "convert " + imagepath + " -resize " + resizeThumb + " -quality " + quality + " " + resultpathThumb;

msg.payload = cmd;

return msg;