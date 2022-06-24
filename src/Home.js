import React, { useState, useEffect } from 'react';
import Main from './ui/Main/Main';
import Header from './ui/Header/Header';
import Search from './components/Search/Search';
import HeroList from './components/HeroList/HeroList';
import elTaco from "./data/el-taco.json";
import classes from './Home.module.scss';

function Home(props) {
    // Save stuff to state
    const [heroes, setHeroes] = useState(props.data); // Hero API feed
    const [finalHeroes, setFinalHeroes] = useState(heroes); // Hero API feed
    const [searchText, setSearchText] = useState(''); // Search input field
    
    // 
    useEffect(() => {
        setFinalHeroes([...heroes, elTaco]);
    }, []);

    // Add entered tag to hero and update state
    const addTagToHero = (tag, id) => {
        const addHeroTag = [...finalHeroes];
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
    
    // Add new tags to state
    const addTagToList = (tag) => {
        console.log(tag);
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
            <HeroList heroData={finalHeroes} filter={searchText} addTagToHero={addTagToHero} addTagToList={addTagToList} />
        </Main>
    );
}

export default Home;
