import React, { useState } from 'react'
import { useNoteContext } from '../hooks/useNoteContext'
import { useAuthContext } from '../hooks/useAuthContext'

const backendURL = 'https://keep-notes-1pc1.onrender.com';
export const Modal = ({note,closeModal}) => {
    const { dispatch } = useNoteContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState(note.title)
    const [tags, setTags] = useState(note.tags)
    const [details, setDetails] = useState(note.details)

    const [error, setError] = useState(null)
    // const [emptyFields, setEmptyFields] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            return
        }
        
        const newNote = { title, tags, details }

        console.log(newNote)
        const response = await fetch(`${backendURL}/api/note/`+ note._id, {
            method: 'PATCH',
            body: JSON.stringify(newNote),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            console.log('note updated', json);
            dispatch({ type: 'UPDATE_NOTE', payload: json });
            setTitle('');
            setTags('');
            setDetails('');
            closeModal()
        }
        
    }
    return (
        <form onSubmit={handleSubmit} className="w-full p-2 text-white dark:text-black rounded-xl">
            <div className="text-xl md:text-2xl font-extrabold cursor-default">Edit note</div>
            <div className="flex flex-col  justify-between">
                <label className="m-3">Title</label>
                <input placeholder="Running" className="text-black dark:text-white py-1 px-2 rounded-lg dark:bg-sky-800" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div className="flex flex-col  justify-between">
                <label className="m-3">Tag</label>
                <input placeholder="Health"  className="text-black dark:text-white py-1 px-2 rounded-lg dark:bg-sky-800" type="text" onChange={(e) => setTags(e.target.value)} value={tags} />
            </div>
            <div className="flex flex-col  justify-between">
                <label className="m-3">Details</label>
                <textarea placeholder="A 10km. run at 6 A.M. tommorrow."  className="text-black dark:text-white p-2 w-full  h-32 rounded-lg dark:bg-sky-800" type="text-area" onChange={(e) => setDetails(e.target.value)} value={details} />
            </div>
            <button type="submit" className="w-24 md:w-36 mt-3 bg-sky-300 dark:bg-sky-800 dark:text-white text-xl text-black rounded-lg p-2 font-bold">
                Update
            </button>
            {error && <div className="text-center font-bold text-red-500 ">{error}</div>}
        </form>

    )
}
