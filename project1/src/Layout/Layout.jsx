import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'

function Layout() {
    return (
        <>
        <Navbar/>
         <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout
