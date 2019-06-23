import React, { useContext } from 'react';
import AppContext from '../context/app-context';
// import useBuild from '../custom-hooks/useBuild';

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

    // const build = useBuild();

    return (
        <div className={`buildingContainer buildingContainer-${building.toLowerCase()}`}>
            {/* <button onClick={() => useBuild( { building: 'house' })}>Build</button> */}
            <p>{capitalizedBuildingName}: {buildingQuantity}</p>
        </div>
    )
};

export { BuildingContainer as default };