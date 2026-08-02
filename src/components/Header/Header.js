import React from 'react';
import './styles.css';

const Header = ({ appName }) => {
    return (
        <header>
            <h1>{appName}</h1>
        </header>
    );
}

export default Header;