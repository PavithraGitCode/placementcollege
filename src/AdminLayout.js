// AdminLayout.js
import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom'; 

function AdminLayout() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="adminpage">
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>Placement System</span>
          </div>
          <div className='button' onClick={() => navigate(-1)}>
            <button>
              Back <i className='fa fa-long-arrow-alt-right'></i>
            </button>
          </div>
        </div>
      </section>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li onClick={() => navigate('/admin/studentsList')}>
              <Link to='/admin/studentsList'>Placement Students</Link>
            </li>
            
          </ul>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
      <div className="admin-content">
        <Outlet /> {/* The child routes (like StudentsList) will be rendered here */}
      </div>
    </div>
  );
}

export default AdminLayout;