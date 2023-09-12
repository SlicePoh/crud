import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiMoonFill, RiSunFill } from "react-icons/ri";

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
        <div className="ml-10 sticky w-2/5 top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-3xl bg-black/20 p-3 px-10 backdrop-blur-xl dark:bg-[#0b14377b]">
            <Link to="/">
                <div className="text-2xl font-bold dark:text-slate-300">Keep Notes</div>
            </Link>
            <div
                className="cursor-pointer text-gray-600"
                onClick={() => setDarkmode((prev) => !prev)}
            >
                {darkMode ? (
                    <RiSunFill className="text-lg text-gray-600 dark:text-white" />
                ) : (
                    <RiMoonFill className="text-lg text-gray-600 dark:text-white" />
                )}
            </div>
        </div>
    )
}
