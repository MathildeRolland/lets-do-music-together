import axios from 'axios';
import { FETCH_USERS_FROM_API, FETCH_USERS_FROM_API_ADV, saveCurrentSimpleResearch } from 'src/actions';
import { filterUsers, advFilterUsers } from 'src/selectors';
import userList from 'src/data/userlist';

const researchMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH_USERS_FROM_API: {
            console.log("recherche lancée");

            const simpleResearch = store.getState().simpleResearch;

            const researchParamsToSend = {
                "Department": simpleResearch.location,
                "instrument": simpleResearch.instrument,
            };

            console.log(researchParamsToSend);

            // SEND THESE DATAS TO THE API
            axios
                .get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/search')
                .then((response) => {
                    console.log(response);
                    store.dispatch(saveCurrentSimpleResearch(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });

            next(action);
            break;
        }
        case FETCH_USERS_FROM_API_ADV: {
            console.log("viouuuuum");

            const advancedResearch = store.getState().advancedResearch;

            const researchParamsToSend = {
                "gender": Number(advancedResearch.gender),
                "Department": advancedResearch.location, 
                "availability": advancedResearch.availability,
                "style": advancedResearch.genre,
                "instrument": advancedResearch.instrument,
                // "perimeter": Number(advancedResearch.perimeter),
            };

            console.log(researchParamsToSend);

            // SEND THESE PARAMS TO API
            axios
                .get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/advanced-search')
                .then((response) => {
                    console.log(response);
                    store.dispatch(saveCurrentSimpleResearch(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });

            next(action);
            break;
        }
        default:
            next(action);
    }
};

export default researchMiddleware;