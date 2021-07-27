import { connect } from 'react-redux';
import { submitSignUpForm } from 'src/actions';

import SignUp from 'src/components/SignUp';



const mapStateToProps = (state, ownprops) => ({
    signUpSubmited: state.isSignUpFormSubmitted,
    currentUser: state.currentUser,
    instruments: state.instrumentList,
    locations: state.locations,
    styles: state.musicStyles,
    availabilities: state.availabilities,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageSubmit: () => {
        dispatch(submitSignUpForm());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
