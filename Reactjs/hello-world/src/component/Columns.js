import React from "react";

// Fragments - https://www.youtube.com/watch?v=bHdh1T0-US4

// Fragments will let group a list of children elements without adding extra nodes to the DOM

// And so instead of <div> tag we're gonna use <React.Fragment> tag in it

function Columns() {
    return(
        <React.Fragment>
            <td>Name</td>
            <td>Designation</td>
        </React.Fragment>
    )
}

export default Columns