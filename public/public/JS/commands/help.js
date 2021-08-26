class Help extends Command{
    constructor(commands){
        super(["help","h"]);
        super.description="";
        this.commands=commands;
    }
    exec() {
        var stringToReturn = "";
        console.log(this.commands.length);
        for (let index = 0; index < this.commands.length; index++) {
            const element = this.commands[index];
            console.log(element);
            stringToReturn = stringToReturn + element.name + "<br/>";
        }
        return stringToReturn;
    }
}