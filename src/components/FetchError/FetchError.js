import React from 'react';
import Main from '../../ui/Main/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import classes from './FetchError.module.scss';

function FetchError() {
    return (
        <Main className={classes.container}>
            <FontAwesomeIcon icon={faQuestion} size='4x' />
            <FontAwesomeIcon icon={faQuestion} size='10x' />
            <FontAwesomeIcon icon={faQuestion} size='4x' />
            <p>
                Gee willikers Batman, there has been an error loading the SuperHero API feed.
                <br />
                This must be the handy work of the Riddler.
            </p>
        </Main>
    );
}

export default FetchError;
