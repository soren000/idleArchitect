import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip'

import AppContext from '../context/app-context';

const Resource = ({ resource }) => {
    const { stateResources, stateImports, dispatchImports } = useContext(AppContext);

    const resourceAmount = stateResources[resource.toLowerCase()];

    const toolTips = {
        money: `Money is used for importing materials.\nYou can gain money by making buildings.`,
        wood: `Wood is a crafting material.`
    }

    const decreaseImports = (e) => {
        e.preventDefault();

        stateImports[resource] > 0 && dispatchImports({type: `DECREASE_${resource.toUpperCase()}`})
    }

    return (
        <div
            className={`resourceSubContainer resourceContainer-${resource.toLowerCase()}`}
            data-tip={toolTips[resource]}
        >
            {resource !== "prestige" && resource !== "money" &&  
                <button 
                    className="importButton"
                    onClick={() => dispatchImports({type: `INCREASE_${resource.toUpperCase()}`})}
                    onContextMenu={(e) => decreaseImports(e)}
                >Import ({stateImports[resource]})</button>
            }
            <p>
                {resource.charAt(0).toUpperCase() + resource.slice(1)}: {resourceAmount}
            </p>
            <ReactTooltip
                effect={'solid'}
                multiline={true}
            />
        </div>
    )
};

export { Resource as default };