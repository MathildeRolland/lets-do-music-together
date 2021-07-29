import axios from "axios";
import { LOAD_ALL_LISTS, saveLists } from "src/actions";

const listMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case LOAD_ALL_LISTS: {
            console.log("initialized");

            let instrumentsList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/instruments');
            let genresList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/styles');
            let locationsList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/departments');
            let availabilitiesList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/availabilities');
            let gendersList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/genders');
            // let usersList = axios.get('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/users');

            axios.all([instrumentsList, genresList, locationsList, availabilitiesList, gendersList])
                .then(axios.spread((...responses) => {
                    const instruments = responses[0].data;
                    const styles = responses[1].data;
                    const departments = responses[2].data;
                    const availibilities = responses[3].data;
                    const genders = responses[4].data;
                    // console.log(instruments, styles, departments, availibilities);

                    store.dispatch(saveLists(instruments, styles, departments, availibilities, genders));
                }))
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

export default listMiddleware;
