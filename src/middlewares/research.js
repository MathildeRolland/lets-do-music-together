import axios from "axios";

const researchMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        default:
            next(action);
    }
};