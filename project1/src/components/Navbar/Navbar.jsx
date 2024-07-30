import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const activeLink='bg-emerald-500 rounded-3'
    return (
        <div className="container px-7 bg-cyan-950">
            <div className="Nav py-4 px-16 bg-cyan-950 flex  justify-between ">
            <div className="header py-4 ">
                <h1 className='text-4xl font-bold text-white font-sans'><NavLink to="/">START FRAMEWORK</NavLink></h1>
            </div>
            <div className="navLink py-5  pr-10">
                <ul className='flex flex-wrap'>
                    <li className='px-2 text-base font-bold text-white'>
                        <NavLink to="/about">ABOUT</NavLink>
                    </li>

                    <li className='px-2 text-base font-bold text-white'>
                        <NavLink to="/PORTFOLIO">PORTFOLIO</NavLink>
                    </li>

                    <li className='px-2 text-base font-bold text-white'>
                        <NavLink to="/about">CONTACT</NavLink>
                    </li>

                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar




