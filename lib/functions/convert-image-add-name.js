// name: convert image add name
// outputs: 1
// set variables
var imagepath = global.get('images-processing');
var resultpath = imagepath;

var sizeX = global.get('displayWidth');
var sizeY = global.get('displayHeight');
var gravity = (flow.get('gravityName')) || "southeast";
var undercolor = "black"; //

if (msg.topic === "textTrueText"){
    imagepath = imagepath + flow.get('filenameResizeText');
    resultpath = resultpath + msg.image.filenameText;
    
} else {
    imagepath = imagepath + flow.get('filenameResize');
    resultpath = resultpath + msg.image.filenamePic;
}

var textsize = (flow.get('nameTextsize')) || 40;
var bgalpha = "00";
var bgcolor = "000000";
var text = flow.get('lastTelegramUsername') || "no text entered";
// Prepare string for bash -> convert special characters
text = text.replace(/\\/g , "\\\\").replace(/"/g , "\\\"");
var color = flow.get('color') || "white";
var font = flow.get('font') || "Liberation-Sans";

msg.payload = "convert -background '#" + bgcolor + bgalpha + "' -gravity " + gravity + " -fill " + color + " -undercolor " + undercolor + " -pointsize " + textsize + " -font " + font + " -size " + sizeX + "x" + sizeY + " caption:\"" + text + "\" " + imagepath + " +swap -gravity " + gravity + " -composite " + resultpath;

return msg;