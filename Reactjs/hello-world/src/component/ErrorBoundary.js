import React, { Component } from "react";

// Error Boundary  - https://www.youtube.com/watch?v=DNYXgtZBRPE

/* 
   Error Boundaries are React components that catch Javascript error in their child component tree, log those errors,
   and display a fall back UI

   A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch
   lifecycle methods
   
   The Placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just
   the component causing the problem.

   Provide a way to gracefully handle error in application code.

*/

// Please check also Hero.js

class ErrorBoundary extends Component{

    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
    }
    
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    
    render(){
        if(this.state.hasError){
            return <h1>Something Went Wrong</h1>
            
        }
        return this.props.children
        
    }
}

export default ErrorBoundary