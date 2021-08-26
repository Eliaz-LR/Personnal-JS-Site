class GitHub extends Command{
    constructor(){
        super(["github","git"]);
        super.description="link to my GitHub";
    }
    exec() {
        return '<a class="underline" href="https://github.com/Eliaz-LR">GitHub</a>';
    }
}