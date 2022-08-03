// VARIABLES

var input = document.getElementById("input");
var prevCommand = document.getElementById("uppr");
var current = new Date();

// FUNCTIONS

function help(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = "help: You can use the following commands:<pre> whoami     hostname     history<br> date       history      ls<br> uname      reboot<br><br> Alternatively, you can use command help with 'help [command]'</pre>";
    prevCommand.appendChild(newCommand);
}

function history(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = "history: <pre>crap<br>crap<br>crap<br></pre>";
    prevCommand.appendChild(newCommand);
};

function date(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = "date: " +current.toLocaleString();
    prevCommand.appendChild(newCommand);
    current.getFullYear();
};

function whoami(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = "whoami: coreilli";
    prevCommand.appendChild(newCommand);
};

function clear(){
    prevCommand.innerHTML = "";
}

function uname(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = "uname:<br>OS: JS/Unix";
    prevCommand.appendChild(newCommand);
};

function ls(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = "ls: 3 files available<pre>whoami.fey     achievements.fey    connections.fey</pre>";
    prevCommand.appendChild(newCommand);
};

function hostname(){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = "hostname: anubisfey.cf";
    prevCommand.appendChild(newCommand);
};

function errorNotDefined(inputGot){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = "ERROR: " + inputGot + " not defined. Type 'help' for list of available commands.";
    prevCommand.appendChild(newCommand);
}

// STUFF FOR EXECUTIONS

function getInput(inputGot) {
    var action;
    
    switch(inputGot){
        case "help":
            action = help();
            break;
        case "whoami":
            action = whoami();
            break;
        case "clear":
            action = clear();
            break;
        case "ls":
            action = ls();
            break;
        case "hostname":
            action = hostname();
            break;
        case "date":
            action = date();
            break;
        case "history":
            action = history();
            break;
        case "uname":
            action = uname();
            break;
        case "reboot":
            action = document.location.reload(true);
            break;
        default:
            action = errorNotDefined(inputGot);
    }

    return action;
}

// EVENT LISTENER FOR ENTER

input.addEventListener("keypress", function(event) {
    if (event.key == "Enter"){
        var inputGot = input.value;
        inputGot = inputGot.toLowerCase();
        getInput(inputGot);
        input.value = "";
    }

    });
