import { TOGGLE_MOBILE_MENU, SUBMIT_RESEARCH_FORM, HANDLE_RANGE_INPUT } from 'src/actions';

const initialState = {
    isBurgerClicked: false,
    isResearchFormSubmitted: false,
    rangeValue: 0,
};

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case TOGGLE_MOBILE_MENU:
            return {
                ...state,
                isBurgerClicked: !state.isBurgerClicked,
            };
        case SUBMIT_RESEARCH_FORM:
            return {
                ...state,
                isResearchFormSubmitted: true,
            }
        case HANDLE_RANGE_INPUT:
            return {
                ...state,
                rangeValue: action.rangeValue,
            }
        default: 
            return state;
    }
};

export default reducer;
