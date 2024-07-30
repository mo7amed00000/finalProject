import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './components/Navbar/Contact/Contact'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Layout/Layout'
function App() {

const router=createBrowserRouter([
  {path:"/", element: <Layout/>, children:[
    {path:"/", element: <Home/>},
    {path:"/about", element: <About/>},
    {path:"/portfolio", element: <Portfolio/>},
    {path:"/contact", element: <Contact/>}
  ]}
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App
