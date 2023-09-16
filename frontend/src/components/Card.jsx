import React, { useState } from 'react'
import { BiBookOpen } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { useNoteContext } from '../hooks/useNoteContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext';
import { Modal } from './Modal';
export const Card = ({ note }) => {
 
  const [isOpen, setOpen] = useState(false);

  const { dispatch } = useNoteContext()
  const { user } = useAuthContext()

  const handleDelete = async () => {
    if (!user) {
      return
    }
    
    const response = await fetch('/api/note/' + note._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    if (response.ok) {
      dispatch({ type: 'DELETE_NOTE', payload: json })
    }
  }

  return (
    <div className="flex flex-col items-end justify-between p-4 w-56 lg:w-64 h-fit bg-white dark:bg-sky-950 border-2 dark:border-sky-500 shadow-md rounded-xl my-3 mx-5 shadow-slate-800 dark:shadow-slate-400">
      {isOpen && (
        <div onClose={() => setOpen(false)}
        className="z-50 fixed flex flex-col justify-center items-center left-10 sm:left-20 md:left-32 mx-auto h-fit w-60 md:w-2/6 p-5 rounded-xl top-10 bg-sky-950 dark:bg-sky-400 dark:text-white mt-5">
          <div  className="flex justify-end w-full" >
            <IoClose onClick={() => setOpen(!isOpen)} className="dark:text-sky-900 text-sky-300 text-2xl " />
          </div>
          <Modal key={note._id} note={note}/>
        </div>
    
      )}
      <div className="flex justify-between items-start w-full ">
        <div className="flex flex-col">
          <div className="text-lg font-bold dark:text-gray-200">{note.title}</div>
          <div className="text-sky-950 dark:text-sky-500 my-1">
            <strong className="mr-1">Published At : </strong> {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <button onClick={handleDelete} className="flex items-center justify-center text-center dark:text-white text-[#000] p-2 w-auto text-xs bg-slate-300 dark:bg-slate-900 rounded-lg font-bold ">
            <BsTrash className="text-sm" />
          </button>
          <button onClick={() => setOpen(!isOpen)} className="flex items-center justify-center text-center dark:text-white text-[#000] w-auto text-xs p-2 bg-slate-300 dark:bg-slate-900 rounded-lg font-bold mt-4">
            {!isOpen ?
              <BiBookOpen className="text-sm" />
              : <BiBookOpen className="text-sm" />}
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full text-slate-700 dark:text-slate-300">
        <div className="my-1 font-bold">
          Tag: {note.tags}
        </div>
        Details:
        <div className="">
          {note.details}
        </div>
      </div>
    </div>
  )
};
