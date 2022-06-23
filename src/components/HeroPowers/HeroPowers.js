import React from "react";
import Button from "../../ui/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import classes from './HeroPowers.module.scss';

const HeroPowers = (props) => {
    const { combat, durability, intelligence, power, speed, strength } = props.heroPowers;
    console.log(props.alignment);
    return (
        <div className={`${classes.herocard__overlay} ${classes["herocard__overlay--" + props.alignment]}`}>
            <Button className={classes.herocard__close} type="button">
                <FontAwesomeIcon icon={faClose} size="lg" />
            </Button>

            <ul className={classes.herocard__powers}>
                <li><span>{combat}</span>Combat</li>
                <li><span>{durability}</span>Durability</li>
                <li><span>{intelligence}</span>Intelligence</li>
                <li><span>{power}</span>Power</li>
                <li><span>{speed}</span>Speed</li>
                <li><span>{strength}</span>Strength</li>
            </ul>
        </div>
    )
}

export default HeroPowers;