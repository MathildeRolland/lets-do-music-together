import { connect } from 'react-redux';
import { saveInput } from 'src/actions';

import Switch from 'src/components/Switch';

const mapStateToProps = (state,ownProps) => ({    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleSwitch: (value) => {
        dispatch(saveInput(!value, ownProps.name, ownProps.objectname));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Switch);