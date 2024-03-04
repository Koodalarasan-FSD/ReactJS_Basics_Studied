import React from "react";
import ComponentSecond from "./ComponentSecond";

// useContext Hook - Part_1 -  https://www.youtube.com/watch?v=CI7EYWmRDJE
// useContext Hook - Part_2 -  https://www.youtube.com/watch?v=tEqNSOhCHLU

function ComponentFirst(){
    return(
        <div>
            <ComponentSecond />
        </div>
    )
}

export default ComponentFirst