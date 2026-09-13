import React, { useState } from 'react';
import { Header as StyledHeader, Title, SearchForm } from './styles';


function Header({ appName, setSearchTerm }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(inputValue);
        
    };
    return (
        <StyledHeader>
            <Title>{appName}</Title>
    <SearchForm onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for music..."
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
/>
                <button type="submit">Search</button>
            </SearchForm>
        </StyledHeader>

    );
}

export default Header;