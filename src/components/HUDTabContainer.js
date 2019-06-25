import React, { useContext } from 'react';
import classNames from 'classnames';
import AppContext from '../context/app-context';

// import HUDTab from './HUDTab';

const HUDTabContainer = ( { column } ) => {
    const { stateMeta, dispatchMeta } = useContext(AppContext);
    const { buildingTab, resourceTab } = stateMeta;
    
    return (
        <div className="tabButtonContainer">
            <button
                className={classNames({ tabButton: true, "tabButton-active": buildingTab === "generic" })}
                onClick={() => dispatchMeta({type: "BUILDING_TAB_GENERIC"})}
            >
                Generic
            </button>
            <button
                className={classNames({ tabButton: true, "tabButton-active": buildingTab === "unique" })}
                onClick={() => dispatchMeta({type: "BUILDING_TAB_UNIQUE"})}
            >
                Unique
            </button>
        </div>
    )
}

export { HUDTabContainer as default }