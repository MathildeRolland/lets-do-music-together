import { connect } from 'react-redux';
import { saveInput } from 'src/actions';
import { updateTempUser,updateDatabaseUser } from 'src/actions';

import MyUserProfile from 'src/components/MyUserProfile';

const mapStateToProps = (state, ownprops) => ({    
    currentUser: state.currentUser,
    tempUser: state.tempUser,
    instruments: state.instrumentList,
    locations: state.locations,
    musicStyles: state.musicStyles,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // This function Is here to send the selects values to the states
        manageSelectChange: (value, name, objectname) => {       
            if(Array.isArray(value)) {
                const multipleValues = value.map((element) => ({"id":element.id, "name":element.label}));
                dispatch(saveInput(multipleValues, name, objectname));
            }else{
                dispatch(saveInput(value, name, objectname));
            }
        },
        callUpdateTempUser: () => {
            dispatch(updateTempUser());
        },
        callUpdateDatabaseUser: () => {
            dispatch(updateDatabaseUser());
        },
        handleChange: (value, name, objectname) => {
            dispatch(saveInput(value, name, objectname));
        },
    }};

export default connect(mapStateToProps, mapDispatchToProps)(MyUserProfile);