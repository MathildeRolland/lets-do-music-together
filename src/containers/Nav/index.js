import { connect } from 'react-redux';
import { logOut } from 'src/actions';

import Nav from 'src/components/Header/Nav';

const mapStateToProps = (state, ownProps) => ({
    isBurgerClicked: state.isBurgerClicked,
    isLogged: state.isLogged,
});

export default connect(mapStateToProps)(Nav);