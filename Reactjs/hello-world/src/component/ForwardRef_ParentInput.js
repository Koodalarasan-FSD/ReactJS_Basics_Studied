import React, {Component} from "react";
import ForwardRef_Input from "./ForwardRef_Input";

// Forwarding Refs - https://www.youtube.com/watch?v=RLWniwmfdq4

class ForwardRef_ParentInput extends Component{

    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    
    clickHandler = () =>{
        this.inputRef.current.focus()
    }
    
    render(){
        return(
            <div>
                <ForwardRef_Input ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click to focus</button>

            </div>
        )
    }
}

export default ForwardRef_ParentInput