import React,{Component} from "react";

// Event Handling  - https://www.youtube.com/watch?v=Znqv84xi8Vs

// Event Handling using class

class ClassClick extends Component{

    Eventhandler(){
        console.log("Button Clicked, Check ClassClick.js for refer coding")
    }
    
    render(){
        
        return(
            <div>
                <button onClick={this.Eventhandler}>Class CLICK </button>
            </div>
        )
    
    }
}
export default ClassClick