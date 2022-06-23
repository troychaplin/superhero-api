import React from "react";
import classes from './HeroPowers.module.scss';

const HeroPowers = (props) => {
    const { combat, durability, intelligence, power, speed, strength } = props.heroPowers;

    return (
        <div className={classes.herocard__overlay}>
            <ul className={classes.herocard__powers}>
                <li><span>{combat}</span>Combat</li>
                <li><span>{durability}</span>Combat</li>
                <li><span>{intelligence}</span>Combat</li>
                <li><span>{power}</span>Combat</li>
                <li><span>{speed}</span>Combat</li>
                <li><span>{strength}</span>Combat</li>
            </ul>
        </div>
    )
}

export default HeroPowers;