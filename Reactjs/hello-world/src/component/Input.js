import React, { Component } from "react";

// Refs with class components - https://www.youtube.com/watch?v=8aCXVC9Qmto

class Input extends Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    focusInput(){
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                
                <h5>focusing below input using Refs with class component</h5>
                <input type="text" ref={this.inputRef}></input>
                
            </div>
        )
    }
}

export default Input