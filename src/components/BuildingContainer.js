import React, { useContext } from 'react';

import AppContext from '../context/app-context';

const allRequirements = {
    house: {
        wood: 100,
        money: 250
    }
}

const BuildingContainer = ({ building }) => {
    const capitalizedBuildingName = building.charAt(0).toUpperCase() + building.slice(1);
    const context = useContext(AppContext);
    const buildingQuantity = context[building.toLowerCase()];
    const buildFunction = context[`set${capitalizedBuildingName}`];
    const { wood: woodOwned, money: moneyOwned, setError } = context;

    const build = () => {

        const { wood: woodNeeded, money: moneyNeeded } = allRequirements[building];
        
        if (moneyNeeded > moneyOwned && woodNeeded > woodOwned) {
            return setError(`You need ${moneyNeeded-moneyOwned} money and ${woodNeeded-woodOwned} wood`)
        }
        
        buildFunction(buildingQuantity + 1);
    }

    return (
        <div className={`buildingContainer buildingContainer-${building.toLowerCase()}`}>
            <button onClick={() => build()}>Build</button>
            <p>{capitalizedBuildingName}: {buildingQuantity}</p>
        </div>
    )
};

export { BuildingContainer as default };