//2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree=(num1,num2,num3)=>{
    if(num1>num2 && num1> num3){
        return num1
    }else if(num2>num1 && num2> num3){
        return num2
    }else{
        return num3
    }
}
console.log(maxOfThree(1,4,3))


//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
 
function isCharAVowel(char){
    char=char.toLowerCase()
 if (char === 'a'||char === 'e' || char === 'o' || char === 'u'||char === 'y'){
    return true
 }else{
    return false
 }
}

console.log(isCharAVowel('Y'));
