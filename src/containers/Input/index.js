import { connect } from 'react-redux';
import { saveInput } from 'src/actions';

import Input from 'src/components/Input';

const mapStateToProps = (state, ownProps) => ({
    value: state.inputValue,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps.name);
    return {
    handleChange: (value) => {
        dispatch(saveInput(value, ownProps.name, ownProps.objectname));
    },
}};

export default connect(mapStateToProps, mapDispatchToProps)(Input);