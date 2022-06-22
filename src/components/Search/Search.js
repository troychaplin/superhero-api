import React from 'react';
import classes from './Search.module.scss';

function Search() {
    return (
        <form className={classes.search}>
            <label htmlFor='search'>Search for a hero</label>
            <input id='search' type='text' autoComplete='name' placeholder='Search for a hero' />
        </form>
    );
}

export default Search;
