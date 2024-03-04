import React from "react";

// useCallback Hook - https://www.youtube.com/watch?v=IL82CzlaCys
//Please check also ParentComponentOne.js,Count.js,Title.js

function Button({handleClick,children}){
    console.log(`Rendering Button -`,children)

    return(
        <button onClick={handleClick}>{children}</button>
    )
}

//React.memo is higher order component that will prevent functional component from being re-rendered it it's props or state do not change.
export default React.memo(Button)