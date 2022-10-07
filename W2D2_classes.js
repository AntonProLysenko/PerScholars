// class Cat {}
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances




class Cat {
    constructor(namePar, colorPar,tailPar, pawsPar, hunger){
        this.name=namePar
        this.color=colorPar
        this.tail=tailPar
        this.paws= pawsPar || 4 
        this.hungry=hunger || false

    }
    voice(){
        console.log(`${this.name} says Mew!`)
    }

    runAround(){
        if (this.paws===4){

            console.log("barely heard sound of stomps");
            

        } else{

            console.log("I need wheels to run");
            
        }
    }
    catchTheMouse(){
        if(this.hungry===true && this.paws===4){
            
            console.log("Look what I catched!");
            
        }else if (this.hungry===false ){
            
            console.log("I'm not hungry");
            
        }else{
            this.runAround()
        }
    }


}


let sam = new Cat('Sam','golden','long')

console.log(sam);
sam.catchTheMouse()
sam.runAround()


let coco = new Cat('Coco','white', 'long',4,true)

console.log(coco);
coco.catchTheMouse()
coco.runAround()






//
// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate




class Pirate {

      constructor(name, eyes,curse){
        this.name= name;
        this.eyes= eyes;
        this.curse = curse || false
    
      }
      drinkRome(){
        console.log("gulp gulp gulp Burp!")
      }
      fight(){
        
        console.log('Bang Bang');
        
      }
      land(){
        if( this.curse === true ){

            console.log("You cannot step your foot on the land another 55 years Yo-ho-ho!");
            
        }else {
             console.log("Landed successfuly!")
        }
      }
    
}





//const theBlackPearl=[]
//const theFlyingDutchman=[]

let davyJones = new Pirate("Davy Jones", 2, true);
let bill =new Pirate("Bootstrap Bill", 2,true)
let sharkHead= new Pirate("Shark Head", 2, true)
// theFlyingDutchman.push(davyJones,bill,sharkHead)
// console.log(theFlyingDutchman);


 
let willTurner = new Pirate("Will Turner", 2);
let jackSparrow = new Pirate("Jack Sparrow",2)
let barbarossa = new Pirate("Barbarossa",2)
//  theBlackPearl.push(willTurner,jackSparrow,barbarossa)
//  console.log(theBlackPearl);


const theBlackPearl=[willTurner, jackSparrow, barbarossa]
const theFlyingDutchman= [davyJones, bill, sharkHead]

console.log(theBlackPearl);
console.log(theFlyingDutchman);






 for(i=0; i<theBlackPearl.length; i++){
    console.log(theBlackPearl[i].name)
    console.log(theBlackPearl[i].eyes)
    console.log(theBlackPearl[i].curse)
 }


 for(i=0; i<theFlyingDutchman.length; i++){
    console.log(theFlyingDutchman[i].name)
    console.log(theFlyingDutchman[i].eyes)
    console.log(theFlyingDutchman[i].curse)
 }





//  BELOW I ADDED SOME ACTION FROM PIRATES but the are not workin properly, 

 for(i=0; i<theFlyingDutchman.length; i++){
    theFlyingDutchman[i].drinkRome()
    theFlyingDutchman[i].fight()
    theFlyingDutchman[i].land()
 }









    




