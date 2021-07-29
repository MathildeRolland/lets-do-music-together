import { 
    TOGGLE_MOBILE_MENU,
    HIDE_DROPDOWN_MENU,
    SAVE_INPUT,
    SAVE_CURRENT_SIMPLE_RESEARCH,
    SAVE_LISTS,
    UPDATE_TEMP_USER,
    UPDATE_DATABASE_USER,
    SAVE_USER,
    DECONNECT_USER,
    RETRIEVE_LOCAL_STORAGE_DATAS,
} from 'src/actions';

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
    cities: [],
    isBurgerClicked: false,
    simpleResearch: {},    
    advancedResearch: {
        perimeter: 0,
    },
    currentUser: {
        // id: 6,
        // firstname: "Ricardo",
        // lastname: "Carmona",
        // pseudo: "Le Gume",
        // email: "ricardo.carmona@hotmail.fr",
        // roles: [],
        // age: 25,
        // influence: "Mes influences",
        // gender:  3,
        // experience: 0,
        // availability:  0,
        // bio: "hello",
        // perimeter: 0,
        // password: "coucou",
        // Departments: 1,
        // city: 6,
        // styles: [{id: 4, name: "soul"},{id: 5, name: "pop"},{id: 8, name: "rnb"}],
        // instruments: [{name:"Guitare",id:2,}, {name:"Basse",id:9,}],
        // token: "",
    },
    tempUser: {},
    newUser: {
        Bio: "",
        influences: "",
        city: '',
        age: 34,
        experience: 0,
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
            console.log("input save", action.value);
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
        };

        // Putting the "request" code here waiting for the middleware
        // case UPDATE_DATABASE_USER: {
        //     console.log('The request code should be here.')
        //     return{
        //         ...state,
        //     }
        // };

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
                genders: action.genders,
                cities: action.cities,
            }
        case SAVE_USER:
            return {
                ...state,
                currentUser: {
                    //...state.currentUser,
                    ...action.user,
                    token : action.token,
                    //token: action.data.token || action.token,
                },
                login: {
                    ...state.login,
                    email: '',
                    password: '',
                },
                isLogged: true,
            }
        case DECONNECT_USER:
            return {
                ...state,
                currentUser: {},
                isLogged: false,
            }
        default: 
            return state;
    }
};

export default reducer;
