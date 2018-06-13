import {connect} from 'react-redux';
import ArticleDisplay from '../components/articleDisplay';
import actions from '../actions/articleDisplayAction';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state, ownProps) => ({
    // musicList: state.music.musicList, currentMusicItem: state.music.currentMusicItem, barColor: state.progress.barColor,
    // isPlay: state.music.isPlay, playMode: state.music.playMode,
    article: state.articleDisplayReducer.article,
    imageUrl: state.articleDisplayReducer.imageUrl,
    error: state.articleDisplayReducer.error,
    success: state.articleDisplayReducer.success,
    commentList: state.articleDisplayReducer.commentList,
    articleList: state.articleReducer.articleList,
})

const mapDisPatchToProps = (dispatch, ownProps) => ({
    // playNext: callType => dispatch(playNext(callType)), playPrev: () => dispatch(playPrev()), playMusic: () =>
    // dispatch(playMusic()), play: () => dispatch(play()), changeMode: () => dispatch(changeMode()),
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDisPatchToProps)(ArticleDisplay)