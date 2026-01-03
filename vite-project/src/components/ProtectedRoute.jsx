import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Children } from "react";

const ProtectedRoute = ({ Children, allowedRole })=>{
    const{ isAuth, role} = useContext(AuthContext);

    if(!isAuth)
        return <Navigate to="/"/>;
    if(role !==allowedRole) return <Navigate to="/"/>;

    return Children;
};
export default ProtectedRoute;