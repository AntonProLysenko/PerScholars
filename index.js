// /*I. Variables & Datatypes

// To answer these questions, you can add them in a multiline comment section inside of script.js

// like this:

// 1. How do we assign a value to a variable? A. With the assignment operator
// 2. How do we change the value of a...
// ...
// */





// /*A. Q + A

// How do we assign a value to a variable?
// let variable = "value"
// +++++++++++++++++++++++
// How do we change the value of a variable?
// variable = 'newValue'
// ++++++++++++++++++++
// How do we assign an existing variable to a new variable?
// let existingVar = "someValue"
// let newVariable = existingVar
// +++++++++++++++++++++
// Remind me, what are declare, assign, and define?
// declaring: is when we are creating new object with or without the value or functionality(function, array),

// assigning: we are giving a value to the existing object (in jave everithing is obj) can be done in step of declaration, returns the object with the value 

// defininig: we are defining the propertie of the object can be done in step of declaration

// +++++++++++++++++++
// What is pseudocoding and why should you do it?
// Pseudocoding is a process when we are thinking and writing down the solution using English, to exactly the code
// creating an algorithm of how the program going to work step by step
// +++++++++++++++++++++
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 60% of thinking, 40% of coding
// */





// // B. Strings

// // let firstVariable;
// // firstVariable = "Hello World!";
// // firstVariable = 9;
// // let secondVariable = firstVariable;
// // secondVariable = "String";
// // let yourName = "Anton";

// // return "Hello, my name is " + yourName;





// // C. Booleans

// /*Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
// */

  
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false == false)
//   console.log(e == 'Kevin');
//   console.log(a+ b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 !== '48');













// //   D. The farm
// let animal = "dog"
// if (animal === "cow"){

//     console.log("Moooo");
    
// }else{

//     console.log("Hey! You are not a cow!");
    
// }










// //E. Driver's Ed

// const id = {
//     firstName:"John",
//     lastName:"Smith",
//     age:15,
    
// }


// if (id.age>=16){
//     console.log("Here are the keys");
// }else{

//     console.log("Sorry you are too young!");
    
// }




// //                                                                              II. Loops

// //A. The basics
// //================


// for(let i = 0; i<=10; i++){
//     console.log(i)
// }



// for(let i = 10; i<=400; i++){
//     console.log(i)
// }


// for(let i = 12; i<=4001; i+=3){
//     console.log(i)
// }











//B. Get even
//==============

// for(let i = 1; i<=100; i++){
//     if(i%2===0){
//         console.log(i+"<-even number")
//     }    else{
        
//         console.log(i);
        
//     }
// }












//C. Give me Five
//=================

// for(let i = 0; i<=100; i++){
//     if(i>0 && i%5===0){
//         console.log(`I found a ${i}. High five!`)
//     }else if (i%3===0){
//         console.log(`I found a ${i}. Three is a crowd`)
//     }
// }    




// //D. Savings account
// //===================




// let bankAccount = 0 

// for(let i = 0; i<=10; i++){
//     bankAccount+=i
    
// } 

// console.log(bankAccount);



// let bonusBankAccount = 0 

// for(let i = 0; i<=100; i++){
//     bonusBankAccount+=i*2
    
// } 

// console.log(bonusBankAccount);





// //                                                                  Arrays & Control flow

// /*A. Talk about it:


// What are the things in an array called?
// elements
// =============

// Do Arrays guarantee those things will be in order?
// yes, each element has an index
// ==========

// What real-life thing could you model with an array?
// anything what we can devide to parts
// even book array can have pages as an elements
// */












// /*B. Easy Does It

// Create an array that contains three quotes and store it in a variable called quotes
// */

// const quotes =["Go for it", "I love you", "How are you?"]













// /*C. Accessing elements

// Given the following array const*/ randomThings = [1, 10, "Hello", true]

// //How do you access the 1st element in the array?
// randomThings[0]
// //Change the value of "Hello" to "World"
// randomThings[2]="World"
// //Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// console.log(randomThings);
// // we accesed the 3rd element and reassign it to the new value so it changed 















// //D. Change values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// /*Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?*/
// ourClass[2]

// //Change the value of "Github" to "Octocat"
// ourClass[4]="Octocat"
// //Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City")
//     //or we can use ourClass.unshift('Cloud City') to place it to [0]
//     // or we can use ourClass.splice(1,0, "Cloud City") to place it to [1], etc by changin the first value in the splice() method
 














// //E. Mix It Up

// // Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
// // Given the following array: 
// const myArray = [5, 10, 500, 20]

// // Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon", "Sam")
// // Remove the 5 from the beginning of the array.
// myArray.shift()
// // Add the string "Bob Marley" to the beginning of the array.
// myArray.unshift("Bob Marley")
// // Remove the string of your choice from the end of the array.
// myArray.pop()
// // Reverse this array using Array.prototype.reverse(). 
// myArray.reverse()

// //Did you mutate the array?
// //YES


// //What does mutate mean?
// //Modifying the array



// //Did the .reverse() method return anything?
// //Yes it is returns the value of the reversed array, but we need to console.log() to see the value


















// // F. Biggie Smalls

// // Create a variable that contains an integer.
// let int = 10

// // Write an if ... else statement that:
// if (int<100){                                                       
    
//     console.log("little number" );                                          // console.log()s "little number" if the number is entered is less than 100

                                               
// }else{

//     console.log("big number");                                                  // console.log()s big number if the number is greater than or equal to 100.
    
// }




















// // G. Monkey in the Middle

// // Write an if ... else if ... else statement:

// // console.log() little number if the number entered is less than 5.
// // If the number entered is more than 10, log big number.
// // Otherwise, log "monkey". 


// if(int<5){

//     console.log("little number");
    
// }else if(int>10){
//     console.log('big number');                                                  
// }else{
//     console.log('monkey');
// }





























// // H. What's in Your Closet?

// // Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// //   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")


// //   Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

// kristynsCloset.splice(5,0, "yellow knit hat")

// //   Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

// kristynsCloset[5]= "stained knit hat";

// //   Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// thomsCloset[0][0]
// //   In the same way, access one item from Thom's pants array.
// thomsCloset[1]
// //   Access one item from Thom's accessories array.
// thomsCloset[2][1]
// //   Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}`);

// //   Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// console.log(thomsCloset[1][2]);
// thomsCloset[1][2]="Footie Pajamas"
// console.log(thomsCloset[1][2]);









// //                                                                                              IV. Functions


// // A. printGreeting

// // Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// // Like so?
// const printGreeting =(call)=>{
    
//     return`Hello there! ${call}`
    

// }

// console.log(printGreeting("Slimer"));
// // => Hello there, Slimer!
// // You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.


 
 












// // B. printCool

// // Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// function printCool(name){
//     return `"${name} is cool"`
// }

// console.log(printCool("Captain Reynolds"));
// // => "Captain Reynolds is cool";

















// // C. calculateCube

// // Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// const calculateCube=(cube)=>{
//     return cube*cube*cube

// }

// console.log(calculateCube(5));
// // => 125












// // D. isVowel

// // Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // The vowel could be upper or lower case. Test your function on every vowel and make sure it's working.
// //In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// function isVowel(char){
//     char=char.charAt(0)                 //added litle more functionality in case if we are entering a string instead of a char
//     switch(char.toLowerCase()){
//         case 'a':
//             return true;
//         case 'e':
//             return true;  
//         case 'i':
//          return true;   
//         case 'o':
//          return true; 
//         case 'u':
//          return true;
//         case 'y':
//          return true;
//         case 'w':
//          return true;
//         default:
//         return false;           
// }


// }
// console.log(isVowel("Esdfsd"));
// // => true








// // E. getTwoLengths

// // Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// const getTwoLengths =(str1, str2)=>{
   


//     let firstLength = str1.length
//     let secondLength = str2.length
//     let arrOfLength=[firstLength, secondLength]
//     return arrOfLength

// }

//  console.log(getTwoLengths("Hank", "Hippopopalous"));
// // => [4, 13]



















// // F. getMultipleLengths

// // Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
// //The function should return an array of numbers where each number is the length of the corresponding string.

// const getMultipleLengths=(x)=>{
//     const final =[]
//     x.forEach(function(i){
//         final.push(i.length)

//     })
//     return final
// }

//  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// // => [5, 4, 2, 2, 4]
















// // G. maxOfThree

// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// function maxOfThree(x, y ,z){
//     if(x>y && x >z){
//         return x
//     }else if (y>x && y>z){
//         return y
//     }else{
//         return z
//     }
// }

// console.log(maxOfThree(6, 9, 1));
// // => 9
// // Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().









// // H. printLongestWord

// // Write a function printLongestWord that accepts a single argument, an array of strings. 
// //The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// const printLongestWord =(arg)=>{
//     let longestOf="";
//     for (let i=0; i<arg.length; i++){
//         if (arg[i].length> longestOf.length){
//             longestOf=arg[i]
//         }
//     }
//     return longestOf
// }
//  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// // => "Peanutbutter"







// //                                                          Objects

// // A. Make a user object

// const user ={
//     name:"Jim",
//     email:"jim@mail.com",
//     age:13,
//     purchased:[],
//     materialStatus:'maried'
// }

// // Create an object called user.
// // Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.













// // B. Update the user

// // Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
// user.email ="bim@mail.com"
// // Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
// user.age++












// // C. Adding keys and values

// // You have decided to add your user's location to the data that you want to collect.
// // Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

// user.location = 'Norway'







// // D. Shopaholic!

// // Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// user.purchased.push("carbohydrates")

// // Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// user.purchased.push("peace of mind")
// // Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
// user.purchased.push("Merino jodhpurs")
// // Console.log just the "Merino jodhpurs" from the purchased array.

// console.log(user.purchased[2]);




















// // E. Object-within-object

// // Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// // If we want to give our user a friend with a name and age, we could write:

// // user.friend = {
// //     name: "Grace Hopper",
// //     age: 85
// // }
// // When we console.log user, we would see the friend object added to our user object.
// // Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// user.friend={
//     name:"Jake",
//     age:15,
//     location:"Island",
//     purchased:[]
// }

// // Console.log just the friend's name

// console.log(user.friend.name);

// // Console.log just the friend's location
// console.log(user.friend.location);
// // CHANGE the friend's age to 55
// user.friend.age = 55;
// // The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
// user.friend.purchased.push("The One Ring")
// // The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
// user.friend.purchased.push("A latte")
// // Console.log just "A latte" from the friend's purchased array.

// console.log(user.friend.purchased[1]);

















// // F. Loops

// // Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// // Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.



// for(let i = 0; i<user.purchased.length; i++){
    
//     console.log(user.purchased[i]);
    
// }
// for (let i = 0; i<user.friend.purchased.length; i++){

//     console.log(user.friend.purchased[i]);
    
// }















// // G. Functions can operate on objects

// // Write a single function updateUser that takes no parameters. When the function is run, it should:
// //          it should increment the user's age by 1
// //          make the user's name uppercase
// // The function does not need a return statement, it will merely modify the user object.

// const updateUser=()=>{
//     user.age++
//     user.name.toUpperCase()
// }

// //Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, 
// //make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. 
// //Call your oldAndLoud function with user as the argument.

// const oldAndLoud =(person)=>{
//     person.age++
//     person.name.toUpperCase()
// }

// console.log(oldAndLoud(user));


































// //                                                                                                  Cat Combinator



// // 1. Mama cat

// // Define an object called cat1 that contains the following properties:

// // name
// // breed
// // age (a number)
// // console.log the cat's age
// // console.log the cat's breed

// const cat1 ={
//     name:"Coco",
//     breed:"British Shorthair",
//     age:7,

// }

// console.log(cat1.age);
// console.log(cat1.breed);






// // 2. Papa cat

// // Define an object called cat2 that also contains the properties:

// // name
// // breed
// // age (a number)




// const cat2 ={
//     name:"Sam",
//     breed:"Norwegian Forest",
//     age:11,

// }








// // 3. Combine Cats!

// // The cats are multiplying!

// // Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// function combineCats(mama, papa){
    
//     console.log(mama, papa);
//     return {name: mama.name + papa.name,
//             age:1,
//             breed: mama.breed+ "-"+papa.breed


//                 }
// }

// combineCats({ name: 'Coco', breed: 'British Shorthair', age: 7 }, { name: 'Sam', breed: 'Norwegian Forest', age: 11 })





// console.log(combineCats(cat1, cat2))
//  combineCats(combineCats(cat1, cat2), combineCats(cat1,cat2));

