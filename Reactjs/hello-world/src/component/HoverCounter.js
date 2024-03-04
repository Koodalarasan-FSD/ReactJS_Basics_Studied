import React, { Component } from "react";
import updatedComponent from "./WithCounter";

// Higher Order Components - Part_1 - https://www.youtube.com/watch?v=B6aNv8nkUSw

// Higher Order Components - Part_2 - https://www.youtube.com/watch?v=rsBQj6X7UK8

// Higher Order Components - Part_3 - https://www.youtube.com/watch?v=l8V59zIdBXU


/*
Higher Order Components(HOC) is a pattern where a function takes a component as an argument and returns a new component.

  for ex: const newcomponent = higherOrderComponent( originalcomponent )

  const newcomponent is a function called higherorderComponent and we pass in the original component as argument typically
  an hoc adds additionally data or functionality to the original component so the new component also be referred as
  enhanced component

  for ex: const IronMan =WithSuit(TonyStark) where Withsuit is function which have TonyStark as parameter, 
  here TonyStark is original component withsuit is function that will enhance TonyStark and return IronMan which is 
  enhanced component

  From React point of view, we have a function which accepts the original component adds functionality and returns an
  enhanced component or in other words we have the hoc pattern.
*/

// Please also check ClickCounter.js,WithCounter.js with it

class HoverCounter extends Component{

    
    
    render(){

        {/* Destructuring(storing) this.props into count,incrementcount which is from WithCounter.js*/}
        const { count,incrementcount } = this.props
        
        {/* Below props name from App.js to WithCounter.js to in it. */}
        return <h2 onMouseOver={incrementcount} > {this.props.name}  Hovered { count } times, for coding Refer HoverCounter.js, ClickCounter.js,WithCounter.js</h2>
    }
}

{/* 1)In Below exporting updatedComponent with HoverCounter, value "1" inorder to increment value 
    2)and also we receive name from updatedComponent(WithCounter.js) by exporting updatedComponent within it */}
export default updatedComponent(HoverCounter,1)