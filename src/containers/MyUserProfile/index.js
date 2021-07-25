import { connect } from 'react-redux';
import { saveInput } from 'src/actions';
import { saveSelectValue } from 'src/actions';

import MyUserProfile from 'src/components/MyUserProfile';

const mapStateToProps = (state, ownprops) => ({    
    currentUser: state.currentUser,
    instruments: state.instrumentList,
    locations: state.locations,
    musicStyles: state.musicStyles,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // This function Is here to send the selects values to the states
        manageSelectChange: (value, name, objectname) => {       
            const multipleValues = [];
            if(Array.isArray(value)) {
                value.map((element) => { multipleValues.push({"id":element.id, "name":element.label})});
                dispatch(saveInput(multipleValues, name, objectname));
            }
        },
    }};

export default connect(mapStateToProps, mapDispatchToProps)(MyUserProfile);