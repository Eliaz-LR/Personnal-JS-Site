//class that hold all the informations of an individual command
class Command{
    description;
    constructor(name){
        this.name=name;
    }
}

//class that hold all the commands
class Commands{
    constructor(){
        this.commands=[]
    }
    newCommand(c){
        this.commands.push(c);
        return c;
    }
}
