import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(Response => Response.json())
    //     .then(data =>{
    //         console.log(data);
            
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-2xl text-center flex flex-col justify-center items-center  bg-gray-600 p-3'>Github Followers: {data.followers}
        <img  className='mt-2' src={data.avatar_url} alt="gitImage" width={300} />
        </div>
    )
}

export default Github


export  const githubInfoLoader = async ()=>{
 const response =    await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}