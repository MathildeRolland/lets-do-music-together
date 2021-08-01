import { connect } from 'react-redux';
import { submitSignUpForm, saveInput } from 'src/actions';

import SignUp from 'src/components/SignUp';



const mapStateToProps = (state, ownprops) => ({
    signUpSubmited: state.isSignUpFormSubmitted,
    instruments: state.instrumentList,
    locations: state.locations,
    styles: state.musicStyles,
    availabilities: state.availabilities,
    cities: state.cities,
    city: state.newUser.city,
    experience: state.newUser.experience,
    genders: state.genders,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageChange: (value, name, objectname) => {
        dispatch(saveInput(value, name, objectname));
    },
    manageSubmit: () => {
        dispatch(submitSignUpForm());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
