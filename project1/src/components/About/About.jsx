import React from 'react'

function About() {
    return (
        <about>
            <div className="container py-[200px]  bg-emerald-500 ">
                <div className="header pt-10">
                    <h3 className='text-5xl font-bold text-white font-sans text-center pt-10 pb-5'>
                    ABOUT COMPONENT
                    </h3>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <div className='bg-white w-[90px] h-1 my-3 mx-2 '></div>
                    <i class="fa-solid fa-star text-white text-xl"></i>
                    <div className='bg-white w-[90px] h-1 my-3 mx-2 '></div>
                </div>
                <div className='flex flex-wrab justify-around '>
                    <div className='w-[40%] text-white '><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div className='w-[40%] text-white '><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                </div>
            </div>
        </about>
    )
}

export default About
