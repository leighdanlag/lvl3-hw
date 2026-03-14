import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from 'react-router';

export function PublicLayout() {

    const { isLoggedIn } = useAuth();

    if (isLoggedIn) return <Navigate to="" replace/>;

    return(
        <div>
            <Outlet />
        </div>
    )
}