import { connect } from 'react-redux';

import SearchResults from '../../components/SearchResults';

const mapStateToProps = (state, ownProps) => ({
    musiciansFound: state.musiciansFound,
});

export default connect(mapStateToProps)(SearchResults);