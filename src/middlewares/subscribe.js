import axios from "axios";
import { SUBMIT_SIGNUP_FORM } from 'src/actions';

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
            }
            console.log(newUserJson);

            axios.post('http://ec2-54-237-97-74.compute-1.amazonaws.com/register', newUserJson)
                .then((response) => {
                    console.log("RESPOOOOONSE:", response);
                })
                .catch((error) => {
                    console.log("ERROOOOOOOR:", error);
                });
        }
        default:
            next(action);
    }
};

export default subMiddleware;
