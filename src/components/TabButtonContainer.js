import React, { useContext } from 'react';
import classNames from 'classnames';
import AppContext from '../context/app-context';

const TabButtonContainer = () => {
    const { buildingTab, setBuildingTab } = useContext(AppContext);

    return (
        <div className="tabButtonContainer">
            <button
                className={classNames({ tabButton: true, "tabButton-active": buildingTab === "generic" })}
                onClick={() => setBuildingTab('generic')}
            >
                Generic
            </button>
            <button
                className={classNames({ tabButton: true, "tabButton-active": buildingTab === "unique" })}
                onClick={() => setBuildingTab('unique')}
            >
                Unique
            </button>
        </div>
    )
}

export { TabButtonContainer as default }