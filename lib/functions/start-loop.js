// name: start loop
// outputs: 1
var array = global.get('arrayImages');
var indexStart = parseInt(msg.index);

// wenn indexStart leer, setze index = 0
if (indexStart >= 0){} else {indexStart = 0;}

// wenn indexStart.trashFlag=true -> suche nächsten Index mit trashFlag=false
var i = indexStart;

while (array[i].trashFlag){
    i++;
    if (i === array.length){
        i = 0;
    }
    // wenn kein Index mit trashFlag=false gefunden -> stop
    if (i === indexStart){
        return {};
    }
}
indexStart = i;

if (indexStart < array.length){

    // springe x elemente zurück -> reduziere index um x
    // überspringe trashFlag
    
    // setze Anzahl Schritte zurück
    var backStep = 1;
    
    var j = backStep;
    i = indexStart;
    var iTmp;

    while (j > 0){
        
        iTmp = i;
        // array index -1
        if (i <= 0){
            i = array.length - 1;
        } else {
            i--;
        }
        // stoppe, wenn einmal komplett durchlaufen und setze index wieder eins zurück
        if (i === indexStart){
            i = iTmp;
            break;
        }
        // wenn kein Trash -> zähle
        if (!array[i].trashFlag){
            j--;
            
            // zähle eins weiter, wenn textFlag=true und text=an
            if (array[i].textFlag && global.get('textActive')){
                j--;
            }
        }
    }
    // wenn neues Element gefunden wurde, übergebe neuen Index an indexStart
    if (backStep > j){
        indexStart = i;
        
        // Setze neue Startosition für Kodi-Playlist
        flow.set('playlistPosStart', (backStep - j), 'mem');
    } else {
        flow.set('playlistPosStart', 0, 'mem');    // sollte kein Element gefunden worden sein, setzte Start auf 0
    }
    
    // Zähler für Schleife initalisieren
    var index = indexStart;
    var playlistPos = 0;
    
    // assign LoopId to make sure just one loop is running
    var loopId = flow.get('arrayImagesLoopId') || 0;

    // ausgeben
    return {index, indexStart, loopId, playlistPos};
}