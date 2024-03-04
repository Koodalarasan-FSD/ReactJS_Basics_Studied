import React from "react";

// MemoComponent - https://www.youtube.com/watch?v=7TaBhrnPH78

// Memo is for functional based component

function MemoComp({ name }) {
    console.log("Rendering Memo Component")
    return(
        <div>
            { name } - Refer MemoComp.js and ParentComp.js for coding

        </div>
    )
}

export default React.memo(MemoComp)