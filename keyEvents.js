const inputCmnd = document.getElementById("inputCmnd");
const historyKey = 0;
var upDwn = historyKey;
var historyVal;
inputCmnd.value = sessionStorage.setItem(0, "Cannot go back");

if (inputCmnd.value == "undefined"){ inputCmnd.value = sessionStorage.getItem(0); }

inputCmnd.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "Enter":
            upDwn = ++upDwn;
            historyVal = inputCmnd.value;
            sessionStorage.setItem(upDwn, historyVal);
            inputCmnd.value = "";
            break;
        case "ArrowUp":
            if (upDwn > historyKey){
                inputCmnd.value = sessionStorage.getItem(--upDwn);
                
            }
            else if (upDwn == 0){
                inputCmnd.value = sessionStorage.getItem(0);
                console.log("ERR: back not possible");
            }
            else if (upDwn == 1){
                inputCmnd.value = sessionStorage.getItem(upDwn);
            }
            else { console.log("ERR: Unknown") }
            break;
        case "ArrowDown":
            if(upDwn < sessionStorage.length){
                inputCmnd.value = sessionStorage.getItem(++upDwn);
            }
            else if (upDwn == sessionStorage.length){
                console.log("ERR: further not possible");
            }
            else { console.log("ERR: Unknown") }
            break;
    }
});