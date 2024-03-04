import React from 'react';

// Functional Component - https://www.youtube.com/watch?v=Cla1WwguArA

// Props - https://www.youtube.com/watch?v=m7OWXtbiXX8

// Destructuring props and state - https://www.youtube.com/watch?v=5_PdMS9CLLI

/*

function Greet(){
    return <h1>Hey and Hi</h1>
}

*/

// or use below Arrow Function

  
   
    const Greet = props =>{
        console.log(props)
        return (
            <div>
                
                <h1>Hey and Hi {props.name} -- {props.heroName} </h1>
                {props.children}
            
            </div>
        
        )
    } 
    
    
    // We can also include parameters without props like below
        /*
        const Greet =({name,heroName})  =>{
            
            return (
                <div>
                    
                    <h1>Hey and Hi {name} -- {heroName} </h1>
                    
                
                </div>
            
            )
        }
        */

    /*
    //We can also include parameters with props by extracting like below
    const Greet = props =>{
        const {name,heroName} = props
        return (
            <div>
                
                <h1>Hey and Hi {name} -- {heroName} </h1>
                
            
            </div>
        
        )
    } 
    */





export default Greet