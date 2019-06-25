import React, { useState, useEffect, useReducer } from 'react';
import ReactTooltip from 'react-tooltip';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import AppContext from './context/app-context';
import useInterval from './custom-hooks/useInterval';
import ButtonMenu from './components/ButtonMenu';
import Resource from './components/Resource';
import GenericBuilding from './components/GenericBuilding';
import GenericBuildingContainer from './components/GenericBuildingContainer';
import HUDTabContainer from './components/HUDTabContainer';

import resourcesReducer from './reducers/resourcesReducer';
import metaReducer from './reducers/metaReducer';
import importsReducer from './reducers/importsReducer';
import errorReducer from './reducers/errorReducer';
import genericBuildingsReducer from './reducers/genericBuildingsReducer';
import {
    stateResourcesDefault,
    stateImportsDefault,
    stateGenericBuildingsDefault,
    stateMetaDefault,
    stateErrorDefault
} from './objects/stateDefaults';

import './styles/main.scss';




const App = () => {
    const resourcesStorage = JSON.parse(localStorage.getItem('resources')) || stateResourcesDefault;
    const metaStorage = JSON.parse(localStorage.getItem('meta')) || stateMetaDefault;
    const genericBuildingsStorage = JSON.parse(localStorage.getItem('genericBuildings')) || stateGenericBuildingsDefault;
    const importsStorage = JSON.parse(localStorage.getItem('imports')) || stateImportsDefault;
    const errorStorage = localStorage.getItem('error') || stateErrorDefault;

    const [stateResources, dispatchResources] = useReducer(resourcesReducer, resourcesStorage);
    const [stateMeta, dispatchMeta] = useReducer(metaReducer, metaStorage);
    const [stateGenericBuildings, dispatchGenericBuildings] = useReducer(genericBuildingsReducer, genericBuildingsStorage);
    const [stateImports, dispatchImports] = useReducer(importsReducer, importsStorage);
    const [stateError, dispatchError] = useReducer(errorReducer, errorStorage);


    useInterval(() => {
        dispatchResources({ type: "MONEY", imports: stateImports });
    }, stateMeta.tickRate);


    useEffect(() => {
        localStorage.setItem('resources', JSON.stringify(stateResources));
    }, [stateResources]);

    useEffect(() => {
        localStorage.setItem('meta', JSON.stringify(stateMeta));
    }, [stateMeta]);

    useEffect(() => {
        localStorage.setItem('genericBuildings', JSON.stringify(stateGenericBuildings));
    }, [stateGenericBuildings]);

    useEffect(() => {
        localStorage.setItem('imports', JSON.stringify(stateImports));
    }, [stateImports]);

    useEffect(() => {
        localStorage.setItem('error', stateError);
        setTimeout(() => {
            dispatchError({ type: "RESET_ALL" });
        }, 3000)
    }, [stateError]);

    // useEffect(() => {
    //     // setTimeout(() => {
    //     //     setError('')
    //     // }, 3000)
    // }, [error])

    return (
        <div className="App">
            <AppContext.Provider value={{
                stateResources,
                dispatchResources,
                stateMeta,
                dispatchMeta,
                stateGenericBuildings,
                dispatchGenericBuildings,
                stateImports,
                dispatchImports,
                stateError,
                dispatchError
            }}>
                <h1>Idle Architect</h1>
                <ButtonMenu />
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >{stateError && <div key="error" className="errorContainer">{stateError}</div>}</ReactCSSTransitionGroup>
                <div className="consoleMenu">
                    <div className="consoleMenuSubContainer">
                        <HUDTabContainer column={'resources'} />
                        <div className="resourceContainer">
                            {Object.keys(stateResources).map((resource, index) => <Resource key={index} resource={resource} />)}
                        </div>
                    </div>
                    <div className="consoleMenuSubContainer">
                    </div>
                    <div className="consoleMenuSubContainer">
                        <HUDTabContainer column={'buildings'} />
                        {stateMeta.buildingTab === 'generic' && <GenericBuildingContainer />}
                        {stateMeta.buildingTab === 'unique' && <p>Nothing here right now. Check back later</p>}
                    </div>
                </div>
            </AppContext.Provider>
        </div>
    )
}

export default App;