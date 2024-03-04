import React, { Component } from "react";

// Render Props - Part_2 - https://www.youtube.com/watch?v=EZil2OTyB4w

/* 
    The term "render prop" refers to a technique fo sharing code between React Components using a prop whose value is a
    function.
*/

// Please Check ClickCounterTwo.js,HoverCounterTwo.js with it.

class WithCounterTwo extends Component{

    constructor(props){
        super(props)

        this.state ={
            count:0
        }
    }

    incrementcount = () =>{
        this.setState(prevState =>{
            return { count:prevState.count + 1 }
        })
    }
    
    render(){
        return(
            <div>
                
                {this.props.render(this.state.count,this.incrementcount)}   
                {/* In above render is prop not builtin functionality or keyword */}
            
            </div>
        )
    }
}

export default WithCounterTwo