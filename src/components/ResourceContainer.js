import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip'

import AppContext from '../context/app-context';

const ResourceContainer = ( { resource } ) => {
    const context = useContext(AppContext);
    const resourceAmount = context[resource.toLowerCase()];

    const toolTips = {
        money: `Money is used for importing materials.\nYou can gain money by making buildings.`,
        wood: `Wood is a crafting material.`
    }

    return (
        <div 
            className={`resourceContainer resourceContainer-${resource.toLowerCase()}`} 
            data-tip={toolTips[resource]}
        >
            {resource.charAt(0).toUpperCase() + resource.slice(1)}: {resourceAmount}
            <ReactTooltip
                effect={'solid'}
                multiline={true}
            />
        </div>
    )
};

export { ResourceContainer as default };