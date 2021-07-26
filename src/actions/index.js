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

export const SUBMIT_SIGNUP_FORM = 'SUBMIT_SIGNUP_FORM';

export const submitSignUpForm = () => ({
    type: SUBMIT_SIGNUP_FORM,
});

export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = () => ({
    type: CONNECT_USER,
})