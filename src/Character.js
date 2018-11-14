import React from 'react';

//format the character data

const Character = props => (
  <li className="profile">
    <p>
        <li>Name: {props.character.name || "Unknown"}</li>
        <li>Culture: {props.character.culture || "Unknown"}</li>
        <li>Aliases: {props.character.aliases || "Unknown"}</li>
        <li>Played By: {props.character.playedBy || "Unknown"}</li>
    </p>
  </li>
);

export default Character;