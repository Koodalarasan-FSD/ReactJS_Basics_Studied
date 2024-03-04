import React from "react";
import "./myStyles.css";

// Styling and CSS Basics - https://www.youtube.com/watch?v=j5P9FHiBVNo


function StyleSheet(props) { 

    // Below statement checks primary is true or false if it's true means styling will be applied or else it's not 
    // To understand above please check StyleSheet tag in App.js
    let classname = props.primary ? 'primary' : ' '
    return(
        <div>
            <h1 className={`${classname} font-xl `}>StyleSheet</h1>
        </div>
    )
 }


 export default StyleSheet