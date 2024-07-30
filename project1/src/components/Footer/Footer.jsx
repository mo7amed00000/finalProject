import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container py-16 flex flex-flex-wrap justify-evenly bg-cyan-950 text-center">
                <div className='grid grid-cols-3'>
                <div >
                    <h3 className='text-white text-3xl font-medium'>LOCATION</h3>
                    <p className='text-white  py-2'>2215 John Daniel Drive</p>
                    <p className='text-white  py-2'>Clark, MO 65243</p>
                </div>
                <div>
                    <h3 className='text-white text-3xl font-medium'>AROUND THE WEB</h3>
                    <div>
                        <i class="p-3 m-2 text-white border-2 rounded-full  fa-brands fa-facebook"></i>
                        <i class="p-3 m-2 text-white border-2 rounded-full  fa-brands fa-twitter"></i>
                        <i class="p-3 m-2 text-white border-2 rounded-full  fa-brands fa-linkedin-in"></i>
                        <i class="p-3 m-2 text-white border-2 rounded-full  fa-solid fa-globe"></i>
                    </div>
                </div>
                <div>
                    <h3 className='text-white text-3xl font-medium'>ABOUT FREELANCER</h3>
                    <p className='text-white  py-2'>Freelance is a free to use, licensed Bootstrap theme created<br/> by Route</p>
                </div>
                </div>




            </div>
            <div className='container mx-auto px- py-5 bg-sky-950 '>
                <div className='text-center'>
                <p className='text-white'>Copyright © Your Website 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
