import { connect } from 'react-redux';
import { loadAllLists } from 'src/actions';

import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchApiDatas: () => {
        dispatch(loadAllLists());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);