import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import AppContext from './context/app-context';
import useInterval from './useInterval';
import ButtonMenu from './components/ButtonMenu';
import ResourceContainer from './components/ResourceContainer';
import BuildingContainer from './components/BuildingContainer';
import TabButtonContainer from './components/TabButtonContainer';

import './styles/main.scss';

const App = () => {
    // GAME DEFAULT VALUES
    const defaults = {
        moneyRate: 1,
        money: 0,
        timer: 1000,
        woodImport: 0
    }
    const moneyRate = 1;
    const moneyDefault = 0;
    const timerDefault = 1000;
    const woodImportDefault = 0;
    const woodDefault = 0;
    const moneyToWoodDeficitRate = 4;
    const woodSurplusRate = 1;
    const houseDefault = 0;
    const buildingTabDefault = "generic";
    const errorDefault = "";
    const eventsDefault = [];



    let [buildingTab, setBuildingTab] = useState(localStorage.getItem('buildingTab') || buildingTabDefault);
    let [money, setMoney] = useState(parseInt(localStorage.getItem('money')) || moneyDefault);
    let [timer, setTimer] = useState(parseInt(localStorage.getItem('timer')) || timerDefault);
    let [woodImport, setWoodImport] = useState(parseInt(localStorage.getItem('woodImport')) || woodImportDefault);
    let [wood, setWood] = useState(parseInt(localStorage.getItem('wood')) || woodDefault);
    let [house, setHouse] = useState(parseInt(localStorage.getItem('house')) || houseDefault);
    let [error, setError] = useState(localStorage.getItem('error') || errorDefault);
    let [events, setEvents] = useState(localStorage.getItem('events') && localStorage.getItem('events').split(',') || eventsDefault);


    useInterval(() => {
        setMoney(money + moneyRate - (woodImport * moneyToWoodDeficitRate));
        setWood(wood + (woodImport * woodSurplusRate));
    }, timer);

    useEffect(() => {
        localStorage.setItem('money', money);
        localStorage.setItem('wood', wood);
        localStorage.setItem('timer', timer);
        localStorage.setItem('woodImport', woodImport);
        localStorage.setItem('events', events);
    });

    useEffect(() => {
    }, [money])

    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 3000)
    }, [error])


    const resetAll = () => {
        setMoney(moneyDefault);
        setTimer(timerDefault);
        setWoodImport(woodImportDefault);
        setError(errorDefault);
        setHouse(houseDefault);
        setWood(woodDefault);
        setEvents(eventsDefault);
    };

    const resourcesToShow = 'prestige money wood';

    return (
        <div className="App">
            <AppContext.Provider value={{ resetAll, setTimer, setWoodImport, woodImport, wood, money, house, setHouse, buildingTab, setBuildingTab, error, setError }}>
                {error &&
                    <div className="errorContainer">{error}</div>
                }
                <h1>Idle Architect</h1>
                <ButtonMenu />
                <div className="consoleMenu">
                    <div className="consoleMenuSubContainer">
                        {resourcesToShow.split(' ').map((resource, index) => <ResourceContainer key={index} resource={resource} />)}
                    </div>
                    <div className="consoleMenuSubContainer">
                        <div className="eventsContainer">
                            {events.map((event, index) => <div className="eventEntry" key={index}>{event}</div>)}
                        </div>
                    </div>
                    <div className="consoleMenuSubContainer">
                        <TabButtonContainer />
                        {buildingTab === 'generic' &&
                            <div className="genericBuildingContainer">
                                <BuildingContainer building={'house'} />
                            </div>
                        }
                        {buildingTab === 'unique' &&
                            <p>Nothing here right now. Check back later</p>
                        }
                    </div>
                </div>
            </AppContext.Provider>
        </div>
    )
}

export default App;