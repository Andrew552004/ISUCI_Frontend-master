//Para cuando se manejen roles
import { Navigate, Outlet } from "react-router-dom"

const AdminContainer=()=>{
    const role = user.role
    return  role !== "Admin"? <Navigate to="home" replace={true}/>: <Outlet />;
};

export default AdminContainer