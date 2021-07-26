import axios from "axios";
import { CONNECT_USER } from 'src/actions';

const authMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case CONNECT_USER: {
            const { email, password } = store.getState().login;
            axios
                .post('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/login_check', { email: email, password: password })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error)
                });
            next(action);
            break;
        }
        default:
            next(action);
    }
};

export default authMiddleware;