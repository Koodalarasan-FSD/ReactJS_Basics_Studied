import React,{useState} from "react";

function CounteruseMemo(){
    const[counterone,setCounterOne]=useState(0)
    const[countertwo,setCounterTwo]=useState(0)

    const incrementOne=()=>{
        setCounterOne(counterone+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(countertwo+1)
    }
    const isEven=()=>{
        // let i=0
        // while(i<20000000000)i++
        return counterone%2===0
    }
    return(
        <div>        
            <div>
                <h3>Below Operation done by using useMemo,check CounteruseMemo.js for coding</h3>
                <button onClick={incrementOne}>Count One-{counterone}</button>
                <span>{isEven()?'Even':'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two-{countertwo}</button>
            </div>
        </div>

    )
    
}


export default CounteruseMemo