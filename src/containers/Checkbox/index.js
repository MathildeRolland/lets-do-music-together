import { connect } from 'react-redux';
import { saveCheckbox } from 'src/actions';

import Checkbox from 'src/components/Checkbox';

const mapStateToProps = (state, ownProps) => ({
    isChecked: state.advancedResearch.ownProps.value,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (value) => {
        dispatch(saveCheckbox(value, ownProps.property, ownProps.objectname));
    },
});

export default connect(null, mapDispatchToProps)(Checkbox);