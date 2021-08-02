import { connect } from 'react-redux';
import { saveInput, sendContactMessage } from 'src/actions';

import Contact from 'src/components/Contact';

const mapStateToProps = (state, ownProps) => ({
    isContactMessageSend: state.isContactMessageSend,
    doesContactMessageFail: state.doesContactMessageFail,
    message: state.messageInfo,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (value, name, objectname) => {
        dispatch(saveInput(value, name, objectname));
    },
    manageSubmit: () => {
        dispatch(sendContactMessage())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
