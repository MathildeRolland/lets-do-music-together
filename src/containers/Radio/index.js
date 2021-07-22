import { connect } from 'react-redux';
import { saveSelectValue } from 'src/actions';

import Radio from 'src/components/Research/Radio';

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageChange: (radioValue, radioName) => {
        dispatch(saveSelectValue(radioValue, radioName));
    },
});

export default connect(null, mapDispatchToProps)(Radio);