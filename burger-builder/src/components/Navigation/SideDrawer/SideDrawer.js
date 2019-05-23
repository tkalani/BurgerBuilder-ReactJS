import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachedClasses=["SideDrawer", "Close"];
    if(props.open)
        attachedClasses = ["SideDrawer", "Open"];
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="Logo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;