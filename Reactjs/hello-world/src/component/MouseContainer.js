import React,{useState} from "react";
import HookMouse from "./HookMouse";

// useEffect with cleanup - https://www.youtube.com/watch?v=DTlmk6QeOHY

// Please also Refer to HookMouse.js to understand these program.

function MouseContainer(){

    const [display,setDisplay]=useState(true)
    return(
        <div>
            <h4>Please Refer MouseContainer.js for coding</h4>
            <button onClick={()=>setDisplay(!display)}>Toogle Display</button>
            {display && <HookMouse/>}

        </div>
    )
}


export default MouseContainer