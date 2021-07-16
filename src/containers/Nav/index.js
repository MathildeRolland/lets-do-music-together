import { connect } from 'react-redux';

import Nav from 'src/components/Header/Nav';

const mapStateToProps = (state, ownProps) => ({
    isBurgerClicked: state.isBurgerClicked,
});


export default connect(mapStateToProps)(Nav);