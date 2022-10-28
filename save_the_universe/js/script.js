class HypnoToadianShip{
    constructor(hull, firepower,accuracy){
        this.hull=hull,
        this.firepower=firepower
        this.accuracy=accuracy
    }

}
const theNimbus= {
    name: "The Nimbus",
    hull:20,
    firepower:5,
    accuracy:0.7
}

const hypnotoads = []


//creating alians
for(let counter = 0; counter < 6; counter++){
    hypnotoads.push(new HypnoToadianShip (Math.round(Math.random()*(6-3)+3), Math.round(Math.random()*(4-2)+2), parseFloat(Number(Math.random()*(0.8-0.6)+0.6).toFixed(1))))
}



console.log(theNimbus);
console.log("VS");
console.log(hypnotoads);



let i=0
let currentHypnoTodianAlive = hypnotoads[i].hull>0










function battleRound (){

   

        let theNimbusAlive = theNimbus.hull>0;
        


        if (theNimbusAlive){
            
            if(Math.random() < theNimbus.accuracy ){
                hypnotoads[i].hull -= theNimbus.firepower
            }else{
                console.log(`The Nimbus missed`);
            }
            
        }else{
        return console.log(`The Nimbus was destroyed`); 
        }      

        // console.log(hypnotoads);

        // console.log(theNimbus);


        // console.log(currentHypnoTodianAlive);
        

        if(hypnotoads[i].hull>0){
            
            if(Math.random() < hypnotoads[i].accuracy ){
                theNimbus.hull -= hypnotoads[i].firepower
            }else{
                console.log(`Hypnotodians missed`);
                
            }
            currentHypnoTodianAlive= true
            
        }else{
            currentHypnoTodianAlive= false
            i++
        }

        console.log(hypnotoads);

        console.log(theNimbus);




        if(currentHypnoTodianAlive===false){
            if (hypnotoads[hypnotoads.length-1].hull<=0){

                console.log('We won!');
                
            }else{
                conformation()
            }
            
    
        }else{
            
                
                console.log(`We didn't destroy their ship! Attacking One more time!` );
                
            battleRound()
            
        
        }
       


        
     
} 


function conformation (){

    const readline = require("readline");
    const rl = readline.createInterface({input: process.stdin,
                                        output: process.stdout,
                                        });
                                    
    rl.question(`We've destroyed their ship!\nThe Nimbus now has ${theNimbus.hull} hull\nDo you want to continue the battle?\nAnswer Y or N \n `, function (answer) {
        answer.charAt(0).toUpperCase
        
        if(answer==='Y' && hypnotoads[hypnotoads.length-1].hull>0){
            console.log(`You are brave enought! Let's fight!`);
            rl.close();

            
            battleRound()
        }else{
            
            rl.close();
            return console.log("You don't deserve to live in this Universe! Get out!");
            
        }
            
    
    })
}








battleRound()





