import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import NavMobile from '../components/navbar/NavMobile'

function RouteLayout() {
  return (
    <>
    <NavMobile/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RouteLayout