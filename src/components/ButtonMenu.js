import React, { useContext } from 'react';

import AppContext from '../context/app-context';
import useResetAll from '../custom-hooks/useResetAll';

export default () => {
    const resetAll = useResetAll();
    // const decreaseImport = (e, importType) => {
    //     e.preventDefault();

    //     if (importType === 'woodImport') {
    //         setWoodImport(woodImport > 0 ? woodImport - 1 : 0);
    //     }
    // }

    return (
        <div className="buttonMenu">
            <div className="buttonSubBar metaControl">
                <button onClick={() => resetAll()}>Reset</button>
                {/* <button onClick={() => setTimer(1000)}>x1</button>
                <button onClick={() => setTimer(500)}>x2</button>
                <button onClick={() => setTimer(333)}>x3</button> */}
            </div>
            {/* <div className="buttonSubBar expenditure">
                <button onClick={() => setWoodImport(woodImport + 1)} onContextMenu={(e) => decreaseImport(e, 'woodImport')}>Import Wood ({woodImport})</button>
                <button onClick={() => setHouse(house + 1)}>Build House</button>
            </div> */}
        </div>
    )
}

