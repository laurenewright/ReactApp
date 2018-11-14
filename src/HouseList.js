import React from 'react';
import House from './House';

const HouseList = props => {
    console.log(this)
    return (
        <ul className="character-list">
            {props.list.map(h => <House house={h}/>)}
        </ul>
    );
}

export default HouseList;