var idConsole = document.getElementById('idConsole');
//declaration du typewriter
var fakeConsole = new Typewriter(idConsole,{
    cursor: '_',
    delay: 20,
});

//initialize commands
let commands = new Commands();
commands.newCommand(new GitHub());
commands.newCommand(new StackOverflow());
commands.newCommand(new AboutMe());
//must be init last, uses all the previous commands
commands.newCommand(new Help(commands.commands));

function isTheRightCommand(command){
    return command.name.includes((document.getElementById('imputConsole').value).toLowerCase().trim())
}

//function used just to print something console style
function printInConsole(toprint){
    fakeConsole.stop();
    fakeConsole.typeString('<br/>>'+toprint);
    fakeConsole.start();
}

//other things that needs to be done after imputing something in the console
function imputedConsole() {
    //search in the Command of commands (instance of an object of type Commands) something corresponding to whats entered
    let command_to_exec_index = commands.commands.findIndex(isTheRightCommand);
    printInConsole(commands.commands[command_to_exec_index].exec());
    document.getElementById('imputConsole').value='';
}



document.getElementById('imputConsole').onblur = function (event) { 
    var blurEl = this; 
    setTimeout(function() {
        blurEl.focus()
    }, 10);
};
document.addEventListener("keyup", function(event) {
    if (event.key=="Enter") {
        imputedConsole();
    }
});

document.getElementById('imputConsole').focus();
fakeConsole.start();
printInConsole("Type 'h' or 'help' to list the commands available");
