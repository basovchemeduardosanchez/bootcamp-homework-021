import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavItem from '../NavItem';
import './style.css';

function Header(){
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="./" >
                    Google Books Search
                </Link>
                <ul className="navbar-nav">
                    <NavItem routes={['/search', '/']} text="Search" />
                    <NavItem routes={['/saved']} text="Saved" />
                </ul>
            </nav>
        </header>
    );
}

export default withRouter( Header );