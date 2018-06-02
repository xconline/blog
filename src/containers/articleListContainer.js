import {
    connect
} from 'react-redux';
import ArticleList from '../components/articleList';
import actions from '../actions/articleAction';
import {
    bindActionCreators
} from 'redux';

const mapStateToProps = (state, ownProps) => ({
    // musicList: state.music.musicList,
    // currentMusicItem: state.music.currentMusicItem,
    // barColor: state.progress.barColor,
    // isPlay: state.music.isPlay,
    // playMode: state.music.playMode,
    articleList: state.articleReducer.articleList,
    tagJson: state.articleReducer.tagJson,
    page: state.articleReducer.page,
    loadMoreFlag: state.articleReducer.loadMoreFlag,
    finishLoadFlag: state.articleReducer.finishLoadFlag,
    selectedTag: state.articleReducer.selectedTag,
    loading: state.articleReducer.loading,

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
)(ArticleList)