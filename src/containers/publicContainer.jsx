//para manejar rutas públicas
import { Navigate, Outlet } from "react-router-dom"

const PublicContainer=()=>{
    const accesToken = true
    return !accesToken ? <Navigate to="login" replace={true}/>: <Outlet />;
};

export default PublicContainer