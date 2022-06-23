import React from "react";
import classes from './HeroPowers.module.scss';

const HeroPowers = (props) => {
    console.log(props.heroPowers);

    return (
        <div className={classes.herocard__overlay}>
            <ul>
                <li><span>{props.heroPowers.combat}</span>Combat</li>
            </ul>
        </div>
    )
}

export default HeroPowers;