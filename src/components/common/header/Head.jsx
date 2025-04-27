import React from "react"
import { useNavigate } from "react-router-dom"

const Head = () => {
  const navigate=useNavigate()
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>College Placement System</span>
          </div>
         
           
            <div className='button' onClick={()=>navigate('/login')}>
               
              <button>
               Admins Login <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          
        </div>
      </section>
    </>
  )
}

export default Head
