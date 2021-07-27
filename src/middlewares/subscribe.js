import axios from "axios";
import { SUBMIT_SIGNUP_FORM } from 'src/actions';

const subMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_SIGNUP_FORM: {
            const newUser = store.getState().currentUser;
            console.log(newUser);

            // Retrieving only the ids of the musicStyles an instruments
            const genreIds = newUser.styles.map((genre) => (genre.id));
            const instrumentIds = newUser.Instruments.map((instrument) => (instrument.id));

            const newUserJson = {
                "firstname": newUser.firstname,
                "lastname": newUser.lastname,
                "pseudo": newUser.pseudo,
                "email": newUser.email,
                "age": newUser.age,
                "gender":  newUser.gender,
                "experience": newUser.experience,
                "influence": newUser.influence,
                "availability":  newUser.availability,
                "bio": newUser.bio,
                "perimeter": newUser.perimeter,
                "password": newUser.password,
                "Departments": newUser.Departments,
                "styles": genreIds,
                "cities": newUser.city,
                "Instruments": instrumentIds,
            }
            console.log(newUserJson);

            // const myHeaders = {
            //     method: 'post',
            //     url: 'http://ec2-54-237-97-74.compute-1.amazonaws.com/register',
            //     data: newUserJson,
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json',
            //     },
            // }

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