import React from 'react';

const Card = (props) => {
    return <article className={props.className}>{props.children}</article>;
};

export default Card;
