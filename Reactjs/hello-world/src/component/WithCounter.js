import React from "react";

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

// Please also check HoverCounter.js,ClickCounter.js with it



/* 
   In Below we're Passing OriginalComponent,incrementnumber as parameters and so check last line of export statement 
   in both ClickCounter.js and HoverCounter.js

*/
const updatedComponent = (OriginalComponent,incrementnumber) => {
    class NewComponent extends React.Component {

        constructor(props){
            super(props)
            this.state ={
                count: 0
            }
        }
    
        incrementcount = () =>{
            this.setState(prevState =>{
                return { count: prevState.count + incrementnumber}
            })
        }
        
        render() {
            
            {/* Passing props count,incrementcount and others(name, if any in it) as within curly braces & ...this.props */}
            return <OriginalComponent count={this.state.count} incrementcount={this.incrementcount} {...this.props} />
        }
    }
    return NewComponent
}

export default updatedComponent