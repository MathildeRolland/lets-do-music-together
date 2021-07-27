import { connect } from 'react-redux';
import { saveInput } from 'src/actions';
import { fetchUsersFromApi } from 'src/actions';

import Home from 'src/components/Home';

const mapStateToProps = (state, ownProps) => ({
    isLogged: state.isLogged,
    instrumentsList: state.instrumentList,
    departments: state.locations,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageChange: (value, name, objectname) => {
        dispatch(saveInput(value, name, objectname));
    },
    manageSubmit: () => {
        dispatch(fetchUsersFromApi());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);