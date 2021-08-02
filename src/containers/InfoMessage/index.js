import { connect } from 'react-redux';

import InfoMessage from 'src/components/InfoMessage';

const mapStateToProps = (state, ownProps) => ({
    message: state.messageInfo,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InfoMessage);