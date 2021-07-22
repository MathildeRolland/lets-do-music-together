import { TOGGLE_MOBILE_MENU, HIDE_DROPDOWN_MENU, SAVE_SELECT_VALUE, HANDLE_RANGE_INPUT } from 'src/actions';

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
    advancedResearchValues: {
        instrument: '',
        location: '',
        perimeter: 0,
        availability: '',
        gender: '',
        genre: [],
    },
    rangeValue: 0,
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
        case SAVE_SELECT_VALUE: {
            // If the selectValue is an array, i reorganize it.
            if(Array.isArray(action.selectValue)) {
                const multipleValues = action.selectValue.map((element) => element.value)
                return {
                    ...state,
                    advancedResearchValues: {
                        ...state.advancedResearchValues,
                        [action.selectName]: multipleValues,
                    }
                }
            }

            return {
                ...state,
                advancedResearchValues: {
                    ...state.advancedResearchValues,
                    [action.selectName]: action.selectValue,
                }
            }
        }
        case HANDLE_RANGE_INPUT: {
            return {
                ...state,
                rangeValue: action.rangeValue,
            }
        }
        default: 
            return state;
    }
};

export default reducer;
