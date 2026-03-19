import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <nav className="flex gap-5 p-4 bg-gray-800 text-white">
            { isLoggedIn ? (
                <p onClick={logout} className="cursor-pointer">Logout</p>
            ) : (
                <>
                    <Link to="/login">Login</Link> 
                    <Link to="/signup">Signup</Link> 
                </>
            )
            }
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}