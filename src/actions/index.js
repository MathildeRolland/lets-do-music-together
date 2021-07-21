export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';

export const toggleMobileMenu = () => ({
    type: TOGGLE_MOBILE_MENU,
});

export const SUBMIT_RESEARCH_FORM = 'SUBMIT_RESEARCH_FORM';

export const submitResearchForm = () => ({
    type: SUBMIT_RESEARCH_FORM,
});

export const HANDLE_RANGE_INPUT = 'HANDLE_RANGE_INPUT';

export const handleRangeInput = (value) => ({
    type: HANDLE_RANGE_INPUT,
    rangeValue: value,//document.querySelector('.range-input').value,
});
