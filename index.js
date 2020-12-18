var idConsole = document.getElementById('idConsole');

var fakeConsole = new Typewriter(idConsole,{
    cursor: '_',
});

fakeConsole.start()
    .typeString('<a href="https://github.com/Eliaz-LR">>GitHub<span></span></a>')
    .pauseFor(200)
    .typeString('<h2></h2><a href="https://stackoverflow.com/users/14491660/eliouz">>StackOverflow<span></span></a>')
    .typeString('  :)')
    .deleteChars(4);