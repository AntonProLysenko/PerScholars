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
