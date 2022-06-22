import React from "react";
import Section from '../../ui/Section/Section';
import classes from './HeroList.module.scss';

const HeroList = (props) => {
    // console.log("HeroList.js", props.heroData);
    console.log("HeroList.js", props.filter);

    return (
        <Section className={classes['hero-list']}>
            {props.heroData
                .filter((heroItem) => heroItem.name.includes(props.filter) )
                .map((heroItem) => (
                    <p key={heroItem.id}>{heroItem.name}</p>
                ))}
        </Section>
    )
}

export default HeroList;