import importRates from '../objects/importRates';
const { woodRate } = importRates;

const resourcesReducer = (state, action) => {
    switch (action.type) {
        case "RESET_ALL":
            return action.default;
        case "MONEY":
            const result = state.money + 1 - ( action.imports.wood * woodRate);
            return {
                ...state,
                money: result
            }
        case "SPEND": 
            return {
                ...state,
                wood: state.wood + 5000
            }
        default: 
            new Error('Something went wrong in the resources reducer');
            return state;
    }
}

export { resourcesReducer as default };