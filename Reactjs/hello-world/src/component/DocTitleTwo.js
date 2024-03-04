import React,{useState} from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

// useDocumentTitle custom Hook - https://www.youtube.com/watch?v=4yp6T-hF5ZY
// Please check DocTitleOne.js & useDocumentTitle.js

function DocTitleTwo(){
    const [count,setCount]=useState(0)

    useDocumentTitle(count) //useDocumentTitle is custom hook not built-in hook check useDocumentTitle.js under hooks folder
    return(
        <div>
            <h3>Click below button,update title of this site - check DocTitleTwo.js & useDocumentTitle.js for coding</h3>
            <button onClick={()=>setCount(count+1)}>Count-{count}</button>
        </div>
    )
}

export default DocTitleTwo