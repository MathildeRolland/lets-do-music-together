import { connect } from 'react-redux';
import { submitSignUpForm } from 'src/actions';

import SignUp from 'src/components/SignUp';



const mapStateToProps = (state, ownprops) => ({
    signUpSubmited: state.isSignUpFormSubmitted,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageSubmit: () => {
        dispatch(submitSignUpForm());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
