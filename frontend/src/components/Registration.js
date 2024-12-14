
import axios from 'axios';
import React, { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from 'react-router-dom'
function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('')
    const [loading, setLoading] = useState(false)
    const [IsloggedIn, setIsLoggedIn] = useState(false)

    // const notify = () => toast("Registration Successful");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();

        const payload = {
            name: userName,
            email: email,
            password: password
        }
        
        axios.post('http://localhost:3000/user/register', payload)
        .then((res) => {
            setLoading(false);
            toast.success("Registration Successful");
            // Store token in localStorage after successful registration
            localStorage.setItem('token', res.data.token);  // Assuming the backend returns a token
            // Update state
            setIsLoggedIn(true);
            navigate('/')

        })
        .catch((err) => {
            setLoading(false);
            toast.error("Registration Failed. Please try again.");
        });

    };

    return (
        <>

            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="w-full max-w-md p-8 bg-gray-400 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="userName" className="block text-sm font-medium text-gray-900">Name</label>
                            <input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  dark:bg-indigo-700 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  dark:bg-indigo-700 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full disabled:opacity-70 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            {loading ? 'Submitting..' : "Sign up"}
                        </button>
                    </form>
                </div>
                <ToastContainer/>
            </div>
        </>
    )
}

export default Registration