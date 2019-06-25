const errorReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ERROR":
            return action.error;
        case "RESET_ALL":
            return "";
        default: 
            console.log('didnt pass through any cases in the error reducer')
            return state;
    }
}

export { errorReducer as default };