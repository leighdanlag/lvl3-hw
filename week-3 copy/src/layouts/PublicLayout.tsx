import { Navbar } from "../components/Navbar";
import { Outlet } from 'react-router';


export function PublicLayout() {

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}