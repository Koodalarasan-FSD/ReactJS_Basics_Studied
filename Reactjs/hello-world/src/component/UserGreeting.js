import React, {Component} from "react";

// Conditional Rendering -- https://www.youtube.com/watch?v=7o5FPaVA9m0

class UserGreeting extends Component{

    constructor(props){
        
        super(props)
        
        this.state={
            
            isLoggedIn:true

        }
    }
    
    render(){
        
        // 1) Returning div directly
        
        if(this.state.isLoggedIn)
        {
            return <div>Welcome Koodalarasan- You're Logged-In by directly</div>
        }
        else
        {
            return <div>Welcome Guest</div>

        }

        

        // class supports to render single return only that's why commented each others

        /* 2) Using Environment Variable(message), Returning div
        
        let message

        if(this.state.isLoggedIn)
        {
            message = <div> Welcome Koodalarasan- You're Logged-In by Environment Variable </div>
        }
        else
        {
            message = <div> Welcome Guest </div>

        }

        return <div>{message}</div>
        
        */

        
        
        
        /*  3) Using Ternary Operator, Returning div
        
        return(
            this.state.isLoggedIn?<div>Welcome Koodalarasan- You're Logged-In by Ternary Operator</div>:<div>Welcome Guest</div>
        )

        */

        
        
        
        /* 4) Using Short Circuit Operator, Returning div - if isLoggedIn is true it displays div or else it displays nothing
        
        return this.state.isLoggedIn && <div>Welcome Koodalarasan- You're Logged-In by Short Circuit Operator</div>

        */
        
        
        
    

        
    }
}

export default UserGreeting