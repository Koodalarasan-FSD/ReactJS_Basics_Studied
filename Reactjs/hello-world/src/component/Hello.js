import React from "react";


// JSX - https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8


const Hello =() => {
    //Using JSX(HTML), Inorder to use Without JSX and Delete below comment lines
   
    /*  return (
        <div className="dummyClass">
            <h1>Hello, Using JSX</h1>
        </div>
    )
    */

    //Without JSX
    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},
        React.createElement('h1',null,'Hello, This is Without JSX ')
    )
}




export default Hello