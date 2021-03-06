import React from 'react';
import {Link} from 'react-router-dom';

export const Header = (props) => {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/tasks">Tasks</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};