import React from "react";

// Styling and CSS Basics - https://www.youtube.com/watch?v=j5P9FHiBVNo



//attributes must be camel case for ex: fontSize,fontFamily,fontWeight -First Letter of second word should be Capital 
const heading = {
    fontSize:'72px',
    color:'blue',
    fontFamily: 'Courier New, Courier, monospace'
}

function Inline(){

    return(
        
        <div>
            
            <h1 style= { heading } > Inline Styling, Check Inline.js </h1>
            
            {/* It works even without importing(appStyles.css) because it(className='error') was locally scoped */}
            <h1 className='error'> Inline Styling, Check Inline.js and appStyles.css </h1>
        
        </div>
    )
}


export default Inline