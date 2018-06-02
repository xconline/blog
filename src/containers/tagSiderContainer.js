import {
    connect
} from 'react-redux';
import TagSider from '../components/tagSider';
import actions from '../actions/articleAction';
import {
    bindActionCreators
} from 'redux';

const mapStateToProps = (state, ownProps) => ({
    tagJson: state.articleReducer.tagJson,
    

})


const mapDisPatchToProps = (dispatch, ownProps) => ({
    // playNext: callType => dispatch(playNext(callType)),
    // playPrev: () => dispatch(playPrev()),
    // playMusic: () => dispatch(playMusic()),
    // play: () => dispatch(play()),
    // changeMode: () => dispatch(changeMode()),
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDisPatchToProps
)(TagSider)