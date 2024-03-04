import React,{Component} from "react";

// Binding Event Handlers - https://www.youtube.com/watch?v=kVWpBtRjkCk

class EventBind extends Component{

    constructor(props){
        super(props)

        this.state={
            message: "Hello"
        }

        this.ClickHandler=this.ClickHandler.bind(this)
    }

    ClickHandler(){
        this.setState({
            message:"Good Bye!, Check EventBind.js for refer coding"
        })
        console.log(this)
    }

    ArrowFunctionClickHandler(){
        this.setState({
            message:"Good Bye!, Executed by Arrow Function on onClick Check EventBind.js for refer coding"
        })
        console.log(this)
    }

    /* Arrow Function */
    ArrowFunction_on_Class = () =>{
        this.setState({
            message:"Good Bye!, Arrow Function Written on(inside) the class Check EventBind.js for refer coding"
        })
        console.log(this)
    }
    
    



    render(){
        return(
            <div>
                
                <div>{this.state.message}</div>

                {/* Event Bind */}
                <button onClick={this.ClickHandler.bind(this)}>Click Event Bind </button>
                <br></br>
                
                {/* Below Event Bind executed by Arrow Function on onClick */}
                <button onClick={()=>this.ArrowFunctionClickHandler()}>Click Event Bind in Arrow function </button>
                <br></br>
                
                {/* Below Event Bind executed by "this.ClickHandler=this.ClickHandler.bind(this)" on constructor  */}
                <button onClick={this.ClickHandler}>Click Event Bind in constructor "this.ClickHandler=this.ClickHandler.bind(this)" </button>
                <br></br>
                
                {/* Below Event Bind executed by Arrow Function which is written on(inside) class */}
                <button onClick={this.ArrowFunction_on_Class}>Click Event Bind ArrowFunction_on_Class</button>
            
            </div>
        )
    }
}

export default EventBind