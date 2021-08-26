class StackOverflow extends Command{
    constructor(){
        super(["stackoverflow","stack overflow"]);
        super.description="link to my Stackoverflow";
    }
    exec() {
        return '<a class="underline" href="https://stackoverflow.com/users/14491660/eliouz">StackOverflow</a>';
    }
}