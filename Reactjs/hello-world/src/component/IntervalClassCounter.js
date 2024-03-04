import React,{Component} from "react";

// useEffect with incorrect dependency - https://www.youtube.com/watch?v=SP-NrbQHFww

class IntervalClassCounter extends Component{
    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

    componentDidMount(){
        this.interval=setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    tick = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <h3>Please refer IntervalClassCounter.js & IntervalHookCounter.js for coding</h3>
                <h4>{this.state.count}</h4>
            </div>
        )
    }
} 


export default IntervalClassCounter