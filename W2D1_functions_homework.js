//2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }
}
console.log(maxOfThree(1, 4, 3))


//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
    char = char.toLowerCase()
    if (char === 'a' || char === 'e' || char === 'o' || char === 'u' || char === 'y') {
        return true
    } else {
        return false
    }
}

console.log(isCharAVowel('Y'));


//4.Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = (array) => {
    sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]++

    }
    return sum
}

console.log((sumArray([10, 20, 30])));




//5.Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.


function multiplyArray(arrayElem) {
    prod = 0

    for (i = 0; i < arrayElem.length; i++) {
        prod = arrayElem[i] * arrayElem[i]

    }
    return prod
}

console.log((multiplyArray([2, 2, 2])));


//6.Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = (...arggs) => {
    var length = 0
    for (i = 0; i < arggs.length; i++) {
        length++
    }
    return length


}
console.log(numArgs(1, 2, 3, 4, 5, 66, 7, 834, 534, 2))


//7Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(word) {
    return word.split("")
        .reverse()
        .join("")
}
console.log(reverseString('All'))

//8 Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = (stringArr) => {
    var longestWord = 0

    for (i = 0; i < stringArr.length; i++) {


        if (stringArr[i].length > longestWord) {
            longestWord = stringArr[i].length
        }

    } console.log(longestWord)


}



longestStringInArray(['I', "am", 'the', 'shortest', 'word in', 'the whole', 'array'])




//9Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments,
// and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].











// const elem =['I', "am", 'the', 'shortest','word in','the whole','array']

// const elemLength=[]


// for(i=0;i<elem.length; i++){

//        elemLength.push(elem[i].length)

// }  

// console.log(elemLength);

// for(i=0;i<elem.length; i++){
//     if(elem[i]>elem[i--]){


//     }
// }










function stringsLongerThan(elem) {
  
    let elemLongest = ''

    for (i = 0; i < elem.length; i++) {

        if (elem[i].length > elemLongest.length) {
            elemLongest=elem[i]

        } 
    }console.log(elemLongest);
}    


    stringsLongerThan(['I', "am", 'the', 'shortest', 'word in', 'the whole', 'array'])


