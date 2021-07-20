import { TOGGLE_MOBILE_MENU } from 'src/actions';

import userList from 'src/data/userlist.js';

const initialState = {
    userList: userList,
    isBurgerClicked: false,
};

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case TOGGLE_MOBILE_MENU:
            return {
                ...state,
                isBurgerClicked: !state.isBurgerClicked,
            };
        default: 
            return state;
    }
};

export default reducer;