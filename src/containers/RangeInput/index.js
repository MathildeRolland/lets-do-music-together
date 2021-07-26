import { connect } from 'react-redux';
import { saveInput } from 'src/actions';
import RangeInput from 'src/components/RangeInput';

const mapStateToProps = (state, ownProps) => ({    
  perimeter: state.advancedResearch.perimeter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value, name, objectname) => {
      dispatch(saveInput(value, name, objectname));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RangeInput);
