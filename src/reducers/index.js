import { TOGGLE_MOBILE_MENU, SUBMIT_RESEARCH_FORM } from 'src/actions';

import userList from 'src/data/userlist.js';

const initialState = {
    userList: userList,
    isBurgerClicked: false,
    isResearchFormSubmitted: false,
};

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case TOGGLE_MOBILE_MENU:
            return {
                ...state,
                isBurgerClicked: !state.isBurgerClicked,
            };
        case SUBMIT_RESEARCH_FORM:
            return {
                ...state,
                isResearchFormSubmitted: true,
            }
        default: 
            return state;
    }
};

export default reducer;