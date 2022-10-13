class Hamster{
    constructor(name){
        this.name=name

    }
        owner=""
        price=15
    

    wheelRun(){

        console.log("squeak squeak");
        
    }
    eatFood(){

        console.log("nibble nibble");
        
    } 

    getPrice() {
        return  this.price
    }

}




class Person{
    constructor(name){
        this.name =name 
    }
    age=0
    height=0
    weight=0
    mood =0
    hamster =[]
    bankAccount =0
    

getName() {
    return this.name
}
    

getAge(){
    return this.age
}

getWeight(){
    return this.weight

}
greet(name){
    
    console.log(`Hello! ${name}`);
    
}
eat(){
    this.weight++
    this.mood++
}
exersise(){
    this.weight--
}
ageUp(){
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount+=10
}
buyHamster(newHamster){
    this.hamster.push(newHamster)
    this.mood+=10
    this.bankAccount-=newHamster.getPrice()
}
}

//                                          1.Instantiate a new Person named Timmy
const timmy = new Person("Timmy")
//                                              2. Age Timmy five years
timmy.age=5


//                                              3.At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for(i=0; i<5;i++){
timmy.eat()                 //here Timmy eats 5 times in a raw 
}

//                                              4.Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
for(i=0; i<5;i++){
    timmy.exersise()                 //here Timmy exersises 5 times in a raw 
    }


//                                                  5.Age Timmy 9 years

for(i=0; i<4;i++){
    timmy.ageUp()                 //here Timmy is growing until he is 9
    }




//                                                  6.Create a hamster named "Gus"
const gusTheHumster= new Hamster("Gus")

//                                                  7.Set Gus's owner to the string "Timmy"
gusTheHumster.owner=timmy.name



//                                              8.Have Timmy "buy" Gus

timmy.buyHamster(gusTheHumster)





//                                              9.Age Timmy 15 years

for(i=0; i<15;i++){
timmy.ageUp()
}


//                                                      10.Have Timmy eat twice

timmy.eat()
timmy.eat()
//                                                          11.Have Timmy exercise twice
timmy.exersise()
timmy.exersise()

console.log(gusTheHumster);

console.log(timmy);










//                                                          Chef Make Dinners



//Please give a responce!

//I'm not sure if we have to be abble to acces our dinners in global scope, 
//since there is no instruction that we have to push our dinners in some array or assign 
//them  to the variable


class Dinner {
    constructor(appetizer,entree, dessert){
        this.appetizer=appetizer,
        this.entree=entree;
        this.dessert=dessert
    }

}

class Chef {

    makeDiner(appetizer,entree,dessert){
         const dinner = new Dinner(appetizer,entree,dessert)
        return dinner
    }

}


const frank = new Chef;

console.log(frank.makeDiner('onion rings', 'mac&cheese', 'cheesecake'))

console.log(frank.makeDiner('Deviled Eggs', 'salmon', 'lava fudge'))

console.log(frank.makeDiner('calamari', 'salmon', 'mufin'))
