import React from "react";

// Event Handling - https://www.youtube.com/watch?v=Znqv84xi8Vs

// Event Handling using function

function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked, Check FunctionClick.js for refer coding ")
    }
    return(
        <div>
            <button onClick={clickHandler}>function CLICK </button>
        </div>
    )
}

export default FunctionClick