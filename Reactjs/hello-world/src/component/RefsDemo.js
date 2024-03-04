import React, { Component } from "react";

// Refs - https://www.youtube.com/watch?v=FXa9mMTKOu8

class RefsDemo extends Component {

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setcbRef = element =>{
            this.cbRef = element
        }
    }
    
    componentDidMount(){

        /*
        if(this.cbRef){
            this.cbRef.focus()
        }
        */

        // Uncommand above if statement inorder to focus second input tag below in it
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    
    render(){
        return(
            <div>
                <h5>focusing Below inputs tag by using Refs, check RefsDemo.js for coding</h5>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Click</button>
                <br></br>
                <input type="text" ref={this.setcbRef}></input>
                
            </div>
        )
    }
}

export default RefsDemo