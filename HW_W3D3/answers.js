////////////////////////////////
// Easy Going
////////////////////////////////

for(let i = 0; i<20; i++){

    console.log(i);
    
}


////////////////////////////////
// Get Even
////////////////////////////////

for (let j = 0; j<200; j+=2){

    console.log(j);
    
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////


////////////////////////////////
// Wild Wild Life
////////////////////////////////
for(let m =0; m<=100; m++){
    if(m%3===0 && m%5===0){

        console.log('FizzBuzz');
        
    }else if (m%5===0){
        
        console.log('Buzz');
        
    }else if(m%3===0){
        console.log('Fizz');
    }
    
    console.log(m);
}
///////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]=5001
wolfy.splice(3,1, "Gotham City")
dart.push("Hawkins")
wolfy.shift()
wolfy.unshift( "Gameboy")

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

for (let i of ninjaTurtles){

    console.log(i.toUpperCase());
    
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 
'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 
'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 
'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


console.log(favMovies.indexOf("Titanic"));
//1
favMovies.sort()// sorting array alphabeticaly
console.log(favMovies);
//2
favMovies.pop()
console.log(favMovies);
//3
favMovies.push("Guardians of the Galaxy")
console.log(favMovies);
//4
favMovies.reverse()
console.log(favMovies);
//5
favMovies.shift()
console.log(favMovies);

//6
//unshift adds the element to the array
favMovies.unshift('from Dusk Till Down')
//7
favMovies.splice(favMovies.indexOf('Django Unchained'), 0, "Avatar")
console.log(favMovies);
//8

let arrayMid = favMovies.length/2 // found the middle of the array

//9
let anotherFavMovies=favMovies.slice(arrayMid)//created a new array sliced from existed

//10
console.log(anotherFavMovies);

//11
//unfortunately the "Fast and Furious exists in both arrays"
//but we'll get -1 if we are looking for a not existing element



////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
   
                    
whereIsWaldo.splice(1,1)

console.log(whereIsWaldo);

whereIsWaldo[1][2]="No one"
console.log(whereIsWaldo);

console.log(whereIsWaldo[2][1][whereIsWaldo[2][1].indexOf('Waldo')]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////
const talks =["...human...why you taking pictures of me?...",
             "...the catnip made me do it...", 
             "...why does the red dot always get away..." ]


for(let d=0; d<20;d++){
    
    console.log("Love me, pet me! HSSSSSS!");
    for(let d=0;d<2;d+=2){
        console.log(talks[Math.floor(Math.random()*3)]);

    }
    
}


////////////////////////////////
//  Find the Median
////////////////////////////////