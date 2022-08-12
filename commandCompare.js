function commandCompare(comparevar){
    switch(comparevar){
        case "help":
            var newCommand = document.createElement("li");
            newCommand.innerHTML = `
            help<br> 
            You can use the following commands:
        <pre>
whoami      clear       reboot
ls          date        history
uname       neofetch
        </pre>
            `;
            appendSpace.appendChild(newCommand);
            break;

        case "neofetch":
            var newCommand = document.createElement("li");
            newCommand.innerHTML = `
            neofetch
            <pre>   
██   ██ ██████  ████████    ____________________________
██   ██      ██    ██      |    Hyper Text Terminal     |
███████  █████     ██      |          made by           |
██   ██ ██         ██      |______  {syswraith}  _______|
██   ██ ███████    ██              |____________|
            </pre>
            `;
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

        case "reboot":
            sessionStorage.clear();
            localStorage.clear();
            location.reload();

        case "ls":
            var newCommand = document.createElement("li");
            newCommand.innerHTML = `
            ls
            <pre>
aboutme.txt     guide.txt
            </pre>
            `;
            appendSpace.appendChild(newCommand);
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
