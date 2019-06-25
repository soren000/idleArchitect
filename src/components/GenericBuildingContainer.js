import React, { useContext } from 'react';
import BuildingContainer from './GenericBuilding';
import AppContext from '../context/app-context';

const GenericBuildingContainer = () => {
    const { stateGenericBuildings } = useContext(AppContext);

    return (
        <div className="genericBuildingContainer">
            {Object.keys(stateGenericBuildings).map((building, index) => <BuildingContainer key={index} building={building} />)}
        </div>
    )
}

export { GenericBuildingContainer as default };