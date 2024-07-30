import React from "react";

function Portfolio() {
    return (
        <portfolio>
            <div className="container">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-950 font-sans text-center py-5">
                        PORTFOLIO COMPONENT
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="bg-cyan-950 w-[90px] h-1 my-3 mx-2 "></div>
                        <i class="fa-solid fa-star text-cyan-950 text-xl"></i>
                        <div className="bg-cyan-950 w-[90px] h-1 my-3 mx-2 "></div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-3">
                        <div className="w-[100%]  p-7">
                            <img src="./src/assets/poert1.png"className=" rounded-md " alt="" />
                        </div>
                        <div className="w-[100%]  p-7">
                            <img src="./src/assets/port2.png" className=" rounded-md " alt="" />
                        </div>
                        <div className="w-[100%]  p-7">
                            <img src="./src/assets/port3.png" className=" rounded-md " alt="" />
                        </div>
                        <div className="w-[100%]  p-7">
                            <img src="./src/assets/poert1.png"className=" rounded-md " alt="" />
                        </div>
                        <div className="w-[100%]  p-7">
                            <img src="./src/assets/port2.png" className=" rounded-md " alt="" />
                        </div>
                        <div className="w-[100%]  p-7">
                            <img src="./src/assets/port3.png" className=" rounded-md " alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </portfolio>
    );
}

export default Portfolio;
