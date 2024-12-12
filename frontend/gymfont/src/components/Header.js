import React from 'react'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        // Check if the user is logged in
        const token = localStorage.getItem('token');
        console.log("token", token)
        setIsLoggedIn(!!token);
    }, []);
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        console.log("token")
        setIsLoggedIn(false);
        navigate('/')
        toast.success("user logged out")
        
    }

    return (
        <div className="bg-gray-800 shadow-lg rounded-md h-12 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
    <div className="flex items-center space-x-8">
        <Link 
            to="/" 
            className="text-white font-medium hover:text-blue-500 transition duration-300 ease-in-out"
        >
            Home
        </Link>
        {!isLoggedIn && (
            <>
                    <Link
                        to="/login"
                        className="text-white font-medium hover:text-blue-500 transition duration-300 ease-in-out"
                    >
                        Login
                    </Link>
               
       
        <Link 
            to="/register" 
            className="text-white font-medium hover:text-blue-500 transition duration-300 ease-in-out"
        >
            Register
        </Link>
        </>
         )}
          <Link 
            to="/profile" 
            className="text-white font-medium hover:text-blue-500 transition duration-300 ease-in-out"
        >
            Reviews
        </Link>
        
    </div>
    
    {isLoggedIn && (
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
                >
                    Log Out
                </button>
            )}
            <ToastContainer/>
</div>

    )
}
export default Header
