import axios from "axios";
import { LOAD_ALL_LISTS, saveLists } from "src/actions";

const listMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case LOAD_ALL_LISTS: {
            console.log("initialized");

            // axios
            //     .get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/instruments')
            //     .then((response) => {
            //         console.log("RESPONSE ========>", response);
            //     })
            //     .catch((error) => {
            //         console.log("ERROR =========>", error);
            //     })

            let instrumentsList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/instruments');
            let genresList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/styles');
            // let locationsList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/localisations');

            axios.all([instrumentsList, genresList])
                .then(axios.spread((...responses) => {
                    const instruments = responses[0];
                    const genres = responses[1];
                    // const locations = responses[2];
                    console.log(instruments, genres);

                    store.dispatch(saveLists());
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