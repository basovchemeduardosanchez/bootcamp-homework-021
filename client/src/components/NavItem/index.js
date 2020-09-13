import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css'

function NavItem( props ){
    // This will allow us to listen to the page location and change the active
    // NavItem whenever the location changes
    const location = useLocation();

    return (
        // Add the active class if the current addres path is contained in our routes array 
        <li className={`nav-item ${props.routes.includes( location.pathname ) ? 'active' : ''}`}>
            <Link className="nav-link" to={props.routes[0]} >
                {props.text}
            </Link>
        </li>
    );
}

export default NavItem;