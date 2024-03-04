import React, { Component } from "react";

// Render Props - Part_1 - https://www.youtube.com/watch?v=NdapMDgNhtE

// Render Props - Part_2 - https://www.youtube.com/watch?v=EZil2OTyB4w

/* 
    The term "render prop" refers to a technique fo sharing code between React Components using a prop whose value is a
    function.
*/

// Please Check WithCounterTwo.js,ClickCounterTwo.js with it


class HoverCounterTwo extends Component{

    
    render(){
        const {count,incrementcount} = this.props
        return <h1 onMouseOver={incrementcount}>Hovered { count } times</h1>
            
    }
}

export default HoverCounterTwo