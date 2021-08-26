class GitHub extends Command{
    constructor(){
        super(["github","git"]);
        super.description="";
    }
    exec() {
        return '<a href="https://github.com/Eliaz-LR">GitHub</a>';
    }
}