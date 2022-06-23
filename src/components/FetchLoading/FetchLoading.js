import React from 'react';
import Main from '../../ui/Main/Main';
import classes from './FetchLoading.module.scss';

function FetchLoading() {
    return (
        <Main className={classes.container}>
            <div className={classes.loading}></div>
            <p>Loading...</p>
        </Main>
    );
}

export default FetchLoading;
