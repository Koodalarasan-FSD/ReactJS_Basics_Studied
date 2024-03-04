import React, { Component } from "react";

// Pure Components - https://www.youtube.com/watch?v=YCRuTT31qR0

class RegularComponent extends Component {
    render(){
        console.log("Regular Component Render")
        return(
            <div>
                RegularComponent { this.props.name }
            </div>
        )
    }
}

export default RegularComponent