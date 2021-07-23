import { connect } from 'react-redux';
import { saveInput } from 'src/actions';

import Input from 'src/components/Input';

const mapStateToProps = (state, ownProps) => ({
    value: state.inputValue,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (value, name, objectname) => {
        dispatch(saveInput(value, name, objectname));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);