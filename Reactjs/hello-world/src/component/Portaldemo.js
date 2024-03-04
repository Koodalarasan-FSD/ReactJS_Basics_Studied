import React from "react";
import  ReactDOM  from "react-dom";

// Portals - https://www.youtube.com/watch?v=HpHLa-5Wdys


function Portaldemo() { 

    {/*  createPortal contains two parameters suchas JSX(html tag) and id  */}
    return ReactDOM.createPortal( <h1>Portaldemo</h1>,document.getElementById("portal-root") )

    {/* Check above id(div) "portal-root" in index.html under public folder */}
 
}

 export default Portaldemo