import { connect } from 'react-redux';
import { submitResearchForm } from 'src/actions';

import AdvancedForm from 'src/components/Research/AdvancedForm';

const mapStateToProps = (state, ownprops) => ({
    researchSubmited: state.isResearchFormSubmitted,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageSubmit: () => {
        dispatch(submitResearchForm());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedForm);