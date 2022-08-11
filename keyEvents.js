function commandCompare(comparevar){
    switch(comparevar){
        case "help":
            var newCommand = document.createElement("li");
            newCommand.innerHTML = "help: You can use the following commands:<pre> whoami     hostname     history<br> date       history      ls<br> uname      reboot<br><br> Alternatively, you can use command help with 'help [command]'</pre>";
            appendSpace.appendChild(newCommand);
            break;

        case "whoami":
            var newCommand = document.createElement("li");
            newCommand.innerHTML = "whoami<br>flynn";
            appendSpace.appendChild(newCommand);
            break;

        case "clear":
            appendSpace.innerHTML = "";
            break;

        case "ls":
            break;

        case "date":
            var newCommand = document.createElement("li");
            newCommand.innerHTML = "date<br>" +current.toLocaleString();
            appendSpace.appendChild(newCommand);
            current.getFullYear();
            break;

        case "history":
            var historyGet = 0;
            while (historyGet != sessionStorage.length) {
                var newCommand = document.createElement("li");
                newCommand.innerHTML = sessionStorage.getItem(historyGet);
                appendSpace.appendChild(newCommand);
                historyGet++;
            }
            break;

        case "uname":
            var newCommand = document.createElement("li");
            newCommand.innerHTML = "uname<br>H2T: Hyper Text Terminal<br> made by syswraith";
            appendSpace.appendChild(newCommand);
            break;

        default:
            var newCommand = document.createElement("li");
            newCommand.innerHTML = comparevar + " is not a valid command. Type help for more info.";
            appendSpace.appendChild(newCommand);
            break;

    }
}
