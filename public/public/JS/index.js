var idConsole = document.getElementById('idConsole');
//declaration du typewriter
var fakeConsole = new Typewriter(idConsole,{
    cursor: '_',
    delay: 20,
});

//initialize commands
let commands = new Commands();
commands.newCommand(new Help());

function isTheRightCommand(command){
    return command.name.includes(document.getElementById('imputConsole').value)
}

//function used just to print something console style
function printInConsole(toprint){
    fakeConsole.stop();
    fakeConsole.typeString('<h2></h2>>'+toprint);
    fakeConsole.start();    
}

//other things that needs to be done after imputing something in the console
function imputedConsole(params) {
    //cherche dans les Command de commands (instance d'un objet de type Commands) un nom qui correspond au truc entré
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
        imputedConsole(document.getElementById('imputConsole').value);
    }
});

document.getElementById('imputConsole').focus();
fakeConsole.start();
printInConsole("Type 'h' or 'help' to list the commands available");
/*
fakeConsole.start()
    .typeString('<a href="https://github.com/Eliaz-LR">>GitHub<span></span></a>')
    .pauseFor(200)
    .typeString('<h2></h2><a href="https://stackoverflow.com/users/14491660/eliouz">>StackOverflow<span></span></a>')
    .typeString('  :)')
    .pauseFor(200)
    .deleteChars(4)
    .pauseFor(2000)
    .typeString("<h2></h2><h2></h2>>I'm still learning new things every weeks, be kind on what I've done so far ;)");

*/
