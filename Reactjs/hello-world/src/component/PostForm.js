import React, {Component} from "react";

// HTTP POST Request - https://www.youtube.com/watch?v=x9UEDRbLhJE

class PostForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            UserId:'',
            title:'',
            body:''
        }
    }

    ChangeHandler = (e) =>{
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }

    render(){

        const { UserId,title,body } = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="UserId" value={UserId} onChange={this.ChangeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.ChangeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            
            </div>
        )
    }
}

export default PostForm