
import { useAuthContext } from "./useAuthContext";
import { useNoteContext } from "./useNoteContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const {dispatch: noteDispatch}= useNoteContext()
    const logout = () => {
        //remove user from storage
        localStorage.removeItem("user");

        //dispatch logout action
        dispatch({ type: "LOGOUT" });
        noteDispatch({type: 'SET_NOTE',payload: null})
    };
    return {logout}
};
