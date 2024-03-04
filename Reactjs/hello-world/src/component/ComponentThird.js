import React from "react";
import { UserContext,ChannelContext } from "../App";


// useContext Hook - Part_1 -  https://www.youtube.com/watch?v=CI7EYWmRDJE
// useContext Hook - Part_2 -  https://www.youtube.com/watch?v=tEqNSOhCHLU

function ComponentThird(){
    return(
        <div>
            <h5>For Below Output, Please Check ComponentFirst.js,ComponentSecond.js,ComponentThird.js & App.js for coding</h5>
            <UserContext.Consumer>
                {
                    user =>{
                        return(
                        <ChannelContext.Consumer>
                            {
                                channel =>{
                                    return <div>User Context Value - {user} & Channel Context value - {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
            
        </div>
    )
}

export default ComponentThird