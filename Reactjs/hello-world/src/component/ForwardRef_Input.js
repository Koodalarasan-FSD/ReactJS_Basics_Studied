import React from "react";

// Forwarding Refs - https://www.youtube.com/watch?v=RLWniwmfdq4



const ForwardRef_Input = React.forwardRef((props,ref)=>{
    return(
        <div>
            <h5>focusing below input using Forwarding Refs, Check ForwardRef_Input.js & ForwardRef_ParentInput.js</h5>
            <input type="text" ref={ref} ></input>
        </div>
    )

}) 

export default ForwardRef_Input