import { useContext } from 'react';
import AppContext from '../context/app-context';
import {
    stateResourcesDefault, 
    stateImportsDefault,
    stateGenericBuildingsDefault,
    stateMetaDefault,
    stateErrorDefault
} from '.././objects/stateDefaults';

const useResetAll = () => {
    const { dispatchResources, dispatchMeta, dispatchGenericBuildings, dispatchImports, dispatchError } = useContext(AppContext);
    
    const resetAll = () => {
        dispatchResources({type: 'RESET_ALL', default: stateResourcesDefault})
        dispatchMeta({type:"RESET_ALL", default: stateMetaDefault})
        dispatchGenericBuildings({type:"RESET_ALL", default: stateGenericBuildingsDefault})
        dispatchImports({type:"RESET_ALL", default: stateImportsDefault})
        dispatchError({type: "RESET_ALL", default: stateErrorDefault })
    }
    
    return resetAll;
}

export { useResetAll as default };