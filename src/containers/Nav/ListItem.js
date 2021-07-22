import { connect } from 'react-redux';
import { hideDropdownMenu } from 'src/actions';

import ListItem from 'src/components/Header/Nav/ListItem';

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleNavClick: () => {
        dispatch(hideDropdownMenu());
    },
});

export default connect(null, mapDispatchToProps)(ListItem);