import React from 'react'
import { Link } from 'react-router-dom'

const Lay = () => {
  return (
    <>
        <nav>
            <Link to="/login"><li>LOGIN-PAGE</li></Link>
            <Link to="/data"><li>AJAX-DATA</li></Link>
            <Link to="/sub"><li>SUBMIT-DATA</li></Link>
            <Link to="/data"><li>DATA</li></Link>
        </nav>
    </>
  )
}

export default Lay