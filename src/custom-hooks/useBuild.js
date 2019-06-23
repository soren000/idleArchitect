import React, { useContext } from 'react';
import AppContext from '../context/app-context';

const useBuild = ({ building }) => {

    const { wood, money, houses, setHouses } = useContext(AppContext);

    switch (building) {
        case 'house' : 
            return console.log(building);
        default: 
            console.log('some error occured when trying to build. no case was detected for what to build.')
    }
}

export { useBuild as default };