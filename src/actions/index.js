export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';

export const toggleMobileMenu = () => ({
    type: TOGGLE_MOBILE_MENU,
});

export const HIDE_DROPDOWN_MENU = 'HIDE_DROPDOWN_MENU';

export const hideDropdownMenu = () => ({
    type: HIDE_DROPDOWN_MENU,
});

export const SAVE_SELECT_VALUE = 'SAVE_SELECT_VALUE';

export const saveSelectValue = (selectValue, selectName) => ({
    type: SAVE_SELECT_VALUE,
    selectName,
    selectValue,
});

export const HANDLE_RANGE_INPUT = 'HANDLE_RANGE_INPUT';

export const handleRangeInput = (value) => ({
    type: HANDLE_RANGE_INPUT,
    rangeValue: value,//document.querySelector('.range-input').value,
});
