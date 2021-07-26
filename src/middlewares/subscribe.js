import axios from "axios";

const subMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        default:
            next(action);
    }
};

export default subMiddleware;