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

console.log(arrayMid);

let anotherFavMovies=favMovies.slice(arrayMid)

console.log(anotherFavMovies);
















////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////