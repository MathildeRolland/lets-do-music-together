import axios from "axios";
import { SUBMIT_SIGNUP_FORM, displaySuccessMessage, displayFailedMessage } from 'src/actions';

const subMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_SIGNUP_FORM: {
            const newUser = store.getState().newUser;
            console.log(newUser);

            // Retrieving only the ids of the musicStyles an instruments
            // const genreIds = newUser.styles.map((genre) => (genre.id));
            // const instrumentIds = newUser.instruments.map((instrument) => (instrument.id));


            const newUserJson = {
                "firstname": newUser.firstname,
                "lastname": newUser.lastname,
                "pseudo": newUser.pseudo,
                "email": newUser.email,
                "age": Number(newUser.age),
                "gender": Number(newUser.gender),
                "experience": Number(newUser.experience),
                "influence": newUser.influences,
                "availability":  newUser.availability,
                "bio": newUser.Bio,
                "perimeter": Number(newUser.perimeter),
                "password": newUser.password,
                "Departments": newUser.department,
                "styles": newUser.styles,
                "cities": newUser.city,
                "Instruments": newUser.instruments,
                "picture": newUser.picture.split('blob:http://localhost:8080/')[1],
            }
            
            console.log(newUserJson);

            axios.post('http://ec2-3-238-142-112.compute-1.amazonaws.com/register', newUserJson)
                .then((response) => {
                    console.log("RESPOOOOONSE:", response);
                    store.dispatch(displaySuccessMessage(response.data.message));
                })
                .catch((error) => {
                    console.log("ERROOOOOOOR:", error);
                    store.dispatch(displayFailedMessage(response.data.message));
                });
        }
        default:
            next(action);
    }
};

export default subMiddleware;
