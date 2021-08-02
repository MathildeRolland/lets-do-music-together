import { connect } from 'react-redux';
import { toggleMobileMenu } from 'src/actions';

import Burger from 'src/components/Header/Burger';

const mapStateToProps = (state, ownProps) => ({
    isBurgerClicked: state.isBurgerClicked,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: () => {
        dispatch(toggleMobileMenu());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Burger);