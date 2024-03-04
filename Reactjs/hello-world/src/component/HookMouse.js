import React, { useState,useEffect } from "react";

// Run effects only once - https://www.youtube.com/watch?v=BH4xvzHa7H8

// useEffect with cleanup - https://www.youtube.com/watch?v=DTlmk6QeOHY

function HookMouse() {
    
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition = e => {
        
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log("Component unmounting code")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return(
        <div>
            <h4>Below X and Y are Mouse Co-ordinates, Refer HookMouse.js for coding</h4>
            HOOKS X - { x } Y - { y } 
        </div>
    )

}


export default HookMouse