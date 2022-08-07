const inputCmnd = document.getElementById("inputCmnd");
const historyKey = 1;
var upDwn = historyKey;
var historyVal;

inputCmnd.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "Enter":
            historyVal = inputCmnd.value;
            sessionStorage.setItem(upDwn, historyVal);
            upDwn = ++upDwn;
            inputCmnd.value = "";
            break;
        case "ArrowUp":
            if (upDwn > historyKey){
                inputCmnd.value = sessionStorage.getItem(--upDwn);
                
            }
            else if (upDwn == 1){
                inputCmnd.value = sessionStorage.getItem(upDwn);
                console.log("ERR: back not possible");
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
