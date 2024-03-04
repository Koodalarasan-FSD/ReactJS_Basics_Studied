import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

// Fetching Data with useReducer - Part_1 - https://www.youtube.com/watch?v=snzS7-73SEQ

// Fetching Data with useReducer - Part_2 - https://www.youtube.com/watch?v=imjfiXxvMD8

// In below Fetching Data with useReducer & useEffect

// Please also check DataFetchingOne.js.



const initialState={
    loading:true,  //assigned boolean true.
    error:'', // assigned empty string.
    post:{}   // assigned empty object.
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                post:{},
                error:'SomeThing Went Wrong'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {

    const[state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response=>{
                dispatch({type:'FETCH_SUCCESS',payload:response.data})
            })
            .catch(error=>{
                dispatch({type:'FETCH_ERROR'})
            })
    },[])
    
  return (
    <div>
        <h3>Below Data Fetching using useReducer & useEffect, check DataFetchingTwo.js for coding</h3>
        { state.loading?'Loading':state.post.title }
        { state.error?state.error:null }
    </div>
  )
}

export default DataFetchingTwo