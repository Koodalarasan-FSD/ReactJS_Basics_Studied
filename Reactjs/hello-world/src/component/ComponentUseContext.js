import React,{useContext} from "react";
import { UserContext,ChannelContext } from "../App";
import User from "./User";



function ComponentUseContext(){

    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)

    return(
        <div>
            <h3>useContext - Please Check ComponentUseContext.js for coding</h3>
            {user}-{channel}
        </div>
    )
}

export default ComponentUseContext