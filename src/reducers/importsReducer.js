const importsReducer = (state, action) => {
    switch (action.type) {
        case "INCREASE_WOOD":
            return {
                ...state,
                wood: state.wood + 1
            }
        case "DECREASE_WOOD":
            return {
                ...state,
                wood: state.wood - 1
            }
        case "RESET_ALL":
            return action.default;
        default: 
            new Error('Something went wrong in the resources reducer');
            return state;
    }
}

export { importsReducer as default };