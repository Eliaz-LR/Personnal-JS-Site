class Help extends Command{
    constructor(commands){
        super(["help","h"]);
        super.description="shows a short description of every command";
        this.commands=commands;
    }
    exec() {
        var stringToReturn = "";
        for (let index = 0; index < this.commands.length; index++) {
            const element = this.commands[index];
            stringToReturn = stringToReturn +"'"+element.name[0] + "' - " + element.description + "<br/>";
        }
        return stringToReturn;
    }
}