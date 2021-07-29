import { connect } from 'react-redux';
import { loadAllLists, saveUser } from 'src/actions';

import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
    token: state.currentUser.token,
    musiciansFound: state.musiciansFound,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchApiDatas: () => {
        dispatch(loadAllLists());
    },
    maintainConnexion: (parsedToken) => {
        dispatch(saveUser(parsedToken));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);