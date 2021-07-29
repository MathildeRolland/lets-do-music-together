
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import authMiddleware from 'src/middlewares/auth';
import subMiddleware from 'src/middlewares/subscribe';
import listMiddleware from 'src/middlewares/lists';
import researchMiddleware from 'src/middlewares/research';
import editMiddleware from 'src/middlewares/edit';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(authMiddleware, subMiddleware, listMiddleware, researchMiddleware, editMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;