import React, {Component} from "react";
import { UserConsumer } from "./UserContext";

// Context - Creating Context - Part_1 - https://www.youtube.com/watch?v=j3j8St50fNY

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// Context - Creating Context - Part_2 - https://www.youtube.com/watch?v=lTjQjWemKgE

// Context - Creating Context - Part_3 - https://www.youtube.com/watch?v=j3j8St50fNY 

// Please also refer ComponentC.js, ComponentE.js & UserContext.js

class ComponentF extends Component{
    render(){
        return(
            <UserConsumer>
                { username => {
                    return <div>
                        Hello {username}, Refer ComponentC.js, ComponentE.js, ComponentF.js & UserContext.js for coding  
                        </div>
                }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF