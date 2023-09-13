import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

export const useNoteContext = () => {
    const context=useContext(NoteContext)
    if(!context){
        throw Error('useNoteContext must be used inside an noteContextProvider')
    }
    return context
};
