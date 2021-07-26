import axios from "axios";

const authMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        default:
            next(action);
    }
};