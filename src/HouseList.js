import React from 'react';
import House from './House';

//map through the house data array

const HouseList = props => {
    console.log(this)
    return (
        <ul className="character-list">
            {props.list.map(h => <House house={h}/>)}
        </ul>
    );
}

export default HouseList;