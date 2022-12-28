import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import Footer from './Footer';
import NavBar from './NavBar';
import SideNav from './SideNav';

const MianRouting = () => {
    return (
        <div className='w-full h-full'>
            <NavBar />
            <div className='flex gap-5'>
                <SideNav />
                <Outlet />
            </div>
            <BottomNav />
            <Footer />
        </div>
    );
};

export default MianRouting;