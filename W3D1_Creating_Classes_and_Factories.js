class Hamster{
   
        owner=""
        name="Russel"
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
buyHamster(){
    this.hamster.push(hamster={})
    this.mood+=10
    this.bankAccount-=getPrice()
}





}







const anton = new Person("Anton")


console.log(anton);
