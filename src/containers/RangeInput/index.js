import { connect } from 'react-redux';
import { handleRangeInput } from 'src/actions';
import RangeInput from 'src/components/RangeInput';

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: () => {
      dispatch(handleRangeInput());
    },
});

const mapStateToProps = (state) => ({    
  rangeValue: state.rangeValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(RangeInput);
