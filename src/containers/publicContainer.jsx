//para manejar rutas públicas
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"

const PublicContainer=()=>{
    const authselector = useSelector(state => state.loggedUser)
    console.log(authselector.userData.id)
    return authselector.userData.id ? <Navigate to="home" replace={true}/>: <Outlet />;

};
export default PublicContainer