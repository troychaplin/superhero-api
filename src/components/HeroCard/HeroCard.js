import React from "react";
import Card from '../../ui/Card/Card';
import classes from './HeroCard.module.scss';

const HeroCard = (props) => {
    console.log("HeroCard.js", props.hero);

    return (
        <Card className={classes["hero-card"]}>
            <h2>{props.hero.name}</h2>
        </Card>
    )
}

export default HeroCard;