import { connect } from 'react-redux';
import { connectUser } from 'src/actions';

import ModalBox from 'src/components/ModalBox/ModalBox';

const mapStateToProps = (state, ownProps) => ({
    token: state.currentUser.token,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: () => {
        dispatch(closeModal());
    },
    manageSubmit: () => {
        dispatch(connectUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);
