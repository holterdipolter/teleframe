// name: sek -> min:sek
// outputs: 1
var time = msg.payload;
var min = Math.floor(time / 60)
time = time - min*60;
var sec = Math.floor(time)

if(min < 10){
    min = "0" + min;
}

if(sec < 10){
    sec = "0" + sec;
}

msg.payload = min + " m " + sec + " s"
return msg;