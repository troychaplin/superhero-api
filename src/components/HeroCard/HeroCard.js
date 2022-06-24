import React, { useState } from 'react';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';
import HeroPowers from '../HeroPowers/HeroPowers';
import { FirstLetterUpper } from '../../utils/Helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import classes from './HeroCard.module.scss';

const HeroCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [enteredTag, setEnteredTag] = useState("");

    const { id, name, biography, appearance, images, powerstats, tags } = props.hero;
    const { fullName, alignment, publisher } = biography;
    const { race } = appearance;
    const noData = 'No data available';

    const addTagHandler = (event) => {
        event.preventDefault();
        props.addTagToHero(enteredTag, id);
        setEnteredTag("");
    }

    return (
        <Card className={`${classes['herocard']} ${classes['herocard--' + alignment]}`}>
            <div className={classes['herocard__image']} style={{ backgroundImage: `url('${images.sm}')` }} />

            <div className={classes['herocard__content']}>
                <h2>{name}</h2>
                <ul>
                    <li>
                        <strong>Real Name:</strong> {fullName || noData}
                    </li>
                    <li>
                        <strong>Race:</strong> {race || noData}
                    </li>
                    <li>
                        <strong>Alignment:</strong> {FirstLetterUpper(alignment) || noData}
                    </li>
                    <li>
                        <strong>Publisher:</strong> {publisher || noData}
                    </li>
                    <li>
                        <strong>Tags:</strong> {tags?.map((item, index) => (
                            <span className={classes.tagItem} key={index}>
                                {item}
                            </span>
                        )) || noData}
                    </li>
                </ul>
                <form onSubmit={addTagHandler}>
                    <input
                        type="text"
                        value={enteredTag}
                        onChange={(event) => setEnteredTag(event.target.value)}
                    />
                    <Button type="submit">Add Tag</Button>
                </form>
            </div>

            <Button type='button' className={classes.herocard__button} onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon={faSuperpowers} size='2x' />
            </Button>

            {isOpen && (
                <HeroPowers heroPowers={powerstats} alignment={alignment} onClosePowers={() => setIsOpen(false)} />
            )}
        </Card>
    );
};

export default HeroCard;
