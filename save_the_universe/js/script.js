//Creating Actors
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



//Battle

console.log("Battle for the Universe begins");

//First Round
 if(Math.random() < theNimbus.accuracy ){
    hypnotoads[0].hull -= theNimbus.firepower
}
console.log(`The Nimbus attacked first Hypno Todian's ship now it has ${hypnotoads[0].hull } hull`);
    


let firstHypnoTodian;
let theNimbusAlive;

if(hypnotoads[0].hull <=0){
    console.log("The Nimbus destroyed first Hypno Todian ship in FIRST try");
    firstHypnoTodian=false

}else{
    while(hypnotoads[0].hull>0){
        firstHypnoTodian=true

        if(Math.random() < hypnotoads[0].accuracy ){
            theNimbus.hull-=hypnotoads[0].firepower
            }else{
            console.log('Hypnotodian ship missed');
            }

        console.log(`now the first Hypno Todian ship attacking The Nimbus`);
        console.log(`The Nimbus now has ${theNimbus.hull} hull`);

        if(Math.random() < theNimbus.accuracy ){
            hypnotoads[0].hull -= theNimbus.firepower
        }else{
            console.log(`The Nimbus missed`);
        }
        

        console.log(`The Nimbus attacked the first Hypno Todian's ship now it has ${hypnotoads[0].hull } hull`);
       
        

    }firstHypnoTodian=false

}












//Requesting conformation to continue after the first round finished
if(firstHypnoTodian === false){
    const readline = require("readline");
    const rl = readline.createInterface({input: process.stdin,
                                             output: process.stdout,
                                            });
                                        
        rl.question(`We've destroyed their first ship!\nThe Nimbus now has ${theNimbus.hull} hull\n Do you want to continue the battle? \n Answer Y or N \n`, function (answer) {
            answer.charAt(0).toUpperCase
            
            if(answer==='Y'){
                console.log(`You are brave enought! Let's fight!`);
                rl.close();
                secondRound=true

                // let counter = 1
                    
                // while(hypnotoads[hypnotoads.length-1].hull>0){
                
                

                for(let counter =1; counter<hypnotoads.length; counter++ ){

                    if (hypnotoads[counter].hull>0){                        //CHEKING IF ALIEN'S SHIP IS ALIVE
                        if(Math.random() < hypnotoads[counter].accuracy){
                            theNimbus.hull-=hypnotoads[counter].firepower
                        }else{
                            console.log('Hypnotodian ship missed');
                            }
                    }else{
                        console.log('error you are dead hypnotoad');   
                    }
                    
                    




                    if(theNimbus.hull>0){           //CHEKING IF OUR SHIP IS ALIVE
                        if (hypnotoads[counter-1].hull>0){          //CHEKING IF WE DESTROYED PREVIOUS SHIP IN THE LOOP
                             
                            if(Math.random() < theNimbus.accuracy){
                                hypnotoads[counter-1].hull -= theNimbus.firepower//IF DIDN'T DESTROY PREVIOUS SHIP ATTACKING IT AGAIN IN THIS LOOP
                                counter--           //need our loop to loop one more time 
                            }else{
                                console.log(`The Nimbus missed because of Zapp`);
                                counter--                                           
                                }
                        } else{                             //HERE ATTACKING OUR CURRENT ALIEN'S SHIP IN THE LOOP
                            if(Math.random() < theNimbus.accuracy){
                                hypnotoads[counter].hull -= theNimbus.firepower
                            }else{
                                console.log(`The Nimbus missed`);
                                } 
                        }    
                    }else{
                        console.log(theNimbus.hull);
                        console.log("We lost! Toads Hypnotized Our Capitan");
                        
                        return

                    }
                    
                    



                    
                    

                   
                    console.log(theNimbus);
                    console.log(hypnotoads);

                    
                    
                        
                }     

                //Results of the game
                if(theNimbus.hull<0){
                    console.log("We lost! Now we all Hypnotized");
                }else{
                    console.log("We won! No more Hypnotoads");
                }





            }else{
                secondRound=false
                rl.close();
                console.log("You don't deserve to live in this Universe! Get out!");
                
            }

            
        });
}



                // hypnotoads.forEach((todorianShip)=>{

                //     theNimbus.hull-= todorianShip.firepower
                //     todorianShip.hull-=theNimbus.firepower

                    
                    
                // })


                





















                // while(theNimbus.hull>0 && hypnotoads[2].hull>0){
                //     console.log('ROUND 2');

                //         while(hypnotoads[1].hull >0){
                            
                //                  if(Math.random() < hypnotoads[1].accuracy ){
                //                     theNimbus.hull-=hypnotoads[1].firepower
                //                  }else{
                                    
                //                     console.log('Hypnotodian ship missed');
                                    
                //                  }


                            
                //                 if(Math.random() < theNimbus.accuracy ){

                //                     hypnotoads[1].hull -= theNimbus.firepower
                //                 }else{

                //                     console.log(`The Nimbus missed`);
                                    
                //                 }
                                
                

                //                 console.log(`The Nimbus now has ${theNimbus.hull} hull`);

                //                 console.log(`The second Hypnotodian Ship has ${hypnotoads[1].hull} hull`);
                                
                //         } console.log("The Nimbus destroyed the Secon Hypno Todian ship");

                //         console.log(`The Nimbus has ${theNimbus.hull} hull`);



                //     console.log('ROUND 3');
                        
                            

                //         while(hypnotoads[2].hull >0){
                            
                            

                //             theNimbus.hull-=hypnotoads[2].firepower
                //             hypnotoads[2].hull -= theNimbus.firepower
            

                //             console.log(`The Nimbus now has ${theNimbus.hull} hull`);

                //             console.log(`The third Hypnotodian Ship has ${hypnotoads[2].hull} hull`);
                            
                //     } console.log("The Nimbus destroyed the Third Hypno Todian ship");
                //     console.log(`The Nimbus has ${theNimbus.hull} hull`);

                // }  






               
                
                 
                


            
 

                                                                                        //=======
                                                                                        //Bonuses
                                                                                        //=======



    