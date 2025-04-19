import React, { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  const navigate=useNavigate()

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li onClick={()=>navigate('/')}>
              <Link to='/'>Home</Link>
            </li>
            <li onClick={()=>navigate('/courses')}>
              <Link  >All Courses</Link>
            </li>
            <li onClick={()=>navigate('/about')}>
              <Link  >About</Link>
            </li>
            <li onClick={()=>navigate('/team')}>
              <Link  >Students</Link>
            </li>
            <li onClick={()=>navigate('/pricing')}>
              <Link  >Pricing</Link>
            </li>
            <li onClick={()=>navigate('/journal')}>
              <Link  >Journal</Link>
            </li>
            <li onClick={()=>navigate('/contact')}>
              <Link  >Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
