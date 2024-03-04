import React  from "react";

// useCallback Hook - https://www.youtube.com/watch?v=IL82CzlaCys
//Please check also ParentComponentOne.js,Button.js,Title.js

function Count({text,count}){
    console.log(`Rendering ${text}`)
    return<div>{text}-{count}</div>
}


//React.memo is higher order component that will prevent functional component from being re-rendered it it's props or state do not change.
export default React.memo(Count)