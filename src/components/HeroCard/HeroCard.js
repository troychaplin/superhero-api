import React from "react";
import Card from '../../ui/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
import classes from './HeroCard.module.scss';

const HeroCard = (props) => {
    const { name, biography, appearance, images } = props.hero;
    const { fullName, alignment, publisher } = biography;
    const { race } = appearance;
    const noData = 'No data available';

    console.log("HeroCard.js", props.hero);

    return (
        <Card className={classes["hero-card"]}>
            <div className={classes["image-wrapper"]}>
                <img src={images.sm} />
            </div>
            <div className={classes["content-wrapper"]}>
                <h2>{name}</h2>
                <ul>
                    <li><strong>Real Name:</strong> {fullName || noData}</li>
                    <li><strong>Race:</strong> {race || noData}</li>
                    <li><strong>Alignment:</strong> {alignment || noData}</li>
                    <li><strong>Publisher:</strong> {publisher || noData}</li>
                </ul>
            </div>
            <FontAwesomeIcon icon={faSuperpowers} size='2x' />
        </Card>
    )
}

export default HeroCard;