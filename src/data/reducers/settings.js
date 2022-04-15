const settingsReducer =  (settings = {}, action) => {
    switch (action.type) {
        case "FETCH_SETTINGS":
            return action.payload;
        default:
            return settings;
    }
};

export default settingsReducer;