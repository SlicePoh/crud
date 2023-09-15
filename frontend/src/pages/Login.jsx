import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login,error,isLoading}=useLogin()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await login(email,password)
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center ">
            <div className="text-2xl md:text-3xl font-semibold dark:text-white mb-10">Login here</div>
            <form className="space-y-4 md:space-y-6 flex flex-col justify-center items-center w-60 md:w-80" onSubmit={handleSubmit}>
                <div className="w-full">
                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} id="email" className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-sky-800  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                </div>
                <div className="w-full">
                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} id="password" placeholder="• • • • • • • • • • •" className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-sky-800  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                </div>

                <button disabled={isLoading} className="w-full dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 ">Login</button>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account? <Link to="/signup" className="font-bold text-sky-800 hover:underline dark:text-sky-500">Signup here</Link>
                </div>
                {error && <div className="text-red-500 text-xl">{error}</div>}
            </form>
        </div>
    )
}

