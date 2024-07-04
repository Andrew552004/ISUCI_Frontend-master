import { seterrorAction, setloadingAction, setsuccessAction } from "../redux/slices/app.slice"

export const handleApiResponses = (
    response, thunkApi
) => {
    if (response.statuscode !== 200 && !response.result) {
        thunkApi.dispatch (seterrorAction("Ha ocurrido un error"))
        return thunkApi.rejectWithValue("Ha ocurrido un error")
    } 
    thunkApi.dispatch(setsuccessAction())
    return response
}