import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findUser } from 'src/selectors';

import UserProfile from 'src/components/UserProfile';

const mapStateToProps = (state, ownProps) => ({
    user: findUser(state.userList, ownProps.match.params.id),
});

const userProfileConnectedToStore = connect(mapStateToProps)(UserProfile)

export default withRouter(userProfileConnectedToStore);