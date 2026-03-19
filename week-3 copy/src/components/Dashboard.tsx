import React from 'react'
import { useAuth } from "../context/AuthContext"

function Dashboard() {
  const { user } = useAuth();
  return (
    <div className='flex flex-col bg-white rounded-lg shadow-md min-h-screen text-black justify-center items-center'>
        <h1>Hello, {user} </h1>
    </div>
  )
}

export default Dashboard;