import axios from "axios";
import { UPDATE_DATABASE_USER, DELETE_DATABASE_USER } from 'src/actions';

const EditMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case UPDATE_DATABASE_USER: {
            const editedUser = store.getState().currentUser;
            //console.log(editedUser);

            // Retrieving only the ids of the musicStyles an instruments
            // const genreIds = editedUser.styles.map((genre) => (genre.id));
            // const instrumentIds = editedUser.instruments.map((instrument) => (instrument.id));

            const editedUserJson = {
                "id": editedUser.id,
                "firstname": editedUser.firstname,
                "lastname": editedUser.lastname,
                "pseudo": editedUser.pseudo,
                "email": editedUser.email,
                "age": Number(editedUser.age),
                "gender": Number(editedUser.gender),
                "experience": Number(editedUser.experience),
                "influence": editedUser.influences,
                "availability":  editedUser.availability,
                "bio": editedUser.Bio,
                "perimeter": Number(editedUser.perimeter),
                "Departments": editedUser.department,
                "styles": editedUser.styles,
                "cities": editedUser.city,
                "Instruments": editedUser.instruments,
                //"_csrf_token": editedUser.token,
            }
            //console.log(editedUserJson);

            axios
                .patch('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/users/'+editedUser.id,
                    editedUserJson, 
                    { headers: { Authorization: '_csrf_token '+editedUser.token, }}
                ).then((response) => {
                    console.log("RESPOOOOONSE:", response);
                }
                ).catch((error) => {
                    console.log("ERROOOOOOOR:", error);
                });
        }
        case DELETE_DATABASE_USER: {
            const userId = store.getState().currentUser.id;
            axios
                .delete('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/users/'+userId
                ).then((response) => {
                    console.log("RESPOOOOONSE:", response);
                }
                ).catch((error) => {
                    console.log("ERROOOOOOOR:", error);
                });
        }
        default:
            next(action);
    }
};

export default EditMiddleware;