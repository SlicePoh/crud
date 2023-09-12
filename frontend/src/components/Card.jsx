import React from 'react'
import { BiBookOpen } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'


export const Card = ({ note }) => (
  <div className="w-80 h-auto overflow-hidden bg-white dark:bg-sky-950 border-2 dark:border-sky-500 shadow-md rounded-xl m-4 shadow-slate-800 dark:shadow-slate-200">
    <div className="flex flex-col items-end justify-between p-4">
      <div className="flex justify-between items-start w-full ">
        <div className="flex flex-col">
          <div className="text-lg font-bold dark:text-gray-200">{note.title}</div>
          <div className="text-sky-950 dark:text-sky-500 my-1">
            Published At: {note.createdAt}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="flex items-center justify-between text-white dark:text-[#000] p-2 w-auto h-8 text-xs bg-sky-950 dark:bg-sky-300 rounded-lg font-bold my-2">
            <BiBookOpen className="text-sm mr-1" />
            Edit
          </button>
          <button className="flex items-center justify-between text-white dark:text-[#000] p-2 w-auto text-xs bg-sky-950 dark:bg-sky-300 rounded-lg font-bold ">
            <AiOutlineDelete className="text-sm mr-1" />
            Delete
          </button>
        </div>
      </div>
      <div className="text-sm text-gray-300">
        <div className="flex justify-center items-start flex-col  w-11/12 text-slate-700 dark:text-slate-300">
          <div className="my-1 font-bold">
            Tag: {note.tags}
          </div>
          Details:
          <div className="">
            {note.details}
          </div>
        </div>
      </div>

    </div>
  </div>
);
