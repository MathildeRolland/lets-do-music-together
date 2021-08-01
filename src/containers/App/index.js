import { connect } from 'react-redux';
import { loadAllLists, saveUser } from 'src/actions';

import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
    token: state.currentUser.token,
    musiciansFound: state.musiciansFound,
    genders: state.genders,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchApiDatas: () => {
        dispatch(loadAllLists());
    },
    maintainConnexion: (parsedUser) => {
        dispatch(saveUser(parsedUser));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);