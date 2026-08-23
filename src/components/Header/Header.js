import React, { useState } from 'react';
import './styles.css';

function Header({ appName, setSearchTerm }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(inputValue);
        
    };
    return (
        <header>
            <h1>{appName}</h1>
    <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for music..."
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </header>

    );
}

export default Header;