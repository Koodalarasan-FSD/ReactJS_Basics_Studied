import React,{ useState } from "react";

// useState with object - https://www.youtube.com/watch?v=-3lL8oyev9w

function HookCounterThree(){

    // Below firstName & lastName are objects - state variable may be string, number, array or "object"
    const [name,setName] = useState({firstName:'',lastName:''})

    return(
        <form>
            
            <h4>In Below, Type FirstName in one & LastName in other, Refer HookCounterThree.js for coding</h4>

            {/* Below ... are Spread operator in es6 javascript used for coping */}
            <input type="text" value={ name.firstName } onChange={ e => setName({ ...name, firstName:e.target.value })}/>
            <input type="text" value={ name.lastName } onChange={ e => setName({ ...name, lastName:e.target.value })}/>
            
            <h2>Your First Name - { name.firstName }</h2>
            <h2>Your Last Name - { name.lastName }</h2>
            <h2>{JSON.stringify( name )}</h2>
        
        </form>
    )
}

export default HookCounterThree