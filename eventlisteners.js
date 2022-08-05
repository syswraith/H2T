var inputCmnd = document.getElementById("inputCmnd");
var historyKey = 0;
var historyVal;

inputCmnd.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){                                // Add a switch statement to make this cleaner
        historyKey  = ++historyKey;                           // Here you increment the index to 0
        historyVal = inputCmnd.value;                        // Here you set the value equal to value
        historyVal = historyVal.toLowerCase();              // Here you convert it to lower case
        sessionStorage.setItem(historyKey, historyVal);
        inputCmnd.value = "";
    }
    else if (event.key === "ArrowUp") {
        inputCmnd.value = sessionStorage.getItem(--historyKey);
    } 
    else if (event.key === "ArrowDown") {
        inputCmnd.value = sessionStorage.getItem(++historyKey);
    }
    else {}
});