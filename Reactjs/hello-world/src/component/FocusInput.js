import React, { Component } from "react";
import Input from "./Input";

// Refs with class components - https://www.youtube.com/watch?v=8aCXVC9Qmto

class FocusInput extends Component {
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () =>{
        this.componentRef.current.focusInput()
    }

    render(){
        return(
            <div>
                
                <Input ref={this.componentRef}/>   {/* Input is component tag not input tag */}
                <button onClick={this.clickHandler}>Click to focus</button>
                
            </div>
        )
    }
}

export default FocusInput