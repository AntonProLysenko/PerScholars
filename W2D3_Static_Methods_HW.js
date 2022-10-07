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






// const jim = new Person("Jim the person")

// console.log(jim)
// jim.walk()

// Governor.callPresident()                      // here returns class name in console.log, not undefined, Why?




// const mark = new PostalWorker('Mark')
// const tim = new PostalWorker("Tim")

// console.log(tim);


// const jakie= new Chef("Jakie")
// const kate = new Chef ("Kate")

// kate.coockTheMeal()

// tim.giveAnEnvelope()





//                                                                   ===========I am HUNGRY for More===============




class BankAccount{
    constructor(namePar, balance, number){
        this.ownerName = namePar,
        this.balance = balance,
        this.accNum = number;
    }
    
        
    

    deposit(money){
       let newDeposit =money+this.balance
        this.balance=newDeposit

    }

    withdraw(bills){
        if(bills>this.balance){

            console.log('Insuficient Balance');                                  //Here had to disable the overdraft, since by default we can go below 0
            
        }else{
        let newBalance = this.balance-bills

        this.balance=newBalance}
    }
    
}

// const  chase =  new BankAccount( "anton", 20, 1234567890)

// console.log(chase);
// chase.deposit(20)
// console.log(chase);

// chase.withdraw(45)
// console.log(chase);



class CheckingAccount extends BankAccount{
    constructor(namePar, balance, number){
        super(namePar,balance,number)
        
    }
    withdraw(bills){
        let overdraftEnabled=true
        if(overdraftEnabled===true){ 
            let newDeposit =this.balance-bills
            this.balance=newDeposit
        }else{
            if(bills>this.balance){

                console.log('Insuficient Balance');                                  
                
            }else{
            let newBalance = this.balance-bills
    
            this.balance=newBalance}
        }
    }
    
}




// const bofaCheck= new CheckingAccount('Anton', 10, 1234567890)


// console.log(bofaCheck);
// bofaCheck.withdraw(20)
// console.log(bofaCheck);





class SavingsAccount extends BankAccount{
    constructor(namePar, balance, number){
        super(namePar,balance,number)
        
    }
    withdraw(bills){

        console.log("No withdraw alowed from your Saving");
        

        }
    
    
}


// const bofaSave= new SavingsAccount('Anton', 300, 1234567890)


// console.log(bofaSave);
// bofaSave.withdraw(20)
// console.log(bofaSave);



