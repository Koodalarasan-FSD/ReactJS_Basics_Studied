import React, { useEffect, useRef, useState } from 'react'

// useRef Hook -  Part_2 - https://www.youtube.com/watch?v=LWg0OyZQffc

//Below Timer is done by using Hooks without using class. For using class please check ClassTimer.js

function HookTImer() {
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return()=>{
            clearInterval(intervalRef.current)
        };
    },[])
  return (
    <div>
        <h3>Below Timer done by Hooks especially useRef Hook without using class, check HookTImer.js for coding</h3>
        Hook Timer - {timer}
        <button onClick={()=>clearInterval(intervalRef.current)}>Clear HookTimer</button>
    </div>
  )
}

export default HookTImer