import { TOGGLE_MOBILE_MENU, HIDE_DROPDOWN_MENU } from 'src/actions';

import userList from 'src/data/userlist.js';
import instrus from 'src/data/instrus.js';
import locations from 'src/data/locations.js';
import musicStyles from 'src/data/musicStyles.js';

const initialState = {
    userList: userList,
    instrumentList: instrus,
    locations: locations,
    musicStyles: musicStyles,
    isBurgerClicked: false,
};

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case TOGGLE_MOBILE_MENU:
            return {
                ...state,
                isBurgerClicked: !state.isBurgerClicked,
            };
        case HIDE_DROPDOWN_MENU:
            return {
                ...state,
                isBurgerClicked: false,
            };
        default: 
            return state;
    }
};

export default reducer;