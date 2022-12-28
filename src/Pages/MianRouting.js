import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import Footer from './Footer';
import NavBar from './NavBar';
import SideNav from './SideNav';

const MianRouting = () => {
    return (
        <div>
            <NavBar />
            <SideNav />
            <BottomNav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MianRouting;