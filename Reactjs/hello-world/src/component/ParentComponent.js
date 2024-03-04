import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

// Method as props - https://www.youtube.com/watch?v=QpfyjwhY9kg

// In Below we gonna Passing Method as props

class ParentComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            parentName:'Python Web Developer'
        }

        this.greetParent=this.greetParent.bind(this)
    }

    // Below greetParent receives parameter(childName) from ChildComponent
    greetParent(childName){
        alert(`Hello ${this.state.parentName} - ${childName}` )
    }

    render(){
        return( 
        <div>
               {/* Passing Method as props, greetParent is method which is passed as prop greetHandler */} 
               <ChildComponent greetHandler={this.greetParent}/>

        </div>
        )
    }
}

export default ParentComponent