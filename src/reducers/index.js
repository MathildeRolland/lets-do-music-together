import { TOGGLE_MOBILE_MENU, HIDE_DROPDOWN_MENU, SAVE_SELECT_VALUE, HANDLE_RANGE_INPUT, SAVE_INPUT, UPDATE_TEMP_USER, UPDATE_DATABASE_USER } from 'src/actions';

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
    simpleResearch: {},    
    advancedResearch: {},
    currentUser: {
        firstname: "Test",
        lastname: "Neuf",
        pseudo: "Test9",
        email: "test45@gmail.com",
        age: 25,
        gender:  3,
        experience: 0,
        influence: "Mes influences",
        availability:  0,
        bio: "",
        perimeter: 0,
        password: "",
        Locations: 0,
        status: true,
        Genres: [{id: 4, name: "soul"},{id: 5, name: "pop"},{id: 8, name: "rnb"}],
        Instruments: [{name:"Guitare",id:2,}, {name:"Basse",id:9,}],
    },
    tempUser: {},
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
                const multipleValues = action.value.map((element) => element.value || element.name)
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
        };

        case UPDATE_TEMP_USER: {
            return{
                ...state,
                tempUser : JSON.parse(JSON.stringify(state.currentUser)),
            }
        };UPDATE_DATABASE_USER

        // Putting the "request" code here waiting for the middleware
        case UPDATE_DATABASE_USER: {
            console.log('The request code should be here.')
            return{
                ...state,
            }
        };

        default: 
            return state;
    }
};

export default reducer;
