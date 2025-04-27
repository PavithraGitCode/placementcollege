import React, { useState } from "react"
import { Link ,useNavigate} from "react-router-dom" 
import "./index.css"
 

const StudentsDetails = () => {
  const [click, setClick] = useState(false)
  const navigate=useNavigate()

  return (
    <>
    <div className="adminpage">
    <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>Placement System</span>
          </div>       
           
            <div className='button' onClick={()=>navigate(-1)}>
               
              <button>
              Back <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          
        </div>
      </section>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li onClick={()=>navigate('/')}>
              <Link to='/'>Placement Students</Link>
            </li>
            <li onClick={()=>navigate('/courses')}>
              <Link  >Hiring Companies</Link>
            </li>
          </ul>
           
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
      </div>
    </>
  )
}

export default StudentsDetails;
