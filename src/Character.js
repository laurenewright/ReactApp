import React from 'react';

const Character = props => (
  <li className="profile">
    <p>
        <li>Name: {props.character.name || "Unknown"}</li>
        <li>Gender: {props.character.gender || "Unknown"}</li>
        <li>Culture: {props.character.culture || "Unknown"}</li>
        <li>Born: {props.character.born || "Unknown"}</li>
        <li>Titles: {props.character.titles || "Unknown"}</li>
        <li>Aliases: {props.character.aliases || "Unknown"}</li>
        <li>Father: {props.character.father || "Unknown"}</li>
        <li>Mother: {props.character.mother || "Unknown"}</li>
        <li>Spouse: {props.character.spouse || "Unknown"}</li>
        <li>Played By: {props.character.playedBy || "Unknown"}</li>
    </p>
  </li>
);

export default Character;