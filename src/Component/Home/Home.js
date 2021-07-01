import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
function Home() {
    return (
        <div className='h-screen w-full'>
            <button className="bg-green-500 text-white " >
            <Link to='/form' >Upload File</Link>
            </button>
            <button className="bg-blue-500 text-white ">
            <Link to='/view' >View all file</Link>
            </button>
        </div>
    )
}

export default Home
