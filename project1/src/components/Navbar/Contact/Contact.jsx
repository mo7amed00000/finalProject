// import React from "react";

// import { useState } from "react";

function Contact() {
    // const [keyUp, setKeyUp] = useState("");
    // setKeyUp();
    return (
        <div className="text-center mx-auto  text-[#2c3e50] bg-white">
            <div className="py-5">
                <h2 className="font-bold text-[40px] py-2">CONATCT SECTION</h2>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-20 h-1 bg-[#2c3e50] me-3"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="w-20 h-1 bg-[#2c3e50] ms-3"></div>
                </div>
            </div>
            <form className="">
                <div className="flex flex-col flex-wrap items-center relative my-14 p-5">
                    <label
                        className="absolute block top-[-25px] left-[26%] text-[#1abc9c]"
                        htmlFor="userName">
                        UserName :{" "}
                    </label>
                    <input
                        className="absolute top-0 p-3 w-1/2 border-b rounded-md shadow-sm focus:outline-none placeholder:text-[#202020b4]"
                        type="text"
                        id="userName"
                        placeholder="userName"
                    />
                </div>

                <div className="flex flex-col flex-wrap items-center relative my-14 p-5">
                    <label
                        className="absolute block top-[-25px] left-[26%] text-[#1abc9c]"
                        htmlFor="userAge">
                        UserAge :{" "}
                    </label>
                    <input
                        className="absolute top-0 p-3 w-1/2 border-b rounded-md shadow-sm focus:outline-none placeholder:text-[#202020b4]"
                        type="number"
                        id="userAge"
                        placeholder="userAge"
                    />
                </div>

                <div className="flex flex-col flex-wrap items-center relative my-14 p-5">
                    <label
                        className="absolute block top-[-25px] left-[26%] text-[#1abc9c]"
                        htmlFor="userEmail">
                        UserEmail :{" "}
                    </label>
                    <input
                        className="absolute top-0 p-3 w-1/2 border-b rounded-md shadow-sm focus:outline-none placeholder:text-[#202020b4]"
                        type="email"
                        id="userEmail"
                        placeholder="userEmail"
                    />
                </div>

                <div className="flex flex-col flex-wrap items-center relative my-14 p-5">
                    <label
                        className="absolute block top-[-25px] left-[26%] text-[#1abc9c]"
                        htmlFor="userPassword">
                        UserPassword :{" "}
                    </label>
                    <input
                        className="absolute top-0 p-3 w-1/2 border-b rounded-md shadow-sm focus:outline-none placeholder:text-[#202020b4]"
                        type="password"
                        id="userPassword"
                        placeholder="userPassword"
                    />
                </div>

                <div className="w-1/2 mx-auto text-start my-5">
                    <button
                        type="button"
                        className="bg-[#1abc9c] text-white border border-[#1abc9c] p-2 rounded-md">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
