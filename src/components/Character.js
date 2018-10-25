import React from 'react';
import Book from './Book';

const Character = props => (
  <li className="profile">
    <p>
        Name: {props.character.name || "Unknown"}
    </p>
    <p>
        Gender: {props.character.gender || "Unknown"}
    </p>
    <p>
        Culture: {props.character.culture || "Unknown"}
    </p>
    <p>
        Born: {props.character.born || "Unknown"}
    </p>
    <p>
        Titles: {props.character.titles || "Unknown"}
    </p>
    <p>
        Aliases: {props.character.aliases || "Unknown"}
    </p>
    <p>
        Father: {props.character.father || "Unknown"}
    </p>
    <p>
        Mother: {props.character.mother || "Unknown"}
    </p>
    <p>
        Spouse: {props.character.spouse || "Unknown"}
    </p>
    <p>
        Allegiances: {props.character.allegiances || "Unknown"}
    </p>
    <p>
        Books: {props.character.book || "Unknown"}
    </p>
    <p>
        Played By: {props.character.playedBy || "Unknown"}
    </p>
  </li>
);

export default Character;