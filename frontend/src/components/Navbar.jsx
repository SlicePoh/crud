import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {FaNotesMedical} from 'react-icons/fa6'
export const Navbar = (props) => {
    const [darkMode, setDarkmode] = React.useState(
        JSON.parse(localStorage.getItem("darkMode") || false)
    );

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="ml-16 sticky w-11/12 top-8 z-40 flex flex-row flex-wrap items-center justify-between rounded-3xl bg-black/20 p-3 px-10 backdrop-blur-xl dark:bg-[#0b14377b]">
            <Link to="/" className='flex items-center'>
                <FaNotesMedical className="text-xl mx-3 dark:text-yellow-500 text-blue-950"/>
                <div className="text-2xl font-bold dark:text-slate-300">Keep Notes</div>
            </Link>
            <div className="flex justify-center items-center bg-white px-1 w-12 h-5 rounded-xl cursor-pointer text-gray-600" onClick={() => setDarkmode((prev) => !prev)}>
                {!darkMode ? (
                    <RiMoonFill className="w-7 h-7 p-1 bg-blue-950 rounded-full transition duration-1000 transform -translate-x-3 text-white" />
                ) : (
                    <RiSunFill className="w-7 h-7 p-1 bg-yellow-400 rounded-full transition duration-1000 transform translate-x-3 text-gray-800 " />
                )}
            </div>
        </div>
    )
}
