import React from "react";
import Card from '../../ui/Card/Card';
import classes from './HeroCard.module.scss';

const HeroCard = (props) => {
    console.log("HeroCard.js", props.hero);

    return (
        <Card className={classes["hero-card"]}>
            <div className={classes["image-wrapper"]}>
                <img src={props.hero.images.sm} />
            </div>
            <div className={classes["content-wrapper"]}>
                <h2>{props.hero.name}</h2>
                <ul>
                    <li><strong>Real Name:</strong> {props.hero.biography.fullName}</li>
                    <li><strong>Race:</strong> {props.hero.appearance.race}</li>
                    <li><strong>Alignment:</strong> {props.hero.biography.alignment}</li>
                    <li><strong>Publisher:</strong> {props.hero.biography.publisher}</li>
                </ul>
            </div>
        </Card>
    )
}

export default HeroCard;