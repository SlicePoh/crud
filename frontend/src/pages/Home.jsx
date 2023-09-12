import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card';

export const Home = () => {
    const [notes,setNotes]=useState(null);
    useEffect(()=>{
        const fetchNotes=async()=>{
            const response=await fetch('/api/note')
            const json=await response.json();
            if(response.ok){
                setNotes(json);
            }
        }
        fetchNotes()
    },[])
    return (
        <div className="  h-screen p-10">
            <div className="">
                {notes && notes.map((note)=>(
                    <div className="" key={note._id}>
                        <Card key={note._id} note={note}/>
                    </div>
                ))}
            
            </div>
        </div>
    )
}
