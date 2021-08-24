class Help extends Command{
    constructor(){
        super(["help","h"]);
        super.description="";
    }
    exec() {
        return "this is help :)";
    }
}