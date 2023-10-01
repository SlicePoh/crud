import React, { useState } from 'react'
import { useNoteContext } from '../hooks/useNoteContext'
import { useAuthContext } from '../hooks/useAuthContext'

const backendURL = 'https://keep-notes-1pc1.onrender.com';
export const Form = () => {
    const {dispatch}= useNoteContext()
    const {user}=useAuthContext()

    const [title,setTitle]=useState('')
    const [tags,setTags]=useState('')
    const [details,setDetails]=useState('')
    
    const [error,setError]=useState(null)
    const [emptyFields,setEmptyFields]=useState([])
    const handleSubmit= async (e) =>{
        e.preventDefault();
        if(!user){
            setError('You must be logged in')
            return
        }
        const note={title,tags,details}
        const response=await fetch(`${backendURL}/api/note`,{
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json=await response.json()
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setTags('')
            setDetails('')
            setError(null)
            setEmptyFields([])
            console.log('new note added',json);
            dispatch({type: 'CREATE_NOTE', payload: json})
        }
    }

    return (
        <div className="flex justify-center items-start dark:text-white mt-5">
            <form onSubmit={handleSubmit} className="inline-block lg:fixed w-80 dark:bg-inherit p-2 md:p-5 rounded-xl">
                <div className="text-2xl font-extrabold">Add a note</div>
                <div className="flex flex-col  justify-between">
                    <label className="m-3">Title</label>
                    <input placeholder="Running" id={emptyFields.includes('title') ? 'error': ''} className="py-1 px-2 rounded-lg dark:bg-sky-800" type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                </div>
                <div className="flex flex-col  justify-between">
                    <label className="m-3">Tag</label>
                    <input placeholder="Health" id={emptyFields.includes('tags') ? 'error': ''} className="py-1 px-2 rounded-lg dark:bg-sky-800" type="text" onChange={(e)=>setTags(e.target.value)} value={tags} />
                </div>
                <div className="flex flex-col  justify-between">
                    <label className="m-3">Details</label>
                    <textarea placeholder="A 10km. run at 6 A.M. tommorrow." id={emptyFields.includes('details') ? 'error': ''} className=" p-2 w-full  h-32 rounded-lg dark:bg-sky-800" type="text-area" onChange={(e)=>setDetails(e.target.value)} value={details} />
                </div>
                <button type="submit" className=" w-36 my-5 bg-sky-950 dark:bg-sky-400 text-white text-xl dark:text-black rounded-lg p-2 font-bold">
                    Post
                </button>
                {error && <div className="text-center font-bold text-red-500 ">{error}</div>}
            </form>
        </div>
    )
}
