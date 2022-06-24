import React, { useState } from 'react';
import Main from './ui/Main/Main';
import Header from './ui/Header/Header';
import Search from './components/Search/Search';
import HeroList from './components/HeroList/HeroList';
import classes from './Home.module.scss';

function Home(props) {
    // Save stuff to state
    const [heroes, setHeroes] = useState(props.data); // Hero API feed
    const [searchText, setSearchText] = useState(''); // Search input field

    // Add entered tag to hero and update state
    const addTagToHero = (tag, id) => {
        const addHeroTag = [...heroes];
        addHeroTag.map((item) => {
            if (id !== item.id) return item;
            if (item.tags) {
                if (item.tags.includes(tag)) return false;
                return item.tags.push(tag);
            }
            return (item.tags = [tag]);
        });
        setHeroes(addHeroTag);
    };

    // Get props from seach component and update state
    const searchHandler = (input) => {
        setSearchText(input);
    };

    return (
        <Main className={classes.container}>
            <Header>
                <h1>SuperHero API</h1>
                <Search selected={searchText} onSearchInput={searchHandler} />
            </Header>
            <HeroList heroData={props.data} filter={searchText} addTagToHero={addTagToHero} />
        </Main>
    );
}

export default Home;
