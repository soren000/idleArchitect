const genericBuildingsReducer = (state, action) => {
    switch (action.type) {
        case "RESET_ALL":
            return action.default;
        case "BUILD_HOUSE":
            console.log(action.cost); 
            if ( !Object.keys(action.cost).every(x => action.cost[x] < action.resources[x]) ) {
                throw new Error({test: "test"});
            }

            return {
                ...state,
                house: state.house + 1
            }
        default: 
            new Error('Something went wrong in the resources reducer');
            return state;
    }
}

export { genericBuildingsReducer as default };