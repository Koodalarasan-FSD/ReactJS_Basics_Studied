import React from "react";

// List Rendering - https://www.youtube.com/watch?v=5s8Ol9uw-yM


//Receiving props_y which is passed from NameList.js and passing into(inside) function Person
function Person({props_y}){
    
    return(
        
        <div>
            
            <h5>
                
                {/* In below, to access properties(name,age,Designation) using dot operator with variable props_y */}
            
                I am { props_y.name } and my age is { props_y.age } and Working as { props_y.Designation }
            
            </h5>
        
        </div>
    )
}

export default Person