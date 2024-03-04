import React,{useState,useEffect} from "react";

// useEffect with incorrect dependency - https://www.youtube.com/watch?v=SP-NrbQHFww

function IntervalHookCounter() {
    
    const[count,setCount]=useState(0)
    
    const tick =() =>{
        setCount(count+1)
    }

    useEffect(()=>{
        const interval=setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[count])
    return(
        <div>
            {count}
        </div>
    )
  }

  export default IntervalHookCounter