import React,{useState,useEffect} from "react";
import axios from "axios";

// Fetching data with useEffect - Part_1 - https://www.youtube.com/watch?v=bYFYF2GnMy8
// Fetching data with useEffect - Part_2 - https://www.youtube.com/watch?v=1tfd6ANaNRY
// Fetching data with useEffect - Part_3 - https://www.youtube.com/watch?v=zm_09NER-R0

function DataFetching(){
    const [posts,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handlerClick = () =>{
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])

    return(
        <div>
            <h3>Fetching List of Titles from API using useEffect - Please Refer DataFetching.js for coding</h3>
            
            <input type="text" value={id} onChange={ e => setId( e.target.value ) }/>
            <button type="button" onClick={handlerClick}>Fetch Post</button>
            
            <div>{posts.title}</div>
            
            {/*<ul>
                {
                    posts.map(post=>(<li key={post.id}>{post.title}</li>))
                }
            </ul>*/}

        </div>
    )

}

export default DataFetching