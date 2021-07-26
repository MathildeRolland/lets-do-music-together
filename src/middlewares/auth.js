import axios from "axios";
import { CONNECT_USER } from 'src/actions';

const authMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case CONNECT_USER: {
            console.log('middleware opérationnel mamène');
        }
        default:
            next(action);
    }
};

export default authMiddleware;