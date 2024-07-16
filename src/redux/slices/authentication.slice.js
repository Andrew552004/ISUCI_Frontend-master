// define un slice de Redux para la autenticación de usuarios
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { seterrorAction, setloadingAction } from "./app.slice";
import { handleApiResponses } from "../../utils/apiresponses";
import { AuthService } from "../services/authentication.service";

const sliceName = 'auth';
const initialState = {
    error:false,
    done:false,
    token: '',
    userData:{
        userName: "",
        userLastName: "",
        userEmail: "",
        userPassword: "",
        userPasswordCofirmation: "",
        userRole:"",
        id:""
    },
    role:'',
}

const login = createAsyncThunk(
    `${sliceName}/login`,
    async(data, thunkApi) => {
        const service = new AuthService()

        thunkApi.dispatch(setloadingAction());
        const response = await service.login(data);
        return handleApiResponses(response, thunkApi);
    } 
)

const register = createAsyncThunk(
    `${sliceName}/register`,
    async(data, thunkApi) => {
        const service = new AuthService()

        thunkApi.dispatch(setloadingAction());
        const response = await service.register(data);
        return handleApiResponses(response, thunkApi)
    } 
)

const authenticatorReducer = createSlice({
    name: sliceName,
    initialState,
    reducers:{
        resetuser:(state)=>{
            state.userData=initialState.userData
        }

    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) =>{
            state.done = false;
            state.error = false;
            state.role = initialState.role;
            state.userData = initialState.userData;
        })
        .addCase(register.fulfilled, (state, action) =>{
            state.done = true;
            state.error = false;
            state.role = action.payload.result.user.role;
            state.userData = action.payload.result.user;
        })
        .addCase(register.rejected, (state) =>{
            state.done = false;
            state.error = true;
            state.role = initialState.role;
            state.userData = initialState.userData;
        })

        .addCase(login.pending, (state) =>{
            state.done = false;
            state.error = false;;
            state.role = initialState.role;
            state.userData = initialState.userData;
        })
        .addCase(login.fulfilled, (state, action) =>{
            state.done = true;
            state.error = false;
            state.role = action.payload.result.role;
            state.userData = action.payload.result.userData;
        })
        .addCase(login.rejected, (state) =>{
            state.done = false;
            state.error = true;
            state.role = initialState.role;
            state.userData = initialState.userData;
        })
    }
})

export {register, login};
export const{resetuser}=authenticatorReducer.actions;
export default authenticatorReducer.reducer;