import React, { useContext } from 'react';
import logInPNG from './../resources/top-cyber-threats-social.png'
import { ContextData } from './SharedRoute';
const LogIn = () => {
    const { GoogleSignInCall } = useContext(ContextData)
    const HandleLogIn = () => {
        GoogleSignInCall()

    }
    return (
        <div className='flex flex-col justify-center items-center w-full pt-2 pb-56'>
            <img className='w-8/12' src={logInPNG} alt="" srcset="" />
            <h1 className='text-3xl font-bold p-3'>To access all the functionalities you must logIn</h1>
            <button onClick={HandleLogIn} className='bg-indigo-600 hover:bg-indigo-900 font-bold text-white py-4 px-6 rounded-md mt-6'>Easy login with Google</button>
        </div>
    );
};

export default LogIn;