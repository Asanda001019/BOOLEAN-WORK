import React from 'react'
import Nav from '../componets/nav';
import { Outlet,  } from "react-router-dom";
import Footer from '../componets/footer';

 function Layout() {
  return (
    <>
    <Nav/>
   
      <Outlet />

      <Footer/>

      <Layout/>

      
    
    </>
  )
}
export default Layout
