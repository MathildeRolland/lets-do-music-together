import axios from 'axios';
import { FETCH_USERS_FROM_API, FETCH_USERS_FROM_API_ADV, saveCurrentSimpleResearch, setLoading } from 'src/actions';
import { filterUsers, advFilterUsers } from 'src/selectors';
import userList from 'src/data/userlist';

const researchMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH_USERS_FROM_API: {
            // Setting loading state
            store.dispatch(setLoading());

            // Retrieving the research parameters from state
            const simpleResearch = store.getState().simpleResearch;

            const location = simpleResearch.location || "";
            const instrument = simpleResearch.instrument || "";
            

            // REQUEST TO API
            axios
                .get(`http://ec2-3-238-142-112.compute-1.amazonaws.com/api/v1/search?Departments=${location}&instrument=${instrument}`)
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
            // Setting loading state
            store.dispatch(setLoading());

            // Retrieving the research parameters from state
            const advancedResearch = store.getState().advancedResearch;

            const gender = Number(advancedResearch.gender) || "";
            const department = advancedResearch.location || "";
            const availability = advancedResearch.availability || "";
            const styles = encodeURIComponent(JSON.stringify(advancedResearch.genre)) || "";
            const instruments = encodeURIComponent(JSON.stringify(advancedResearch.instrument)) || "";

            // REQUEST TO API
            axios
                .get(`http://ec2-3-238-142-112.compute-1.amazonaws.com/api/v1/advanced-search?gender=${gender}&Departments=${department}&availability=${availability}&style=${styles}&instrument=${instruments}`)
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