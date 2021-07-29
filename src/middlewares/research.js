import axios from 'axios';
import { FETCH_USERS_FROM_API, FETCH_USERS_FROM_API_ADV, saveCurrentSimpleResearch } from 'src/actions';
import { filterUsers, advFilterUsers } from 'src/selectors';
import userList from 'src/data/userlist';

const researchMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH_USERS_FROM_API: {
            console.log("recherche lancée");
            console.log(usersList);

            const filteredMusicians = filterUsers(usersList, store.getState().simpleResearch);
            store.dispatch(saveCurrentSimpleResearch(filteredMusicians));

            // FETCH USERS FROM API
            // axios
            //     .get('- **Connexion utilisateur:** [http://ec2-54-237-97-74.compute-1.amazonaws.com](http://ec2-54-237-97-74.compute-1.amazonaws.com/)/api/login_check')
            //     .then((response) => {
            //         console.log(response);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });

            next(action);
            break;
        }
        case FETCH_USERS_FROM_API_ADV: {
            console.log("viouuuuum");

            const filteredMusicians = advFilterUsers(userList, store.getState().advancedResearch);
            // FETCH USERS FROM API
            // axios
            //     .get('- **Connexion utilisateur:** [http://ec2-54-237-97-74.compute-1.amazonaws.com](http://ec2-54-237-97-74.compute-1.amazonaws.com/)/api/login_check')
            //     .then((response) => {
            //         console.log(response);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });

            next(action);
            break;
        }
        default:
            next(action);
    }
};

export default researchMiddleware;