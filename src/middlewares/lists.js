import axios from "axios";
import { LOAD_ALL_LISTS } from "src/actions";

const listMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case LOAD_ALL_LISTS: {
            console.log("initialized");

            let instrumentsList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/instruments');
            let genresList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/genres');
            let locationsList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/locations');

            axios.all([instrumentsList, genresList, locationsList])
                .then(axios.spread((...responses) => {
                    const instruments = responses[0];
                    const genres = responses[1];
                    const locations = responses[2];
                    console.log(instruments, genres, locations);
                }))
                .catch((error) => {
                    console.log(error);
                });
        }
        default:
            next(action);
    }
};

export default listMiddleware;