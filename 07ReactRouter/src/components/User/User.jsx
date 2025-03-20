import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <h1 className='text-2xl  bg-gray-600 text-white text-center p-3'>User : {userid}</h1>
    )
}

export default User
