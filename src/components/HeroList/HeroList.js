import React from "react";
import Section from '../../ui/Section/Section';
// import classes from './HeroList.module.scss';

const HeroList = (props) => {
    console.log("HeroList.js", props.heroData);

    return (
        <Section>
            {props.heroData
                .map((heroItem) => (
                    <p key={heroItem.id}>{heroItem.name}</p>
                ))}
        </Section>
    )
}

export default HeroList;