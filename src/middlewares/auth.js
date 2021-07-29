import axios from "axios";
import { CONNECT_USER, saveUser } from 'src/actions';


const axiosInstance = axios.create({
    baseURL: 'http://ec2-54-237-97-74.compute-1.amazonaws.com/api',
});



const authMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case CONNECT_USER: {
            const { email, password } = store.getState().login;
            console.log(email, password);
            axiosInstance
                .post('/login_check', { username: email, password: password })
                .then((response) => {
                    console.log(response);
                    const handledResponse = {
                        token : response.data.token,
                        user : JSON.parse(response.data.data.informationsUser),
                    }
                    store.dispatch(saveUser(handledResponse));

                    localStorage.setItem("token", handledResponse.token);
                    localStorage.setItem("user", JSON.stringify(handledResponse.user));

                    axiosInstance.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
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