import axios from "axios";

const subscribeMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_SIGNUP_FORM:
            console.log("formulaire envoyé");
        default:
            next(action);
    }
};