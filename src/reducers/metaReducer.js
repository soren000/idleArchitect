const metaReducer = (state, action) => {
    switch (action.type) {
        case "RESET_ALL":
            return action.default;
        case "BUILDING_TAB_GENERIC":
            return {
                ...state,
                buildingTab: "generic"
            }
        case "BUILDING_TAB_UNIQUE":
            return {
                ...state,
                buildingTab: "unique"
            }
        default: 
            new Error('Something went wrong in the resources reducer');
            return state;
    }
}

export { metaReducer as default };