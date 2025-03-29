import {createContext , useContext,useReducer} from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext =createContext()


const initialState = {
    title: '',
    text: '',
    notes: [] ,
    archive:[],
    bin:[],
    important:[],
   
  }

const NotesProvider =({children}) =>{
    const [{ title, text, notes , archive ,bin , important}, notesDispatch] = useReducer(notesReducer, initialState)
    return (
        <NotesContext.Provider value ={{title, text, notes , archive ,bin, important,notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes =() => useContext(NotesContext)

export {NotesProvider ,useNotes}