import { connect } from 'react-redux';
import { saveSelectValue } from 'src/actions';

import AdvancedForm from 'src/components/Research/AdvancedForm';

const mapStateToProps = (state, ownProps) => ({
    instruments: state.instrumentList,
    locations: state.locations,
    musicStyles: state.musicStyles,
});

const mapDispatchToProps = (dispatch) => ({
    manageChange: (selectValue, selectName) => {
        dispatch(saveSelectValue(selectValue, selectName));
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(AdvancedForm);