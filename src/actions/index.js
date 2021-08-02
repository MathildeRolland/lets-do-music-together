export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';

export const toggleMobileMenu = () => ({
    type: TOGGLE_MOBILE_MENU,
});

export const HIDE_DROPDOWN_MENU = 'HIDE_DROPDOWN_MENU';

export const hideDropdownMenu = () => ({
    type: HIDE_DROPDOWN_MENU,
});

export const SAVE_INPUT = 'SAVE_INPUT';

export const saveInput = (value, name, objectname) => ({
    type: SAVE_INPUT,
    value,
    name,
    objectname,
    
});

export const SAVE_CHECKBOX = 'SAVE_CHECKBOX';
export const saveCheckbox = (value, name, objectname) => ({
    type: SAVE_CHECKBOX,
    value,
    name,
    objectname,
});

export const UPDATE_TEMP_USER = 'UPDATE_TEMP_USER';
export const updateTempUser = () => {
    return({
    type: UPDATE_TEMP_USER,
})};

export const UPDATE_DATABASE_USER = 'UPDATE_DATABASE_USER';
export const updateDatabaseUser = () => {
    return({
    type: UPDATE_DATABASE_USER,
})};

export const DELETE_DATABASE_USER = 'DELETE_DATABASE_USER';
export const deleteDatabaseUser = () => {
    return({
    type: DELETE_DATABASE_USER,
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

export const saveLists = (instruments, styles, departments, availabilities, genders, cities) => ({
    type: SAVE_LISTS,
    instruments,
    styles,
    departments,
    availabilities,
    genders,
    cities,
});

// = = = = = = = = = = SAVE USER WHEN CONNEXION REQUEST IS SUCCESS = = = = = = = = = = = // 
export const SAVE_USER = 'SAVE_USER';

export const saveUser = (data) => {
    console.log('Ce qui passe dans saveUser:',data);
return ({
    type: SAVE_USER,
    ...data,
})};


// = = = = = = = = = = DECONNEXION = = = = = = = = = = = // 
export const DECONNECT_USER = 'DECONNECT_USER';

export const deconnectUser = () => ({
    type: DECONNECT_USER,
});


// = = = = = = = = = = SEND A USER MESSAGE FROM PAGE CONTACT = = = = = = = = = = = // 
export const SEND_CONTACT_MESSAGE =  'SEND_CONTACT_MESSAGE';

export const sendContactMessage = () => ({
  type: SEND_CONTACT_MESSAGE,
});
 

// = = = = = = = = = = LOADING = = = = = = = = = = = // 
export const SET_LOADING = 'SET_LOADING';

export const setLoading = () => ({
    type: SET_LOADING,
});


// = = = = = = = = = = SET CONTACT MESSAGE IS SEND TO TRUE = = = = = = = = = = = // 
export const DISPLAY_SUCCESS_MESSAGE = 'DISPLAY_SUCCESS_MESSAGE';

export const displaySuccessMessage = (message) => ({
    type: DISPLAY_SUCCESS_MESSAGE,
    message,
});


// = = = = = = = = = = SET CONTACT MESSAGE IS SEND TO TRUE = = = = = = = = = = = // 
export const DISPLAY_FAILED_MESSAGE = 'DISPLAY_FAILED_MESSAGE';

export const displayFailedMessage = (message) => ({
    type: DISPLAY_FAILED_MESSAGE,
    message,
});


export const RESET_INFO_MESSAGE = 'RESET_INFO_MESSAGE';

export const resetInfoMessage = () => ({
    type: RESET_INFO_MESSAGE,
})