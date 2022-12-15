function validCard(cardNubmer){
    // cardNubmer = cardNubmer.replace(/\s/g, '');
   cardNubmer = cardNubmer.toString()
   let validationCheck = 0;
   
   let number = cardNubmer.split("").reverse()
 
   
   for (let i=0; i<number.length; i++){
     let checkr;
    
      if (i%2!==0){ 
      checkr= (parseInt(number[i]*2)).toString()
        
         if(checkr.length!==1){
             validationCheck += (parseInt(checkr.charAt(0)) + parseInt(checkr.charAt(1)))
          }else {
              validationCheck += (parseInt(checkr))
          } 
    }else{
      validationCheck += parseInt(number[i])
    }
   }
   
     if(validationCheck%10===0){
        console.log("Succes!")
       return true
     }else{
       console.log("Card Is Not Valid")
       return false
     }
 }
 
 
 
 
 //validCard(1234567890123456); //should be false
 //validCard(4408041234567893); //should be true
 //validCard(38520000023237); //should be true
  validCard(4222222222222); //should be true