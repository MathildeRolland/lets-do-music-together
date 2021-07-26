import { connect } from 'react-redux';

import Modal from 'src/components/Modal';
import { connectUser } from 'src/actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageSubmit: () => {
        dispatch(connectUser());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);