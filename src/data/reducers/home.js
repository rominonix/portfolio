const homeReducer = (home = [], action) => {
    switch (action.type) {
        case "FETCH_HOME":
            return action.payload;
        default:
            return home;
    }
};
export default homeReducer;