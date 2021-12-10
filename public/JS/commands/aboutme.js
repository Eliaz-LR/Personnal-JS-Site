class AboutMe extends Command{
    age=dayjs().diff(dayjs("2000-12-03"),'year',true);
    constructor(){
        super(["aboutme","about","am"]);
        super.description="some info about me";
    }
    exec() {
        return "<div class='w-full flex justify-center'><h2>Hi, I'm a "+this.age+" years-old developer who is curently studying at <a class='underline' href='https://www.iut-clermont.fr/formations/dut-informatique/'>UCA</a>.</h2></div><div class='w-full flex justify-center'><img class='mx-auto' src='https://camo.githubusercontent.com/493c4f10a4d355a1adbe99a4eba5862ec5abc1a3ecf5c94f617f0116230d2717/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d456c69617a2d4c52266c61796f75743d636f6d70616374267468656d653d6461726b' alt='the languages I ve learned so far'></div>";
    }
}