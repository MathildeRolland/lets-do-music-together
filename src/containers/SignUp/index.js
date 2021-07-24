import { connect } from 'react-redux';
import { submitSignUpForm } from 'src/actions';

import SignUp from 'src/components/SignUp';



const mapStateToProps = (state, ownprops) => ({
    signUpSubmited: state.isSignUpFormSubmited,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageSubmit: (data) => {
        dispatch(submitSignUpForm(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
