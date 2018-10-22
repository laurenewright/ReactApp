import React from 'react';

const Character = props => (
    <li className="character-wrap">
    <p src={props.url}></p>
    </li>
);

export default Character;