import React, {Component} from "react";


// useEffect after render - https://www.youtube.com/watch?v=nAuWOnFMlOw

/* 
   1) useEffect - The Effect Hook lets you perform side effects in functional components.
   2) It is a close replacement for componentDidMount, componentDidUpdate,and componentWillUnMount
      For Ex: check coding ClassCounter.js before this coding
*/

// Conditionally run effects - https://www.youtube.com/watch?v=8DYlzVUTC7s


// Below Program aren't useEffect please check HookCounterusinguse_effect.js for it.
class ClassCounter extends Component{
    constructor(props){
        
        super(props)

        this.state = {
            count:0,
            name:''
        }

    }

    componentDidMount()
    {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState)
    {
        
        if(prevState.count=!this.state.count)
        {            
            console.log("Updating document title")
            document.title = `Clicked ${this.state.count} times`
        }
        
    }

    render(){
        return(
            <div>
                
                <h4>Please Check Below Click Button & Title of Site in Browser, For further Refer ClassCounter.js for coding</h4>
                <input type="text" value={this.state.name} onChange= { e =>{ this.setState( { name:e.target.value } ) }} />
                <button onClick={() => this.setState({count:this.state.count + 1})}>Clicked {this.state.count } times</button>

            </div>
        )
    }
}

export default ClassCounter