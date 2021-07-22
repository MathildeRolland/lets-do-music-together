import { connect } from 'react-redux';
import { hideDropdownMenu } from 'src/actions';

import Header from 'src/components/Header';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: () => {
        dispatch(hideDropdownMenu());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);