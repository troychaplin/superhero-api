import React from 'react';
import FetchData from './utils/FetchData';
import FetchError from './components/FetchError/FetchError';
import FetchLoading from './components/FetchLoading/FetchLoading';
import Main from './ui/Main/Main';
import Header from './ui/Header/Header';
import Search from './components/Search/Search';
import HeroList from './components/HeroList/HeroList';
import classes from './App.module.scss';

function App() {
    // Get vars from FetchData and check for errors / availability of feed
    const { data, isLoading, isError } = FetchData();
    if (isError) return <FetchError />;
    if (isLoading) return <FetchLoading />;

    return (
        <Main className={classes.container}>
            <Header>
                <h1>SuperHero API</h1>
                <Search />
            </Header>
            <HeroList heroData={data}/>
        </Main>
    );
}

export default App;
