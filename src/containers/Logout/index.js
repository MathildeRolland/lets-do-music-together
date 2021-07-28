import { connect } from 'react-redux';
import { deconnectUser } from 'src/actions';

import Logout from 'src/components/Logout';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageDeconnexion: () => {
        dispatch(deconnectUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);