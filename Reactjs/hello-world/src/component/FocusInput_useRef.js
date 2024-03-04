import React,{useEffect, useRef} from "react";

// useRef Hook - Part_1 - https://www.youtube.com/watch?v=yCS2m01bQ6w

function FocusInput_useRef(){
    const inputref=useRef(null)

    useEffect(()=>{
        // focus the input elements
        inputref.current.focus()
    },[])
    return(
        <div>
            <input ref={inputref} type="text"></input>
        </div>
    )
}

export default FocusInput_useRef