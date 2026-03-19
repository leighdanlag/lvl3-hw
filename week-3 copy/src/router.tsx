import { createBrowserRouter, Navigate } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Dashboard from "./components/Dashboard";
import { Login } from "./pages/Login";
import { PublicLayout } from "./layouts/PublicLayout";
import { ProtectedLayout } from "./layouts/ProtectedLayout";

/** Homework
 * 1.
    * Navbar
    * Style Public Layout
*  2.
    * Protected Layout
    * Dashboard
*  3. Global State (Zustand)
    * Login / Signup store user info into 
    * global state and then consume username in dashboard   
 */

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "/login", Component: Login },
      { path: "/signup", Component: SignUp },
      { path: "/home", Component: Home },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
    ],
  },
  {
    Component: ProtectedLayout,
    children: [
      { path: "/dashboard", Component: Dashboard },
    ],
  },
]);
