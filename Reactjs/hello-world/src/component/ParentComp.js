import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

// Pure Components - https://www.youtube.com/watch?v=YCRuTT31qR0

class ParentComp extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: "Koodalarasan"
        }
    }

    componentDidMount(){
        setInterval( ()=>{ this.setState({name:"Koodalarasan"}) },2000)
    }
    render(){
        console.log("***********Parent Component Render**********")
        return(
            <div>
                ParentComp(ParentComponent)- Check Browser Console inorder to see Rendering & refer ParentComp.js for coding 
                {/*<RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                
                {/* While(If Wants to) using MemoComp uncommand above RegularComponent and PureComp tags */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp