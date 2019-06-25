import React, { useContext } from 'react';
import AppContext from '../context/app-context';
// import useBuild from '../custom-hooks/useBuild';
import buildCosts from '../objects/buildCosts';

const BuildingContainer = ({ building }) => {
    const capitalizedBuildingName = building.charAt(0).toUpperCase() + building.slice(1);
    const { stateGenericBuildings, dispatchGenericBuildings, stateResources, dispatchError } = useContext(AppContext);
    const cost = buildCosts[building];

    const build = async () => {
        if (!Object.keys(cost).every(costMaterial => cost[costMaterial] < stateResources[costMaterial]) ) {
            return dispatchError({type: "ADD_ERROR", error: 'Not enough materials.'})
        }

        dispatchGenericBuildings({type: `BUILD_${building.toUpperCase()}`});
    }

    return (
        <div className={`buildingContainer buildingContainer-${building.toLowerCase()}`}>
            <button
                className="buildingButton"
                onClick={() => build()}>Build</button>

            <p>{capitalizedBuildingName}: {stateGenericBuildings[building]}</p>
        </div>
    )
};

export { BuildingContainer as default };