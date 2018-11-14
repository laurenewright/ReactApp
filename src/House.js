import React from 'react';

//format the book data

const House = props => (
  <li className="profile">
    <p>
        <li>Name: {props.house.name || "Unknown"}</li>
        <li>Region: {props.house.region || "Unknown"}</li>
        <li>Coat of Arms: {props.house.coatOfArms || "Unknown"}</li>
        <li>Words: {props.house.words || "Unknown"}</li>
        <li>Titles: {props.house.titles || "Unknown"}</li>
        <li>Seats: {props.house.seats || "Unknown"}</li>
    </p>
  </li>
);

export default House;