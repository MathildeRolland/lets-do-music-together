import { connect } from 'react-redux';

import Research from 'src/components/Research';

const mapStateToProps = (state, ownProps) => ({
    instruments: state.instrumentList,
    departments: state.locations,
    musicStyles: state.musicStyles,
    genders: state.genders,
    availabilities: state.availabilities,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Research);