import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeamService } from "../services/team.service";
import { setloadingAction } from "./app.slice";
import { handleApiResponses } from "../../utils/apiresponses";

const sliceName = 'team';
const initialState = {
    error:false,
    done:false,
    teamsData:[
        
    ],
    selectedTeam: {
            id: "",
            teamMembers: [
              {
                id: "",
                userName: "",
                userLastName: "",
                userEmail: "",
                userPassword: "",
                userPasswordCofirmation: "",
                userRole:0,
                cedula: "",
                gender: "",
                speciality: "",
                contextura: "",
                accumulatedTime: "",
                equipoId: "",
                age:0,
                height:0,
                weight:0,
                nationality: "",
                experience: "",
                isActive:true
              }
            ]
    }
}

const getAll = createAsyncThunk(
    `${sliceName}/getAll`,
    async(data, thunkApi) => {
        const service = new TeamService()

        thunkApi.dispatch(setloadingAction());
        const response = await service.getAll();
        return handleApiResponses(response, thunkApi);
    }   
)

const getOne = createAsyncThunk(
    `${sliceName}/getOne`,
    async(id, thunkApi) => {
        const service = new TeamService()

        thunkApi.dispatch(setloadingAction());
        const response = await service.getOne(id);
        return handleApiResponses(response, thunkApi);
    }   
)

const register = createAsyncThunk(
    `${sliceName}/register`,
    async(data, thunkApi) => {
        const service = new TeamService()

        thunkApi.dispatch(setloadingAction());
        const response = await service.register(data);
        return handleApiResponses(response, thunkApi);
    }   
)

const deleteAction = createAsyncThunk(
    `${sliceName}/deleteAction`,
    async(id, thunkApi) => {
        const service = new TeamService()

        thunkApi.dispatch(setloadingAction());
        const response = await service.deleteAction(id);
        return handleApiResponses(response, thunkApi);
    }   
)

const update = createAsyncThunk(
    `${sliceName}/update`,
    async({id,data},thunkApi) => {
        const service = new TeamService()

        thunkApi.dispatch(setloadingAction());
        const response = await service.update(id, data);
        return handleApiResponses(response, thunkApi);
    }   
)

const teamReducer = createSlice({
    name: sliceName,
    initialState,
    reducers:{
    },
    extraReducers:(builder) => {
        builder
        .addCase(getAll.pending,(state)=>{
            state.done = false;
            state.error = false;
            state.teamsData = initialState.teamsData; 
        })
        .addCase(getAll.fulfilled,(state, action)=>{
            state.done = true;
            state.error = false;
            state.teamsData = action.payload.result; 
        })  
        .addCase(getAll.rejected,(state)=>{
            state.done = false;
            state.error = true;
            state.teamsData = initialState.teamsData; 
        })  

        .addCase(getOne.pending,(state)=>{
            state.done = false;
            state.error = false;
            state.selectedTeam = initialState.selectedTeam; 
        })
        .addCase(getOne.fulfilled,(state, action)=>{
            state.done = true;
            state.error = false;
            state.selectedTeam = action.payload.result; 
        })  
        .addCase(getOne.rejected,(state)=>{
            state.done = false;
            state.error = true;
            state.selectedTeam = initialState.selectedTeam; 
        }) 
        
        .addCase(register.pending,(state)=>{
            state.done = false;
            state.error = false;
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.done = true;
            state.error = false;
            state.teamsData = [...state.teamsData,action.payload.result]
        })  
        .addCase(register.rejected,(state)=>{
            state.done = false;
            state.error = true;
        }) 

        .addCase(deleteAction.pending,(state)=>{
            state.done = false;
            state.error = false;
        })
        .addCase(deleteAction.fulfilled,(state)=>{
            state.done = true;
            state.error = false;
        })  
        .addCase(deleteAction.rejected,(state)=>{
            state.done = false;
            state.error = true;
        }) 

        .addCase(update.pending,(state)=>{
            state.done = false;
            state.error = false;
        })
        .addCase(update.fulfilled,(state)=>{
            state.done = true;
            state.error = false;
        })  
        .addCase(update.rejected,(state)=>{
            state.done = false;
            state.error = true;
        }) 

    }
})

export {getAll,getOne,register,deleteAction,update};
export default teamReducer.reducer;