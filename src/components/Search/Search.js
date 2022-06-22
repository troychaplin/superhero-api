import React from 'react';
import classes from './Search.module.scss';

function Search(props) {
    // Capture the input and set as props
    const searchHandler = (event) => {
        props.onSearchInput(event.target.value);
    }

    return (
        <form className={classes.search}>
            <label htmlFor='search'>Search for a hero</label>
            <input id='search' type='text' onChange={searchHandler} autoComplete='name' placeholder='Search for a hero' />
        </form>
    );
}

export default Search;
