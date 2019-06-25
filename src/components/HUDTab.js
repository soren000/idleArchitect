import React, { useContext } from 'react';
import classNames from 'classnames';
import AppContext from '../context/app-context';

const HUDTab = ( { column } ) => {
    const { stateMeta, dispatchMeta } = useContext(AppContext);
    const { buildingTab } = stateMeta;

    return (
        <div className="tabButtonContainer">
            <button
                className={classNames({ tabButton: true, "tabButton-active": buildingTab === "unique" })}
                onClick={() => dispatchMeta({type: "BUILDING_TAB_UNIQUE"})}
            >
                Unique
            </button>
        </div>
    )
}

export { HUDTab as default }