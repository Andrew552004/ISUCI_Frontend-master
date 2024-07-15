//Contenedor para manejar rutas privadas
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"

const PrivateContainer=()=>{
    const authselector = useSelector(state => state.loggedUser)
    return !authselector.userData.id ? <Navigate to="landing" replace={true}/>: <Outlet />;
};

export default PrivateContainer