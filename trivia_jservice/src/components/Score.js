import { useState } from "react";


export default function Score ({value}){
    console.log(value)
    const [score,setScore] = useState(0)

    const handleIncrement=()=>{
            setScore(score + value)
    }

    const handleDecrement=()=>{
        setScore(score - value)
    }

    const handleReset=()=>{
        setScore(score - score)
    }

    return(
        <>
        <h1>Score:{score}</h1>
        <button onClick = {handleDecrement}>Decrease</button>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <br/>
        </>
    )
}