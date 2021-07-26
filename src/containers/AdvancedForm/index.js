import { connect } from 'react-redux';
import { saveInput } from 'src/actions';

import AdvancedForm from 'src/components/Research/AdvancedForm';

const mapStateToProps = (state, ownProps) => ({
    instruments: state.instrumentList,
    locations: state.locations,
    musicStyles: state.musicStyles,
});

const mapDispatchToProps = (dispatch) => ({
    manageChange: (value, name, objectname) => {
        dispatch(saveInput(value, name, objectname));
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(AdvancedForm);
