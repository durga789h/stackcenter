import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import './error.css'

const Errorpage = () => {
    const style={
        backgroundColor:"red",
        color:"white",
       textalign:"center",
       padding:'25px',
    
    }
    const buttonText="Home page";
    const errortext="Report problem"
  return (
    <div style={style} className='error cen'>
      <div className='tilldown'>
      <h1>PAGE NOT FOUND </h1>
      <h2>ERROR 404</h2>
      <p>opps you are try to access the page which are not exist,
        so try correct url path.
      </p>
      <div className='cent'>
      <Link  to={'/'}><Button buttonText={buttonText}></Button></Link>
      </div>
      <div className='cent'>
      <Link to={'/contact'}><Button buttonText={errortext}>report problem</Button></Link>
      </div>
      </div>
    </div>
  )
}

export default Errorpage
//rafc rfc