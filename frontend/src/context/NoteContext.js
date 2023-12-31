import React, { createContext, useReducer } from "react";

export const NoteContext = createContext();

export const noteReducer = (state, action) => {
  switch (action.type) {
    case "GET_NOTE":
      return {
        note: action.payload,
      };
    case "CREATE_NOTE":
      return {
        note: [action.payload, ...state.note],
      };
    case "DELETE_NOTE":
      return {
        note: state.note.filter((w) => w._id !== action.payload._id),
      };
    case "UPDATE_NOTE":
      return {
        note: [
          action.payload,
          ...state.note.filter((w) => w._id !== action.payload._id),
        ],
      };

    default:
      return state;
  }
};

export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, {
    note: null,
  });

  return (
    <NoteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
