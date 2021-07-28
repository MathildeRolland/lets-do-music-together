export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';

export const toggleMobileMenu = () => ({
    type: TOGGLE_MOBILE_MENU,
});

export const HIDE_DROPDOWN_MENU = 'HIDE_DROPDOWN_MENU';

export const hideDropdownMenu = () => ({
    type: HIDE_DROPDOWN_MENU,
});

// export const SAVE_SELECT_VALUE = 'SAVE_SELECT_VALUE';

// export const saveSelectValue = (value, name, objectname) => ({
//     type: SAVE_SELECT_VALUE,
//     value,
//     name,
//     objectname
// });

// export const HANDLE_RANGE_INPUT = 'HANDLE_RANGE_INPUT';

// export const handleRangeInput = (value) => ({
//     type: HANDLE_RANGE_INPUT,
//     perimeter: value,
// });

export const SAVE_INPUT = 'SAVE_INPUT';

export const saveInput = (value, name, objectname) => ({
    type: SAVE_INPUT,
    value,
    name,
    objectname,
});

export const UPDATE_TEMP_USER = 'UPDATE_TEMP_USER';
export const updateTempUser = () => {
    console.log('Copy currentUser into tempUser');
    return({
    type: UPDATE_TEMP_USER,
})};

export const UPDATE_DATABASE_USER = 'UPDATE_DATABASE_USER';
export const updateDatabaseUser = () => {
    return({
    type: UPDATE_DATABASE_USER,
})};
export const SUBMIT_SIGNUP_FORM = 'SUBMIT_SIGNUP_FORM';

export const submitSignUpForm = () => ({
    type: SUBMIT_SIGNUP_FORM,
});

export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = () => ({
    type: CONNECT_USER,
});

export const LOAD_ALL_LISTS = 'LOAD_ALL_LISTS';

export const loadAllLists = () => ({
    type: LOAD_ALL_LISTS,
});


// = = = = = = = = = = FETCH USERS FOR SIMPLE RESEARCH = = = = = = = = = = = //
export const FETCH_USERS_FROM_API = 'FETCH_USERS_FROM_API';

export const fetchUsersFromApi = () => ({
    type: FETCH_USERS_FROM_API,
});


// = = = = = = = = = = FETCH USERS FOR ADVANCED RESEARCH = = = = = = = = = = = //
export const FETCH_USERS_FROM_API_ADV = 'FETCH_USERS_FROM_API_ADV';

export const fetchUsersFromApiAdv = () => ({
    type: FETCH_USERS_FROM_API_ADV,
});




export const SAVE_CURRENT_SIMPLE_RESEARCH = 'SAVE_CURRENT_SIMPLE_RESEARCH';

export const saveCurrentSimpleResearch = (filteredMusicians) => ({
    type: SAVE_CURRENT_SIMPLE_RESEARCH,
    filteredMusicians,
});


export const SAVE_LISTS = 'SAVE_LISTS';

export const saveLists = (instruments, styles, departments, availabilities) => ({
    type: SAVE_LISTS,
    instruments,
    styles,
    departments,
    availabilities,
});

// = = = = = = = = = = SAVE USER WHEN CONNEXION REQUEST IS SUCCESS = = = = = = = = = = = // 
export const SAVE_USER = 'SAVE_USER';

export const saveUser = (token) => ({
    type: SAVE_USER,
    token,
});


// = = = = = = = = = = DECONNEXION = = = = = = = = = = = // 
export const DECONNECT_USER = 'DECONNECT_USER';

export const deconnectUser = () => ({
    type: DECONNECT_USER,
});
