import React from "react";
import Section from '../../ui/Section/Section';
import HeroCard from '../HeroCard/HeroCard';
import classes from './HeroList.module.scss';

const HeroList = (props) => {
    return (
        <Section className={classes['hero-list']}>
            {props.heroData
                .filter((heroItem) => heroItem.name.includes(props.filter) )
                .map((heroItem) => (
                    // <p key={heroItem.id}>{heroItem.name}</p>
                    <HeroCard key={heroItem.id} hero={heroItem} />
                ))}
        </Section>
    )
}

export default HeroList;