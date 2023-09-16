import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { FaNotesMedical } from 'react-icons/fa6'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';


export const Navbar = (props) => {
    const {user}=useAuthContext()
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

    const { logout } = useLogout()
    const handleClick = () => {
        logout();
    }

    return (
        <div className="mx-5 md:mx-16 fixed w-11/12 top-8 z-40 flex flex-row flex-wrap items-center justify-between rounded-3xl bg-black/20 p-3 px-6 md:px-10 backdrop-blur-xl dark:bg-[#0b14377b]">
            <Link to="/" className='flex items-center'>
                <FaNotesMedical className="text-base md:text-xl mx-1 md:mx-3 dark:text-yellow-500 text-blue-950" />
                <div className="text-base md:text-xl lg:text-2xl font-bold dark:text-slate-300">Keep Notes</div>
            </Link>


            <div className="flex items-center">
                {user && (
                    <div className="flex items-center dark:text-white text-black">
                        <span className="text-xs md:text-base hidden sm:block">{user.email}</span>
                        <button onClick={handleClick} className="flex items-center justify-center mx-2 md:mx-5 p-1 md:p-2 md:font-bold rounded-lg text-xs md:text-base text-white dark:text-black bg-sky-950 dark:bg-sky-500">
                            Logout
                        </button>
                    </div>
                )}
                {!user && (
                    <div className="flex">
                        <Link to="/login">
                            <button className="flex items-center justify-center md:mx-2 p-1 md:p-2 font-bold rounded-lg text-xs md:text-base text-white dark:text-black bg-sky-950 dark:bg-sky-500">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="flex items-center justify-center mx-2 md:mx-2 p-1 md:p-2 font-bold rounded-lg text-xs md:text-base text-white dark:text-black bg-sky-950 dark:bg-sky-500">
                                Signup
                            </button>
                        </Link>
                    </div>
                )}
                <div className="flex justify-center items-center ml-3 bg-white px-1 w-7 md:w-12 h-3 md:h-5 rounded-xl cursor-pointer text-gray-600" onClick={() => setDarkmode((prev) => !prev)}>

                    {!darkMode ? (
                        <RiMoonFill className="w-5 md:w-7 h-5 md:h-7 p-1 bg-blue-950 rounded-full transition duration-1000 transform -translate-x-3 text-white" />
                    ) : (
                        <RiSunFill className="w-5 md:w-7 h-5 md:h-7 p-1 bg-yellow-400 rounded-full transition duration-1000 transform translate-x-3 text-gray-800 " />
                    )}
                </div>
            </div>
        </div>
    )
}
