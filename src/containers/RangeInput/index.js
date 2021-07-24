import { connect } from 'react-redux';
import { saveSelectValue } from 'src/actions';
import RangeInput from 'src/components/RangeInput';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value, name) => {
      dispatch(saveSelectValue(value, name));
    },
});

const mapStateToProps = (state) => ({    
  perimeter: state.advancedResearchValues.perimeter,
});

export default connect(mapStateToProps, mapDispatchToProps)(RangeInput);
