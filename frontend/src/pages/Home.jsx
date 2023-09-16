import React, { useEffect,  } from 'react'
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { useNoteContext } from '../hooks/useNoteContext';
import { useAuthContext } from '../hooks/useAuthContext';

export const Home = () => {
    const {note,dispatch}=useNoteContext();
    const {user}=useAuthContext()

    useEffect(()=>{
        const fetchNotes=async()=>{
            const response=await fetch('/api/note',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json=await response.json();
            if(response.ok){
                dispatch({type: 'GET_NOTE',payload: json})
            }
        }
        if(user)
            fetchNotes()
    },[dispatch,user])
    return (
        <div className=" flex justify-center flex-wrap flex-col md:flex-row h-full p-5 md:p-10 mt-12">
            <div className="w-full md:w-1/3">
                <Form/>
            </div>
            <div className="flex justify-start flex-wrap md:mt-12 w-full md:w-2/3">
                {note && note.map((n)=>(
                    <div className="" key={n._id}>
                        <Card key={n._id} note={n}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
