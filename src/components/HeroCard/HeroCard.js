import React from "react";
import Button from "../../ui/Button/Button";
import Card from '../../ui/Card/Card';
import HeroPowers from "../HeroPowers/HeroPowers";
import { FirstLetterUpper } from '../../utils/Helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
import classes from './HeroCard.module.scss';

const HeroCard = (props) => {
    const { name, biography, appearance, images, powerstats } = props.hero;
    const { fullName, alignment, publisher } = biography;
    const { race } = appearance;
    const noData = 'No data available';

    return (
        <Card className={`${classes["herocard"]} ${classes["herocard--" + alignment]}`}>
            <div className={classes["herocard__image"]} style={{backgroundImage: `url('${images.sm}')`}} />

            <div className={classes["herocard__content"]}>
                <h2>{name}</h2>
                <ul>
                    <li><strong>Real Name:</strong> {fullName || noData}</li>
                    <li><strong>Race:</strong> {race || noData}</li>
                    <li><strong>Alignment:</strong> {FirstLetterUpper(alignment) || noData}</li>
                    <li><strong>Publisher:</strong> {publisher || noData}</li>
                </ul>
            </div>

            <Button type="button" className={classes.herocard__button}>
                <FontAwesomeIcon icon={faSuperpowers} size='2x' />
            </Button>
            

            <HeroPowers heroPowers={powerstats} />
        </Card>
    )
}

export default HeroCard;