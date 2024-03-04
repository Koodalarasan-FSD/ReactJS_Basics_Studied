import axios from 'axios';
import React,{useEffect,useState} from 'react';

// Fetching Data with useReducer - Part_1 - https://www.youtube.com/watch?v=snzS7-73SEQ

// In below Fetching Data with useState & useEffect

// Please also check DataFetchingTwo.js.

function DataFetchingOne(){

    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [post,setPost]=useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response=>{
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error=>{
                setLoading(false)
                setPost({})
                setError('Something Went Wrong')
            })
    },[])
    return(
        <div>
            <h3>Below Data Fetching using useState & useEffect, check DataFetchingOne.js for coding</h3>
            { loading?'Loading':post.title }
            { error?error:null }
        </div>
    )
}

export default DataFetchingOne