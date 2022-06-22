import React from 'react';
import FetchData from './utils/FetchData';
import FetchError from './components/FetchError/FetchError';
import FetchLoading from './components/FetchLoading/FetchLoading';
import Main from './ui/Main/Main';
import Search from './components/Search/Search';
import classes from './App.module.scss';

function App() {
    // Get vars from FetchData and check for errors / availability of feed
    const { data, isLoading, isError } = FetchData();
    if (isError) return <FetchError />;
    if (isLoading) return <FetchLoading />;

    console.log(data);

    return <Main className={classes.container}>
        <h1>SuperHero API</h1>
        <Search />
    </Main>;
}

export default App;
