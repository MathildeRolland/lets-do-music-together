import { connect } from 'react-redux';
import { saveInput } from 'src/actions';

import Radio from 'src/components/Research/Radio';

const mapDispatchToProps = (dispatch, ownProps) => ({
    manageChange: (radioValue, radioName, objectName) => {
        console.log(radioValue, radioName, objectName);
        dispatch(saveInput(radioValue, radioName, objectName));
    },
});

export default connect(null, mapDispatchToProps)(Radio);