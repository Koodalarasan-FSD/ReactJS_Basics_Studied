import React, { Component } from "react";

// Class Component - https://www.youtube.com/watch?v=lnV34uLEzis

// Props - https://www.youtube.com/watch?v=m7OWXtbiXX8

// Destructuring props and state - https://www.youtube.com/watch?v=5_PdMS9CLLI

class Welcome extends Component{
    render() {
        return <h1>Class Component_Hello {this.props.name} -- {this.props.heroName} </h1>
    }
}

/*
//We can also include parameters with props by extracting like below
class Welcome extends Component{
    
    render() {
        const {name,heroName} = this.props
        return <h1>Class Component_Hello {name} -- {heroName} </h1>
    }
}
*/


export default Welcome