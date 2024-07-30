import React from 'react'

function Home() {
    return (
        <home>
            <div className='container bg-emerald-500 py-10'> 
                <div className='py-16'>
                    <div className=''>
                        <img src="./src/assets/avataaars.svg" className='w-60   rounded-full mx-auto'  alt="" />
                    </div>
                    <div>
                        <h2 className='text-4xl font-bold text-white font-sans text-center py-5'>
                            <a href="">START FRAMEWORK</a>
                        </h2>
                        <div className='flex flex-wrap justify-center'>
                    <div className='bg-white w-[90px] h-1 my-3 mx-2 '></div>
                    <i class="fa-solid fa-star text-white text-xl"></i>
                    <div className='bg-white w-[90px] h-1 my-3 mx-2 '></div>
                </div>

                    
                        
                    </div>
                    <div>
                        <p className='text-center text-white'>
                        Graphic Artist - Web Designer - Illustrator
                        </p>
                    </div>
                </div>
            </div>
        </home>
    )
}

export default Home
