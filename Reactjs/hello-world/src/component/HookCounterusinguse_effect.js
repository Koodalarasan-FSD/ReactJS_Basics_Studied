import React,{ useState,useEffect } from "react";

// useEffect after render - https://www.youtube.com/watch?v=nAuWOnFMlOw

/* 
   1) useEffect - The Effect Hook lets you perform side effects in functional components.
   2) It is a close replacement for componentDidMount, componentDidUpdate,and componentWillUnMount
      For Ex: check coding ClassCounter.js before this coding
*/

// Conditionally run effects - https://www.youtube.com/watch?v=8DYlzVUTC7s

function HookCounterusinguse_effect(){

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(() =>{ 
        console.log('useEffect - Updating document title')
        document.title=`Clicked ${count} times`
    },[count])

    return(
        <div>
            <h4>Please Check Below Click Button & Title of Site in Browser, For further Refer HookCounterusinguse_effect.js for coding</h4>
            <input type="text" value={name} onChange={e => setName( e.target.value )}/>
            <button onClick = { () => setCount( count + 1 ) }> Clicked {count} times </button>
        </div>
    )
}

export default HookCounterusinguse_effect