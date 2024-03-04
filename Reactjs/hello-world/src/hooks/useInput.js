import {useState} from 'react'

// useInput Custom Hook - https://www.youtube.com/watch?v=6am-yn3ZLEw
// Please check UserForm.js

function useInput(initialvalue) {
    const [value,setValue]=useState(initialvalue)
    const reset=()=>{
        setValue(initialvalue)
    }
    const bind={
        value,
        onChange:e=>{
            setValue(e.target.value)
        }
    }

  return [value,bind,reset]
}

export default useInput