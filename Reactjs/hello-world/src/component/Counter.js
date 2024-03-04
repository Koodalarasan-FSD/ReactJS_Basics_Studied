import React,{Component} from "react";

// setState - https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11

class Counter extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        this.setState(
            {
            count : this.state.count + 1
            },
            ()=>{
            console.log('Callback Value',this.state.count)
            }
            )
            console.log(this.state.count)
    }
    incrementf(){
        this.setState(prevState=>({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.incrementf()
        this.incrementf()
        this.incrementf()
        this.incrementf()
        this.incrementf()
    }
    
    render(){
        
        return(
            <div>
                <div>Count--{this.state.count}</div>
                {/* Use function increment or incrementFive below*/}
                <button onClick={()=>this.increment()}>Increment</button>

            </div>

            

        )
            
        
    }
}

export default Counter