class Person{
    constructor(name,career, legs, arms,){
    this.name=name
    this.career=career || 'unemployed'
    this.legs=legs ||2
    this.arms=arms ||2
   
    }

    walk(){
        console.log(`I'm walking`)
    }
    sleap(){

        console.log("zzzzz");
        
    }
    eat(){

        console.log("om nom nom");
        
    }
}

class Governor extends Person{
    constructor(name, legs, arms,){
    super(legs,arms)
    this.name=name
    this.career= 'governor'
    

    }
    static callPresident(){


        console.log(`${this.name} Hello, Mr President!`); // // here returns class name (Governor) in console.log, not undefined, ineresting, do you know why?
        
    }


}

class PostalWorker extends Person{
    constructor(name, legs, arms,){
        super(legs,arms)
        this.name=name 
        this.career= 'Postal worker'
       
    }   

    giveAnEnvelope(){
        this.walk()

        console.log("Ant giving the envelope");
        
    }


}

class Chef extends Person{

    constructor(name, legs, arms,){
        super(legs,arms)
        this.name=name
        this.career= 'Chef'
        
    }   
    coockTheMeal(){

        console.log("i'm cooking");
        
    } 

}






const jim = new Person("Jim the person")

console.log(jim)
jim.walk()

Governor.callPresident()     // here returns class name in console.log, not undefined, Why?




const mark = new PostalWorker('Mark')
const tim = new PostalWorker("Tim")

console.log(tim);


const jakie= new Chef("Jakie")
const kate = new Chef ("Kate")

kate.coockTheMeal()

tim.giveAnEnvelope()