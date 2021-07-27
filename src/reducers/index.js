import { TOGGLE_MOBILE_MENU, HIDE_DROPDOWN_MENU, SAVE_INPUT, SAVE_CURRENT_SIMPLE_RESEARCH, SAVE_LISTS } from 'src/actions';

import userList from 'src/data/userlist.js';
// import instrus from 'src/data/instrus.js';
// import locations from 'src/data/locations.js';
// import musicStyles from 'src/data/musicStyles.js';

const initialState = {
    userList: userList,
    instrumentList: [],
    locations: [],
    musicStyles: [],
    availabilities: [],
    isBurgerClicked: false,
    simpleResearch: {},    
    advancedResearch: {},
    currentUser: {
        id: 2,
        firstname: "Test",
        lastname: "Neuf",
        pseudo: "Test9",
        email: "test45@gmail.com",
        roles: [],
        age: 25,
        influence: "Mes influences",
        gender:  3,
        experience: 0,
        availability:  0,
        bio: "hello",
        perimeter: 0,
        password: "coucou",
        Departments: 1,
        city: 6,
        styles: [{id: 4, name: "soul"},{id: 5, name: "pop"},{id: 8, name: "rnb"}],
        Instruments: [{name:"Guitare",id:2,}, {name:"Basse",id:9,}]
    },
    isLogged: false,
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
                const multipleValues = action.value.map((element) => element.label || element.name)
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
        case SAVE_CURRENT_SIMPLE_RESEARCH: 
            return {
                ...state,
                musiciansFound: action.filteredMusicians,
            }
        case SAVE_LISTS: 
            return {
                ...state,
                instrumentList: action.instruments,
                musicStyles: action.styles,
                locations: action.departments,
                availabilities: action.availabilities,
            }
        default: 
            return state;
    }
};

export default reducer;
