// Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
 
function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      <Outlet /> {/* This is where the child routes will be rendered */}
      {!isLoginPage && <Footer />}
    </>
  );
}

export default Layout;