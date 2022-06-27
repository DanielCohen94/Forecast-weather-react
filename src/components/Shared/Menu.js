import React from 'react';
import {Outlet, Link, NavLink} from "react-router-dom";
import back from '../../images/back.gif';

/**
 * Pages routing management
 * @returns {JSX.Element}
 * @constructor
 */
export default function Menu() {
    return (
        <>
            <nav className="navbar navbar-light bg-warning bg-opacity-25">
                <Link to="/forecast" className='navbar-brand'>
                    <img src={back} width="45" height="35" className="d-inline-block align-text-top" alt="weather"/>
                    My Weather Forecast
                </Link>
            </nav>
            <nav className="nav nav-pills">
                <div className="nav-item">
                    <NavLink
                        to="/forecast"
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                    >
                        Forecast
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink
                        to="/location"
                        className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')}
                    >
                        Location Editor
                    </NavLink>
                </div>
            </nav>
            <Outlet/>
        </>
    )
};