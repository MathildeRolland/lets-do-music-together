import { connect } from 'react-redux';
import { saveInput } from 'src/actions';

import Input from 'src/components/Input';

const mapStateToProps = (state, ownProps) => ({
    //value: state.inputValue,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (value) => {
        dispatch(saveInput(value, ownProps.name, ownProps.objectname, ownProps.message));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
