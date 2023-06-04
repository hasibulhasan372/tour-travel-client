import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <h3>Loading....</h3>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivateRoute;