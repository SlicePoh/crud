import React, { useEffect,  } from 'react'
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { useNoteContext } from '../hooks/useNoteContext';

export const Home = () => {
    const {note,dispatch}=useNoteContext();
    useEffect(()=>{
        const fetchNotes=async()=>{
            const response=await fetch('/api/note')
            const json=await response.json();
            if(response.ok){
                dispatch({type: 'SET_NOTE',payload: json})
            }
        }
        fetchNotes()
    },[dispatch])
    return (
        <div className=" flex min-h-screen p-10">
            <Form/>
            <div className="flex justify-start flex-wrap mt-10 w-4/6">
                {note && note.map((n)=>(
                    <div className="" key={n._id}>
                        <Card key={n._id} note={n}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
