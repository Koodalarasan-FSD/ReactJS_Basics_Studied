import React, { Component } from "react";

// Render Props - Part_2 - https://www.youtube.com/watch?v=EZil2OTyB4w

// For Render Props - Part_1 - refer ClickCounterTwo.js,HoverCounterTwo.js

/* 
    The term "render prop" refers to a technique fo sharing code between React Components using a prop whose value is a
    function.
*/

class User extends Component{
    render(){
        return(
            <div>
                
                {/* Passing value true( or false) within it */}
                {this.props.name(true)}
            
            </div>
        )
    }
}

export default User