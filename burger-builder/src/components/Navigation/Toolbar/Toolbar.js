import React from 'react';
import './Toolbar.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className="Toolbar">
        {/* <div>Menu</div> */}
        <DrawerToggle clicked={props.drawerToggleClicked } />
        <div className="Logo">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
        {/* <NavigationItems /> */}
    </header>

);

export default toolbar;