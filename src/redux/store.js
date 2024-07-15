// Importa los reducers necesarios.
// Combina los reducers en un rootReducer.
// Configura la tienda de Redux con el rootReducer.
// Exporta la tienda configurada para ser usada en la aplicación.
// Permite que la app gestione el estado global de manera estructurada y escalable.

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthenticatorReducer from "./slices/authentication.slice"
import AppReducer from "./slices/app.slice"
import TeamReducer from"./slices/team.slice"

const rootReducer = combineReducers({
    team: TeamReducer,
    loggedUser: AuthenticatorReducer,
    app: AppReducer,

})

export const store = configureStore({
    reducer: rootReducer,
})
 