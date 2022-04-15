const pageReducer = (page = {}, action) => {
    switch (action.type) {
        case "FETCH_PAGE":
            return action.payload;
        default:
            return page;
    }
};
export default pageReducer;