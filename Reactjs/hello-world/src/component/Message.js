import React,{Component} from "react";

// State - https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'State - Welcome Visitor'

        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for Subscription!'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
        
    }
}

export default Message