// name: convert image add text
// outputs: 1
var imagepath = global.get('images-processing');
var resultpath = imagepath;

imagepath = imagepath + flow.get('filenameResize');
var filenameResizeText = flow.get('filenameResize') + ".text.jpg";
resultpath = resultpath + filenameResizeText;
flow.set('filenameResizeText', filenameResizeText);

var bgalpha = flow.get('bgalpha') || "00";
var bgcolor = flow.get('bgcolor') || "000000";
var text = msg.image.text || "no text entered";

// Prepare string for bash -> convert special characters
text = text.replace(/\\/g , "\\\\").replace(/"/g , "\\\"");

var textsize = "";
if (flow.get('textsize') > 0){
    textsize = " -pointsize " + (flow.get('textsize') || 30);
}
var sizeX = (msg.image.imageWidth * (flow.get('lastImageResize'))/100) - flow.get('cropX');
var sizeY = (msg.image.imageHeight * (flow.get('lastImageResize'))/100) - flow.get('cropY');
var gravity = flow.get('gravity') || "center";
var color = flow.get('color') || "white";
var font = flow.get('font') || "Liberation-Sans-Bold";
var undercolor = "";
if (flow.get('undercolor') !== "off"){
    undercolor = " -undercolor " + (flow.get('undercolor') || black);
}

msg.topic = "textTrueText";
msg.payload = "convert -background '#" + bgcolor + bgalpha + "' -gravity " + gravity + " -fill " + color + undercolor + textsize + " -font " + font + " -size " + sizeX + "x" + sizeY + " caption:\"" + text + "\" " + imagepath + " +swap -gravity " + gravity + " -composite " + resultpath;

return msg;