import React, { useState } from 'react';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';
import HeroPowers from '../HeroPowers/HeroPowers';
import { FirstLetterUpper } from '../../utils/Helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
        props.addTagToList(enteredTag);
        setEnteredTag("");
    }
    
    return (
        <Card className={`${classes['herocard']} ${classes['herocard--' + alignment]}`}>
            <div className={classes['herocard__image']} style={{ backgroundImage: `url('${images.sm}')` }} />

            <div className={classes['herocard__content']}>
                <h2>{name}</h2>
                <ul>
                    <li>
                        <strong>Real Name: </strong>{fullName || noData}
                    </li>
                    <li>
                        <strong>Race: </strong>{race || noData}
                    </li>
                    <li>
                        <strong>Alignment: </strong>{FirstLetterUpper(alignment) || noData}
                    </li>
                    <li>
                        <strong>Publisher: </strong>{publisher || noData}
                    </li>
                </ul>
                <div className={classes.herocard__taglist}>
                {tags?.map((item, index) => (
                    <span className={classes.herocard__tag} key={index}>
                        {item}
                    </span>
                ))}
                </div>
                <form className={classes.herocard__tagform} onSubmit={addTagHandler}>
                    <input
                        type='text'
                        aria-label={"Tag " + name}
                        aria-required='true'
                        name='Hero Tag'
                        autoComplete='name'
                        placeholder={"Tag " + name}
                    />
                    <Button type="submit">
                        <FontAwesomeIcon icon={faPlus} size='1x' />
                    </Button>
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
