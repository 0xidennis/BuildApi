import React from 'react'
import { useState,useEffect } from 'react'

const Api = () => {
  const [posts, setPosts] = useState(null);
  const [error,setError] = useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        if (!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();

    })
    .then ((posts)=> setPosts(posts))
    .catch((error)=> setError(error));
  },[]);

  return (
    <div>
           <h1>Data from API</h1>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      )}
    </div>
  )
}

export default Api