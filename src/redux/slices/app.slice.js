// maneja el estado relacionado con la carga, errores, y finalización de operaciones en la app.
import { createSlice } from "@reduxjs/toolkit";

const sliceName = 'app';
const initialState = {
    loading: false,
    error: '',
    done: false,
}

export const appSlice = createSlice({
    name: sliceName,
    initialState,
    reducers:{
        setsuccessAction: (state, _action)=>{
            state.loading = initialState.loading 
            state.done = initialState.done 
            state.error = initialState.error 
        },
        seterrorAction: (state, action)=>{
            state.loading = initialState.loading 
            state.done = false
            state.error = action.payload
        },
        setloadingAction: (state, _action)=>{
            state.loading = true
            state.done = initialState.done 
            state.error = initialState.error
        }      
    },
})
export const {setsuccessAction, seterrorAction, setloadingAction} = appSlice.actions;
export default appSlice.reducer;