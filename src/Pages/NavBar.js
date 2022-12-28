import React from 'react';
import { Link } from 'react-router-dom';
import './../Native.css'
import logo from './../resources/Vector 1.png'

const NavBar = () => {
    const user = 'sami'
    return (
        <div className='top-0 left-0 right-0 bg-first flex justify-around items-center p-2'>
            <img src={logo} alt="" srcset="" />
            <h1 className='w-60 h-10 bg-white flex justify-around items-center'>Home</h1>
            <div className='flex justify-around items-center gap-5'>
                {
                    user.uid ? <img className='w-14 h-14 bg-slate-500 rounded-full' src="" alt="" srcset="" />
                        :
                        <Link className='font-bold text-teal-700'>LogIn</Link>
                }
                <div className='w-9 h-14 bg-slate-200 rounded-full'></div>

            </div>
        </div>
    );
};

export default NavBar;