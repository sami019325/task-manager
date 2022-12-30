import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextData } from './SharedRoute';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(ContextData)
    const location = useLocation()

    if (loading) {
        return <div className='w-full bg-stone-200 '><progress className="progress w-56 m-auto "></progress></div>
    }
    if (user) { return children }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;