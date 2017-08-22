import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = (props)=>{
    return <div>
        <div>Not found</div>
        <Link to="/">Go back home</Link>
    </div>
}

export default NotFoundPage