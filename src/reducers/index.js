import { TOGGLE_MOBILE_MENU, HIDE_DROPDOWN_MENU, SAVE_SELECT_VALUE, HANDLE_RANGE_INPUT, SAVE_INPUT } from 'src/actions';

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
    advancedResearch: {
        perimeter: 0,
    }
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
        case SAVE_INPUT: {
            // If the value is an array, i reorganize it.
            if(Array.isArray(action.value)) {
                const multipleValues = action.value.map((element) => element.value)
                return {
                    ...state,
                    [action.objectname]: {
                        ...state[action.objectname],
                        [action.name]: multipleValues,
                    }
                }
            }

            return {
                ...state,
                [action.objectname]: {
                    ...state[action.objectname],
                    [action.name]: action.value,
                }
            }
        }

        default: 
            return state;
    }
};

export default reducer;
