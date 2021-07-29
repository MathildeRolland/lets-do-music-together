import { connect } from 'react-redux';
import { saveInput } from 'src/actions';
import { updateTempUser,updateDatabaseUser,deleteDatabaseUser,deconnectUser } from 'src/actions';
import { Redirect } from 'react-router';

import MyUserProfile from 'src/components/MyUserProfile';

const mapStateToProps = (state, ownprops) => ({    
    currentUser: state.currentUser,
    usersList: state.usersList,
    tempUser: state.tempUser,
    instruments: state.instrumentList,
    locations: state.locations,
    musicStyles: state.musicStyles,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    // This function Is here to send the selects values to the states
    // This function translates the currentUser.X array into an array that
    // the Select component can use to display the X information
        currentUserToSelect : (data) => {  
            console.log('LADATA',data)
            let newData = {}       
            if(Array.isArray(data)){
                newData = data.map( (element) => (
                        {
                            value: element.id || element.number,
                            label: element.name,
                            id: element.id || element.number,
                        }
                    ));
            }else if(data){ 
                newData = {
                    value: data.id || data.number,
                    label: data.name,
                }
            }
            return(newData);
        },
        manageSelectChange: (value, name, objectname) => {       
            if(Array.isArray(value)) {
                const multipleValues = value.map((element) => {console.log('ELEMENT:',element)});//({"id":element.id, "name":element.label}));
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
        callDeleteDatabaseUser: () => {
            dispatch(deleteDatabaseUser());
            dispatch(deconnectUser());
        },
        handleChange: (value, name, objectname) => {
            dispatch(saveInput(value, name, objectname));
        },
    }};

export default connect(mapStateToProps, mapDispatchToProps)(MyUserProfile);