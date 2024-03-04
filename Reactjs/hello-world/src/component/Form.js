import React, { Component } from "react";

// Basics of Form Handling  - https://www.youtube.com/watch?v=7Vo_VCcWupQ

class Form extends Component{

    constructor(props){
        super(props)

        this.state={
            username:'',
            comments:'',
            designation:''
        }
    }

    handleUsernameChanger = event => {

        this.setState({
            
            username: event.target.value
        
        })
    }

    handleCommentsChanger = (event) =>{
        this.setState({
            comments:event.target.value
        })
    }

    handleSelectChanger = (event) =>{
        this.setState({
            designation:event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.designation}`)
        event.preventDefault()
    }
    
    render(){

        {/* If i use below const statement , i will remove "this.state"(i will use without 'this.state') from value of input, textarea, select tags */}
        {/* For Ex: <input type="text" value={username} onChange={this.handleUsernameChanger}/>  */}
        // const {username,comments,designation} =this.state
        
        return(
            
           <form onSubmit={this.handleSubmit}>
            <div>
                <br></br>
                <br></br>
                <label>User-Name</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChanger}/>
                <br></br>
                <br></br>

                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChanger}></textarea>

                <br></br>
                <br></br>

                <label>Designation</label>
                <select value={this.state.designation} onChange={this.handleSelectChanger}>
                    <option></option>
                    <option value={"Python Web Developer"}>Python Web Developer</option>
                    <option value={"Full Stack Developer"}>Full Stack Developer</option>
                    <option value={"Front End Developer"}>Front End Developer</option>
                </select>
                
                <br></br>
                <br></br>
                
                <input type="submit"></input>
            </div>
           </form>
        )
    }
}


export default Form