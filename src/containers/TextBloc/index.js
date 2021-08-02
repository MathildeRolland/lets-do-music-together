import { connect } from 'react-redux';
import { saveInput } from 'src/actions';

import TextBloc from 'src/components/TextBloc';

const mapStateToProps = (state, ownprops) => ({    
    //currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    handleChange: (value) => {
        dispatch(saveInput(value, ownProps.name, ownProps.objectname));
    },
}};

export default connect(mapStateToProps, mapDispatchToProps)(TextBloc);