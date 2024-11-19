import React from 'react'
import { useState,useEffect } from 'react'

const AAP = () => {
    const [comments,setComments] = useState(null);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
        if(!response.ok){
            throw new Error("Network can not be found");
        }  
        return response.json();
        })
        .then((commenst)=>setComments(comments))
        .catch((error)=> setError(error))
    })
  return (
    <div>
              <h1>Data from API</h1>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <pre>{JSON.stringify(comments, null, 2)}</pre>
      )}
    </div>
  )
}

export default AAP