import axios from 'axios';
import { SEND_CONTACT_MESSAGE } from 'src/actions';

const contactMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SEND_CONTACT_MESSAGE: {
            // Retrieving contact datas from state
            const contactDatas = store.getState().contact;

            const contactDatasToSend = {
                "firstname": contactDatas.name,
                "email": contactDatas.email,
                "subject": contactDatas.subject,
                "message": contactDatas.message,
            };
            
            axios
                .post('http://ec2-54-237-97-74.compute-1.amazonaws.com/api/v1/contact', contactDatasToSend)
                .then((response) => {
                    console.log("RESPONSE =======>:", response);
                })
                .catch((error) => {
                    console.log("ERROR =======>:", error);
                });

            next(action);
            break;
        }
        default:
            next(action);
            break;
    }
};

export default contactMiddleware;
