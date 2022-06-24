import React, { useState } from 'react';
import Main from './ui/Main/Main';
import Header from './ui/Header/Header';
import Search from './components/Search/Search';
import HeroList from './components/HeroList/HeroList';
import classes from './Home.module.scss';

function Home(props) {
    // Save stuff to state
    const [searchText, setSearchText] = useState(''); // Search input field
    const [updateTags, setUpdateTags] = useState([]);
    const [heroes, setHeroes] = useState(props.data);

    const addTagToHero = (tag, id) => {
        const result = [...heroes];
        result.map((item) => {
            if (id !== item.id) return item;
            if (item.tags) {
                if (item.tags.includes(tag)) return false;
                return item.tags.push(tag);
            }
            return (item.tags = [tag]);
        });
        setHeroes(result);
    };

    const addTagHandler = (updatedHero) => {
        setUpdateTags([...updateTags, updatedHero.enteredTag]);
    }

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
            <HeroList heroData={props.data} filter={searchText} onAddTag={addTagHandler} addTagToHero={addTagToHero} />
        </Main>
    );
}

export default Home;
