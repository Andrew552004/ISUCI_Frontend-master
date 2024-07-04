//Contenedor para manejar rutas privadas
import { Navigate, Outlet } from "react-router-dom"

const PrivateContainer=()=>{
    const accesToken = false
    return !accesToken ? <Navigate to="login" replace={true}/>: <Outlet />;
};

export default PrivateContainer