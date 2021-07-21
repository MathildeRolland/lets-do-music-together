import { connect } from 'react-redux';

import AdvancedForm from 'src/components/Research/AdvancedForm';

const mapStateToProps = (state, ownProps) => ({
    instruments: state.instrumentList,
    locations: state.locations,
    musicStyles: state.musicStyles,
});


export default connect(mapStateToProps)(AdvancedForm);