import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './../Native.css'
import logo from './../resources/Vector 1.png'
import { ContextData } from './SharedRoute';
import './../Native.css'
const NavBar = () => {
    // const user = 'sami'
    const { user, loading, SignOutUser } = useContext(ContextData)
    const handleSignOut = () => {
        SignOutUser()
    }
    if (!loading) {
        return (
            <div className='top-0 left-0 right-0 w-full bg-first flex justify-between items-center p-2'>
                <img src={logo} alt="" srcset="" />
                {/* <h1 className='w-60 h-10 bg-white flex justify-around items-center'>Home</h1> */}
                <div className='flex justify-around items-center gap-5'>
                    {
                        user?.uid ?
                            <div className='flex gap-3 items-center justify-center'>
                                <img className='w-14 h-14 bg-slate-500 rounded-full' src={user?.photoURL} alt="" srcset="" />
                                <button onClick={handleSignOut} to='/login' className='font-bold text-slate-700 hover:bg-gray-400 px-3 py-2 rounded-md'>Log Out</button>
                            </div>

                            :
                            <Link to='/login' className='font-bold text-teal-700'>LogIn</Link>
                    }

                    <div className='w-9 h-14 bg-slate-200 rounded-full'></div>

                </div>
            </div>
        );
    }
    else {
        return (
            <div className='top-0 left-0 right-0 w-full bg-first flex justify-between items-center p-2'>
                <img src={logo} alt="" srcset="" />
                <div className='flex justify-around items-center gap-5'>
                    <div className='loader w-14 h-14'></div>
                    <div className='w-9 h-14 bg-slate-200 rounded-full'></div>

                </div>
            </div>
        )
    }
};

export default NavBar;