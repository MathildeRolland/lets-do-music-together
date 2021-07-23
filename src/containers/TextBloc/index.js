import { connect } from 'react-redux';
//import { submitSignUpForm } from 'src/actions';

import TextBloc from 'src/components/TextBloc';



const mapStateToProps = (state, ownprops) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageSubmit: () => {
        //dispatch(submitSignUpForm());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TextBloc);
