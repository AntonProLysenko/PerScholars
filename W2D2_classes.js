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
            
            console.log("Im not hungry");
            
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

