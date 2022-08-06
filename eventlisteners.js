var inputCmnd = document.getElementById("inputCmnd");
const historyKey = 0;
var upDwn = historyKey;
var historyVal;

// bug in the up and down events

inputCmnd.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "Enter":
            upDwn = ++upDwn;
            historyVal = inputCmnd.value;
            historyVal = historyVal.toLowerCase;
            sessionStorage.setItem(upDwn, historyVal);
            inputCmnd.value = "";
            break;
        case "ArrowUp":
            if (upDwn > historyKey){
                inputCmnd.value = sessionStorage.getItem(--upDwn);
            }
            else if (upDwn == 1){
                inputCmnd.value = "lol cant go back"
            }
            else { console.log("ERR") }
            break;
        case "ArrowDown":
            if(upDwn < sessionStorage.length){
                inputCmnd.value = sessionStorage.getItem(++upDwn);
            }
            else if (upDwn == sessionStorage.length){
                inputCmnd.value = "lol cant go further"
            }
            else { console.log("ERR") }
            break;
    }
});
