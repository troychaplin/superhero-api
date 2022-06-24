import React from 'react';
import Section from '../../ui/Section/Section';
import HeroCard from '../HeroCard/HeroCard';
import classes from './HeroList.module.scss';

const HeroList = (props) => {
    const addTagHandler = (tag) => {
        props.onAddTag(tag);
	};

    return (
        <Section className={classes.herolist}>
            {props.heroData
                .filter((heroItem) => heroItem.name.toLowerCase().includes(props.filter.toLowerCase()))
                .map((heroItem) => (
                    <HeroCard key={heroItem.id} hero={heroItem} onAddTag={addTagHandler} />
                ))}
        </Section>
    );
};

export default HeroList;
