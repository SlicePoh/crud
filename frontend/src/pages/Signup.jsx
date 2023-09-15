import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [confirmPassword, setConfirmPassword] = useState('')

    const {signup,error,isLoading}=useSignup()
    const handleSubmit = async(e) => {  
        e.preventDefault()
        await signup(email,password)
    }
    // const passwordCheck= () => {

    // }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="text-2xl md:text-3xl font-semibold dark:text-white mb-10">Signup here</div>
            <form className="space-y-4 md:space-y-6 flex flex-col justify-center items-center w-60 md:w-80" onSubmit={handleSubmit}>
                <div className="w-full">
                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} id="email" className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-sky-800  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                </div>
                <div className="w-full">
                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} id="password" placeholder="• • • • • • • • • • •" className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-sky-800  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                </div>
                {/* <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input onChange={(e)=>setConfirmPassword(e.target.value)} type="confirmPassword" value={confirmPassword} id="confirmPassword" placeholder="••••••••" className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-sky-800  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                </div> */}
                {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4  rounded bg-gray-50 focus:ring-3  dark:bg-sky-800  dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">Terms and Conditions</a></label>
                    </div>
                </div> */}
                <button type="submit" disabled={isLoading} className="w-fit text-white dark:text-black bg-sky-900 hover:bg-sky-800  font-bold rounded-lg px-5 py-2.5 text-center dark:bg-sky-300 dark:hover:bg-sky-400 ">Create an account</button>
                <div className="text-sm font-light text-gray-600 dark:text-gray-400">
                    Already have an account? <Link to="/login" className="font-bold text-sky-700 hover:underline dark:text-sky-500">Login here</Link>
                </div>
                {error && <div className="text-red-500 text-xl">{error}</div>}
            </form>
        </div>
    )
}
