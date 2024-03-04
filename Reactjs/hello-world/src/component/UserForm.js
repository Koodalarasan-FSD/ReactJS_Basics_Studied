import React, { useState } from 'react'
import useInput from '../hooks/useInput'

// useInput Custom Hook - https://www.youtube.com/watch?v=6am-yn3ZLEw


function UserForm() {
    
    //Below useInput is custom hook not built-in hook check useInput.js under hooks folder
    const [firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,bindLastName,resetLastName]=useInput('')

    const submitHandler=e=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input type='text' {...bindFirstName}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' {...bindLastName}></input>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm