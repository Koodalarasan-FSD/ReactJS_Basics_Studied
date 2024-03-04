import React, { Component } from "react";
import ComponentE from "./ComponentE";


// Context - Creating Context - Part_1 - https://www.youtube.com/watch?v=j3j8St50fNY

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// Context - Creating Context - Part_2 - https://www.youtube.com/watch?v=lTjQjWemKgE

// Context - Creating Context - Part_3 - https://www.youtube.com/watch?v=j3j8St50fNY 

// Please also refer ComponentE.js, ComponentF.js & UserContext.js

class ComponentC extends Component{
    render(){
        return(
            <div className="App">
            <ComponentE />
            </div>

        )
    }
}

export default ComponentC