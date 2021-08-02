import { connect } from 'react-redux';
import { saveInput, sendContactMessage } from 'src/actions';

import Contact from 'src/components/Contact';

const mapStateToProps = (state, ownProps) => ({
    isMessageSend: state.isMessageSend,
    doesMessageFail: state.doesMessageFail,
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
