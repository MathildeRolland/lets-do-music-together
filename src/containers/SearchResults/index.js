import { connect } from 'react-redux';

import SearchResults from '../../components/SearchResults';

const mapStateToProps = (state, ownProps) => ({
    userList: state.userList,
});

export default connect(mapStateToProps)(SearchResults);