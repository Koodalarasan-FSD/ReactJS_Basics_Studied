import React, {Component} from "react";

// Component Lifecycle Methods - https://www.youtube.com/watch?v=qnN_FuFNq2g
// Component Mounting Lifecycle Methods - https://www.youtube.com/watch?v=KDXZibVdiEI


class LifecycleB extends Component{

    constructor(props)
    {
        super(props)

        this.state = {
            name:"Koodalrasan learned React by Vishwas"
        }
        console.log("Lifecycle-B constructor")
    }

    static getDerivedStateFromProps(props,state) 
    {
        console.log("Lifecycle-B getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("Lifecycle-B componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("Lifecycle-B shouldComponentUpdate")
        return true

    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Lifecycle-B getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("Lifecycle-B componentDidUpdate")
    }
    
    render()
    {
        
            console.log("Lifecycle-B render")
            return ( <div>Lifecycle-B, Now Check Your Browser Console & refer LifecycleB.js for coding</div> )
        
    }
}

export default LifecycleB