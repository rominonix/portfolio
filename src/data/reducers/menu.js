const menuReducer = (menu = [], action) => {
    switch (action.type) {
        case "FETCH_MENU":
            return action.payload;
        default:
            return menu;
    }
};
export default menuReducer;