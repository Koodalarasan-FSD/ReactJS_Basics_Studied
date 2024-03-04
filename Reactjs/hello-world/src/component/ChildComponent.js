import React from "react";

// Method as props - https://www.youtube.com/watch?v=QpfyjwhY9kg

function ChildComponent(props) {

    return(

        <div>
            {/* Using Arrow Function, passing an parameter(Koodalarasan) */}
            <button onClick={() => props.greetHandler('Koodalarasan')}>Greet Parent</button>

        </div>
    )
  }


  export default ChildComponent