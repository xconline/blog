import {get, post} from '../api/fetchAPI';
import {server} from '../config/serverAddress';

let actions = {
    get_articleContent: (id) => (dispatch, getState) => {
        dispatch(actions._begin_get_articleContent)
        get(`${server}/get_articleContent/`, {aId: id}).then(r => dispatch(actions._get_articleContent(r)));
    },
    clear_articleContent: () => ({type: 'CLEAR_ARTICLE_CONTENT'}),
    // 发表评论
    publish_comment: (param) => (dispatch, getState) => {
        param.imageId = getState().articleDisplayReducer.imageId;
        post(`${server}/publish_comment/`, param).then(r => {
            if (r.res === false || r.res===undefined) {
                dispatch(actions._error({message:'发布评论失败'}));
            } else {
                dispatch(actions._success({message:'发布评论成功'}));
                dispatch(actions._publish_comment(param));
                dispatch(actions.get_image());
            }
        });
    },
    // 获得所有评论
    get_commentList: (id) => (dispatch, getState) => {
        get(`${server}/get_commentList/`, {aId:id}).then(r => {
            if (r.res === false || r.res===undefined) {
                dispatch(actions._error({message:'获得评论信息失败'}));
            } else {
               dispatch(actions._get_commentList(r.commentList));
            }
        });
    },
    // 获得评论的头像
    get_image: () => (dispatch, getState) => {
        get(`${server}/get_commentImage/`).then(r => dispatch(actions._get_image(r)));
    },
    // 增加阅读数
    add_clickCount: (id) => (dispatch, getState) => {
        post(`${server}/add_clickCount/`,{aId:id}).then(r=>{
            if(r.res === false || r.res===undefined){
                dispatch(actions._error({message: '增加阅读数失败啦！'}))
            }else{
                dispatch(actions._update_clickCount(r.click_count));
            }
        });
    },
    // 点赞处理
    like_click:(id) => (dispatch) => {
        post(`${server}/add_likeCount/`,{aId:id}).then(r=>{
            if(r.res === false || r.res===undefined){
                dispatch(actions._error({message: '点赞失败啦！'}))
            }else{
                dispatch(actions._update_likeCount(r.like_count));
            }
        });
    },
    resetTip:()=>({type: 'RESET_TIP'}),
    _update_likeCount: (resp) =>({type: 'UPDATE_LIKECOUNT', payload: resp}),
    _update_clickCount: (resp) =>({type: 'UPDATE_CLICKCOUNT', payload: resp}),
    _get_commentList: (resp) => ({type: 'GET_COMMENTLIST', payload: resp}),
    _get_image: (resp) => ({type: 'GET_IMAGE', image: resp}),
    _get_articleContent: (resp) => ({type: 'GET_ARTICLE_CONTENT', article: resp}),
    _publish_comment: (resp) => ({type: 'PUBLISH_COMMENT', resp: resp}),
    _begin_get_articleContent: (resp) => ({type: 'BEGIN_GET_ARTICLE_CONTENT'}),
    _error: (resp) => ({type: 'ERROR', payload: resp}),
    _success: (resp) => ({type: 'SUCCESS', payload: resp}),
}
export default actions;