import React, { PureComponent } from "react";

// Pure Components - https://www.youtube.com/watch?v=YCRuTT31qR0

// PureComponent is for class based component 

class PureComp extends PureComponent{
    render(){
        console.log("Pure Component Render")
       return(
        <div>
            PureComponent { this.props.name }
        </div>
       ) 
    }
}

export default PureComp