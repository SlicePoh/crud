import React from 'react'
//import { BiBookOpen } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { useNoteContext } from '../hooks/useNoteContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext';
export const Card = ({ note }) => {

  const {dispatch} = useNoteContext()
  const {user}=useAuthContext()

  const handleDelete = async () => {
    if(!user){
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
      <div className="flex justify-between items-start w-full ">
          <div className="flex flex-col">
            <div className="text-lg font-bold dark:text-gray-200">{note.title}</div>
            <div className="text-sky-950 dark:text-sky-500 my-1">
              <strong className="mr-1">Published At : </strong> {formatDistanceToNow(new Date(note.createdAt),{addSuffix: true})}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            {/* <button className="flex items-center justify-between text-white dark:text-[#000] p-2 w-auto h-8 text-xs bg-sky-950 dark:bg-sky-300 rounded-lg font-bold my-2">
              <BiBookOpen className="text-sm mr-1" />
              Edit
            </button> */}
            <button onClick={handleDelete} className="flex items-center justify-center text-center dark:text-white text-[#000] p-2 w-auto text-xs bg-slate-300 dark:bg-slate-900 rounded-lg font-bold ">
              <BsTrash className="text-sm" />
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
